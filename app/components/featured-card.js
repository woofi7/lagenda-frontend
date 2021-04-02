import Component from '@glimmer/component';
import {computed} from "@ember/object";

export default class FeaturedCardComponent extends Component {
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

  get route() {
    if (this.args.type === 'balado') {
      return "balados.balado-partner.category.balado";
    }
    else if(this.args.type === 'article'){
      if (this.args.model.get('articleAuthorCategory.id'))
        return "la-tribune.category-v2.author.article";
      return "la-tribune.category-v2.article";
    }
    else if(this.args.type === 'video'){
      return "";
    }

    return null;
  }

  get routeModels() {
    let models = null;

    if (this.args.type === 'balado') {
      models = [this.category.get('partner.id'), this.category.get('id'), this.args.model.id];
    }
    else if(this.args.type === 'article'){
      if (this.args.model.get('articleAuthorCategory.id')) {
        models = [this.args.model.get('articleAuthorCategory.articleCategory.id'), this.args.model.get('articleAuthorCategory.id'), this.args.model.id];
      }
      else {
        models = [this.args.model.get('articleCategory.id'), this.args.model.id];
      }
    }

    return models;
  }
}
