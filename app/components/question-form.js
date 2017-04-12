import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      this.get('question').save()
        .then(() => this.transitionTo('admin.questions'));
    },
    cancel(){
      this.transitionTo('admin.questions')
      //this.get('question').rollbackAttributes()
    }
  }
});
