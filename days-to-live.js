var age, birthdate, days, hours, minutes, now, timeLeft, timeLeftInDays, timeLeftInHours, timeLeftInYears, years;

birthdate = Date.parse("November 10, 1987");

minutes = 1000 * 60;

hours = minutes * 60;

days = hours * 24;

years = days * 365;

age = 65 * years;

now = new Date().getTime();

timeLeft = birthdate + years - now;

timeLeftInHours = Math.round(timeLeft / hours);

timeLeftInDays = Math.round(timeLeft / days);

timeLeftInYears = Math.round(timeLeft / years);

console.log("Hours left to live: ", timeLeftInHours);

console.log("Days left to live: ", timeLeftInDays);

console.log("Years left to live: ", timeLeftInYears);
