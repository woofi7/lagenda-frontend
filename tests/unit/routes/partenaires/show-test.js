import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | partenaires/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:partenaires/show');
    assert.ok(route);
  });
});
