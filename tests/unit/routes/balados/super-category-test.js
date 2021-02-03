import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | balados/balado-partner', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:balados/balado-partner');
    assert.ok(route);
  });
});
