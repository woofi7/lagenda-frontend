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
          id: 9,
          type: 'article',
          category: 4,
          title: 'Le fédéralisme et le droit provincial en matière de traités internationaux',
          desc: 'En 1965, le vice-premier ministre et ministre de l’Éducation, Paul Gérin-Lajoie, met sur pied une' +
            ' doctrine révisant le rôle de la province du Québec sur la scène internationale.',
          thumbnail: {
            url: '/assets/images/article9.jpg',
            alt: 'Image description',
          },
        },
        {
          id: 8,
          type: 'article',
          category: 2,
          title: 'Un (pas si rare) moment d’unité',
          desc: 'À force de lire les experts et les chroniqueurs être en extase devant les sondages d’approbation de François Legault ...',
          thumbnail: {
            url: '/assets/images/article8.jpg',
            alt: 'Image description'
          },
        },
      ]
    });
  }
}
