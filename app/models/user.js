import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  lastName: DS.attr('string'),
  firstName: DS.attr('string'),
  email: DS.attr('string'),

  account: DS.belongsTo('account', {async: true}),
});
