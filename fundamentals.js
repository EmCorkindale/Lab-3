// //Exercise 1
"" + 1 + 0 //expected outcome 10
console.log("" + 1 + 0)
"" - 1 + 0 //expected outcome -1
console.log("" - 1 + 0)
true + false //expected outcome 1
console.log(true + false)
!true //expected outcome false
console.log(!true)
6 / "3" //expected outcome converts "3" to an integer and completes equation
console.log(6 / "3")
"2" * "3" /*expected outcome error because you cannot multiply two strings -
I was incorrect. JS performs typer coercion and runs the equation by converting "2" and "3" to ingtegers */
console.log("2" * "3")
4 + 5 + "px" // expected outcome 9px - It will add the first two integers plus the string
console.log(4 + 5 + "px")
"$" + 4 + 5 // expected outcome $9 - I was incorrect. The string came first so they were all added as strings with the + serving to concatenate them rather than add them as integers.
console.log("$" + 4 + 5)
"4" - 2 // expected outcome 2 - 4 will be converted to an integer to run the equation.
console.log("4" - 2)
"4px" - 2 // expected outcome NaN
console.log("4px" - 2)
" -9 " + 5 // expected outcome " -9 5" because 5 will become a string and + will concatenate the two strings.
console.log(" -9 " + 5)
" -9 " - 5 //expected outcome NaN - incorrect because JS converts -9 to an integer and then performs the equation.
console.log(" -9 " - 5)
null + 1 //expected outcome 1 because JS will treat null as 0.
console.log(null + 1)
undefined + 1 //expected outcome NaN because undefined is not a number so the equation can't be performed.
console.log(undefined + 1)
undefined == null // equates to true because null is equivalent to undefined.
console.log(undefined == null)
undefined === null //expected outcome false because they are equavalent but not equal to one another and === is for strict comparisons.
console.log(undefined === null)
" \t \n" - 2 // oucome -2 because JS ignores the white space characters.
console.log(" \t \n" - 2)

// //Exercise 2
/* let lessThan2 = thirty < four will result in true incorrectly because the value of "30" and "4" are strings so they are compared lexicographically, 
and as "3" comes after "4" it will return as true. Fix this by using the Number property to convert the strings to numbers to then compare them. */
let three = "3"
let four = "4"
let thirty = "30"
let lessThan1 = Number(three) < Number(four)
let lessThan2 = thirty < four
console.log(lessThan2)

// //Exercise 3
if (0) console.log('#1 zero is true') //This will not print because 0 is falsy
if ("0") console.log('#2 zero is true') //This will print because the statement is truthy
if (null) console.log('null is true') //Null is falsy so this will not print
if (-1) console.log('negative is true') //This is truthy so it will print
if (1) console.log('positive is true') //This is also truthy so it will print
let a = 2,
  b = 3;
let result = `${a} + ${b} is  ${
  a + b < 10 ? "less than 10" : "greater than 10"
}`;
console.log(result);

/*Exercise 5 - Rewrite the following function using: a) function expression syntax, and b) arrow function 
syntax. Test each version to make sure they work the same*/
// const getGreeting = function(name) {
//     return 'Hello ' + name + '!'
// }
// console.log(getGreeting('John'));
const getGreeting = (name) => 'Hello ' + name + '!'
console.log(getGreeting('Alice'))


// //Exercise 6
const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
let getCatchPhrase = (person) =>
  person.numFingers <= 6
    ? "You killed my father, prepare to die!"
    : "Nice to meet you.";
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: getCatchPhrase,
};
inigo.greeting(westley);
inigo.greeting(rugen);

// //Exercise 7
const basketballGame = {
  score: 0,
  fouls: 0,
  freeThrow() {
    this.score++;
    return this; // Return the object for chaining
  },
  basket() {
    this.score += 2;
    return this; // Return the object for chaining
  },
  threePointer() {
    this.score += 3;
    return this; // Return the object for chaining
  },
  foulsCount() {
    this.fouls++;
    return this;
  },
  halfTime() {
    console.log(
      "Halftime score is " + this.score,
      ". " + "There have been " + this.fouls,
      "fouls"
    );
//     return this; // Return the object for chaining
  },
  fulltimeScore() {
    console.log(
      "Fulltime score is " + this.score,
      ". " + "There have been " + this.fouls,
      "fouls"
    );
    return this;
  },
};

// //modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .foulsCount()
  .halfTime()
  .basket()
  .foulsCount()
  .threePointer()
  .freeThrow()
  .foulsCount()
  .fulltimeScore();

// //Exercise 8
function objectProperties(city) {
  for (let property in city) console.log(`${property}: ${city[property]}`);
}
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};
const christchurch = {
  name: "Christchurch",
  population: 400_000,
  region: "Canterbury",
  founded: "31 July 1856",
  timezone: "New Zealand",
};
console.log(christchurch);

// //Exercise 9
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let moreSports = teamSports.slice();
moreSports.push("Rugby", "Soccer");
teamSports.unshift("Ballet", "Netball");
let dog1 = "Bingo";
let dog2 = dog1;
dog2 = "Ted";
let cat1 = { name: "Fluffy", breed: "Siberian" };
let cat2 = Object.assign({}, cat1);
cat2.name = "Shane";
// // the name of cat1 has changed because I modified the properties, and the properties in teamSports have changed using .shift and .push, but dog1 has not changed Changing the value of dog2 doesn't affect dog1.

console.log(teamSports, cat1, dog1);

// //Exercise 10

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = age > 16;
}
let maria = new Person("Maria", 42);
let samantha = new Person("Samantha", 33);
console.log(maria, samantha);
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = age > 16;
  }
}
let john = new PersonClass ("John", 57)
console.log(john)