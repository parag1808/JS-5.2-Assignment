var todayDate = new Date();

var currentHours = todayDate.getHours();
var currentMinutes = todayDate.getMinutes();

if(currentMinutes < 10){
	currentMinutes = "0" + currentMinutes;
}

console.log(currentHours + " hours" + " : " + currentMinutes + " mins");


