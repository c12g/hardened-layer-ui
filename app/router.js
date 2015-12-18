import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('accounts');
  this.route('servers');
  this.route('image-templates');
  this.resource('virtual-servers', { path: '/virtual-servers' }, function() {
    this.resource('virtual-server', { path: '/:server_id' });
  });
  this.resource('bare-metal-servers', function() {
    this.resource('bare-metal-server', { path: '/:server_id'});
  });
  this.route('bare-metal-servers');
  this.route('virtual-disk-images');
  this.route('open-tickets');
  this.route('users');
  this.route('network-components');
  this.route('datacenters');
  this.route('block-devices');
  this.resource('network-vlans', { path: '/network-vlans' }, function() {
    this.resource('network-vlan', { path: '/:network-vlan_id' });
  });
});

export default Router;
