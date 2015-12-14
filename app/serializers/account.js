import SoftLayerSerializer from './softlayer';

export default SoftLayerSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    servers: { embedded: 'always' },
    imageTemplates: { embedded: 'always' },
    users: { embedded: 'always' },
    openTickets: { embedded: 'always' },
    virtualDiskImages: { embedded: 'always' },
    virtualServers: { embedded: 'always' },
    bareMetalServers: { embedded: 'always' },
  }
});
