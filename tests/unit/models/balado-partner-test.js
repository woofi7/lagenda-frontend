import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | balado partner', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('balado-partner', {});
    assert.ok(model);
  });
});
