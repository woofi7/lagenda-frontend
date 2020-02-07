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
          title: 'Title 1',
          postDatetime: '2019-02-01',
          updateDatetime: '2019-02-01',
          desc: 'Une description',
          thumbnailUrl: '../images/bg-1.jpg',
          appleLink: '',
          googlePlayLink: '',
          spotifyLink: '',
          category: 1
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
          spotifyLink: '',
          category: 1
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
          category: 1
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
        category: 2
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
        category: 3
      }]
    },
    {
      id: 4,
      name: 'Héritage',
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
        category: 4
      }]
    }];
  }
});
