import Controller from '@ember/controller';
import { sort, filter, alias } from '@ember/object/computed';
import { action } from '@ember/object';
import moment from 'moment';

export default class LaTribuneCategoryListController extends Controller {

  @filter('model.articles', (a)  => {
    return moment(a.updateDatetime).isSameOrBefore() && !a.unlisted;
  }) filteredArticles;

  sortProperties = [
    { name: 'Récent', properties: ['updateDatetime:desc'] },
    { name: 'Ancien', properties: ['updateDatetime:asc'] },
    { name: 'Alphabétique', properties: ['title'] },
  ];
  selectedSort = { name: 'Récent', properties: ['updateDatetime:desc'] };

  @alias('selectedSort.properties') properties;
  @sort('filteredArticles', 'properties') articles;

  @action
  changeProperty(selected) {
    this.set('selectedSort', selected);
  }
}
