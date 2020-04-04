import Route from '@ember/routing/route';

import { inject as service } from '@ember/service';

export default class LaTribuneCategoryArticleRoute extends Route {
  @service router;

  async model(params) {
    return this.modelFor('la-tribune.category').articles.findBy('id', Number(params.article))
  }

  afterModel(model) {
    this.setHeadTags(model);
  }

  setHeadTags(model) {
    let headTags = [
      {
        type: 'meta',
        tagId: 'article-url-meta-tag',
        attrs: {
          property: 'og:url',
          content: 'https://lagenda.ca' + this.get('router').urlFor(this.fullRouteName, model.category, model.id)
        }
      },
      {
        type: 'meta',
        tagId: 'article-title-meta-tag',
        attrs: {
          property: 'og:title',
          content: model.title
        }
      },
      {
        type: 'meta',
        tagId: 'article-description-meta-tag',
        attrs: {
          property: 'og:description',
          content: model.desc
        }
      },
      {
        type: 'meta',
        tagId: 'article-image-meta-tag',
        attrs: {
          property: 'og:image',
          content: 'https://lagenda.ca' + model.thumbnail.url
        }
      },
      {
        type: 'meta',
        tagId: 'article-fb_app_id-meta-tag',
        attrs: {
          property: 'fb:app_id',
          content: '198957554687556'
        }
      },
      {
        type: 'meta',
        tagId: 'article-type-meta-tag',
        attrs: {
          property: 'og:type',
          content: 'article'
        }
      },
      {
        type: 'meta',
        tagId: 'article-locale-meta-tag',
        attrs: {
          property: 'og:locale',
          content: 'fr_CA'
        }
      }
    ];

    this.set('headTags', headTags);
  }
}
