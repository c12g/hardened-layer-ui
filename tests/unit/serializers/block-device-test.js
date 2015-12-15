import { moduleForModel, test } from 'ember-qunit';

moduleForModel('block-device', 'Unit | Serializer | block device', {
  // Specify the other units that are required for this test.
  needs: ['serializer:block-device']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
