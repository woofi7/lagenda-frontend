import Route from '@ember/routing/route';

export default Route.extend({
  breadCrumb: {
    title: 'Catégories'
  },

  async model() {
    return [{
      id: 1,
      name: 'Balados',
      balados: [
        {
          id: 1,
          title: 'Courses à la chefferies',
          postDatetime: '02-29-2019',
          updateDatetime: '02-29-2019',
          desc: 'Une description',
          thumbnailUrl: '../images/bg-1.jpg',
          appleLink: 'http://localhost:4200/balados/1/1',
          googlePlayLink: '',
          spotifyLink: 'http://localhost:4200/balados/1/1',
          soundcloudLink: 'http://localhost:4200/balados/1/1',
          category: 1,
          episodeNumber: 1
        },
        {
          id: 2,
          title: 'Titre de balado',
          postDatetime: '2019-02-01',
          updateDatetime: '2019-02-01',
          desc: 'Une description 2',
          thumbnailUrl: '',
          appleLink: '',
          googlePlayLink: '',
          spotifyLink: '',
          category: 1,
          episodeNumber: 2
        },
        {
          id: 3,
          title: 'Title 3',
          postDatetime: '2019-02-01',
          updateDatetime: '2019-02-01',
          desc: 'Une description 3',
          thumbnailUrl: '',
          appleLink: '',
          googlePlayLink: '',
          spotifyLink: '',
          category: 1,
          episodeNumber: 3
        }
      ]
    },
    {
      id: 2,
      name: 'Débats',
      balados: [{
        id: 5,
        title: 'Title 5',
        postDatetime: '2019-02-01',
        updateDatetime: '2019-02-01',
        desc: 'Une description 5',
        thumbnailUrl: '',
        appleLink: '',
        googlePlayLink: '',
        spotifyLink: '',
        category: 2,
        episodeNumber: 1
      }]
    },
    {
      id: 3,
      name: 'Entrevues',
      balados: [{
        id: 6,
        title: 'Title 6',
        postDatetime: '2019-02-01',
        updateDatetime: '2019-02-01',
        desc: 'Une description 6',
        thumbnailUrl: '',
        appleLink: '',
        googlePlayLink: '',
        spotifyLink: '',
        category: 3,
        episodeNumber: 1
      }]
    },
    {
      id: 4,
      name: 'Héritage',
      balados: [{
        id: 7,
        title: 'Title 6',
        postDatetime: '2019-02-01',
        updateDatetime: '2019-02-01',
        desc: 'Une description 6',
        thumbnailUrl: '',
        appleLink: '',
        googlePlayLink: '',
        spotifyLink: '',
        category: 4,
        episodeNumber: 1
      }]
    }];
  }
});
