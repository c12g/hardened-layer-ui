import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  publicFlag: DS.attr('boolean'),
  flexImageFlag: DS.attr('boolean'),
  globalIdentifier: DS.attr('string'),

  account: DS.belongsTo('account', {async: true}),
});
