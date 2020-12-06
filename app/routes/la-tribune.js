import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this.store.unloadAll();
    return this.store.findAll('article-category', {
      include: 'articles'
    });
  }
});

