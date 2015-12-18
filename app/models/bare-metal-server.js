import Server from './server';

export default Server.extend({
  type: DS.attr('string', {defaultValue: 'bare-metal-server'}),
});
