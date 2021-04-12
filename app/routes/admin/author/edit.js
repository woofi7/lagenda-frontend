import Route from '@ember/routing/route';
import RSVP from "rsvp";

export default class AdminAuthorEditRoute extends Route {
  async model(params) {
    let author = await this.store.findRecord('author', params.author, {
      include: 'image'
    });

    return RSVP.hash({
      author
    });
  }
}
