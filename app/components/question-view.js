import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(){
      this.get('question').destroyRecord()
    }
  }
});
