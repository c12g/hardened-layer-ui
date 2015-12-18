import SoftLayerSerializer from './softlayer';

export default SoftLayerSerializer.extend({
  attrs: {
    networkComponents: { embedded: 'always' },
    datacenter: { embedded: 'always' },
    networkVlans: { embedded: 'always' },
  }
});
