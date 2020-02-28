import Controller from '@ember/controller';
import {alias} from '@ember/object/computed';

export default class BaladosCategoryListController extends Controller {
  @alias('category') model;
}
