import DS from 'ember-data';

export default DS.Model.extend({
  question_text: DS.attr('string'),
  answers: DS.attr('array')
});
