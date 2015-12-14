import SoftLayerSerializer from './softlayer';

export default SoftLayerSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    servers: { embedded: 'always' },
  }
});
