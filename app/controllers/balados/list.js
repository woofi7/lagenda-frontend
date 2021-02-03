import Controller from '@ember/controller';
import {sort} from '@ember/object/computed';

export default class BaladosListController extends Controller {
  sortKey = ['order:asc'];
  @sort('model', 'sortKey') partners;
}
