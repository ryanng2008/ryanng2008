let times = [];
let counter = 0;




function getTimed() {
  let unixtime = new Date().getTime() / 1000;
  times.push(unixtime)
  document.getElementById("paragraph1").innerHTML = "Current Epoch Timestamp: " + unixtime;
  let difference = isNaN(unixtime - times[times.length-2]) ? 0 : (unixtime - times[times.length-2]);
  document.getElementById("abc").innerHTML = "Time between clicks: " + difference.toFixed(6);
  document.getElementById("defg").innerText += ++counter;
  document.getElementById("ghijk").innerText = "REAL number of clicks: " + counter;
  return difference.toFixed(3);
}

function changeBackgroundColor() {
  document.body.style.backgroundColor =  '${rgb(200,150,100)}'
  document.body.style.backgroundColor = 'rgb(' + Math.floor(Math.random()*255) + ', ' + Math.floor(Math.random()*255) + ', ' + Math.floor(Math.random()*255) + ')';
}

let nameInput = document.getElementById("name-input");
let submitButton = document.getElementById("submit-name");
let greeting = document.getElementById("greeting");

submitButton.addEventListener("click", function() {
  let name = nameInput.value;
  greeting.innerHTML = `Hi ${name}`;
});


let testLength = 5;
let testLengthMS = testLength*1000;
let startTestButton = document.getElementById("start-test");
let clickerButton = document.getElementById("clicker-button"); 
let lastClick = new Date().getTime();
let currentClick;
let clicks = [];
let bpmLabel = document.getElementById("bpm-label");

const bpmTest = () => {
  startTestButton.disabled = true;
  console.log('test start');
  startTestButton.innerHTML = 'test in progress';
  clickerButton.addEventListener('click', registerClick);
  setTimeout(function () {
    clickerButton.removeEventListener('click', registerClick);
    clickerButton.disabled = true;
    calculateBpm();
  }, testLengthMS);

}

let clickedYet = false;

const registerClick = () => {
  currentClick = new Date().getTime();
  difference = currentClick - lastClick; 
  if(clickedYet) {
    clicks.push(difference); 
  } else {
    clickedYet = true;
  }
  lastClick = currentClick;
  // console.log('clicked');
}

const calculateBpm = () => {

  let totalDifference = 0;
  for (let i = 0; i < clicks.length; i++) {
    totalDifference += clicks[i];
  }
  let averageDifference = totalDifference / clicks.length;
  let bpm = 60000 / averageDifference;
  console.log(bpm);
  bpmLabel.innerHTML = `BPM: ${Math.round((bpm + Number.EPSILON) * 1000) / 1000}`;
  console.log(bpmLabel);
  console.log(bpmLabel.innerHTML);
  reset();
}

const reset = () => {
  startTestButton.disabled = false;
  clickerButton.disabled = false;
  clicks = [];
  lastClick = new Date().getTime();
  clickedYet = false;
  startTestButton.innerHTML = 'redo bpm test';
}





/*console.log(eval('4+5'));
console.log(eval("christmas".toUpperCase));

let Xmas23 = new Date("December 25, 2023 13:30:00");
let Xmas23Nums = new Date(12, 25, 23, 13, 30, 0);

const today = new Date();
const endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
endYear.setFullYear(today.getFullYear()); // Set year to this year
const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft); //returns days left in the year




(function(){
    "use strict";

    function greet(name) {
        alert('hi ${name}');
    }

    greet('John');
    

})
function checkData() {
    if (document.form1.threeChar.value.length === 3) {
      return true;
    } else {
      alert(`Enter exactly three characters. ${document.form1.threeChar.value} is not valid.`);
      return false;
    }
  }
{ // just groups declarations, definitions, statements
    let t = 0;
    let u = t + 1;
    let v = u * t;
}*/
