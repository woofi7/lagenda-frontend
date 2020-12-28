import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class ArticleModel extends Model {
  @attr('string') title;
  @attr('date') postDatetime;
  @attr('date') updateDatetime;
  @attr('string') desc;
  @attr('string', { async: true }) content;
  @attr('boolean') unlisted;

  @belongsTo('image', { async: true }) image;
  @belongsTo('article-category', { async: true }) articleCategory;

  @hasMany('author', { async: true }) authors;
}
