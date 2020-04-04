import Component from '@glimmer/component';

export default class ShareButtonComponent extends Component {
  getCurrentUrl() {
    return this.url ? this.url : document.location.href;
  }

  getPopupPosition() {
    const dualScreenLeft = screen.availLeft;
    const dualScreenTop = screen.availTop;

    const windowWidth = screen.availWidth;
    const windowHeight =  screen.availHeight;

    const left = ((windowWidth / 2) - (600 / 2)) + dualScreenLeft;
    const top = ((windowHeight / 2) - (600 / 2)) + dualScreenTop;

    return {left: left, top: top};
  }

  openSharePopup(url) {
    let popupPosition = this.getPopupPosition();
    var newWindow = window.open(url, 'Partager',
      'location=no,toolbar=no,menubar=no,scrollbars=no,status=no, width=600, height=600, top=' + popupPosition.top + ', left=' + popupPosition.left);

    if (typeof(newWindow) !== 'undefined' && newWindow !== null && newWindow.focus) {
      newWindow.focus();
    }
  }
}
