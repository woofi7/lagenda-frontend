import Component from '@glimmer/component';

export default class AuthorCardComponent extends Component {
  get authorLink() {
    return this.args.author.partner ? "partenaires.show" : "about.author";
  }
}
