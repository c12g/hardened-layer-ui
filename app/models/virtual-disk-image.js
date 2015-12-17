import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  uuid: DS.attr('string'),
  capacity: DS.attr('number'),
  units: DS.attr('string'),

  account: DS.belongsTo('account', {async: true}),
  blockDevice: DS.belongsTo('blockDevice', {async: true}),
});
