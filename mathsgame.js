var playing = false;
var score ;
var action;
var timeremaining;
var correctAnswer, symbolValue;
var wrongCounter;


//Choose math symbol
    //if symbol clicked then start the game


    document.getElementById("symbol1").onclick =
        function(){
            symbolValue = "+";
            console.log(symbolValue);
            hide("games");
            hide("symbolsInstruction");
            document.getElementById("gameMode").innerHTML = "Addition";
            show("gameMode");
            }
    
    document.getElementById("symbol2").onclick =
        function(){
            symbolValue = "-";
            console.log(symbolValue);
            hide("games");
            hide("symbolsInstruction");
            document.getElementById("gameMode").innerHTML = "Subtraction";
            show("gameMode");
            }
    
    document.getElementById("symbol3").onclick =
        function(){
            symbolValue = "*";
            console.log(symbolValue);
            hide("games");
            hide("symbolsInstruction");
            document.getElementById("gameMode").innerHTML = "Multiplication";
            show("gameMode");
            }
    
    document.getElementById("symbol4").onclick =
        function(){
            symbolValue = "/";
            console.log(symbolValue);
            hide("games");
            hide("symbolsInstruction");
            document.getElementById("gameMode").innerHTML = "Division";
            show("gameMode");
            }
        

//if we click on the start/reset button
    document.getElementById("startreset").onclick = 
        function(){
            //if playing
            if(playing == true){ 
                location.reload(); //reloading page
            }else{ //if not playing
                //set playing to true
                playing = true;
                 //set score to 0
                score = 0;
                //show countdown box//
                document.getElementById("scoreValue").innerHTML = score;    
               
               /* show remaining time*/ 
                show("timeremaining");
                timeremaining = 60;
                
                hide("gameover");
                document.getElementById("timeremainingvalue").innerHTML=timeremaining;
                //change button to reset
                document.getElementById("startreset").innerHTML = "Reset Game";
                //start Countdown
                startCountdown();
                 
                //generate a new Q&A
                generateQA();
        }

    }
    
    document.getElementById("back").onclick =
        function(){
        location.reload();
    }
    
    //clicking on an answer box
    
    for(var i=1; i<5;i++){
        document.getElementById("box"+i).onclick = 
    function(){
        //check if we are playing
        if(playing == true){//yes
            if(this.innerHTML == correctAnswer){
                //correct answer
                //increase score by 1
                score++;
        document.getElementById("scoreValue").innerHTML = score;
                //hide the wrong box
                
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                }, 1000);
                //generate Q&A
                generateQA();
            }else{
             //wrong answer
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                }, 1000);
            }
        }
    }
        
    }
    //functions
    
    //start counter
    
    function startCountdown(){
        action = setInterval(function(){
            timeremaining -= 1;
            document.getElementById("timeremainingvalue").innerHTML = timeremaining;
            if(timeremaining == 0){   //game over
                stopCountdown();      //stop countdown;
                show("gameover");
                document.getElementById("gameover").innerHTML = "<p>GAME OVER!</p> <p>In 60 sec, <br />you scored " + score + ".</p>";
                hide("timeremaining");
                hide("correct");
                hide("wrong");
                playing = false;
                document.getElementById("startreset").innerHTML = "Start Game";
            }
            },1000);
    }
        

//stop counter
    function stopCountdown(){
        clearInterval(action);
    }
//hide element

    function hide(Id){
        document.getElementById(Id).style.display ="none";
    }

//show element
    function show(Id){
        document.getElementById(Id).style.display ="block";
    }

//generate Q&A
    function generateQA(Id){
       
        var num1 = 3 + Math.floor(Math.random() * 9);
        var num2 = 3 + Math.floor(Math.random() * 9);
        
        if(symbolValue === "+"){
            correctAnswer = num1 + num2;

        
        document.getElementById("question").innerHTML = num1 + " + " + num2;
        
        
            var correctPosition = 1 + Math.floor(Math.random() * 3);
            
            document.getElementById("box" + correctPosition).innerHTML = correctAnswer; //fill one box with correct answer
        
            var answers = [correctAnswer];
        
        
           //fill other boxes with wrong answer;
            for(var i=1; i<5; i++) {
                if(i !== correctPosition){    
                    do{
                        var wrongAnswer;
                        wrongAnswer = (3 + Math.floor(Math.random() * 9)) + (3 + Math.floor(Math.random() * 9)) ; //wrong answer
                        
                    }while(answers.indexOf(wrongAnswer)>-1)
                    document.getElementById("box" + i).innerHTML = wrongAnswer;
                    answers.push(wrongAnswer);
                }
            }
        }else if(symbolValue === "*"){
        
        
        correctAnswer = num1 * num2;

        
        document.getElementById("question").innerHTML = num1 + " &times " + num2;
        
        
            var correctPosition = 1 + Math.floor(Math.random() * 3);
            
            document.getElementById("box" + correctPosition).innerHTML = correctAnswer; //fill one box with correct answer
        
            var answers = [correctAnswer];
        
        
           //fill other boxes with wrong answer;
            for(var i=1; i<5; i++) {
                if(i !== correctPosition){    
                    do{
                        var wrongAnswer;
                        wrongAnswer = (3 + Math.floor(Math.random() * 9)) * (3 + Math.floor(Math.random() * 9)) ; //wrong answer
                        
                    }while(answers.indexOf(wrongAnswer)>-1)
                    document.getElementById("box" + i).innerHTML = wrongAnswer;
                    answers.push(wrongAnswer);
                }
            }
        }else if(symbolValue === "-"){
            
            correctAnswer = num1 - num2;

        
        document.getElementById("question").innerHTML = num1 + " - " + num2;
        
        
            var correctPosition = 1 + Math.floor(Math.random() * 3);
            
            document.getElementById("box" + correctPosition).innerHTML = correctAnswer; //fill one box with correct answer
        
            var answers = [correctAnswer];
        
        
           //fill other boxes with wrong answer;
            for(var i=1; i<5; i++) {
                if(i !== correctPosition){    
                    do{
                        var wrongAnswer;
                        wrongAnswer = (3 + Math.floor(Math.random() * 9)) - (3 + Math.floor(Math.random() * 9)) ; //wrong answer
                        
                    }while(answers.indexOf(wrongAnswer)>-1)
                    document.getElementById("box" + i).innerHTML = wrongAnswer;
                    answers.push(wrongAnswer);
                }
            }
        }else{
            correctAnswer = num1 / num2;
            
            correctAnswer = round(correctAnswer,2);
        
        document.getElementById("question").innerHTML = num1 + " &divide " + num2;
        
        
            var correctPosition = 1 + Math.floor(Math.random() * 3);
            
            document.getElementById("box" + correctPosition).innerHTML = correctAnswer; //fill one box with correct answer
        
            var answers = [correctAnswer];
        
        
           //fill other boxes with wrong answer;
            for(var i=1; i<5; i++) {
                if(i !== correctPosition){    
                    do{
                        var wrongAnswer;
                        wrongAnswer = (3 + Math.floor(Math.random() * 9)) / (3 + Math.floor(Math.random() * 9)) ; //wrong answer
                        wrongAnswer = round(wrongAnswer,2);
                        
                    }while(answers.indexOf(wrongAnswer)>-1)
                    document.getElementById("box" + i).innerHTML = wrongAnswer;
                    answers.push(wrongAnswer);
                }
            }
        }
           
  }

function round(x, digits){
  return parseFloat(x.toFixed(digits))
}