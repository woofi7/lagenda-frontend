import { action } from '@ember/object';
import ShareButtonComponent from "./share-button";

export default class TwitterButtonComponent extends ShareButtonComponent {
  @action
  openDialog() {
    let currentUrl = encodeURIComponent(this.getCurrentUrl());
    let url = `https://twitter.com/intent/tweet?text=${this.args.text} ${currentUrl}`;

    this.openSharePopup(url);
  }
}
