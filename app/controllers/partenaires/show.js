import Controller from '@ember/controller';
import {alias} from "@ember/object/computed";

export default class PartenairesShowController extends Controller {
  @alias('model') partner;
}
