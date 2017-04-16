import Ember from 'ember';

export default Ember.Component.extend({
  question: null,

  text:    Ember.computed.reads('question.text'),
  answers: Ember.computed.reads('question.answers'),
  correct_answer_index: 0,

  validQuestionText: Ember.computed.notEmpty('text'),
  validAnswers: Ember.computed.map('answers.@each.text', function(answer){
      return answer.text != ""
    }),

  validate(){
    return (this.get('validQuestionText') &&
            this.get('validAnswers').every(v => v))
  },

  didInsertElement() {
    this._super(...arguments)
    this.$('textarea')[0].focus()
  },

  actions: {
    textDidChange(value){
      this.set('text', value)
    },

    answerDidChange(index, event){
      this.set(`answers.${index}.text`, event.target.value)
    },

    answerCorrectDidChange(index, event){
      Ember.set(this.get('answers')[index],'correct', event.target.checked)
    },

    save() {
      if(!this.validate()){
        return
      }
      this.get('answers')[this.get('correct_answer_index')].correct = true
      this.attrs.save(this.getProperties(['text', 'answers']) )
    },
    cancel(){
      this.attrs.cancel()
    }
  }
});
