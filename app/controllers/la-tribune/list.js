import Controller from '@ember/controller';
import { sort, filter, alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { action, computed } from '@ember/object';

export default class LaTribuneListController extends Controller {
  @service moment;

  @filter('sortedArticles', (a)  => {
    return moment(a.updateDatetime).isSameOrBefore() && !a.unlisted;
  }) articles;

  @computed('articles',)
  get visibleArticles () {
    return this.articles.slice(0, 18);
  };

  sortProperties = [
    { name: 'Récent', properties: ['updateDatetime:desc'] },
    { name: 'Ancien', properties: ['updateDatetime:asc'] },
    { name: 'Alphabétique', properties: ['title'] },
  ];
  selectedSort = { name: 'Récent', properties: ['updateDatetime:desc'] };

  @alias('selectedSort.properties') properties;
  @sort('model', 'properties') sortedArticles;

  @action
  changeProperty(selected) {
    this.set('selectedSort', selected);
  }
}
