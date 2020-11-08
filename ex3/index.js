const moment = require("moment");

const today = moment().format("dddd, MMMM Do YYYY");
console.log(today);

const yearsAgo = moment().diff("1976-11-26", "years");

console.log(`${yearsAgo} years ago`);
