import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class AuthorModel extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') desc;

  @belongsTo('image') image;

  @hasMany('article') articles;
}
