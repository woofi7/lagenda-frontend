import Controller from '@ember/controller';
import {alias} from "@ember/object/computed";
import {tracked} from "@glimmer/tracking";
import {action, computed} from "@ember/object";
import {inject as service} from "@ember/service";
import {isBlank, isPresent} from '@ember/utils';
import {keepLatestTask} from "ember-concurrency-decorators";
import {timeout} from "ember-concurrency";

const DEBOUNCE_MS = 250;

export default class AdminArticleEditController extends Controller {
  @service router;
  @service fastboot;

  @alias('model.article') article;
  @alias('model.authors') authors;
  @alias('model.articleCategories') categories;

  @tracked flatpickrRef = null
  @tracked imageSize = null;

  get loadImageSize() {
    this.fetchImageData.perform();
  }

  get imageOptions() {
    return this.store.peekAll('image');
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

  @computed('authors', 'article.authors')
  get selectableAuthors() {
    const allAuthors = this.authors.filter((a) => !this.article.authors.includes(a));
    const collaborators = allAuthors.filter((a) => a.collaborator);
    const partners = allAuthors.filter((a) => a.partner);

    return [
      { groupName: 'Collaborateurs', options: collaborators },
      { groupName: 'Partenaires', options: partners },
    ]
  }

  @computed('categories', 'categories.articleAuthorCategories', 'article.articleCategory', 'article.articleAuthorCategory')
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
  changeDatetime(dt) {
    this.article.postDatetime = dt;
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

  @action
  changeImageSelected(image) {
    this.imageSize = null;
    this.imageSelected = image;
    this.article.image = image;

    this.fetchImageData.perform();
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
      const url = yield this.article.get('image.url');
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

  gcd (a, b) {
    return (b === 0) ? a : this.gcd (b, a%b);
  }
}
