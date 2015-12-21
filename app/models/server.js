import DS from 'ember-data';

export default DS.Model.extend({
  // common
  type: DS.attr('string', {defaultValue: 'server'}),
  hostname: DS.attr('string'),
  domain: DS.attr('string'),
  os: DS.attr(),
  // resource
  cpus: DS.attr(),
  memories: DS.attr(),
  // usage and dates
  provisionDate: DS.attr('date'),
  // networking
  primaryNetworkOnlyFlag: DS.attr('boolean'),
  primaryIpAddress: DS.attr('string'),
  primaryBackendIpAddress: DS.attr('string'),
  // billing
  hourlyBillingFlag: DS.attr('boolean'),
  billingFee: DS.attr('number'),

  account: DS.belongsTo('account', {async: true}),
  datacenter: DS.belongsTo('datacenter', {async: true}),
  networkComponents: DS.hasMany('networkComponent', {async: true}),
  networkVlans: DS.hasMany('networkVlan', {async: true}),
});
