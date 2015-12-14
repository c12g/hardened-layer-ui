import { moduleForModel, test } from 'ember-qunit';

moduleForModel('virtual-server', 'Unit | Serializer | virtual server', {
  // Specify the other units that are required for this test.
  needs: ['serializer:virtual-server']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
