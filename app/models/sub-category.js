import Model, {attr, hasMany} from '@ember-data/model';

export default class SubCategoryModel extends Model {
  @attr('string') name;

  @hasMany('article') articles;
}
