import { moduleForModel, test } from 'ember-qunit';

moduleForModel('virtual-disk-image', 'Unit | Serializer | virtual disk image', {
  // Specify the other units that are required for this test.
  needs: ['serializer:virtual-disk-image']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
