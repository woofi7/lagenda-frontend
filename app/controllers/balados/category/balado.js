import Controller from '@ember/controller';
import {alias} from '@ember/object/computed';

export default class BaladosCategoryBaladoController extends Controller {
  @alias('balado') model;
}
