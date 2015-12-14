import { moduleForModel, test } from 'ember-qunit';

moduleForModel('image-template', 'Unit | Serializer | image template', {
  // Specify the other units that are required for this test.
  needs: ['serializer:image-template']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
