import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { action } from '@ember/object';

export default class LaTribuneListController extends Controller {
  queryParams = ['page', 'sort'];
  page =  1;
  sort = '-update-datetime';

  sortProperties = [
    { name: 'Récent', properties: '-update-datetime' },
    { name: 'Ancien', properties: 'update-datetime' }
  ];
  selectedSort = { name: 'Récent', properties: '-update-datetime' };

  @alias('model') articles;
  @alias('model.links') links;

  @action
  changeProperty(selected) {
    this.set('sort', selected.properties)
    this.set('selectedSort', selected);
  }

  @action
  setPage(pageNumber) {
    this.set('page', pageNumber);
  }
}
