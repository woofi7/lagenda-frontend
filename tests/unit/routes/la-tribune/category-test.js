import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | la-tribune/category', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:la-tribune/category');
    assert.ok(route);
  });
});
