import Component from '@glimmer/component';

export default class ActicleCardComponent extends Component {

  get desc() {
    return this.truncate(this.args.article.desc, 300, true);
  }

  truncate( str, n, useWordBoundary ) {
    if (str.length <= n) { return str; }
    const subString = str.substr(0, n-1); // the original check
    return (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(" "))
      : subString) + "...";
  }
}
