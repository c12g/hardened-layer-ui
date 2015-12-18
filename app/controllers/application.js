import Ember from 'ember';

export default Ember.Controller.extend(Ember.Evented, {
  observePath: function() {
    $('.ui.sidebar').sidebar('hide');
  }.observes('currentPath'),
});
