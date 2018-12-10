
//------paper choice------
function paperchoice (){
    var plchoice = document.querySelector(".player-choice")
    plchoice.innerHTML="paper"
    document.querySelector(".paper").style.opacity="1" 
    document.querySelector(".rock").style.opacity="0.2"
    document.querySelector(".scissors").style.opacity="0.2"
    }
document.querySelector('.paper').addEventListener("click",paperchoice)

//------rock choice------
function rockchoice (){
    var plchoice = document.querySelector(".player-choice")
    plchoice.innerHTML="rock"
    document.querySelector(".rock").style.opacity="1" 
    document.querySelector(".paper").style.opacity="0.2"
    document.querySelector(".scissors").style.opacity="0.2"
    }
document.querySelector('.rock').addEventListener("click",rockchoice)

//------scissors choice------
function scissorschoice (){
    var plchoice = document.querySelector(".player-choice")
    plchoice.innerHTML="scissors"
    document.querySelector(".scissors").style.opacity="1" 
    document.querySelector(".rock").style.opacity="0.2"
    document.querySelector(".paper").style.opacity="0.2"
    }
document.querySelector('.scissors').addEventListener("click",scissorschoice)

//------random for computer choice------
function random (){
    var rand = Math.floor((Math.random() * 3) + 1);
    var comp = document.querySelector(".computer-choice")
    if (rand ==1 ){
        comp.innerHTML="paper"
    }
    else if (rand==2){
        comp.innerHTML="rock"
    }
    else {
        comp.innerHTML="scissors"
    }
    }
document.querySelector('.player').addEventListener("click",random)

//------random for computer choice------
function result (){
    var plch = document.querySelector(".player-choice").innerHTML
    var compch = document.querySelector(".computer-choice").innerHTML
    var gemeres = document.querySelector(".game-result")
    
    if (plch === compch){
        gemeres.innerHTML="3awed jitou tawla"
    }
    else if (plch === "paper" && compch === "rock"){
        gemeres.innerHTML="YOU"
    }
    else if (plch === "paper" && compch === "scissors"){
        gemeres.innerHTML="NOT YOU 'LOSER'"
    }
    else if (plch === "scissors" && compch === "rock"){
        gemeres.innerHTML="NOT YOU 'LOSER'"
    }
    else if (plch === "scissors" && compch === "paper"){
        gemeres.innerHTML="YOU"
    }
    else if (plch === "rock" && compch === "paper"){
        gemeres.innerHTML="NOT YOU 'LOSER'"
    }
    else if (plch === "rock" && compch === "scissors"){
        gemeres.innerHTML="YOU"
    }
    }
document.querySelector('.player').addEventListener("click",result)