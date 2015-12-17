import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    this.store.findAll('account');
    return this.store.peekAll('network-vlan');
  }
});
