import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin', function(){
    this.route('questions')
    this.route('question/new')
    this.route('question/edit')
    this.route('players')
    this.route('player/new')
    this.route('player/edit')
    this.route('avatars')
    this.route('avatar/new')
    this.route('avatar/edit')
  })
  this.route('play', function(){
    this.route('game', { path: ':game_id' })
  })
});

export default Router;
