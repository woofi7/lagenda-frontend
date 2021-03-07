import Model, { attr, belongsTo } from '@ember-data/model';


export default class BaladoModel extends Model {
  @attr('string') title;
  @attr('date') postDatetime;
  @attr('date') updateDatetime;
  @attr('string') desc;
  @attr('string') appleLink;
  @attr('string') googleLink;
  @attr('string') spotifyLink;
  @attr('string') soundcloudLink;
  @attr('string') youtubeLink;
  @attr('number') episodeNumber;
  @attr('boolean') unlisted;
  @attr('string') simpleCastId;

  @belongsTo('balado-category') baladoCategory;
  @belongsTo('image') image;

  get state() {
    if (this.title
      && this.desc
      && this.episodeNumber
      && this.image) {
      if (this.postDatetime >= Date().toString() || !this.simpleCastId) {
        return "warning";
      }
      return "success";
    }
    else {
      return "error";
    }

  }
}
