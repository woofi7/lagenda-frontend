import Component from '@glimmer/component';
import { A } from '@ember/array';
import {computed} from "@ember/object";

export default class ActicleCardComponent extends Component {

  @computed('args.article.articleAuthorCategory')
  get routePath() {
    if (this.args.article.get('articleAuthorCategory.id')) {
      return  "la-tribune.category-v2.author.article";
    }

    return  "la-tribune.category-v2.article";
  }

  @computed('args.article.articleAuthorCategory')
  get routeModels() {
    if (this.args.article.get('articleAuthorCategory.id'))
      return [this.args.article.get('articleAuthorCategory.articleCategory.id'), this.args.article.get('articleAuthorCategory.id'), this.args.article.id];

    return [this.args.article.get('articleCategory.id'), this.args.article.id];
  }

  @computed('args.article')
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
