import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
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
  this.route('about');
});
