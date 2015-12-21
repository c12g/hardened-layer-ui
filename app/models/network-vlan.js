import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string', {defaultValue: 'network-vlan'}),
  networkSpace: DS.attr('string'),
  name: DS.attr('string'),
  vlanNumber: DS.attr('string'),

  virtualServers: DS.hasMany('virtualServer'),
  bareMetalServers: DS.hasMany('bareMetalServer'),
});
