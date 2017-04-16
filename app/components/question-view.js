import Ember from 'ember';

export default Ember.Component.extend({
  show: true,
  animationDuration: 300,
  actions: {
    delete(){
      this.set('show', false)
      Ember.run.later(this, function() {
        this.get('question').destroyRecord()
      }, this.get('animationDuration'))
    }
  }
});
