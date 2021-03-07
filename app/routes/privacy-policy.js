import Route from '@ember/routing/route';
import {inject as service} from "@ember/service";

export default class PrivacyPolicyRoute extends Route {
  @service fastboot;

  model() {
    return "<div class=\"container my-4\">" +
      "  <h2>Politique de confidentialité</h2>" +
      "  <h4>Introduction</h4>" +
      "  <p>" +
      "    Devant le développement des nouveaux outils de communication, il est nécessaire de porter une attention particulière" +
      "    à la protection de la vie privée. C'est pourquoi, nous nous engageons à respecter la confidentialité des" +
      "    renseignements personnels que nous collectons." +
      "  </p>" +
      "  <h4>Collecte des renseignements personnels</h4>" +
      "  <p>" +
      "    Nous collectons les renseignements suivants :" +
      "  </p>" +
      "  <ul>" +
      "    <li>Nom</li>" +
      "    <li>Prénom</li>" +
      "    <li>Adresse électronique</li>" +
      "  </ul>" +
      "  <p>" +
      "    Les renseignements personnels que nous collectons sont recueillis au travers de formulaires et grâce à" +
      "    l'interactivité établie entre vous et notre site Web. Nous utilisons également, comme indiqué dans la section" +
      "    suivante, des fichiers témoins et/ou journaux pour réunir des informations vous concernant." +
      "  </p>" +
      "  <h4>Formulaires  et interactivité:</h4>" +
      "  <p>" +
      "    Vos renseignements personnels sont collectés par le biais de formulaire, à savoir :" +
      "  </p>" +
      "  <ul>" +
      "    <li>Formulaire d'inscription au site Web</li>" +
      "  </ul>" +
      "  <p>" +
      "    Nous utilisons les renseignements ainsi collectés pour les finalités suivantes :" +
      "  </p>" +
      "  <ul>" +
      "    <li>Informations / Offres promotionnelles</li>" +
      "  </ul>" +
      "  <p>" +
      "    Nous utilisons les renseignements ainsi collectés pour les finalités suivantes :" +
      "  </p>" +
      "  <ul>" +
      "    <li>Correspondance</li>" +
      "    <li>Informations ou pour des offres promotionnelles</li>" +
      "  </ul>" +
      "  <h4>Fichiers journaux et témoins</h4>" +
      "  <p>" +
      "    Nous recueillons certaines informations par le biais de fichiers journaux (log file) et de fichiers témoins" +
      "    (cookies). Il s'agit principalement des informations suivantes :" +
      "  </p>" +
      "  <ul>" +
      "    <li>Adresse IP</li>" +
      "    <li>Système d'exploitation</li>" +
      "    <li>Pages visitées et requêtes</li>" +
      "    <li>Heure et jour de connexion</li>" +
      "  </ul>" +
      "  <p>" +
      "    Le recours à de tels fichiers nous permet :" +
      "  </p>" +
      "  <ul>" +
      "    <li>Amélioration du service et accueil personnalisé</li>" +
      "    <li>Statistique</li>" +
      "  </ul>" +
      "</div>"
  }

  beforeModel() {
    if (!this.fastboot.isFastBoot)
      document.getElementsByTagName('body')[0].classList.remove('dark');
  }
}
