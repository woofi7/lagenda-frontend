import Controller from '@ember/controller';
import {alias} from "@ember/object/computed";
import {tracked} from "@glimmer/tracking";
import {action, computed} from "@ember/object";
import {inject as service} from "@ember/service";
import {isBlank, isPresent} from '@ember/utils';
import {keepLatestTask} from "ember-concurrency-decorators";
import {timeout} from "ember-concurrency";
import { isArray } from '@ember/array';

const DEBOUNCE_MS = 250;

export default class AdminArticleEditController extends Controller {
  @service router;
  @service fastboot;
  @service store;
  @service image;

  @alias('model.article') article;
  @alias('model.authors') authors;
  @alias('model.articleCategories') categories;

  @tracked flatpickrRef = null

  get imageOptions() {
    return this.store.peekAll('image');
  }

  @computed('article.image.url')
  get loadImageSize() {
    this.image.imageUrl = this.article.get('image.url');
  }

  @computed('article.id')
  get articleUrl() {
    if (this.article.articleCategory.get('id') || this.article.articleAuthorCategory.get('id')) {
      const host = this.fastboot.isFastBoot ? this.fastboot.request.host : window.location.host;
      const category = this.article.articleCategory.get('id') ? this.article.articleCategory.get('id')
        : this.article.articleAuthorCategory.get('id');

      return host + this.router.urlFor('la-tribune.category-v2.article', category, this.article.id);
    }
  }

  @computed('article.articleCategory', 'article.articleAuthorCategory')
  get articleSelectedCategory() {
    return isPresent(this.article.get('articleCategory.id')) ? this.article.get('articleCategory') : this.article.get('articleAuthorCategory');
  }

  @computed('authors.length', 'article.authors')
  get selectableAuthors() {
    const allAuthors = this.authors.filter((a) => !this.article.authors.includes(a));
    const collaborators = allAuthors.filter((a) => a.collaborator);
    const partners = allAuthors.filter((a) => a.partner);

    return [
      { groupName: 'Collaborateurs', options: collaborators },
      { groupName: 'Partenaires', options: partners },
    ]
  }

  @computed('categories.length', 'categories.articleAuthorCategories', 'article.articleCategory', 'article.articleAuthorCategory')
  get selectableCategories() {
    let categories = this.categories.filter((c) =>
      c !== this.article.articleCategory
      && c.articleAuthorCategories.length === 0
    );

    let authorCategories = this.categories.filter((c) =>
      c !== this.article.articleCategory
      && c.articleAuthorCategories.length > 0)
    .map(function(c) {
      return {
        groupName: c.name,
        options: c.articleAuthorCategories.map((c) => c)
      }
    });

    authorCategories.unshift({ groupName: 'Catégories', options: categories });

    return authorCategories;
  }

  @action
  closeModal() {
    this.router.transitionTo('admin');
  }

  @action
  submit(form) {
    form.updateDatetime = new Date();
    form.postDatetime = isArray(form.postDatetime) ? form.postDatetime.firstObject : form.postDatetime;

    form.save()
      .then(() => {
        this.notifications.success('Article modifié avec succès!', {
          autoClear: true
        });
      })
      .catch((e) => {
        this.notifications.error(`<p>Une erreur est survenue lors de la sauvegarde de l'article :<br> <code class="text-white">${e.toString()}</code></p>`, {
          htmlContent: true
        });
      });
  }

  @action
  selectCategory(c) {
    switch (c.constructor.modelName) {
      case 'article-category':
        this.article.set('articleAuthorCategory', null);
        this.article.set('articleCategory', c);
        break;
      case 'article-author-category':
        this.article.set('articleCategory', null);
        this.article.set('articleAuthorCategory', c);
        break;
    }
  }

  @action
  toggleUnlisted() {
    this.article.unlisted = !this.article.unlisted;
  }
}
