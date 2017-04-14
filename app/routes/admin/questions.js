import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('question');
  },
  actions: {
    transition(route) {
      this.transitionTo(route);
    }
  }
});
