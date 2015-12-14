import { moduleForModel, test } from 'ember-qunit';

moduleForModel('bare-metal-server', 'Unit | Model | bare metal server', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
