import config from './config/environment';
import EmberRouterScroll from 'ember-router-scroll';

export default class Router extends EmberRouterScroll {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('index', { path: '/' }, function() {});
  this.route('balados', function() {
    this.route('list', { path: '/' });
    this.route('balado-partner', { path: ':partner'}, function() {
      this.route('category', { path: ':category' }, function() {
        this.route('balado', { path: ':balado' });
      });
    });
  });
  this.route('la-tribune', function() {
    this.route('list', { path: '/' });
    this.route('category', { path: ':category' }, function() {
      this.route('article', { path: ':article' });
    });
    this.route('category-v2', { path: 'categorie/:category' }, function() {
      this.route('list', { path: '/' });
      this.route('author', { path: 'auteur/:author' }, function() {
        this.route('list', { path: '/' });
        this.route('article', { path: 'article/:article' });
      });
      this.route('article', { path: 'article/:article' });
    });
  });
  this.route('faq');
  this.route('contact');
  this.route('privacy-policy');
  this.route('terms-of-use');
  this.route('about', function() {
    this.route('author', { path: ':author' });
  });
  this.route('partenaires', function() {
    this.route('show', { path: ':partner' });
  });
  this.route('admin');
  this.route('login');
});
