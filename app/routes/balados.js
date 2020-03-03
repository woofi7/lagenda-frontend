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
          postDatetime: '02-26-2020',
          updateDatetime: '02-26-2020',
          desc: 'Les courses à la chefferies se suivent, mais ne se ressemblent pas. On parle de la course du PQ, du PLQ et du Parti Conservateur. Trois courses, trois ambiances et surtout trois constats bien différents. ',
          thumbnailUrl: 'assets/images/bg-1.jpg',
          appleLink: 'https://podcasts.apple.com/ca/podcast/courses-%C3%A0-la-chefferies/id1500688101?i=1000466815260',
          googlePlayLink: 'https://www.google.com/podcasts?feed=aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9sTmFHMHNGUw%3D%3D',
          spotifyLink: 'https://open.spotify.com/episode/1GQ5lXdLq88tB03IAJDYto',
          category: 1,
          episodeNumber: 1
        },
      ]
    },
    {
      id: 2,
      name: 'Débats',
      balados: []
    },
    {
      id: 3,
      name: 'Entrevues',
      balados: []
    },
    {
      id: 4,
      name: 'Héritage',
      balados: []
    }];
  }
});
