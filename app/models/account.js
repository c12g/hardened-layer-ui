import DS from 'ember-data';

export default DS.Model.extend({
  companyName: DS.attr('string'),
  email: DS.attr('string'),

  servers: DS.hasMany('server', {async: true}),
});
