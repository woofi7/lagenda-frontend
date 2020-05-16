import Controller from '@ember/controller';
import {sort} from '@ember/object/computed';

export default class AboutController extends Controller {
  sortKey = ['order'];
  @sort('model', 'sortKey') authors;
}
