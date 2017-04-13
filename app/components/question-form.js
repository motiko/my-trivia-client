import Ember from 'ember';

export default Ember.Component.extend({
  question: null,

  text:    Ember.computed.reads('question.text'),
  answers: Ember.computed.reads('question.answers'),

  validQuestionText: Ember.computed.notEmpty('text'),
  validAnswers: Ember.computed.map('answers.@each.text', function(answer){
      return answer.text != ""
    }),
  correctAnswers: Ember.computed.mapBy('answers', 'correct'),

  validate(){
    return (this.get('validQuestionText') &&
            this.get('validAnswers').every(v => v) &&
            this.get('correctAnswers').filter(v => v).length == 1)
  },

  actions: {
    textDidChange(value){
      this.set('text', value)
    },

    answerDidChange(index, event){
      this.set(`answers.${index}.text`, event.target.value)
      //this.get('answers').pushObject({text:"qwe",correct:true})
      this.rerender();
    },

    answerCorrectDidChange(index, event){
      Ember.set(this.get('answers')[index],'correct', event.target.checked)
    },

    save() {
      if(!this.validate()){
        return
      }
      this.sendAction('save',this.getProperties(['text', 'answers']) )
    },
    cancel(){
      this.sendAction('cancel')
    }
  }
});
