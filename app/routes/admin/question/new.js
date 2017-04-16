import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.Object.create({
      text : "",
      answers: Array(4).fill().map((_, i) => (Ember.Object.create({text:`Answer ${i+1}`,correct:false})))
    })
  },
  actions: {
    saveQuestion(properties) {
      let newRecord = this.store.createRecord('question', properties);
      newRecord.save()
        .then(() => this.transitionTo('admin.questions'))
    },
    goBack(){
      this.transitionTo('admin.questions')
    }
  }
});
