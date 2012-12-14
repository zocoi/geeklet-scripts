/*! Hung Dao | MIT license */

var age, birthdate, days, hours, minutes, now, timeLeft, timeLeftInDays, timeLeftInHours, timeLeftInYears, years;

birthdate = Date.parse("November 10, 1987");

minutes = 1000 * 60;

hours = minutes * 60;

days = hours * 24;

years = days * 365;

age = 65 * years;

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
