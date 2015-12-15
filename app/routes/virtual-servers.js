import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    this.store.findAll('account');
    return this.store.peekAll('virtual-server');
  }
});
