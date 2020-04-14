import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class ArticleModel extends Model {
  @attr('string') title;
  @attr('date') postDatetime;
  @attr('date') updateDatetime;
  @attr('string') desc;
  @attr('string') content;

  @belongsTo('image') image;
  @belongsTo('article-category') category;

  @hasMany('author') authors;
}
