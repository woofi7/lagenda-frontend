import Model, {belongsTo, hasMany} from '@ember-data/model';

export default class ArticleCategoryModel extends Model {
  @attr('string') name;
  @attr('string') externalLink;
  @attr('number') order;
  @attr('boolean') unlisted;
  @attr('boolean') isPartner;

  @belongsTo('image', { async: true }) image;

  @hasMany('article', { async: true }) articles;
  @hasMany('article-author-category', { async: true }) authorCategories;
}
