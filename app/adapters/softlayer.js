import DS from 'ember-data';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.SL.host,
  namespace: config.SL.namespace,

  init: function() {
    this._super();
    console.log('SoftLayerAdapter: ' + config.SL.host + '...');
  }
});
