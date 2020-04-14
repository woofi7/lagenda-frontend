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
          image: {
            url: '/assets/images/balado3.jpg',
            alt: 'Image description',
          },
        },
        {
          id: 15,
          type: 'article',
          category: 4,
          title: 'Les intérêts économiques, constitutionnels et politiques du gouvernement québécois',
          desc: 'Ce texte est la suite de l’article : Le fédéralisme et le droit provincial en matière de traités' +
            ' internationaux.',
          image: {
            url: '/assets/images/article15.jpg',
            alt: 'Image description'
          },
        },
        {
          id: 18,
          type: 'article',
          category: 2,
          title: 'La réhabilitation de l’État-nation',
          desc: 'La récente épidémie du coronavirus aura révélé les limites et les faiblesses d’une mondialisation' +
            ' galopante et de l’évaporation lente, mais certaine, du concept de frontière et d’état souverain. Devant' +
            ' la crise, les citoyens ont vite réalisé l’utilité, la nécessité de maintenir un contrôle sur leurs' +
            ' frontières et d’éviter une dépendance imprudente envers les autres pays.',
          image: {
            url: '/assets/images/article18.jpg',
            alt: 'Image description',
          },
        },
        {
          id: 16,
          type: 'article',
          category: 2,
          title: 'La transition forcée de l’Alberta',
          desc: 'L’Alberta faisait, depuis plusieurs années, énormément de bruits pour forcer les provinces' +
            ' environnantes à laisser passer des pipelines transportant son pétrole en utilisant la fameuse' +
            ' péréquation et les mensonges populistes conservateurs pour attiser la hargne de leurs citoyens. ',
          image: {
            url: '/assets/images/article16.jpg',
            alt: 'Image description'
          },
        },
      ]
    });
  }
}
