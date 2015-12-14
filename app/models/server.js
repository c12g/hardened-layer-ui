import DS from 'ember-data';

export default DS.Model.extend({
  hostname: DS.attr('string'),
  domain: DS.attr('string'),
  maxCpu: DS.attr('string'),
  maxMemory: DS.attr('string'),

  account: DS.belongsTo('account', {async: true}),
});
