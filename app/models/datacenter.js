import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  longName: DS.attr(),
  statusId: DS.attr(),

  virtualServers: DS.hasMany('virtualServer'),
});
