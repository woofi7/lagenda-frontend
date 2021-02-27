import Component from '@glimmer/component';

export default class WebplayerComponent extends Component {
  get simpleCastLink () {
    if (!this.args.id)
      return "";

    return "https://player.simplecast.com/" + this.args.id;
  }
}
