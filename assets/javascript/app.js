$(document).ready(function(){
//pseudo code?
//Start button onclick funtion
//that calls the "setGame()" function that sets the game
//such as showing the questions, starting the timer and
//set each questions with onclick function.
//Also it looks like in the answer page that has inner timer that changes to next question page.
//no user input!!

//looks like There is only one html div, with one id.
//So it calls the different questions or answers to the
///use loop for the question poping up.
///in the for loop, use if then to say if the input is ==to answer or not.
//display the answer after timer runs out.
//reset button run setGame again?

var trivia={
  questions:["question1","question2","question3","quest4","quest5","quest6","quest7","quest8","quest9","quesst10"],
  choices1:["cho1","ans","cho1","cho1","ans","cho1","cho1","ans","ans","cho1"],
  choices2:["ans","cho2","ans","ans","cho2","ans","ans","cho2","cho2","ans"],
  // choices3:["cho3","cho3","cho3","cho3","cho3","cho3","cho3","cho3","cho3","cho3"],
  answers:["ans","ans","ans","ans","ans","ans","ans","ans","ans","ans"],
  pictures:["","","","","","","","","",""]
};

//1000 will  run it every 1 second


function setGame(){


  var GameThing ={
    index:null,
    score: 0,
    correct:0,
    wrong:0,

   countDown : function(){
     var count = 5; //change this to 15 later!
     var counter = setInterval(timer, 1000);
     var i = 0;
      $('#question').show();
      $('#choices1').show();
      $('#choices2').show();



     function timer(){
        count = count - 1;

        $('#question').html(trivia.questions[i]);
        $('#choices1').html(trivia.choices1[i]);
        $('#choices2').html(trivia.choices2[i]);

        if (count <= 0){
          i ++;
          clearInterval(counter);
           $('#answerPage').show();
           $('#question').hide();
           $('#choices1').hide();
           $('#choices2').hide();
           $('#choices3').hide();
           $('#choices4').hide();

           setTimeout(myFun,3*1000);
           function myFun(){
             $('#question').show();
             $('#choices1').show();
             $('#choices2').show();
             $('#question').html(trivia.questions[i]);
             $('#choices1').html(trivia.choices1[i]);
             $('#choices2').html(trivia.choices2[i]);
             count = 5; //change this to 15 later!
             counter = setInterval(timer, 1000);
             $('#timer').html(count+" secs    ");


           }



           //wait 5sec till next question
        }
        $('#timer').html(count+" secs");
      }

   },

  // questions : function(){
  //   for (var i = 0; i < trivia.questions.length; i++){
  //   $('#question').show();
  //   $('#question').html(trivia.questions[i]);
  //   $('#choices1').show();
  //   $('#choices2').show();
  //   $('#choices1').html(trivia.choices1[i]);
  //   $('#choices2').html(trivia.choices2[i]);
  //   // console.log(trivia.questions[i]);
  //
  //   }
  // },

  //  Questions: function(){
  //    for (var i = 0; i < trivial.questions.length; i++){
  //      $('#question').html(trivial.questions[i]);
  //      $('#')
  //    }
  //  },




}//GameThing ends here
return GameThing;






  //hopfully this will set all the games and hopefully
  //it will be usefull for the restart button.
  // whenClicked : function(){
  //   pick a indext of clicked.
  //
  //   for(var i = 0; i < ddd.length; i ++){
  //     if( the user input === answer){
  //       show correct page.
  //       wait
  //     }else {
  //       show worng page
  //     }
  //   }
  //
  // },


  // timer: function(){
  //   stopwatch.start
  //
  // },








}//setGame ends here

$('#start-btn').click(function(){
  var triviaThing = setGame();
  triviaThing.countDown();
  // triviaThing.questions();

  $('#timeLeft').show();
  $('#timer').show();
  $('#intro').hide();
})


//My reset button.
// $('#reset').click(function(){
//   var triviaThing = setGame();
//
//   $('#reset').hide();
//
// })

})//last one.
