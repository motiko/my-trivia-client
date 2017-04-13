import Ember from 'ember';

export function add(params/*, hash*/) {
  return new Ember.String.htmlSafe( parseFloat( params[0]) + parseFloat(params[1]) );
}

export default Ember.Helper.helper(add);
