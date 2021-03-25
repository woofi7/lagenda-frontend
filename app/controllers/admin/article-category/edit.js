import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { action, computed } from "@ember/object";
import { isBlank, isEmpty } from "@ember/utils";
import { keepLatestTask, dropTask } from "ember-concurrency-decorators";
import { timeout } from "ember-concurrency";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";

const DEBOUNCE_MS = 250;

export default class AdminArticleCategoryEditController extends Controller {
  @service fastboot;
  @service router;

  @alias('model.category') category;
  @alias('model.categories') categories;
  @alias('model.authorCategories') authorCategories;
  @alias('model.subCategories') subCategories;

  @tracked imageSize = null;

  @computed('categories', 'authorCategories', 'subCategories')
  get selectableCategories() {
    let c = this.categories.map(c => c);
    let ac = this.authorCategories.map(ac => ac);

    if (this.category.get('constructor.modelName') === 'article-category') {
      c = c.filter(c => c.id !== this.category.id);
    }
    else {
      ac = ac.filter(c => c.id !== this.category.id);
    }

    return c.concat(ac).filter(cate => !this.subCategories.includes(cate)).sortBy('name');
  }

  @computed('category.id')
  get categoryUrl() {
    if (this.category.get('id')) {
      const host = this.fastboot.isFastBoot ? this.fastboot.request.host : window.location.host;
      return host + this.router.urlFor('la-tribune.category-v2', this.category.id);
    }
  }

  @action
  selectCategory(categories) {
    this.subCategories = categories;
  }

  @action
  toggleUnlisted() {
    this.category.unlisted = !this.category.unlisted;
  }

  @action
  changeImageSelected(image) {
    this.imageSize = null;
    this.imageSelected = image;
    this.category.image = image;

    this.fetchImageData.perform();
  }

  @action
  sortEndAction() {
    console.log('Sort Ended');
  }

  @keepLatestTask *searchImageTask (term) {
    if (isBlank(term) || term.length < 3)
      return this.store.peekAll('image');

    yield timeout(DEBOUNCE_MS);

    return yield this.store.query('image', {
      filter: 'contains(url,\'' + term + '\')',
      page: {
        size: 20
      }
    });
  }

  @keepLatestTask *fetchImageData() {
    if (!this.fastboot.isFastBoot) {
      const url = yield this.category.get('image.url');
      if (!url)
        return;

      let img = new Image();
      img.onload = yield () => {
        const gcd = this.gcd(img.width, img.height);
        const ratio = img. width / gcd + ":" + img.height / gcd;

        this.set('imageSize', {width: img.width, height: img.height, ratio });

      };
      img.src = url;
    }
  }

  @dropTask *submitForm(form) {
    this.notifications.info('Sauvegarde des données en cours . . .');

    // Unlinked categories
    let unlinkedCategories = form.articleAuthorCategories.filter(c => !this.subCategories.includes(c));
    for (let category of unlinkedCategories) {
      let ac = this.store.createRecord('article-category', {
        name: category.name,
        externalLink: category.externalLink,
        order: category.order,
        unlisted: category.unlisted,
        image: category.image,
        articles: category.articles
      });

      console.log('Create new articleCategory: ' + ac.name);
      yield ac.save();

      for (let a of category.articles.toArray()) {
        if (a) {
          console.log('Change article category: ' + a.get('articleAuthorCategory.id') + " -> " + ac.id);
          a.articleCategory = ac;
          yield a.save();
        }
      }

      category.deleteRecord();
      yield category.save();
    }

    // Add categories
    let i = 1;
    for (let category of this.subCategories) {
      category.order = i;
      i++;

      if (category.get('articleCategory.id') === form.id) {
        console.log('Skip category ' + category.id);
        continue;
      }

      // Model : article-category
      if (category.get('constructor.modelName') === this.store.modelFor('article-category').modelName) {
        if (isEmpty(category.articleAuthorCategories)) {
          let aac = this.store.createRecord('article-author-category', {
            name: category.name,
            externalLink: category.externalLink,
            order: category.order,
            unlisted: category.unlisted,
            image: category.image,
            articles: category.articles,
            articleCategory: form
          });
          console.log('Create new authorCategory: ' + aac.name);
          yield aac.save();

          form.articleAuthorCategories.addObject(aac);

          for (let a of category.articles.toArray()) {
            if (a) {
              console.log('Change article category: ' + a.get('articleCategory.id') + " -> " + aac.id);
              a.articleAuthorCategory = aac;
              yield a.save();
            }
          }

          yield category.deleteRecord();
        }
        else {
          for (let a of category.articles) {
            if (a) {
              console.log('Change article category: ' + a.get('articleCategory.id') + " -> " + form.id);
              a.articleAuthorCategory = form;
              yield a.save();
            }
          }
        }
      }
      // Model : article-author-category
      else if(category.get('constructor.modelName') === this.store.modelFor('article-author-category').modelName) {
        console.log('Change article category: ' + category.id + " -> " + form.id);
        category.articleCategory = form;
      }
    }

    this.subCategories.map(c => {
      c.save();
    });

    yield form.save()
      .then(() => {
        this.notifications.clearAll().success('Catégorie modifiée avec succès!', {
          autoClear: true
        });
      })
      .catch((e) => {
        this.notifications.clearAll().error(`<p>Une erreur est survenue lors de la sauvegarde de la catégorie :<br> <code class="text-white">${e.toString()}</code></p>`, {
          htmlContent: true
        });
      });
  }
}
