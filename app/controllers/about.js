import Controller from '@ember/controller';
import {alias} from "@ember/object/computed";

export default class AboutController extends Controller {
  @alias('model') authors;
}
