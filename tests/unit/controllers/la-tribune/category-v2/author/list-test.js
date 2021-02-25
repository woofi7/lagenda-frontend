import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | la-tribune/category-v2/author/list', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:la-tribune/category-v2/author/list');
    assert.ok(controller);
  });
});
