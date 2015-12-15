import Ember from 'ember';

export default Ember.Mixin.create({
  esFilter: '',
  esFields: ['name', 'description'],
  esSorter: ['name', 'id'],

  filteredContent: function() {
    var filter = this.get('esFilter').toString();
    var fields = this.get('esFields');

    if (this.get('sortProperties') === null) {
      this.set('sortProperties', this.get('esSorter'));
    }

    try {
      var rx = new RegExp(filter, 'gi');
    } catch(err) {
      console.log("filter error: '" + filter + "'");
    }

    return this.filter(function(content) {
      if (Ember.isBlank(filter)) {
        return true;
      }

      for (var i = 0; i < fields.length; i++) {
        try {
          var data = content.get(fields[i]);
          if (data && data.match(rx)) {
            return true;
          }
        } catch(err) {
          console.log("Error: " + err + " on " + content + "/" + fields[i]);
        }
      }
      return false;
    });
  }.property('@each', 'esFilter'),

  total: function() {
    return this.get('model.length');
  }.property('model.[]'),

  actions: {
    sortBy: function(property) {
      var sorter = [property].concat(this.get('sortProperties').splice(0, 2));
      this.set('sortProperties', sorter);
      this.set('sortAscending', !this.get('sortAscending'));
    },

    select: function(target) {
      this.transitionToRoute(target.rName, target);
    },
  },
});
