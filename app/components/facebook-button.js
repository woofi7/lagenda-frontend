import { action } from '@ember/object';
import ShareButtonComponent from "./share-button";

export default class FacebookButtonComponent extends ShareButtonComponent {
  @action
  openDialog() {
    let currentUrl = encodeURIComponent(this.getCurrentUrl());
    let url = `https://facebook.com/sharer.php?display=popup&u=${currentUrl}`;

    this.openSharePopup(url);
  }
}
