import Ember from 'ember';
import PlayApi from 'my-trivia/utils/play-api'

export default Ember.Route.extend({
  game_id : null,
  model(params) {
    if(!params.game_id){
      PlayApi.newGame().then((json)=>this.transitionTo(`/play/game/${json.game_id}`))
    }else{
      return PlayApi.getQuestion(params.game_id)
    }
  },
  actions: {
    answer(question_id, answer_index) {
      PlayApi.answer(question_id, answer_index).then(() => this.refresh())
    }
  }
});
