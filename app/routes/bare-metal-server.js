import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('bare-metal-server', params.server_id);
  }
});
