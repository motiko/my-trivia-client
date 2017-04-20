import Ember from 'ember';


export default Ember.Route.extend({
  gamePlay: Ember.inject.service(),
  game_id : null,
  model(params) {
    if(!params.game_id){
      debugger
      this.get('gamePlay').newGame().then(json => this.transitionTo(`/play/game/${json.game_id}`))
    }else{
      return this.get('gamePlay').getQuestion(params.game_id)
    }
  },
  actions: {
    answer(question_id, answer_index) {
      this.get('gamePlay').answer(question_id, answer_index).then(() => this.refresh())
    }
  }
});
