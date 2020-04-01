import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class IndexRoute extends Route {
  @service('intl') intl;

  beforeModel() {
    return this.intl.setLocale(['fr-ca', 'en-us']);
  }

  model() {
    return RSVP.hash({
      carouselItems: [
        {
          id: 1,
          route: 'balados.list',
          title: 'Le balado',
          desc: 'Pour des analyses détaillées.',
          image: {
            url: '/assets/images/balados-slider.jpg',
            alt: 'Microphone dans un studio d\'enregistrement.'
          },
        },
        {
          id: 2,
          route: 'about',
          title: 'À propos',
          desc: 'Qui diable est assez cinglé pour se lancer dans ce projet?',
          image: {
            url: '/assets/images/lagenda-2-slider.jpg',
            alt: 'Le parlement du Canada.'
          },
        },
        {
          id: 3,
          route: 'la-tribune',
          title: 'La tribune',
          desc: 'L’endroit pour vous informer et vous exprimer.',
          image: {
            url: '/assets/images/tribune-slider.jpg',
            alt: 'Bureau avec divers objets.'
          },
        },
        {
          id: 4,
          route: 'faq',
          title: 'L\'Agenda',
          desc: 'Créer la politique de demain.',
          image: {
            url: '/assets/images/lagenda-slider.jpg',
            alt: 'Château Frontenac à Québec.'
          },
        },
      ],
      featuredCards: [
        {
          id: 3,
          type: 'balado',
          category: 1,
          title: 'Spécial Covid-19',
          desc: 'On parle de la COVID-19 tout en gardant notre distance sécuritaire! La réponse du Québec, du Canada' +
            ' et de l\'international à la pandémie mondiale qui frappe le monde de plein fouet.',
          thumbnail: {
            url: '/assets/images/balado3.jpg',
            alt: 'Image description',
          },
        },
        {
          id: 1,
          type: 'article',
          category: 1,
          title: 'Mot de la rédaction',
          desc: 'Un petit mot pour vous expliquer qui nous sommes, nos buts et ce à quoi vous pouvez vous attendre de' +
            ' la part de la Tribune de L’Agenda.',
          thumbnail: {
            url: '/assets/images/bg-8.jpg',
            alt: 'Image description'
          },
        },
        {
          id: 7,
          type: 'article',
          category: 2,
          title: 'Vision d’un autre monde',
          desc: 'L’épidémie de la COVID-19 aura permis à plusieurs d’entre nous de voir des situations pouvant' +
            ' paraître d’un autre monde. ',
          thumbnail: {
            url: '/assets/images/article7.jpg',
            alt: 'Image description',
            credits: 'RADIO-CANADA / THOMAS GERBET'
          },
        },
        {
          id: 6,
          type: 'article',
          category: 2,
          title: 'Il y a les leaders et les autres',
          desc: 'La pandémie actuelle qui frappe de plein fouet le monde, mais aussi le Canada nous rappelle sauvagement notre fragilité et ...',
          thumbnail: {
            url: '/assets/images/article6.jpg',
            alt: 'Image description'
          },
        },
      ]
    });
  }
}
