import Component from '@glimmer/component';

export default class FeaturedCardComponent extends Component {
  get route() {
    if (this.args.model.type === 'balado') {
      return "balados.category.balado";
    }
    else if(this.args.model.type === 'article'){
      return "la-tribune.category.article";
    }
    else if(this.args.model.type === 'video'){
      return "";
    }

    return null;
  }

  get type() {
    if (this.args.model.type === 'balado') {
      return "fa-microphone";
    }
    else if(this.args.model.type === 'article'){
      return "fa-feather-alt";
    }
    else if(this.args.model.type === 'video'){
      return "fa-video";
    }

    return null;
  }
}
