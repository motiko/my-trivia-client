import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let newRecord = this.store.createRecord('question');
    newRecord.set('answers', Array(4).fill().map(() => (Ember.Object.create({text:"",correct:false}))))
    return newRecord
  },
  actions: {
    save(record) {
      record.save()
        .then(() => this.transitionTo('admin.questions'))
    },

    willTransition() {
      this._super(...arguments);
      const record = this.controller.get('model')
      record.rollbackAttributes()
    }
  }
});
