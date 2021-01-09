import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';

export default class LaTribuneController extends Controller {
  queryParams = ['infolettre']
  infolettre = null;

  sortKey = ['order'];
  @sort('model', 'sortKey') articleCategories;
}
