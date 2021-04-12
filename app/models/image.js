import Model, {attr, belongsTo, hasMany} from '@ember-data/model';

export default class ImageModel extends Model {
  @attr('string') url;
  @attr('string') name;
  @attr('string') alt;
  @attr('string') credits;

  @hasMany('article') articles;
  @belongsTo('author') author;
}
