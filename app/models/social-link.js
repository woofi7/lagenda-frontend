import Model, {attr, belongsTo} from '@ember-data/model';

export default class SocialLinkModel extends Model {
  @attr('string') type;
  @attr('string') link;

  @belongsTo('author') author;
}
