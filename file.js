let times = new Array();
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

function sayh(name) {
  alert('hello ' + name);
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