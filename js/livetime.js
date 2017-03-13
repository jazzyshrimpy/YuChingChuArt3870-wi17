var d = new Date();

var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(day[d.getDay()]);
console.log(d.getDay());

var month = []; // modern way of writing: var month =new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

console.log(day[d.getDay()]);

console.log(d.getHours());

var hour = (d.getHours());

console.log(hour);


console.log(month[d.getMonth()]);
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.toLocaleDateString());

//change default 24 hour time form to 12 hour time

if (hour === 0){
     hour = 12;
  }else if (hour >= 13){
     hour = hour - 12;
  }else if (hour >= 1 && hour <= 9 ) {
      hour = "0" + hour;
}

var n = day[d.getDay()];
var m = month[d.getMonth()];
var min = d.getMinutes();

document.getElementById("today").innerHTML =
n + ", " + d.getDate() +" " + m + " " + d.getFullYear();

document.getElementById("time").innerHTML = hour + ":" + min;
