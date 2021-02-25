import Service from '@ember/service';
import {inject as service} from "@ember/service";
import { task } from 'ember-concurrency';

export default class FeaturedCardsService extends Service {
  @service store;
  @service fastboot;

  featuredBalados = null;

  @task *test() {
    console.log('test')
    return yield this.store.query('balado', {
      include: 'balado-category.partner,image',
      sort: '-post-datetime',
      page: {
        size: 1
      }
    });
  }

  get featuredArticles() {
    return null;
    // this.store.query('article', {
    //   include: 'article-category.articles,image',
    //   sort: '-post-datetime',
    //   page: {
    //     size: 3
    //   }
    // });
  }
}
