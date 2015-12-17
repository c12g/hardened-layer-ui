import DS from 'ember-data';

export default DS.Model.extend({
  companyName: DS.attr('string'),
  email: DS.attr('string'),
  createDate: DS.attr('date'),
  modifyDate: DS.attr('date'),
  state: DS.attr('string'),
  isReseller: DS.attr('boolean'),

  servers: DS.hasMany('server', {async: true}),
  bareMetalServers: DS.hasMany('bareMetalServer', {async: true}),
  virtualServers: DS.hasMany('virtualServer', {async: true}),
  users: DS.hasMany('user', {async: true}),
  imageTemplates: DS.hasMany('imageTemplate', {async: true}),
  openTickets: DS.hasMany('openTicket', {async: true}),
  virtualDiskImages: DS.hasMany('virtualDiskImage', {async: true}),
});
