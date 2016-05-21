import Server from './server';

export default Server.extend({
  type: DS.attr('string', {defaultValue: 'virtual-server'}),

  createDate: DS.attr('date'),
  modifyDate: DS.attr('date'),
  powerState: DS.attr(),
  dedicatedAccountHostOnlyFlag: DS.attr('boolean'),

  imageTemplate: DS.belongsTo('imageTemplate', {async: true}),
  blockDevices: DS.hasMany('blockDevice', {async: true}),
});
