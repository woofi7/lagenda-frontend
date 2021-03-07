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
  @belongsTo('article-author-category', { async: true }) articleAuthorCategory;

  @hasMany('author', { async: true }) authors;

  get state() {
    if (this.title
      && this.desc
      && this.content
      && this.image
      && this.authors
      && (this.articleCategory || this.articleAuthorCategory)) {
      if (this.postDatetime >= Date().toString()) {
        return "warning";
      }
      return "success";
    }
    else {
      return "error";
    }

  }
}
