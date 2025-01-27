// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and set it to 'Dane' as a value.
// We check if name is an exact match to 'Mary'.
// If true, we console.log 'Hi, Mary' and if else we console.log 'How do you do?'.
// It is false so we console.log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable with the name secret and have left the value blank, and then we created another value with the name code and set a number of 123.
// We check if code is an exact match to 123, it is so var 'secret' will have a value of 'super'.
// We check if code is greater than 250, it isn't so var 'secret' will now have a value of 'super'.
// We console.log var 'secret' which will output 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create a var nameed 'isStudent' and set a boolean of true, We create a var named 'age' and set a number of 34, and we create a var named 'zip' and set a number of 55047.
// We check if 'isStudent' is an exact match to the boolean true and that 'zip' is greater than 80000. 'isStudent' is true but 'zip' is less than 80000 so we ignore the preceeding console.log.
// We check if 'isStudent' is an exact match to the boolean false or that 'age' is less than 30. Neither is true so we ignore the preceeding console.log.
// We check if 'isStudent' is an exact match to the boolean true. It is so we console.log 'Welcome to Prime!'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// Fix - colorOne should be = to blue and colorTwo should be = to red. They asked for both colorOne and colorTwo to be set to purple. We should add colorTwo = 'purple'; under colorOne = 'purple';

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// Fix -- We want to see if the temp is higher than 39 and if time is greater or equal to 4. So instead of using || (or), we should instead use && (and).

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// Fix -- We need to swap the console.log('enter') to be the first option in the if statement. It is true so it will output enter.

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

