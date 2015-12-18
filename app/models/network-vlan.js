import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string', {defaultValue: 'network-vlan'}),
  networkSpace: DS.attr(),
  vlanNumber: DS.attr(),

  virtualServers: DS.hasMany('virtualServer'),
  bareMetalServers: DS.hasMany('bareMetalServer'),
});
