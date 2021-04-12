import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import {action, computed} from "@ember/object";

export default class SocialLinkChooserComponent extends Component {
  @tracked selectedTypeClass = null;
  @tracked typeClasses = [
    { type: 'facebook', class: 'fab fa-facebook facebook-color' },
    { type: 'twitter', class: 'fab fa-twitter twitter-color' },
    { type: 'instagram', class: 'fab fa-instagram instagram-color' },
    { type: 'linkedin', class: 'fab fa-linkedin linkedin-color' },
    { type: 'email', class: 'fas fa-envelope text-white' }
  ];

  @action
  changeType(type) {
    this.args.social.set('type', type);
  }
}
