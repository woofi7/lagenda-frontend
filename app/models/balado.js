import Model, { attr, belongsTo } from '@ember-data/model';


export default class BaladoModel extends Model {
  @attr('string') title;
  @attr('date') postDatetime;
  @attr('date') updateDatetime;
  @attr('string') desc;
  @attr('string') thumbnail;
  @attr('string') appleLink;
  @attr('string') googlePlayLink;
  @attr('string') spotifyLink;

  @belongsTo('balado-category') category;
}
