import DS from 'ember-data';

export default DS.Model.extend({
  companyName: DS.attr('string'),
  email: DS.attr('string'),
});
