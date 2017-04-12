import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin', function(){
    this.route('questions');
    this.route('question/new');
    this.route('question/edit',);
    this.route('users');
  });

});

export default Router;
