let Redlight = document.getElementById("redlg");
let Stoplg = document.getElementById("stop");

let Yellowlight = document.getElementById("yellowlg");
let Readylg = document.getElementById("ready");

let Greenlight = document.getElementById("greenlg");
let Golg = document.getElementById("go");


function stopLg(){
   Redlight.style.backgroundColor = "red";
   Yellowlight.style.backgroundColor="rgb(0, 0, 86)";
   Greenlight.style.backgroundColor="rgb(0, 0, 86)";

   Stoplg.style.backgroundColor = "red";
   Readylg.style.backgroundColor = "rgb(0, 0, 86)";
   Golg.style.backgroundColor = "rgb(0, 0, 86)";
}

function readyLg(){
   Redlight.style.backgroundColor = "rgb(0, 0, 86)";
   Yellowlight.style.backgroundColor="yellow";
   Greenlight.style.backgroundColor="rgb(0, 0, 86)";

   Stoplg.style.backgroundColor = "rgb(0, 0, 86)";
   Readylg.style.backgroundColor = "yellow";
   Golg.style.backgroundColor = "rgb(0, 0, 86)";
}

function goLg(){
   Redlight.style.backgroundColor = "rgb(0, 0, 86)";
   Yellowlight.style.backgroundColor="rgb(0, 0, 86)";
   Greenlight.style.backgroundColor="green";

   Stoplg.style.backgroundColor = "rgb(0, 0, 86)";
   Readylg.style.backgroundColor = "rgb(0, 0, 86)";
   Golg.style.backgroundColor = "green";
}