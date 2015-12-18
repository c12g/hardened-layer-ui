import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  init: function() {
    this._super();
    //console.log('SoftLayerSerializer...');
  },

  normalize: function(model, hash, prop) {
    console.log('normalize for ' + model);
    return this._super(model, hash, prop);
  },

  normalizeHash: {
    accounts: function(hash) {
      var len = hash.virtualServers.length;
      for (var i = 0; i < len; i++) {
        var vs = hash.virtualServers[i];
        vs.cpus = vs.maxCpu;
        vs.memories = vs.maxMemory;

        vs.powerState = vs.powerState.name;
        vs.status = vs.status.name;
        if (vs.blockDeviceTemplateGroup) {
          vs.imageTemplate = vs.blockDeviceTemplateGroup.id
        }
        var bl = vs.blockDevices.length;
        for (var j = 0; j < bl; j++) {
          vs.blockDevices[j].virtualDiskImage = vs.blockDevices[j].diskImageId;
        }

        vs.billingFee = vs.billingItem.recurringFee;
	vs.os = vs.operatingSystem.softwareLicense.softwareDescription.name;
      }

      var len = hash.bareMetalServers.length;
      for (var i = 0; i < len; i++) {
        var vs = hash.bareMetalServers[i];
        vs.cpus = vs.processorPhysicalCoreAmount;
        vs.memories = vs.memoryCapacity;

        vs.billingFee = vs.billingItem.recurringFee;
	vs.os = vs.operatingSystem.softwareLicense.softwareDescription.name;
      }

      return hash;
    }
  },

  keyForRelationship: function(key, type, method) {
    //console.log("keyForRelationship: " + key + "/" + type + "/" + method);
    return this._super();
  },

  keyForAttribute: function(attr, method) {
    //console.log("keyForAttribute: " + attr + "/" + method);
    return this._super();
  },
});
