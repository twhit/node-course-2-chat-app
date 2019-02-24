var moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

var createdAt = 1234;
var date = moment(createdAt);
//date.add(3, 'month');
console.log(date.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
