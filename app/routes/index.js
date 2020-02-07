import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service('intl') intl;

  beforeModel() {
    return this.intl.setLocale(['fr-ca', 'en-us']);
  }

  model() {
    return [{
      balados: [{
        id: 1,
        title: 'Title 1',
        postDatetime: '2019-02-01',
        updateDatetime: '2019-02-01',
        desc: 'Une description',
        thumbnailUrl: '',
        appleLink: '',
        googlePlayLink: '',
        spotifyLink: ''
      },
      {
        id: 2,
        title: 'Title 2',
        postDatetime: '2019-02-01',
        updateDatetime: '2019-02-01',
        desc: 'Une description 2',
        thumbnailUrl: '',
        appleLink: '',
        googlePlayLink: '',
        spotifyLink: ''
      }]
    }];
  }
}
