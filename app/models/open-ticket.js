import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  lastEditDate: DS.attr('date'),
  newUpdatesFlag: DS.attr('boolean'),
  awaitingUserResponseFlag: DS.attr('boolean'),

  account: DS.belongsTo('account', {async: true}),
});
