var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = [today.getHours(),":",today.getMinutes(),":",today.getSeconds()];
var dateTime = date+' '+time[0]+time[1]+time[2]+time[3]+time[4];

function showOurTime() {
  return dateTime;
}

showOurTime();

function prepUsDateTime() {
  return time[0] = time[0] - 7;
};

prepUsDateTime();

var usDateTime = date+' '+time[0]+time[1]+time[2]+time[3]+time[4];

function showUsTime() {
  return usDateTime;
}

showUsTime();