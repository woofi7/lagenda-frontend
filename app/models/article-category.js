import Model, {attr, hasMany} from '@ember-data/model';

export default class ArticleCategoryModel extends Model {
  @attr('string') name;

  @hasMany('article') articles;
}
