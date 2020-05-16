import Model, { attr, hasMany } from '@ember-data/model';

export default class BaladoCategoryModel extends Model {
  @attr('string') name;
  @attr('number') order;

  @hasMany('balado') balados;
}
