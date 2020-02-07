import Controller from '@ember/controller';
import {alias} from '@ember/object/computed';

export default class BaladosController extends Controller {
  @alias('categories') model;
}
