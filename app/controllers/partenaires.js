import Controller from '@ember/controller';
import {alias} from "@ember/object/computed";

export default class PartenairesController extends Controller {
  @alias('model') partners;
}
