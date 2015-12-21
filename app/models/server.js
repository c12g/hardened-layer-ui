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
  privateNetworkOnlyFlag: DS.attr('boolean'),
  primaryIpAddress: DS.attr('string'),
  primaryBackendIpAddress: DS.attr('string'),
  // billing
  hourlyBillingFlag: DS.attr('boolean'),
  billingFee: DS.attr('number'),

  account: DS.belongsTo('account', {async: true}),
  datacenter: DS.belongsTo('datacenter', {async: true}),
  networkComponents: DS.hasMany('networkComponent', {async: true}),
  networkVlans: DS.hasMany('networkVlan', {async: true}),

  popup: function() {
    var html = '<div>';
    html += '<h5 style="margin: 0.5rem">' +this.get('hostname')+ '</h5>';
    html += '<div>ID: ' +this.get('id')+ '</div>';
    html += '<div>Type: ' +this.get('type')+ '</div>';
    html += '<div>PrivateOnly: ' +this.get('privateNetworkOnlyFlag')+ '</div>';
    html += '<div>Provisioned: ' +this.get('provisionDate')+ '</div>';
    html += '<div>VLANs: ' +this.get('networkVlans.content').length+ '</div>';
    html += '</div>';
    return html;
  }.property('id', 'hostname'),
});
