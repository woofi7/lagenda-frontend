import Route from '@ember/routing/route';
import RSVP from "rsvp";

export default class LaTribuneCategoryV2AuthorArticleRoute extends Route {
  async model(args) {
    let featuredBalados = this.store.query('balado', {
      sort: '-post-datetime',
      page: {
        size: 1
      }
    });

    let featuredArticles = this.store.query('article', {
      sort: '-post-datetime',
      page: {
        size: 3
      }
    }, args)
      .then((articles) => {
        return articles.filter((a) => { return a.id !== args.article; });
      })
      .then((articles) => {
        return articles.slice(0, 2);
      });

    let article = await this.store.findRecord('article', args.article, {
      include: 'authors.image'
    });

    return RSVP.hash({
      featuredBalados,
      featuredArticles,
      article
    });
  }

  async afterModel(model, redirect) {
    await this.setHeadTags(model, redirect);
  }

  async setHeadTags(model, redirect) {
    let image = await model.article.image;
    let headTags = [
      {
        type: 'meta',
        tagId: 'article-url-meta-tag',
        attrs: {
          property: 'og:url',
          content: 'https://lagenda.ca' + redirect.intent.url
        }
      },
      {
        type: 'meta',
        tagId: 'article-title-meta-tag',
        attrs: {
          property: 'og:title',
          content: model.article.title
        }
      },
      {
        type: 'meta',
        tagId: 'article-description-meta-tag',
        attrs: {
          property: 'og:description',
          content: model.article.desc
        }
      },
      {
        type: 'meta',
        tagId: 'article-image-meta-tag',
        attrs: {
          property: 'og:image',
          content: image.url
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

  async renderTemplate(controller, model) {
    let controllerFor = this.controllerFor('la-tribune.category-v2.article');

    this.render('la-tribune.category-v2.article', {
      outlet: 'main',
      controller: controllerFor,
      model: model
    });
  }
}
