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
            url: 'assets/images/balados-slider.jpg',
            alt: 'Microphone dans un studio d\'enregistrement.'
          },
        },
        {
          id: 2,
          route: 'about',
          title: 'À propos',
          desc: 'Qui diable est assez cinglé pour se lancer dans ce projet?',
          image: {
            url: 'assets/images/lagenda-2-slider.jpg',
            alt: 'Le parlement du Canada.'
          },
        },
        {
          id: 3,
          route: 'la-tribune',
          title: 'La tribune',
          desc: 'L’endroit pour vous informer et vous exprimer.',
          image: {
            url: 'assets/images/tribune-slider.jpg',
            alt: 'Bureau avec divers objets.'
          },
        },
        {
          id: 4,
          route: 'faq',
          title: 'L\'Agenda',
          desc: 'Créer la politique de demain.',
          image: {
            url: 'assets/images/lagenda-slider.jpg',
            alt: 'Château Frontenac à Québec.'
          },
        },
      ],
      featuredCards: [
        {
          id: 1,
          type: 'balado',
          category: 1,
          title: 'Courses à la chefferies',
          desc: 'Les courses à la chefferies se suivent, mais ne se ressemblent pas. On parle de la course du PQ, du' +
            ' PLQ et du Parti Conservateur. Trois courses, trois ambiances et surtout trois constats bien différents.',
          thumbnail: {
            url: 'assets/images/bg-7.jpg',
            alt: 'Image description'
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
            url: 'assets/images/bg-8.jpg',
            alt: 'Image description'
          },
        },
        {
          id: 2,
          type: 'article',
          category: 2,
          title: 'Les budgets Trudeau, vraiment progressistes?',
          desc: 'Depuis 2015 maintenant, Justin Trudeau est premier ministre du Canada et plusieurs décisions de sa' +
            ' part auront comme effet de lui tailler une place dans l’histoire politique canadienne.',
          thumbnail: {
            url: 'assets/images/bg-8.jpg',
            alt: 'Image description'
          },
        },
        {
          id: 1,
          type: 'article',
          category: 3,
          title: 'Pourquoi L’Agenda?',
          desc: 'Quelles sont les motivations qui nous animent et qui nous poussent à passer plusieurs heures par jours' +
            ' sur ce projet ambitieux?',
          thumbnail: {
            url: 'assets/images/bg-9.jpg',
            alt: 'Image description'
          },
        },
      ]
    });
  }
}
