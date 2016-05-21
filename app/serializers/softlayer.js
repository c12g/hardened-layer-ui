import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  init: function() {
    this._super();
    //console.log('SoftLayerSerializer...');
  },

  normalize: function(model, hash, prop) {
    //console.log('normalize for ' + model);
    return this._super(model, hash, prop);
  },

  normalizeHash: {
    accounts: function(hash) {
      var len, i, sv;

      len = hash.virtualServers.length;
      for (i = 0; i < len; i++) {
        sv = hash.virtualServers[i];
        sv.cpus = sv.maxCpu;
        sv.memories = sv.maxMemory;

        sv.powerState = sv.powerState.name;
        sv.status = sv.status.name;
        if (sv.blockDeviceTemplateGroup) {
          sv.imageTemplate = sv.blockDeviceTemplateGroup.id;
        }
        var bl = sv.blockDevices.length;
        for (var j = 0; j < bl; j++) {
          sv.blockDevices[j].virtualDiskImage = sv.blockDevices[j].diskImageId;
        }

        if (typeof sv.activeTransaction !== 'undefined' &&
            sv.activeTransaction !== null) {
          sv.transaction = sv.activeTransaction.transactionStatus.friendlyName;
        }
        if (typeof sv.billingItem !== 'undefined') {
          sv.billingFee = sv.billingItem.recurringFee;
        }
        if (typeof sv.operatingSystem !== 'undefined') {
          sv.os = sv.operatingSystem.softwareLicense.softwareDescription.name;
        }
      }

      len = hash.bareMetalServers.length;
      for (i = 0; i < len; i++) {
        sv = hash.bareMetalServers[i];
        sv.cpus = sv.processorPhysicalCoreAmount;
        sv.memories = sv.memoryCapacity;

        sv.status = sv.hardwareStatus.status;
        if (typeof sv.activeTransaction !== 'undefined' &&
            sv.activeTransaction !== null) {
          sv.transaction = sv.activeTransaction.transactionStatus.name;
        }
        if (typeof sv.billingItem !== 'undefined') {
          sv.billingFee = sv.billingItem.recurringFee;
        }
        if (typeof sv.operatingSystem !== 'undefined') {
          sv.os = sv.operatingSystem.softwareLicense.softwareDescription.name;
        }
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
