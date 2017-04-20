// TODO: move to ember-ajax or ember-network or even ember-custom-actions

import Ember from 'ember';

export default Ember.Service.extend({

  headers:null,

  init(){
    this._super(...arguments);
    let headers = new Headers()
    headers.append("Accept", "application/vnd.api+json")
    headers.append("X-Requested-With", "XMLHttpRequest")
    this.set('headers', new Headers())
  },

  newGame(){
    return fetch('/api/play/game/start', {headers: this.headers, method: 'GET'})
          .then(response => response.json())
  },

  answer(question_id, answer_index){
    return fetch(`/api/play/game/answer/${question_id}/${answer_index}`, {headers: this.headers, method: 'GET'})
          .then(response => response.json())
  },

  getQuestion(game_id){
    return fetch(`/api/play/game/${game_id}/get_question`, {headers: this.headers, method: 'GET'})
          .then(response => response.json())
  }
});
