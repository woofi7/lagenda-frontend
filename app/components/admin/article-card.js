import Component from '@glimmer/component';
import { computed } from "@ember/object";

export default class AdminArticleCardComponent extends Component {
  @computed('args.article.state')
  get cardStyle () {
    switch (this.args.article.state) {
      case 'error':
        return " border-danger text-danger";
      case 'warning':
        return " border-warning text-warning";
      default:
        return "";
    }
  }
}
