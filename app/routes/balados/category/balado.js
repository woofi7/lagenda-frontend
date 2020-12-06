import Route from '@ember/routing/route';
import {get, set} from '@ember/object';

import { inject as service } from '@ember/service';

export default Route.extend({
  router: service(),

  breadCrumb: null,

  async model(args) {
    return this.store.findRecord('balado', args.balado);
  },

  async afterModel(model, redirect) {
    const title = get(model, 'episodeNumber') + " - " + get(model, 'title');

    await this.setHeadTags(model, redirect);

    set(this, 'breadCrumb', {title});
  },

  async setHeadTags(model, redirect) {
    let image = await model.image;
    let headTags = [
      {
        type: 'meta',
        tagId: 'balado-url-meta-tag',
        attrs: {
          property: 'og:url',
          content: 'https://lagenda.ca' + this.get('router').urlFor(this.fullRouteName, redirect.to.parent.params.category, model.id)
        }
      },
      {
        type: 'meta',
        tagId: 'balado-title-meta-tag',
        attrs: {
          property: 'og:title',
          content: model.title
        }
      },
      {
        type: 'meta',
        tagId: 'balado-description-meta-tag',
        attrs: {
          property: 'og:description',
          content: model.desc
        }
      },
      {
        type: 'meta',
        tagId: 'balado-image-meta-tag',
        attrs: {
          property: 'og:image',
          content: 'https://lagenda.ca' + image.url
        }
      },
      {
        type: 'meta',
        tagId: 'balado-fb_app_id-meta-tag',
        attrs: {
          property: 'fb:app_id',
          content: '198957554687556'
        }
      },
      {
        type: 'meta',
        tagId: 'balado-type-meta-tag',
        attrs: {
          property: 'og:type',
          content: 'music.song'
        }
      },
      {
        type: 'meta',
        tagId: 'balado-locale-meta-tag',
        attrs: {
          property: 'og:locale',
          content: 'fr_CA'
        }
      }
    ];

    this.set('headTags', headTags);
  }
});
