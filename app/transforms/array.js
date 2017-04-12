import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(serialized) {
      return (Ember.typeOf(serialized) == "array")
          ? serialized
          : [];
    },

    serialize: function(deserialized) {
      const type = Ember.typeOf(deserialized);
      if (type == 'array') {
          return deserialized
      } else if (type == 'string') {
          return deserialized.split(',').map((str) => str.trim());
      } else {
          return [];
      }
    }
});
