import Controller from '@ember/controller';
import {sort} from '@ember/object/computed';

export default class BaladosListController extends Controller {
  sortKey = ['order', 'episodeNumber:desc'];
  @sort('model', 'sortKey') categories;
}
