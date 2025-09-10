#### 1) What is the difference between var, let, and const?
ANS: 
var=> It is a old keyword that can re-declare and can re-assign variable.
let=> It is a block scoped function that can re-assign value but cannot re-declare.
const=> It is also a block scoped but constant that can not be re-assign. Must be given value when declared.


#### 2) What is the difference between map(), forEach(), and filter()? 
ANS:
map() => It works on each element and return new an array.
forEach() => It is used for loop but it doesn't return.
filter() => It check the condition of each element. If the condition is true then declare in new an array.
 

#### 3) What are arrow functions in ES6?
ANS: It is the shortcut and modern way to create function in ES6. It is short and clean syntax. It doesn't need to write function in code.


#### 4) How does destructuring assignment work in ES6?
ANS: Destructuring works for find out the specific value from an array or object
Array syntax: const [var1, var2, var3, ...rest] = arrayName;
Object syntax: const { key1, key2, key3, ...rest } = objectName;


#### 5) Explain template literals in ES6. How are they different from string concatenation?
ANS: 
Template literals is a new feature in ES6 which is use backticks (`) to create multi-line string. We can get dynamically variable, calculation and function by using ${}

String concatenation is old one in JS. it needs (\n) for multi-line and (+)operator for getting variables. It's readability is harder than template literals.