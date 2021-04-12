import Route from '@ember/routing/route';
import RSVP from "rsvp";

export default class AdminAuthorListRoute extends Route {
  async model() {
    let authors =  this.store.findAll('author');

    return RSVP.hash({
      authors
    });
  }
}
