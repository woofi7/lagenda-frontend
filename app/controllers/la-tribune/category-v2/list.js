import Controller from '@ember/controller';
import {alias, filter, sort} from "@ember/object/computed";
import moment from "moment";
import {action} from "@ember/object";

export default class LaTribuneCategoryV2ListController extends Controller {

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
