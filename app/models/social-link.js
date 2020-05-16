import Model, {attr, belongsTo} from '@ember-data/model';

export default class SocialLinkModel extends Model {
  @attr('string') type;
  @attr('string') link;

  @belongsTo('author') author;

  get typeClasses() {
    if (this.type === 'facebook') {
      return "fab fa-facebook facebook-color";
    }
    else if (this.type === 'twitter') {
      return "fab fa-twitter twitter-color";
    }
    else if (this.type === 'instagram') {
      return "fab fa-instagram instagram-color";
    }
    else if (this.type === 'linkedin') {
      return "fab fa-linkedin linkedin-color";
    }
    else if (this.type === 'email') {
      return "fas fa-envelope";
    }

    return null;
  }
}
