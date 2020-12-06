import Controller from '@ember/controller';
import {alias} from '@ember/object/computed';

export default class LaTribuneCategoryListController extends Controller {
  @alias('category') model;
}
