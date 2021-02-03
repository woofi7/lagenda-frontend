import Model, {attr, belongsTo, hasMany} from '@ember-data/model';
import {sort} from '@ember/object/computed';

export default class BaladoPartnerModel extends Model {
  @attr('string') name;
  @attr('number') order;
  @attr('string') desc;

  @belongsTo('image', { async: true }) image;

  @hasMany('balado-category') categories;

  sortKey = ['order:asc'];
  @sort('categories', 'sortKey') sortedCategories;
}
