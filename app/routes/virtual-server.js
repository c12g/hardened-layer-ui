import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('virtual-server', params['virtual-server_id']);
  }
});
