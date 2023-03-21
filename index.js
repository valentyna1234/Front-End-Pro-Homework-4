//Getting values ​​from the user (in hours)
a = Number(prompt( 'Enter the number of hours which you want to convert to seconds, please.' ));
console.log(a);

//Сount how many seconds there are in this number of hours
let b = a*60*60;
console.log(b);

//Output a variable with the number of seconds to the user
alert('This number of hours contains ' + b + ' seconds.');