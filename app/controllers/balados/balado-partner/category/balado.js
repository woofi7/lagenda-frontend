import Controller from '@ember/controller';
import {alias} from "@ember/object/computed";
import {htmlSafe} from "@ember/template";

export default class BaladosSuperCategoryCategoryBaladoController extends Controller {
  @alias('balado') model;

  get baladoDesc() {
    return htmlSafe(this.balado.desc);
  }
}
