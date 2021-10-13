var playing = false;
var fruit = ['ananas','anor','apelsin','apple','banana','cherry','nok','limon','strawberry'];
var score;
var step;
var action;
var trialsLeft;
$(function(){
 $("#startReset").button();
 $("#startReset").click(function(){
 if(playing == true){
     
      location.reload();

   }else{
 playing = true;
 $("#startReset").html("Reset Game");
 $("#trails").show();
 $("#gameOver").hide();
 score =0;
 $("#scorevalue").html(score);
 trialsLeft = 3;
 addHarts();
 $("#gameOver").hide();
 
 startACtion();

 }


 $("#fruit1").mouseover(function(){
    score++;
    $("#scorevalue").html(score);
    $("#audio")[0].play();
   // stopAction();
   clearInterval(action);
  
    $("#fruit1").hide("explode", 500);
    
 
    setTimeout(startACtion, 800);
    
   
  // startACtion();

 });



 function addHarts(){
    $("#trails").empty();
   for(i=0; i < trialsLeft; i++){
      $("#trails").append('<img src="images/hart.jpg" class="hart">');
   }
 }

    function startACtion(){
     $("#fruit1").show();
     chooseFruit();
    $("#fruit1").css({'left': Math.round(500*Math.random()), 'top': -50} )
 
    step = 1 + Math.round(5*Math.random());
   action = setInterval(function(){
      $("#fruit1").css('top', $("#fruit1").position().top + step);
   
      if($("#fruit1").position().top > $("#playArea").height()){
         if(trialsLeft > 1){
            $("#fruit1").show();
    chooseFruit();
    $("#fruit1").css({'left': Math.round(500*Math.random()), 'top': -50} );
    step = 1 + Math.round(5*Math.random());
    trialsLeft--;
    document.getElementById("missed").play();
       
    addHarts();
 
         }else{
            $("#gameOver").show();
            $("#end")[0].play();
            stopAction();
            $("#startReset").html("Start Game");
            $("#gameOver").html('<p>Game over</p><p>your score is '+ score +'</p>');
            stopAction();
         }

      }


   }, 10);

 };
 
 function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
    $("#trails").hide();
 };

 
  function  chooseFruit(){
     $("#fruit1").attr('src' , 'images/'+ fruit[Math.round(8*Math.random())] + '.jpg');
  };

});

  










});