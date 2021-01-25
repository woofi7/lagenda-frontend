import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";
import { alias } from '@ember/object/computed';

export default class AdminController extends Controller {
  @service session;
  @service store;

  @alias('session.data.authenticated.user_info') profile;

  @action
  postArticle() {
    let article = this.store.createRecord('article', {
      content: 'testContent',
      desc: 'descTest',
      title: 'test',
      unlisted: true,
      postDatetime: new Date(),
      updateDatetime: new Date()
    })

    article.save();
  }
}
