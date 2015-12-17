import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string', {defaultValue: 'virtual-server'}),
  hostname: DS.attr('string'),
  domain: DS.attr('string'),
  maxCpu: DS.attr('string'),
  maxMemory: DS.attr('string'),

  createDate: DS.attr('date'),
  modifyDate: DS.attr('date'),
  provisionDate: DS.attr('date'),

  dedicatedAccountHostOnlyFlag: DS.attr('boolean'),
  privateNetworkOnlyFlag: DS.attr('boolean'),
  hourlyBillingFlag: DS.attr('boolean'),

  primaryIpAddress: DS.attr('string'),
  primaryBackendIpAddress: DS.attr('string'),

  billingFee: DS.attr(),
  status: DS.attr(),
  powerState: DS.attr(),

  account: DS.belongsTo('account', {async: true}),
  imageTemplate: DS.belongsTo('imageTemplate', {async: true}),

  datacenter: DS.belongsTo('datacenter', {async: true}),
  blockDevices: DS.hasMany('blockDevice', {async: true}),
  networkComponents: DS.hasMany('networkComponent', {async: true}),
  networkVlans: DS.hasMany('networkVlan', {async: true}),
});
