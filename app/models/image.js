import Model, {attr, belongsTo, hasMany} from '@ember-data/model';
import {computed} from "@ember/object";

export default class ImageModel extends Model {
  @attr('string') url;
  @attr('string') name;
  @attr('string') alt;
  @attr('string') credits;

  @hasMany('article') articles;
  @belongsTo('author') author;

  // @computed('url')
  // get name() {
  //   const regex = /.*(?:files\.lagenda\.ca\/images\/)(?<name>.*)/gm;
  //   const result = regex.exec(this.url);
  //
  //   return result.groups.name ? result.groups.name : this.url;
  // }
}
