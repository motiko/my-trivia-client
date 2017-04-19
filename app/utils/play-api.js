// TODO: remove this and move to ember-ajax or even ember-custom-actions

import Ember from 'ember';

export default {
  headers:null,
  init(){
    let headers = new Headers()
    headers.append("Accept", "application/vnd.api+json")
    headers.append("X-Requested-With", "XMLHttpRequest")
    this.headers = headers
  },

  newGame(){
    if(!this.headers) this.init()
    return fetch('/api/play/game/start', {headers: this.headers, method: 'GET'})
          .then(response => response.json())
  },

  getQuestion(game_id){
    if(!this.headers) this.init()
    return fetch(`/api/play/game/${game_id}/get_question`, {headers: this.headers, method: 'GET'})
          .then(response => response.json())
  }
}
