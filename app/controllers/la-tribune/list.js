import Controller from '@ember/controller';
import { sort, alias } from '@ember/object/computed';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

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
  changePage(link) {
    switch (link) {
      case 'first':
        if (this.links.first) {
          this.set('page', 1);
        }
        break;
      case 'prev':
        if (this.links.prev && this.page > 1) {
          this.set('page', this.page - 1);
        }
        break;
      case 'next':
        if (this.links.next) {
          this.set('page', this.page + 1);
        }
        break;
      case 'last':
        if (this.links.last) {
          this.set('page', Math.ceil(this.get('model.meta.total-resources') / 18));
        }
        break;
    }
  }
}
