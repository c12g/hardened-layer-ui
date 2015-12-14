import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  // JSONAPI uses dasherized attribute name but softlayer used camelized one.
  keyForAttribute: function(attr) {
    console.log('kfa: ' + attr + '/' + Ember.String.camelize(attr));
    return Ember.String.camelize(attr);
  },
});
