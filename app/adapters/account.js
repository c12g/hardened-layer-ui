import SoftLayerAdapter from './softlayer';

export default SoftLayerAdapter.extend({
  init: function() {
    this._super();
    console.log('SoftLayer AccountAdapter...');
  }
});
