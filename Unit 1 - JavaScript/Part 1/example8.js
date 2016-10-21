'use strict';

var twoHoursAgo = new Date(Date.now() - (2*60*60*1000));
console.log(twoHoursAgo.toString());

var twoHoursAgo2 = new Date();
twoHoursAgo2.setHours(twoHoursAgo2.getHours() -2);
console.log(twoHoursAgo2.toString());

