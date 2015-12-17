import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  primaryIpAddress: DS.attr(),
  macAddress: DS.attr(),
  port: DS.attr(),
  speed: DS.attr(),
  maxSpeed: DS.attr(),
  status: DS.attr(),

  virtualServer: DS.belongsTo('virtualServer'),
});
