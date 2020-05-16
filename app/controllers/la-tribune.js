import Controller from '@ember/controller';
import {alias} from '@ember/object/computed';

export default class LaTribuneController extends Controller {
  @alias('articleCategories') model;
}
