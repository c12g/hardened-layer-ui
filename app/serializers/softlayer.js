import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  init: function() {
    this._super();
    console.log('SoftLayerSerializer...');
  },
});
