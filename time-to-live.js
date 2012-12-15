/*! Hung Dao | MIT license 
*
* node time-to-live.js "November 10, 1987" 65
*/

var date, estimatedAge, age, birthdate, days, hours, minutes, now, timeLeft, timeLeftInDays, timeLeftInHours, timeLeftInYears, years;

if(process && process.argv) {
  date = process.argv[2]
  estimatedAge = process.argv[3]
}

if (date == null || typeof date == "undefined") {
  date = "November 10, 1987"
}

if (estimatedAge == null || typeof estimatedAge == "undefined") {
  estimatedAge = 65
}

birthdate = Date.parse(date);

minutes = 1000 * 60;

hours = minutes * 60;

days = hours * 24;

years = days * 365;

age = estimatedAge * years;

now = Date.now();

timeLeft = birthdate + age - now;

// timeLeftInMinutes = Math.round(timeLeft / minutes);
// 
// timeLeftInHours = Math.round(timeLeft / hours);

timeLeftInDays = Math.round(timeLeft / days);

// timeLeftInYears = Math.round(timeLeft / years);

// Minus the time you sleep
timeLeftInDaysBeingAwake = Math.round(timeLeftInDays * (1 - 8/24))

// console.log("Minutes left to live: \n", timeLeftInMinutes);

// console.log("Hours left to live: ", timeLeftInHours);

console.log("Days left to live: \n", timeLeftInDays);
console.log("Actual days left to live: \n", timeLeftInDaysBeingAwake);

// console.log("Years left to live: ", timeLeftInYears);
