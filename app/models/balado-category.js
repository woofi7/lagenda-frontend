import Model, { attr, hasMany } from '@ember-data/model';
import {sort} from '@ember/object/computed';

export default class BaladoCategoryModel extends Model {
  @attr('string') name;
  @attr('number') order;

  @hasMany('balado') balados;

  sortKey = ['episodeNumber:desc'];
  @sort('balados', 'sortKey') sortedBalados;
}
