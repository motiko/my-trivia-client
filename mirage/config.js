export default function() {

  this.namespace = '/api';

  this.get('/questions', function() {
     return {
       data: [
           {
             "type": "questions",
             "id": 100,
             "attributes":{
               "text": "What is the capital of France?",
               answers: [
                 { text:"Rome", correct: false} ,
                 { text:"London", correct: false},
                 { text:"Paris", correct: true},
                 { text:"Springfield", correct: false}]
             }

           },
           {
             "type": "questions",
             "id": 101,
             "attributes":{
               "text": "What is water checmical compound?",
               answers: [
                 { text:"C3", correct: false} ,
                 { text:"H20", correct: false},
                 { text:"Li4O", correct: true},
                 { text:"N8", correct: false}]
             }
           }
         ]
     }
   })
  this.post('/questions')
  this.del('/questions/:id')
  this.patch('/questions/:id');
}
