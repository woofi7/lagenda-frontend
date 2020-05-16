import Controller from '@ember/controller';
import {sort} from '@ember/object/computed';

export default class BaladosListController extends Controller {
  sortKey = ['episodeNumber:desc'];
  @sort('model', 'sortKey') categories;
}
