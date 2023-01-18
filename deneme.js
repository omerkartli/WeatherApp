// let date = new Date();
// let day = date.toLocaleString('en-us', {weekday: 'long'});
// console.log(day);



// var options = { day: 'numeric',month: 'short'};

// var today  = new Date();


// console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016


// const myDate = new Date()

// //myDate.setHours(myDate.getHours());
// // we are adding 10 to 0

// // Fri Aug 11 2022 01:30:00 GMT+0530
// console.log(myDate.toLocaleString());
// // prints the date in your local language
// // '8/11/2022, 1:30:00 PM' in my case

let date = new Date();
console.log(date.toLocaleString('en-US', {
    month: 'short', // numeric, 2-digit, long, short, narrow
    weekday: 'long', // long, short, narrow
    day: 'numeric', // numeric, 2-digit
    year: 'numeric', // numeric, 2-digit
    hour: 'numeric', // numeric, 2-digit
    minute: 'numeric', // numeric, 2-digit
    //second: 'numeric', // numeric, 2-digit
}));
 // Output: Tue, July 21, 2020, 10:01:14 AM

//  const API_URL = 'http://api.weatherapi.com/v1/forecast.json?q=44.34,10.99&days=7&key'
// const key = 'a6d278e70e964ac4ac464022231801'

let date1 = new Date();
console.log(date1.toLocaleString('en-US', { 
    weekday: 'long'
})+',');

console.log(date1.toLocaleString('en-US', {
    day: 'numeric'
}));

console.log(date1.toLocaleString('en-US', {
    month: 'short' 
}));

console.log(date1.toLocaleString('en-US', {
    year: 'numeric'
})+' |');
console.log(' '+date1.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric'
}));


function diff_hours(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
  
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,3);
console.log(diff_hours(dt1, dt2));


dt1 = new Date(null, null, null, 14, 10);
dt2 = new Date(null, null, null, 19, 17);
console.log(diff_hours(dt1, dt2));


// get total seconds between the times


const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(' ');
  
    let [hours, minutes] = time.split(':');
  
    if (hours === '12') {
      hours = '00';
    }
  
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
  
    return `${hours}`;
  }
  
  console.log(typeof Number(convertTime12to24('02:10 PM')));
  let a=Number(convertTime12to24('02:10 PM'))
const convertTime12to24m = (time12h) => {
    const [time, modifier] = time12h.split(' ');
  
    let [hours, minutes] = time.split(':');
  
    if (hours === '12') {
      hours = '00';
    }
  
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
  
    return `${minutes}`;
  }
  
  console.log(typeof Number(convertTime12to24m('02:10 PM')));
  let b= Number(convertTime12to24m('02:10 PM'))

var date_now = new Date(null, null, null, a+1, 10);
var date_future = new Date(null, null, null, 18, 13);

var delta = Math.abs(date_future - date_now) / 1000;

var hours = Math.floor(delta / 3600) % 24;
delta -= hours * 3600;

var minutes = Math.floor(delta / 60) % 60;
delta -= minutes * 60;
  
console.log(hours,minutes)
