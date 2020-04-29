import Component from '@glimmer/component';

export default class FeaturedCardComponent extends Component {
  get route() {
    if (this.args.type === 'balado') {
      return "balados.category.balado";
    }
    else if(this.args.type === 'article'){
      return "la-tribune.category.article";
    }
    else if(this.args.type === 'video'){
      return "";
    }

    return null;
  }

  get type() {
    if (this.args.type === 'balado') {
      return "fa-microphone";
    }
    else if(this.args.type === 'article'){
      return "fa-feather-alt";
    }
    else if(this.args.type === 'video'){
      return "fa-video";
    }

    return null;
  }

  get category() {
    if (this.args.type === 'balado') {
      return this.args.model.baladoCategory;
    } else if (this.args.type === 'article') {
      return this.args.model.articleCategory;
    } else if (this.args.type === 'video') {
      return this.args.model.videoCategory;
    }

    return null;
  }
}
