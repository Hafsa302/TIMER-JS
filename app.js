// var element=document.getElementsByTagName("div");
// element[0].style.backgroundColor="blue"

// var element = document.getElementsByTagName("h2","p");
// // console.log(element);
// // element[1].style.color="white";

// for (var i = 0 ; i < element.length; i++){
//   element[i].style.color="white"
// }

// TIMER


var msec = document.getElementById("msec");
var sec = document.getElementById("sec");
var mins = document.getElementById("mins");
var btn = document.getElementById("btn");


var minutes = 5;
var miliSeconds = 0;
var seconds = 0;

var interval;

function startTimer(){
    interval = setInterval(startsStopWatch,10);

}

function startsStopWatch(){
 btn.disable = true;
 miliSeconds--;
 msec.innerHTML = miliSeconds;

 if(miliSeconds === -100){
    seconds--;
    sec.innerHTML = seconds;
    miliSeconds = 0;

}else if(seconds === 5){
    seconds = 0;
    minutes--;
    mins.innerHTML = minutes;

 }
}

function stopTimer(){
    clearInterval(interval);
    btn.disabled = false;

}



























