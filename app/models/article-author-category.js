import Model, {attr, belongsTo, hasMany} from '@ember-data/model';

export default class ArticleAuthorCategoryModel extends Model {
  @attr('string') name;
  @attr('string') externalLink;
  @attr('number') order;
  @attr('boolean') unlisted;

  @belongsTo('image', { async: true }) image;
  @belongsTo('article-category', { async: true }) articleCategory;

  @hasMany('article', { async: true }) articles;
}
