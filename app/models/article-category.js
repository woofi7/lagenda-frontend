import Model, {attr, belongsTo, hasMany} from '@ember-data/model';

export default class ArticleCategoryModel extends Model {
  @attr('string') name;
  @attr('number') order;

  @belongsTo('image', { async: true }) image;

  @hasMany('article', { async: true }) articles;
}
