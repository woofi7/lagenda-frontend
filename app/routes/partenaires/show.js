import Route from '@ember/routing/route';

export default class PartenairesShowRoute extends Route {
  model(params) {
    return this.store.findRecord('author', params.author, {
      include: 'articles.article-category,image'
    });
  }

  async afterModel(model, redirect) {
    await this.setHeadTags(model, redirect);
  }

  async setHeadTags(model, redirect) {
    let image = await model.image;
    let headTags = [
      {
        type: 'meta',
        tagId: 'article-url-meta-tag',
        attrs: {
          property: 'og:url',
          content: 'https://lagenda.ca/partenaires/' + model.id
        }
      },
      {
        type: 'meta',
        tagId: 'article-title-meta-tag',
        attrs: {
          property: 'og:title',
          content: model.firstName + " " + model.lastName
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
          content: model.get('image.url')
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
