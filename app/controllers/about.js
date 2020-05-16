import Controller from '@ember/controller';
import {alias} from '@ember/object/computed';
import { action } from "@ember/object";

export default class AboutController extends Controller {
  @alias('authors') model;
}
