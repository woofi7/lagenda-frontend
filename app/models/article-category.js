import Model, {attr, hasMany} from '@ember-data/model';

export default class ArticleCategoryModel extends Model {
  @attr('string') name;
  @attr('number') order;

  @hasMany('article', { async: true }) articles;
}
