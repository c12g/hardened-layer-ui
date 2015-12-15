import Ember from 'ember';
import EsTableMixin from '../../../mixins/es-table';
import { module, test } from 'qunit';

module('Unit | Mixin | es table');

// Replace this with your real tests.
test('it works', function(assert) {
  let EsTableObject = Ember.Object.extend(EsTableMixin);
  let subject = EsTableObject.create();
  assert.ok(subject);
});
