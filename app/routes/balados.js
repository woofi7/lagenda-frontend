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
          title: 'Courses à la chefferie',
          postDatetime: '02-26-2020',
          updateDatetime: '02-26-2020',
          desc: 'Les courses à la chefferie se suivent, mais ne se ressemblent pas. On parle de la course du PQ, du PLQ et du Parti Conservateur. Trois courses, trois ambiances et surtout trois constats bien différents. ',
          thumbnail: {
            url: '/assets/images/bg-1.jpg',
            alt: 'Description image.'
          },
          appleLink: 'https://podcasts.apple.com/ca/podcast/courses-%C3%A0-la-chefferies/id1500688101?i=1000466815260',
          googlePlayLink: 'https://www.google.com/podcasts?feed=aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9sTmFHMHNGUw%3D%3D',
          spotifyLink: 'https://open.spotify.com/episode/1GQ5lXdLq88tB03IAJDYto',
          category: 1,
          episodeNumber: 1
        },
        {
          id: 3,
          title: 'Spécial Covid-19',
          postDatetime: '03-23-2020',
          updateDatetime: '03-23-2020',
          desc: 'On parle de la COVID-19 tout en gardant notre distance sécuritaire! La réponse du Québec, du Canada et de l\'international à la pandémie mondiale qui frappe le monde de plein fouet.',
          thumbnail: {
            url: '/assets/images/balado3.jpg',
            alt: 'Description image.'
          },
          appleLink: 'https://apple.co/3dle7Lc',
          googlePlayLink: 'https://bit.ly/2xn34jX',
          spotifyLink: 'https://spoti.fi/39ayGql',
          category: 1,
          episodeNumber: 2
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
      balados: [
        {
          id: 2,
          title: 'Jérémie Juneau autonomiste et social-démocrate?',
          postDatetime: '03-13-2020',
          updateDatetime: '03-13-2020',
          desc: 'Jérémie Juneau, candidat du NPD dans Louis-Hébert, nous rejoint en studio pour discuter de ses idées, de ses ambitions et de lui-même.',
          thumbnail: {
            url: '/assets/images/photoJeremie.jpg',
            alt: 'Description image.'
          },
          appleLink: 'https://apple.co/2TOLoH6',
          googlePlayLink: 'http://bit.ly/2TNMClJ',
          spotifyLink: 'https://spoti.fi/39OQeJD',
          category: 3,
          episodeNumber: 1
        },
      ]
    },
    {
      id: 4,
      name: 'Héritage',
      balados: []
    }];
  }
});
