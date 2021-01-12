import Controller from '@ember/controller';
import { htmlSafe } from "@ember/template";

export default class PrivacyPolicyController extends Controller {
  get content() {
    return htmlSafe(this.model);
  }
}
