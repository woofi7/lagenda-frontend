import Controller from '@ember/controller';
import {alias} from '@ember/object/computed';
import {action, computed} from "@ember/object";
import {isEmpty} from "@ember/utils";
import {dropTask} from "ember-concurrency-decorators";
import {inject as service} from "@ember/service";

export default class AdminArticleCategoryEditController extends Controller {
  @service fastboot;
  @service router;
  @service image;

  @alias('model.category') category;
  @alias('model.categories') categories;
  @alias('model.authorCategories') authorCategories;
  @alias('model.subCategories') subCategories;

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
    this.category.image = image;
    this.image.imageUrl = image.url;
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

      yield ac.save();

      for (let a of category.articles.toArray()) {
        if (a) {
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
          yield aac.save();

          form.articleAuthorCategories.addObject(aac);

          for (let a of category.articles.toArray()) {
            if (a) {
              a.articleAuthorCategory = aac;
              yield a.save();
            }
          }

          yield category.deleteRecord();
        }
        else {
          for (let a of category.articles) {
            if (a) {
              a.articleAuthorCategory = form;
              yield a.save();
            }
          }
        }
      }
      // Model : article-author-category
      else if(category.get('constructor.modelName') === this.store.modelFor('article-author-category').modelName) {
        category.articleCategory = form;
      }
    }

    for (let j = 0; j < this.subCategories.length; j++) {
      let c = this.subCategories.get(j);
      c.set('order', j * 10);
      c.save();
    }

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
