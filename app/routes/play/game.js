import Ember from 'ember';


export default Ember.Route.extend({
  gamePlay: Ember.inject.service(),
  beforeModel(transition) {
    if(transition.params[this.fullRouteName].game_id === "game"){
      return this.get('gamePlay').newGame().then(model => {
        this.transitionTo(`play.game`, model.game_id)
      })
    }
  },
  model(params) {
    return this.get('gamePlay').getQuestion(params.game_id)
  },
  actions: {
    answer(question_id, answer_index) {
      this.get('gamePlay').answer(question_id, answer_index)
            .then(() => this.refresh())
    }
  }
});
