// Variable set it equal to age as a number
let myAge = 33;

// The value will change
let earlyYears = 2;
earlyYears *= 10.5;

// myAge substract it by 2
let laterYears = myAge -2;
// laterYears multiplied by 4
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears
const myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

// Write your name as a string in a variable names myName and convert it to lower case using the built-in method .toLowerCase()
const myName = "Adriana";
console.log(myName.toLowerCase());


/*
Write a console.log statement that displays your name and age in dog years. Use string interpolation to display the value in the following sentence:

My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years.

Replace NAME with myName, HUMAN AGE with myAge, and DOG AGE with myAgeInDogYears in the sentence above.
*/
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

/*8 human years = 45 dog years.

22 human years = 101 dog years.

You can multiply a variable x by 10 using either approach below:
x *= 10;
 or x = * 10;
*/

myAge = 20;
laterYears = myAge - 2;
laterYears *= 4;
const AgeInDogYears = earlyYears + laterYears;
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${AgeInDogYears} years old in dog years.`);