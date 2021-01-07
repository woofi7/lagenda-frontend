import Controller from '@ember/controller';
import {alias, filter, sort} from "@ember/object/computed";
import {computed} from "@ember/object";
import {inject as service} from "@ember/service";

export default class AboutAuthorController extends Controller {
  @service moment;

  @alias('model') author;

  sortKey = ['updateDatetime:desc'];
  @sort('model.articles', 'sortKey') sortedArticles;

  @filter('sortedArticles', (a)  => {
    return moment(a.updateDatetime).isSameOrBefore() && !a.unlisted;
  }) filteredArticles;

  @computed('filteredArticles')
  get articles () {
    return this.filteredArticles.slice(0, 3);
  };
}
