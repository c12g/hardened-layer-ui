import DS from 'ember-data';

export default DS.Model.extend({
  companyName: DS.attr('string'),
  email: DS.attr('string'),
  createData: DS.attr('date'),
  modifyDate: DS.attr('date'),
  state: DS.attr('string'),
  isReseller: DS.attr('boolean'),

  servers: DS.hasMany('server', {async: true}),
});
