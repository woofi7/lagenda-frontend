import Model, { attr, belongsTo } from '@ember-data/model';


export default class BaladoModel extends Model {
  @attr('string') title;
  @attr('date') postDatetime;
  @attr('date') updateDatetime;
  @attr('string') desc;
  @attr('string') appleLink;
  @attr('string') googleLink;
  @attr('string') spotifyLink;
  @attr('int') episodeNumber;

  @belongsTo('balado-category') category;
  @belongsTo('image') image;
}
