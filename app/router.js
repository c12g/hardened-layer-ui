import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('accounts');
  this.route('servers');
  this.route('image-templates');
  this.route('virtual-servers');
  this.route('bare-metal-servers');
  this.route('virtual-disk-images');
  this.route('open-tickets');
  this.route('users');
});

export default Router;
