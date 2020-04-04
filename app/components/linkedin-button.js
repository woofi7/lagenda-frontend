import { action } from '@ember/object';
import ShareButtonComponent from "./share-button";

export default class LinkedinButtonComponent extends ShareButtonComponent {
  @action
  openDialog() {
    let currentUrl = encodeURIComponent(this.getCurrentUrl());
    let url = `https://www.linkedin.com/shareArticle?url=${currentUrl}&title=${this.args.title}&summary=${this.args.text}`;

    this.openSharePopup(url);
  }
}
