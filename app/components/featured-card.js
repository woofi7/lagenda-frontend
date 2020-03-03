import Component from '@glimmer/component';

export default class FeaturedCardComponent extends Component {
  get route() {
    if (this.args.model.type === 'balado') {
      return "balados.category.balado";
    }
    else if(this.args.model.type === 'article'){
      return "la-tribune.category.article";
    }

    return null;
  }
}
