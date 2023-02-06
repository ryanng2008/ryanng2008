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
  console.log('line 9')
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
}



