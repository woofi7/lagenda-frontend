import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | la-tribune/list', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:la-tribune/list');
    assert.ok(route);
  });
});
