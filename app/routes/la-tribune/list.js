import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  model() {
    return this.store.query('article', {
      page: {
        size: 18
      },
      filter: {
        unlisted: false
      }
    });
  },

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }
});

