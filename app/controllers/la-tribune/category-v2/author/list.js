import Controller from '@ember/controller';
import {alias, sort} from "@ember/object/computed";
import {action} from "@ember/object";

export default class LaTribuneCategoryV2AuthorListController extends Controller {
  sortProperties = [
    { name: 'Récent', properties: ['updateDatetime:desc'] },
    { name: 'Ancien', properties: ['updateDatetime:asc'] },
    { name: 'Alphabétique', properties: ['title'] },
  ];
  selectedSort = { name: 'Récent', properties: ['updateDatetime:desc'] };

  @alias('selectedSort.properties') properties;
  @sort('model.articles', 'properties') articles;

  @action
  changeProperty(selected) {
    this.set('selectedSort', selected);
  }
}
