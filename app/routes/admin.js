import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import RSVP from "rsvp";

export default class AdminRoute extends Route {
  @service session;
  @service fastboot;

  model() {
    let articles = this.store.query('article', {
      include: 'image,authors,article-category',
      sort: '-post-datetime',
      page: {
        size: 2
      }
    });
    let authors = this.store.query('author', {
      include: 'image',
      sort: 'order',
      filter: 'not(equals(order,null))',
      page: {
        size: 9
      }
    });
    let balados = this.store.query('balado', {
      include: 'image',
      sort: '-post-datetime',
      page: {
        size: 2
      }
    });

    return RSVP.hash({
      articles,
      authors,
      balados
    });
  }

  beforeModel(transition) {
    this.get('session').requireAuthentication(transition, 'login');

    if (!this.fastboot.isFastBoot)
      document.getElementsByTagName('body')[0].classList.add('dark');
  }

  async sessionInvalidated() {
    this.get('session').handleInvalidation('login');
  }
}

