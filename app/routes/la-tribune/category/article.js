import Route from '@ember/routing/route';

export default class LaTribuneCategoryArticleRoute extends Route {
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
        tagId: 'article-description-meta-tag',
        attrs: {
          property: 'og:description',
          content: model.desc
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
        tagId: 'article-url-meta-tag',
        attrs: {
          property: 'og:image',
          content: 'https://lagenda.ca' + model.thumbnail.url
        }
      },
      {
        type: 'meta',
        tagId: 'article-type-meta-tag',
        attrs: {
          property: 'og:type',
          content: 'article'
        }
      }
    ];

    this.set('headTags', headTags);
  }
}
