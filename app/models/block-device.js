import DS from 'ember-data';

export default DS.Model.extend({
  device: DS.attr(),
  statusId: DS.attr('boolean'),
  uuid: DS.attr(),
  createDate: DS.attr('date'),
  modifyDate: DS.attr('date'),
  mountMode: DS.attr(),
  mountType: DS.attr(),
  bootableFlag: DS.attr('boolean'),
  hotPlugFlag: DS.attr('boolean'),

  virtualServer: DS.belongsTo('virtualServer'),
  virtualDiskImage: DS.belongsTo('virtualDiskImage'),
});
