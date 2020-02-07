import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | balados/category/episode', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:balados/category/episode');
    assert.ok(route);
  });
});
