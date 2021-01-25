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
    this.route('show', { path: ':category' });
    this.route('category', { path: ':category' }, function() {
      this.route('list', { path: '/' });
      this.route('balado', { path: ':balado' });
    });
  });
  this.route('la-tribune', function() {
    this.route('list', { path: '/' });
    this.route('category', { path: ':category' }, function() {
      this.route('list', { path: '/' });
      this.route('article', { path: ':article' });
    });
  });
  this.route('faq');
  this.route('contact');
  this.route('privacy-policy');
  this.route('terms-of-use');
  this.route('about', function() {
    this.route('author', { path: ':author' });
  });
  this.route('admin');
  this.route('login');
});
