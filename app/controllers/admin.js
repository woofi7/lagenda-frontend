import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";

export default class AdminController extends Controller {
  @service session;
  @service store;

  @action
  invalidateSession() {
    this.session.invalidate();
  }

  @action
  postArticle() {
    let article = this.store.createRecord('article', {
      title: 'test',
      unlisted: true,
      postDatetime: new Date(),
      updateDatetime: new Date()
    })

    article.save();
  }
}
