import Controller from '@ember/controller';
import {alias} from '@ember/object/computed';

export default class LaTribuneListController extends Controller {
  @alias('articles') model;
}
