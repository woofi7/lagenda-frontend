import Component from '@glimmer/component';
import {computed} from "@ember/object";

export default class AdminBaladoCardComponent extends Component {
  @computed('args.balado')
  get cardStyle () {
    switch (this.args.balado.state) {
      case 'error':
        return " border-danger text-danger";
      case 'warning':
        return " border-warning text-warning";
      default:
        return "";
    }
  }
}
