import Model, {attr, belongsTo, hasMany} from '@ember-data/model';
import {sort} from '@ember/object/computed';

export default class BaladoCategoryModel extends Model {
  @attr('string') name;
  @attr('number') order;
  @attr('string') desc;

  @belongsTo('image', { async: true }) image;
  @belongsTo('balado-partner', { async: true }) partner;

  @hasMany('balado') balados;

  sortKey = ['episodeNumber:desc'];
  @sort('balados', 'sortKey') sortedBalados;
}
