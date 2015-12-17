import DS from 'ember-data';

export default DS.Model.extend({
  networkSpace: DS.attr(),
  vlanNumber: DS.attr(),

  virtualServer: DS.hasMany('virtualServer'),
});
