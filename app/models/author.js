import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class AuthorModel extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') title;
  @attr('string') desc;
  @attr('boolean') collaborator;
  @attr('number') order;

  @belongsTo('image') image;

  @hasMany('article') articles;
  @hasMany('social-link') socialLinks;
}
