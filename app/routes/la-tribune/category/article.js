import Route from '@ember/routing/route';

import { inject as service } from '@ember/service';

export default class LaTribuneCategoryArticleRoute extends Route {
  @service router;

  redirect() {
    super.redirect();
    window.scrollTo(0,0);
  }

  enter() {
    super.enter();
    window.scrollTo(0,0);
  }

  model(args) {
    return this.store.findRecord('article', args.article, {
      include: 'authors.image'
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
          content: 'https://lagenda.ca' + this.get('router').urlFor(this.fullRouteName, redirect.to.parent.params.category, model.id)
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
          content: 'https://lagenda.ca' + image.url
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
