'use strict';

// We will focus more on modern JS. we'll go deeper into Built-in DS like object, maps, and arrays.
// We will talk about modern ES6 operators such as Destructuring and optional chaining. And How to works with string.

// Data needed for a later exercise which is string Method practice.
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


// ==================================================== Destructuring Arrays:- =========================================================
/*
// Destructuring is an ES6 feature. It's Basically a way of Unpacking values from an array or an object into separate variables.

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //'this' represents to an object which calls this method.
  },
};


const arr = [2,3,4];
// Retriving Data from array without destructing:-
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);


// Retrieving data using destructing:-
const [x, y, z] = arr; //imp: It's just a Destructing Assignment. //imp: Whenever Js see [] left side of assignment oprtr it knows that it should do destructuring. Don't forget to declare the variable using const or let or var. After destructing, the original array is not affected.           const is the data type of x,y and z.
console.log(x, y, z);
console.log(arr);


const [first, second] = restaurant.categories;
console.log(first, second); //Italian Pizzeria
let [main, , secondary] = restaurant.categories;  //imp: skipping 2nd element. Like this, we don't have to create variables for all the stuff that we might not even need.
console.log(main, secondary); //Italian Vegetarian


// Swapping of variables (Switching variables):-
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);


//imp: Mutating variables when we destructuring an array:-
// Swapping using Destructing Assignment:-
[main, secondary] = [secondary, main]; //We are not using let or const here b'coz:- we are simply reassigning the values of the two variable. //imp: It's Similar, As we do in python. e.g:- x,y = y,x ==> tuple is used behind the scene in python.
console.log(main, secondary);


// Receive 2 return values from a function.
console.log(restaurant.order(2,0)); //This function returns an array.
const [starter, mainCourse] = restaurant.order(2,0); //imp: This function returns an array and then we can immediately destruct the result into different variables.
console.log(starter, mainCourse);


// Destructuring of nested array :-
const nested = [2, 4, [5, 6]];
const [i, ,j] = nested;
console.log(i, j); //o/p:- 2 [5,6]

//imp: Doing Destructuring inside destructuring(Nested Destructuring):- When array is nested.
const [i1, ,[j1, j2]] = nested;
console.log(i1, j1, j2);


//imp: Another feature of destructuring(setting Default values for the variables when are extracting them):- 
//We can also set the default values for the variables when we are extracting them. It's very useful in the case that we don't know the length of the array. It can happen that, if we have an array that is shorter than we might think, then we might try to unpack the array in position that don't even exists. Therefore, In this situation We will assign some default values to a variable.

const [p, q, r] = [8, 9]; //Just pretend that, we don't know the array length.
console.log(p, q, r); //8 9 undefined
// trying to read as element at position no. 2 of this array but it only has elements at position 0 & 1. Therefore, we get undefined.

const [l=1, m=1, n=1] = [8, 9]; //setting default values to the variables.
console.log(l, m, n); //8 9 1
//imp: NOTE:-This sometime becomes useful. e.g:- When we get data from an API.
*/



// ============================================= Destructuring Objects:- ==================================================================
/*
const restaurant = {
  name: 'Classico Italiano', //todo: What is the data-type of name property, Is it a string ? How can i access the property name of an object ?
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //'this' represents to an object which calls this method.
  },

  openingHours: { //It's an object of objects.
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  
  obj:'Hello', //@me:-

  // orderDelivery: function(obj){ //This orderDelivery function takes an object and destructure them.(as per need)
  //   console.log(obj);
  //   //We can destructure in the functional argument.
  // },  
  orderDelivery: function({starterIndex=1, mainIndex=0, time='20:00', address}){ //This orderDelivery function takes an object and destructure them.
    //Also give the some default values to this variables which are destructured of an object.
    console.log(obj);  //imp: NOTE:- the Output. //todo: How this obj object calls even inside this function ? //imp: ig, Scope chain concept us used. firstly, it is not found in the orderDelivery() then it goes to an objec which calls this function and there it doesn't got. then, goes to the global area(window object).//todo: Why it doesn't gives 'Hello' as an output ? 
    console.log(`Order received! ${this.starterMenu[starterIndex]}  and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    //ig, same thing happens in python. when we have done the practical of pyplot and numpy and pandas(in functions).
  },

};


//imp: To Destructure objects, we will use the curly braces {}.And we have to provide the variable names that exactly match to the property name that we want to retrieve from the objects.
//imp: Since in an Object, the Order of elements doesnot matter, We don't need to manualy skip elements like we did in an array. ig, it's b'coz we have provide the name of the elements of an object.
const {name, openingHours, categories} = restaurant; //Just like arrays, But here we have to use curly braces {} and name of the properties of the object.
console.log(name); 
console.log(openingHours);
console.log(categories);
// This is an Extremely useful addition to the language. Specically when we deal with the resolved of an API call, which basically means to get data from another web application like weatherdata or dataAboutMovies or else. //imp: This data usually comes in the form of objects basically.


//imp: Q. What if we wanted the variable names to be different from the property names of an object ?
// Ans:- It is very helpful when dealing with third party data.
const {  //We still need to reference the properties names like we did before. Otherwise JS has no no way of knowing  What we actually want.
  name: restaurantName, //Giving new variable name to the 'name' property of restaurant object. Similarly, for other property names.
  openingHours: hours, 
  categories: tags,
} = restaurant; //Here, restaurantName is the new name of the 'name' property of an object. similary for 'hours', and 'tags'.
console.log(restaurantName, hours, tags);


// imp: Another useful feature, for when we are dealing with 3rd party data like that. so like an object that we get from somewhere else.for e.g:- An API call. It can be really useful to have Deafult values for the case that we trying to read the property that does not exist on the object. so, usually then we get the undefined.
//for e.g:-
console.log(restaurant.menu); //undefined :- b'coz, restaurant object does not have the property called 'menu'.

//imp: Default values in object destructuring:-
const {
  myName = 'Brijesh', //default value given as 'Brijesh'
  menu = [], //imp: default value is given. To give the default value, we have to write 'assignment' oprtr and then give the value.
  starterMenu: starters = []
} = restaurant;
console.log(myName, menu, starters); //Brijesh [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']   
//==> As, restaurant doesnot have the myName & menu property so default value is assigned to it.


//imp: Mutating variables while destructuring objects:- As we have done in an arrays.
let f = 111;
let g = 999;
console.log(f, g);

// Now, we want to destructure this obj object
const obj = {f:23, g:7, c:14};
// let {f, g} = obj; //Wrong! --> B'coz:- we have already f & g variable which is declared. It will create again this variable.
// {f, g} = obj; //wrong! ---> Syntax Error:- b'coz when we start a line with curly brace then JS expects a code block. And Since, We cannot assign anything to a code block like we did here with equal sign, then we get this Error:- unexpected token '='

// This is the solution of above problem :- //imp: Wrap all this thing in paranthesis.
({f, g} = obj); //@me:- instead of creating again variable, we are mutating value of variable to the value of properties of an object. //NOTE:- variable name which are mutating is same as the property name of an object.
console.log(f, g);


//imp: Nested Objects:- just like we did with nested arrays.
const {fri} = openingHours;
console.log(fri); //{open: 11, close: 23}
//imp: syntax:=>  object : {then exact property name of that inner object} 
const {fri:{open, close}} = openingHours;
console.log(open, close); //11 23

// Now, assigning different variable name instead of exact property name of an inner object
const {fri:{open: o, close: cl}} = openingHours;
console.log(o,cl);

// Now, assigning default values and as well as different names of an inner object.
const {fri:{open: d, close: e, noProperty: s ='Hello'}} = openingHours;
console.log(d,e,s); //11 23 'Hello'


//imp: Practical Application of this destructuring :-⭐🌟🌟✨✨✨⭐⭐
// Many times, in JS we have functions with a lot of parameters and then it can be hard to know the order of parameters for someone that is using this function. so, Instead of defining the parameters manually, we can just pass an object into the function as an argument And the function will then immediately destructure that object.
restaurant.orderDelivery({ //object is passed as a parameter into this orderDelivery() function and this function will immediately destructure the object.
  time: '22:30',
  address: 'via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'via del sole, 21',
  starterIndex: 2, 
}); //Rest of all will be taken from the default values that we set in the functions for destructuring.
*/


//================================================== Spread Operator:- ================================================================
/*
const restaurant = {
  name: 'Classico Italiano', //todo: What is the data-type of name property, Is it a string ? How can i access the property name of an object ?
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //'this' represents to an object which calls this method.
  },

  openingHours: { //It's an object of objects.
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  
  orderDelivery: function({starterIndex=1, mainIndex=0, time='20:00', address}){ 
    console.log(`Order received! ${this.starterMenu[starterIndex]}  and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    //ig, same thing happens in python. when we have done the practical of pyplot and numpy and pandas(in functions).
  },

  orderPasta: function(ing1, ing2, ing3 ){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

};

//imp: spread oprtr:- We use this operator basically to expand an array into all its elements. So Basically, unpacking all the array elements at once.
const arr = [7,8,9];
// Now, we want to create a new array based on this array but with some new elements at the beginning. How we will do that ?
const badNewArr = [1,2, arr[0], arr[1], arr[2]]; 
console.log(badNewArr); //[1, 2, 7, 8, 9]
// This is a common operation that we need to do. so, since in ES6 we can do it in a much better way using spread operator.

//imp: using spread operator extending the size of an array:- 
const newArr = [1,2, ...arr]; //NOTE:- ...arr => Basically, expands this array into all of it's individual elements. //Don't forget to write 3-dot's before arrayName.
console.log(newArr); //[1, 2, 7, 8, 9]
//imp: What spread oprtr does ?  Ans:- Take all the values out of this 'arr' array and then write them individually as if we wrote 7,8,9 manually.


const badNewArr1 = [1,2, arr];
console.log(badNewArr1); //[1, 2, Array(3)]

//imp: Another usecase of spread operator:-  When we pass arguments into function.
console.log(...newArr); //1 2 7 8 9 //imp: Whenever we need the elements of an array individually then we can use the spread operator.That is useful when we write an array and when we need to pass multiple elements into a function. Below is the e.g:-
console.log(1,2,7,8,9); //1 2 7 8 9 //Here, in this log() function we have pass the multiple value. This happens due to spread operator.


// Example:- Here, we are creating completely new array. We are not manuplating resturant.main menu array.
const newMenu = [...restaurant.mainMenu, 'Gnocci']; //expanding this restaurant.mainMenu array and adding another element to it.
console.log(newMenu); //['Pizza', 'Pasta', 'Risotto', 'Gnocci']

//imp: spread oprtr is actually a bit similar to destructuring b'coz:- It also helps us get elements out of the arrays.
// Big Difference between spread oprtr & Destructuring:- Spread oprtr takes the all elements from the array and it also doesn't create new variables. As a consequence, we can only use spread oprtr in the places where we would otherwise write values separate by commas.


//imp:
// Two important usecases of the spread oprtr:-   1. To create shallow copies of the arrays.    2. To merge two arrays together.
// Copy array:- 
const mainMenuCopy = [...restaurant.mainMenu]; //We just create a shallow copy of this arrays.
// imp: @me In Shallow copy, If any element of an array or an object is pointing to another object then, After doing shallow copy that will also accessible from the new array. We have already studied about Shallow and Deep Copy in Previous lecture.

// Join 2 or more arrays:-
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);


// spread oprtr works on arrays But, that's not an entirely true. B'coz:- Actually, the spread oprtr works on all iteratables. 
// There are different types of iteratables in Js. Iteratables are things like arrays, strings, maps or sets, BUT NOT on objects.
// Most of the built-in DS in JS are iteratables except objects.

// spread oprtr on strings:- 
const str = 'Jonas';
const letters = [...str, ' ', 'S'];
console.log(letters);  //['J', 'o', 'n', 'a', 's', ' ', 'S']   //==> Where each letter of the original string is now an individual element.
// We unpacked the string.
// NOTE:- We can still only used to spread oprtr when building an array or when we pass the values into a function.
console.log(...str); //J o n a s
console.log('j','o','n','a','s'); //J o n a s
// console.log(`${..str} Schmedtmann`); //Error:- Unexpected token '.'    B'coz:- This is not a place that expects multiple values separately by a comma.
// Multiple values separate by a comma are usually only expected when we pass arguments into a funtion or when we build a new array. ==> In this case, we have to use spread oprtr.


// imp: Real-world life example of spread oprtr :- function which can take multiple arguments as user need
const ingredients = [prompt('Let\'s make pasta! Ingredients 1?'),  
prompt('Let\'s make pasta! Ingredients 1?'), 
prompt('Let\'s make pasta! Ingredients 1?')
];
console.log(ingredients);  
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); //o/p:- Here is your delicious pasta with mashrooms, cheese, paneer
restaurant.orderPasta(...ingredients); //o/p:- Here is your delicious pasta with mashrooms, cheese, paneer

//imp: Since ES2018, the spread oprtr also works on objects. Even though the objects are not iteratables.
// spread oprtr in Objects:-
const newRestaurant = {foundIn:1998, ...restaurant, founder: 'Guiseppe'}; //We craeted a new object.
console.log(newRestaurant);

// Since we are able to do shallow copies of arrays using the spread oprtr, we can do the same with objects. 
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
// NOTE:- We have done shallow copy NOT the deep copy.
restaurantCopy.openingHours.fri= {open: 0, close:0 };
console.log(restaurantCopy.openingHours.fri); //{open: 0, close: 0}
console.log(restaurant.openingHours.fri); //{open: 0, close: 0}
*/


// ============================================= REST Pattern and REST Parameters:- =====================================================
/*
const restaurant = {
  name: 'Classico Italiano', //todo: What is the data-type of name property, Is it a string ? How can i access the property name of an object ?
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //'this' represents to an object which calls this method.
  },

  openingHours: { //It's an object of objects.
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  
  orderDelivery: function({starterIndex=1, mainIndex=0, time='20:00', address}){ 
    console.log(`Order received! ${this.starterMenu[starterIndex]}  and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    //ig, same thing happens in python. when we have done the practical of pyplot and numpy and pandas(in functions).
  },

  orderPasta: function(ing1, ing2, ing3 ){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

};
//Rest Pattern looks exactly the spread oprtr. It has the same syntax:- 3 dots(...) . BUT, it actually does the opposite of the spread oprtr.
// We use spread oprtr to build new arrays or to pass multiple values into a function. ==> These are the usecases of the spread oprtr. IN Both the cases, we use the spread oprtr to expand an array into individual elements.
// Rest oprtr:- use to Collect multiple element and condense them into an array. 
//imp: spread oprtr:- use To unpack an array.                 Rest oprtr:- use To pack elements into an array.

// 1) Destructuring:-

// Spread  B'coz:- on right side of the assignment oprtr.
const arr = [1,2, ...[3,4]]; //This is a spread oprtr syntax b'coz:- We are using it on the right hand side of the assignment oprtr.
//imp: However, we can also use spread oprtr on the left hand side of the assignment oprtr together with destructuring. How????? 

//Rest syntax B'coz:- It is on the left hand side of the assignment oprtr.
const [a, b, ...others] = [1,2,3,4,5]; //Rest Syntax:- It is called as rest b'coz, it will take the rest of the elements. so put the remaning of the elements of the array into a new array.
console.log(a,b,others);  //1 2 ▶ (3) [3, 4, 5]

//imp: left hand side is REST oprtr             right hand side is Spread oprtr:-
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];  
// NOTE:- REST syntax collects all the array elemenents after the last variable. In this e.g:- last variable is risotto. 
// NOTE:- REST doesn't include any skipped elements. Here, skipped elements is 'pasta'.
// for that reason, REST pattern always must be the last in the destructuring assignment. B'coz:- Otherwise, How will JS know untill when it should collect the rest of the array ?
console.log(pizza, risotto, otherFood); //Pizza Risotto ▶ (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// E.g:- Wrong Syntax!!
// const [pizza, , risotto, ...otherFood, bread] = [...restaurant.mainMenu, ...restaurant.starterMenu];  //Error:- Uncaught SyntaxError: Rest element must be last element
// There can be only ever be one rest in any destructuring Assignment.


//imp: REST in objects:-  The remaining elements will be collected into a new object & NOT into a new array.
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays); //{thu: {…}, fri: {…}}


// 2) Functions :-
// 2nd usecase of spread oprtr is to pass multiple arguments into a function all in the same time. ===> REST oprtr will do opposite of this.
//imp: We will use REST pattern. In this case, it is actually called REST PARAMETERS
const add = function(...numbers){ //imp: REST oprtr is used. That's why here, it's called REST arguments.
  // With the spread oprtr, we expand.   AND   with the REST oprtr, we compress.
  console.log(numbers); //numbers is an array of elements which are passed to this function. And No. of element can be anything.
  let sum = 0;
  for(let i=0; i<numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
// By doing this, add() function can accept array also and as well as numbers.
add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);

const x = [23,5,7];
// passing array into a function:-
add(...x); //spread oprtr is used. To spreading all the elements of the x array. And passing these all elements to an add() function. Which uses REST oprtr to compress it into a new array.
// imp: me: If we are passing objects then REST oprtr will compress it into an object. As we have did in above examples, where we are printing weekdays.


//REST operator:-
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); //mushrooms ▶ (3) ['onion', 'olives', 'spinach'] 
restaurant.orderPizza('mushrooms'); // mushrooms ▶ []

// RECAP:- SPREAD and the REST oprtr syntax both looks exactly the same, BUT it work in opposite ways depending on where they are used.
// so, the SPREAD oprtr is used where we would otherwise write values separate by a comma. On the other-hand, the REST pattern is basically used where we would otherwise write variables names separated by commas NOT values separated by commas.
*/


//================================================ Short circuiting(&& AND ||):- =========================================================
/*
const restaurant = {
  name: 'Classico Italiano', //todo: What is the data-type of name property, Is it a string ? How can i access the property name of an object ?
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //'this' represents to an object which calls this method.
  },

  openingHours: { //It's an object of objects.
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  
  orderDelivery: function({starterIndex=1, mainIndex=0, time='20:00', address}){ 
    console.log(`Order received! ${this.starterMenu[starterIndex]}  and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    //ig, same thing happens in python. when we have done the practical of pyplot and numpy and pandas(in functions).
  },

  orderPasta: function(ing1, ing2, ing3 ){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

};

// Short-circuiting in OR oprtr:- 
console.log(`--------------------- OR -------------------`);
console.log(3 || 'jonas'); //imp: o/p:- 3  NOT a  boolean Value. 
// They are 3 properties of logical operators:-   1. They can use Any Data Type    2. They can return Any Data Type.   3. They do short-circuiting(short circuit evaluation)

// imp: ig, i have learned something similar thing in Python language:- Go and check and revise it and compare with this below stmts.
// In the case of OR(||) oprtr, short-circuiting means that:- If the first value(operand) is truthy value then it will immediately return that first value. Other operand will not be evaluate if the first operand is a truthy value in the OR oprtr.
console.log('' || 'jonas'); //jonas B'coz:- first operand is a falsy value. so then, 2nd oprtr is also be evaluated that is 'jonas' and it will then return.  //imp: The result of the ||(OR) oprtr doesn't have to be a boolean. It will simply return the truthy values here.
console.log(true || 0); //true  B'coz:- first value is truthy value. 
console.log(undefined || null); //imp: null  B'coz:- As we already know that, undefined is a falsy value.
//as undefined is a falsy value, so it didn't go to 2nd operand. So, there is no short circuiting. so null is the output. 
console.log(undefined || 0); //0
console.log(undefined || 1); //1
console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Hello  B'coz:- 'Hello' is the first truthy value in this chain of the OR operations.
// undefined, 0, '' ==> These are falsy values.
console.log(2<7 || 3>5); //b'coz:- 2<7 is true
console.log(undefined || null || 0); //0
// imp: My-conclusion:- If first operand is truthy value then it will return it else it will go to the last operand AND if in-between any truthy value found then it will return and if no truthy value found then it will return the last falsy value.                                              In Otherwords, OR oprtr returns the first truthy value if found else it returns the last falsy value.
// In OR operation, the result is true, if atleast one operand is true. so, if the first operand is already true then JS doesn't even have to look at other values. So, it will shortcircuit and then simply return that first result.


// imp: Real use of OR oprtr :- Practical example 
// restaurant.numGuests = 23; 
// restaurant.numGuests = 0; //NOTE:- Both of the below solution's will not work when no. of guess is equal to 0. i.e:- restaurant.numGuests = 0; The solution of this problem will be in next lecture.
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10 ;
console.log(guests1); //10  B'coz:- undefined is a falsy values.

// Using short-circuiting and OR oprtr :- Doing same thing thing which is done above
const guests2 = restaurant.numGuests || 10; //imp: That's the real use of OR oprtr in JS. Ig, same thing works in python.🌟🌟🌟🌟🌟🌟
console.log(guests2); //10


//imp: Short-circuiting in AND oprtr
console.log(`--------------- AND -------------`);  //AND oprtr works exact opposite to OR oprtr in short-circuit evaluation.
console.log(0 && 'jonas'); //0  That means, AND oprtr short-circuit when the first value is falsy and then immediately return that falsy value without even evaluating the 2nd operand.
//Whereas, OR oprtr short-circuit when the first value is truthy value. 
console.log(7 && 'Jonas'); //Jonas   So, when it is truthy it means that the evaluation is continues and then simply the last value is returned.
// This make sense:- AND oprtr is only true if all the operands are true. So, if the first operand is false then that means the entire result of the AND operation will already be false anyway. So, there is no need to even look any of the other operands.
// imp: My-conclusion:- In AND operation, It returns the first falsy value if found, else it return the last operand.
console.log('Hello' && 23 && null && 'jonas'); //null


//imp: Practical example:-
if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms','spinach');
}
// Same thing which was done above can be done in a simple way using AND oprtr in short-circuiting concept :-
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');  //imp:🌟🌟🌟🌟🌟🌟 


// imp: NOTES:-
// Summarize:- 1. The OR oprtr will return the first truthy value of all the operands or simply the last value if all of them are falsy value.
//             2. The AND oprtr will return the first falsy value of all the operand or the last value if all of them are truthy value.
// For practical Applications :- 1. We can use the OR operator to set the default values.
//                               2. We can use AND oprtr to execute code in the second operand if the first operand is true.
*/


// ========================================= The Nullish coalescing oprtr (??) ============================================================
/*
const restaurant = {
  name: 'Classico Italiano', //todo: What is the data-type of name property, Is it a string ? How can i access the property name of an object ?
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //'this' represents to an object which calls this method.
  },

  openingHours: { //It's an object of objects.
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  
  orderDelivery: function({starterIndex=1, mainIndex=0, time='20:00', address}){ 
    console.log(`Order received! ${this.starterMenu[starterIndex]}  and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    //ig, same thing happens in python. when we have done the practical of pyplot and numpy and pandas(in functions).
  },

  orderPasta: function(ing1, ing2, ing3 ){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

};

//imp: Now we solve this below problem:-
restaurant.numGuests = 0; //NOTE:- Both of the below solution's will not work when no. of guess is equal to 0. i.e:- restaurant.numGuests = 0;  
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10 ;
console.log(guests1); //10  B'coz:- undefined is a falsy values.

// Using short-circuiting and OR oprtr :- Doing same thing thing which is done above
const guests2 = restaurant.numGuests || 10; //imp: That's the real use of OR oprtr in JS. Ig, same thing works in python.🌟🌟🌟🌟🌟🌟
console.log(guests2); //10

// imp: nullish coalescing oprtr introduced in ES6 2020 :-
const guests = restaurant.numGuests ?? 10;  //It is almost the same as || (OR) oprtr. All the nullish values will short-circuit the evaluations here.  2nd operand will executed only when the 1st operand is null or undefined.
console.log(guests); //0   //todo: Why this works ?? 
// imp: It's b'coz of the nullish coalescing oprtr works with the idea/concept of nullish values instead of falsy values.
//imp: Nullish values are :- null and undefined.  It doesn't include 0 or the empty string "" 
// For the Nullish coalescing oprtr :- 0 and ""(empty strings) are truthy values. This oprtr works with the principles of Nullish.
*/


// ================================================= Logical Assignment oprtrs =============================================================
/*
const restaurant = {
  name: 'Classico Italiano', //todo: What is the data-type of name property, Is it a string ? How can i access the property name of an object ?
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //'this' represents to an object which calls this method.
  },

  openingHours: { //It's an object of objects.
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  
  orderDelivery: function({starterIndex=1, mainIndex=0, time='20:00', address}){ 
    console.log(`Order received! ${this.starterMenu[starterIndex]}  and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    //ig, same thing happens in python. when we have done the practical of pyplot and numpy and pandas(in functions).
  },

  orderPasta: function(ing1, ing2, ing3 ){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

};

// Three new logical assignment oprtr which was introduced in ES 2021 :-
const restaurant1 ={
  name: 'Capri',
  numberGuests: 20,
};
const restaurant2 ={
  name: 'La piazza',
  owner: 'Giovanni Rossi',
};


// imp: Logical OR assignment oprtr:- This oprtr assigns a value to a variable if that variable is currently a falsy.🌟🌟🌟
// restaurant1.numberGuests = restaurant1.numberGuests || 10; //if the 1st value is truthy then that 1st value will immediately return and 2nd value will not even evaluated.
// restaurant2.numberGuests = restaurant2.numberGuests || 10; 

//imp: Writing same thing as above but using Logical or assignment oprtr
restaurant1.numberGuests ||= 10; 
restaurant2.numberGuests ||= 10; 

console.log(restaurant1);
console.log(restaurant2);

// BUT, Here is one problem which was in the previous section. i.e:- When the numberGuests = 0; initially then also it assigns the 10. B'coz:- 0 is a falsy values.
// e.g:- 
const rest1 ={
  name: 'Capri',
  numberGuests: 0,
};
const rest2 ={
  name: 'La piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numberGuests ||= 10; 
// rest2.numberGuests ||= 10; 

console.log(rest1); //Note the output!! 
console.log(rest2);

//imp: Therefore, To solve this problem, we hav eto use logical nullish assignment oprtr
rest1.numberGuests ??= 10; //imp: Nullish assignment oprtr will assign the value to a variable if that exact variable is currently nullish.🌟🌟🌟
rest2.numberGuests ??= 10;

console.log(rest1);
console.log(rest2);
// Nullish means null or undefined are falsy values. 0 and ""(empty string) is a truthy values for a nullish oprtr.


// imp: Logical AND assignment oprtr:-
console.log(`-------- Logical AND assignment oprtr ---------`);
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
console.log(rest1); 
console.log(rest2); //see o/p:-  It's b'coz of short-circuiting. In AND oprtr, when the 1st value is falsy then short-circuits happens and then immediately return that falsy values. In this case, all the operand is truthy that's why the last operand is evaluated returned.

rest1.owner &&= '<ANONYMOUS>'; //imp: Note:- I'm getting different output as we get without using Logical AND assignment oprtr.
rest2.owner &&= '<ANONYMOUS>';
 console.log(rest1); //todo: Why i'm not getting 'undefined' as a owner name?? If did same thing without using ANd-assignment oprtr then i will get 'undefined' owner name.
 console.log(rest2);

// todo: what Logical AND assignment oprtr does ? 🌟🌟🌟🌟🌟🌟
//imp: Ans:- To assign a value into variable if it is currently truthy. =====> Opposite of OR assignemnt oprtr.
*/


// ======================================== Coding challenge 1:- ========================================================================
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,  //11.33
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const [players1, players2] = game.players;  //Destructuring is happen 
console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;  //Destructuring +  Which oprtr is used ? SPREAD or REST ?
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];  // Which oprtr is used ? SPREAD or REST ?
console.log(allPlayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];  // Which oprtr is used ? SPREAD or REST ? 
console.log(players1Final);

//5.
const {
  odds: {team1, x: draw, team2},  //DEstructuring an object with different properties name for x
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function(...players){      //Rest oprtr is used
    console.log(`${players.length} goals were scored`);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored); //spread oprtr is used
// printGoals(game.scored); //Wrong!!!!1

//7.
team1 < team2 && console.log('Team 1 is more likely to win');  //AND short-circuiting is used
team1 > team2 && console.log('Team 2 is more likely to win');
*/

// Wrong!!!!!!!!!!!!!1
// const [players1, players2] = ...game.players;
// const players1 = [];
// const players2 = [];
// const gk = players1[0]


// =================================== Looping Arrays:- The for-of loop ==============================================
/*
// for-of loop is introduce in ES6
const restaurant = {
  name: 'Classico Italiano', //todo: What is the data-type of name property, Is it a string ? How can i access the property name of an object ?
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //'this' represents to an object which calls this method.
  },

  openingHours: { //It's an object of objects.
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  
  orderDelivery: function({starterIndex=1, mainIndex=0, time='20:00', address}){ 
    console.log(`Order received! ${this.starterMenu[starterIndex]}  and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    //ig, same thing happens in python. when we have done the practical of pyplot and numpy and pandas(in functions).
  },

  orderPasta: function(ing1, ing2, ing3 ){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Regular for-loop
for(let i=0; i<menu.length; i++) console.log(menu[i]);

// For-of loop 
for(const item of menu) console.log(item); //It's look like for-each loop which was learned in C++, java.
// const item  ===> item is a varoable which will store the element of menu one by one. 
// This For-of loop will automatically loop over the entire array and in each iteration it will give us the access to the current array element which we specify before 'of'. Here, item is the varaible.
// todo: As In C++, We can use change the element of an array using for-each loop(by just writing '&' before the variable name). Can we do the same task in JS For-of loop ??
// imp: we can still use the 'continue' and 'break' in For-of loop, As we're using in for loop.🌟🌟⭐


//imp: Q. What if we also want the current index NOT just the current element ??
// Ans:- 
for(const item of menu.entries()){ //This entries() function returns the key-value pair for every entry in the array.
  // console.log(item);
  console.log(`${item[0] + 1}: ${item[1]}`);
}

console.log(menu.entries()); // ▶ Array Iterator {}
console.log([...menu.entries()]); // (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]   //==>Note:- 2 is the size of that sub-array

//imp: As, we know that 'item' is an array. We can destructure it. (See above For-of loop example)
for(const [i,el] of menu.entries()){ //As we know 'item' is an array, so here we have did the destructure the 'item'.
  // console.log(item);
  // console.log(`${item[0] + 1}: ${item[1]}`);
  console.log(`${i + 1}: ${el}`);
}

// Destructuring an array:-
const arr1 = [2,3,4];
const [x,y] = arr1;
console.log(x,y); //We have learned this thing already in this part.
*/


// =============================================== Enhanced Object Literals:- ========================================================
/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = { //It's an object of objects.
  // Before ES6 enhanced object literals
  thu: { //imp: ig, it has less priority than this compute property name. below e.g:- see console.log(restaurant);
    name: 'Brijesh',
    open: 12,
    close: 22,
  },

  // imp: 3. We can now actually compute(calculate) property names instead of having write them out manually and literally.
  [weekdays[3]]: { //We could also destructuring here.
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [`day-${2+4}`]: { //imp: Here, we compute the property name. As in Es6 there is some enhanced object literals.
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = { //imp: This 'restaurant' object is an object literal. B'coz:-we wrote this object literally in  our code using this {} curly braces syntax. 
  name: 'Classico Italiano', //todo: What is the data-type of name property, Is it a string ? How can i access the property name of an object ?
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //imp: ES6 introduce 3 ways which make it easier to write object literals like this:-
  
  // imp: 1. ES6 Enhanced object literals
  // openingHours: openingHours, //Before ES6, we have to write like this. This property name is exactly the same as variable name from which we are getting this new object. In enhanced Object literals, we don't have to write this.

  // ES6 enhanced object literals.
  openingHours, //Take this 'openingHours' object and put it into the restaurants object and create a property name with exactly that variable name. You can see this==> console.log(restaurant);
  
  // imp: 2. writing about methods
  // Before ES6 :- 
  // order: function(starterIndex, mainIndex){
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //'this' represents to an object which calls this method.
  // },

  // In ES6, We no longer have to create a property & then set it to a function expression like we have always doing.
  // ES6 enhanced objecrt literals 
  order(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //'this' represents to an object which calls this method.
  }, //This will now work exactly the same as before but with a slightly easier syntax.

  // imp: 3. We can now actually compute(calculate) property names instead of having write them out manually and literally.


  orderDelivery: function({starterIndex=1, mainIndex=0, time='20:00', address}){ 
    console.log(`Order received! ${this.starterMenu[starterIndex]}  and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    //ig, same thing happens in python. when we have done the practical of pyplot and numpy and pandas(in functions).
  },

  orderPasta: function(ing1, ing2, ing3 ){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

};
console.log(restaurant);
*/



// =========================================== Optional changing (?) ======================================================================
/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = { //It's an object of objects.
  [weekdays[3]]: { //We could also destructuring here.
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: { //imp: Here, we compute the property name. As in Es6 there is some enhanced object literals.
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};
const restaurant = { //imp: This 'restaurant' object is an object literal. B'coz:-we wrote this object literally in  our code using this {} curly braces syntax. 
  name: 'Classico Italiano', //todo: What is the data-type of name property, Is it a string ? How can i access the property name of an object ?
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals.
  openingHours, //Take this 'openingHours' object and put it into the restaurants object and create a property name with exactly that variable name. You can see this==> console.log(restaurant);
  
  order(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //'this' represents to an object which calls this method.
  }, //This will now work exactly the same as before but with a slightly easier syntax.

  orderDelivery({starterIndex=1, mainIndex=0, time='20:00', address}){ 
    console.log(`Order received! ${this.starterMenu[starterIndex]}  and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    //ig, same thing happens in python. when we have done the practical of pyplot and numpy and pandas(in functions).
  },

  orderPasta(ing1, ing2, ing3 ){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
console.log(restaurant.openingHours.mon); //undefined   ==> Actually, this property doesnot exists in openingHours object or restaurant object.

// Pretending that we don't know whether 'mon' object is present or not in openingHours object of restaurant objects.
// console.log(restaurant.openingHours.mon.open); //Error   B'coz:- undefined.open
// To avoid this error, we have to check first whether 'mon' is present or not.

if(restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
if(restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);  //Instead of using If-stmt, we can also use the logical oprtr as we have learnt already.   //imp: Atleast we get rid of Error msg. Its not the big deal to having to add this logic here BUT it does make our code more unreadable and more messy.
// However, this is checking just for one property i.e. 'mon'  BUT Now, imagined that openingHours would also be a optional. In Otherwords, may be restaurant object can also not have openingHours. so, in this case we would have to check for both.
//e.g:-
if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
//imp: This can get out-of-hand pretty quickly, when we have deeplynested objects with lots of optional properties. So Therefore, in ES 2020 introduce a great solution for this Which is a feature called 'optional chaining'. With 'optional chaining', if a certain property doesnot exists then undefined is returned immediately. And so That would avoid that kind of Error we saw earlier.

// With optional chaining :-
console.log(restaurant.openingHours.mon?.open); //So only if the property that is before this question-mark(?) exists then further will go Otherwise it will return indefined immediately. Only if the 'mon' property exists then this open property will be read from there. And If not then immediately undefined will be returned. 
// imp: Here, Exists means the nullish concept which we already talked before. So, A property exists if It is NOT null and NOT undefined.         If it is 0 or empty strings then that property is still exists there.

// Without optional chaining, We're getting Error See this below line code.
// console.log(restaurant.openingHours.mon.open);

// imp: Me:-optional chaining(?) will check only for that property which is written before that(?).
// console.log(restaurant.openingHour.mon?.open);  //Uncaught TypeError: Cannot read properties of undefined (reading 'mon')
console.log(restaurant.openingHour?.mon?.open); //undefined

// With Optional chaining
console.log(restaurant.openingHours?.mon?.open); //checking for both openingHours and mon property.

// Without Optional chaining
if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);


// Real-world Example:-
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// Task:- Loop over this Array and than log to the console whether the restaurant is open or closed on each of the days.
for(const day of days){
  console.log(day);
  // restaurant.openingHours.day; //imp: We can not do this. B'coz:- this 'day' is not an actual property of the obejct(openingHours) 
  //imp: Remember, if we want to use the variable name as the property name, basically we need to use the bracket notation.🌟🌟🌟🌟⭐✨✨✨
  const open = restaurant.openingHours[day]?.open; //optional chaining is also works here.
  console.log(`on ${day}, we open at ${open}`);
}

// Now we don't want undefined. so, we will set the default value.
for(const day of days){
  console.log(day);
  //imp: Remember, if we want to use the variable name as the property name, basically we need to use the bracket notation.🌟🌟🌟🌟⭐✨✨✨
  const open = restaurant.openingHours[day]?.open || 'closed';  //OR oprtr is used 
  console.log(`on ${day}, we open at ${open}`);
}
//Here, We have problem b'coz:- on saturday(sat) it's says that is closed b'coz 0 is also a falsy value for the OR oprtr. But on sat restaurant is actually opened. To solve this problem, we will use the nullish coalescing operator. //imp: Revise the Nullish coalescing oprtr.
// Nullish values are null and undefined.

for(const day of days){
  console.log(day);
  //imp: Remember, if we want to use the variable name as the property name, basically we need to use the bracket notation.🌟🌟🌟🌟⭐✨✨✨
  const open = restaurant.openingHours[day]?.open ?? 'closed';  //Nullish coalescing oprtr is used 
  console.log(`on ${day}, we open at ${open}`);
}


//imp: Optional chaining for calling methods :- We can check if a method actually exists before we call it.
console.log(restaurant.order?.(0,1) ?? 'Method does not exists' );
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exists');
// console.log(restaurant.orderRisotto(0,1) ?? 'Method does not exists'); //Error
//imp: This optional chaining oprtr will check if orderRisotto actually exists and if it is doesn't than it will immediatelt return undefined. And Nullish coalescing oprtr will go to the 2nd operand.


//imp: Optional chaining on Arrays :- We can use optional chaining to check if an array is an empty.
// const users = [];
const users = [{
  name: 'jonas',
  email: 'hello@jonas.io',
}];
console.log(users[0]?.name ?? 'User array empty'); //This optional chaining test if the value on the left does exists.

// Without optional chaining:- on Array
if(users.length>0) console.log(users[0].name);
else console.log('User array empty'); 

//imp: We always use the optional chaining with the nullish coalescing oprtr so that we can actually do something in case we don't get the result from the object or from the array.
*/


// ==================================== Looping objects: Object keys, values and entries ====================================================
/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = { //It's an object of objects.
  [weekdays[3]]: { //We could also destructuring here.
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: { //imp: Here, we compute the property name. As in Es6 there is some enhanced object literals.
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};
const restaurant = { //imp: This 'restaurant' object is an object literal. B'coz:-we wrote this object literally in  our code using this {} curly braces syntax. 
  name: 'Classico Italiano', //todo: What is the data-type of name property, Is it a string ? How can i access the property name of an object ?
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals.
  openingHours, //Take this 'openingHours' object and put it into the restaurants object and create a property name with exactly that variable name. You can see this==> console.log(restaurant);
  
  order(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //'this' represents to an object which calls this method.
  }, //This will now work exactly the same as before but with a slightly easier syntax.

  orderDelivery({starterIndex=1, mainIndex=0, time='20:00', address}){ 
    console.log(`Order received! ${this.starterMenu[starterIndex]}  and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    //ig, same thing happens in python. when we have done the practical of pyplot and numpy and pandas(in functions).
  },

  orderPasta(ing1, ing2, ing3 ){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// We have learnt For-of loop on arrays(which is iterateable) BUT we can also loop over objects which are not iterateables But in a indirect way.
// We have different options, depending on what exactly we want to loop over on an object:-
// 1. over the object property names          2. over the values                      3. over the both together(property names and values).


// PROPERTY NAMES:- 
const properties = Object.keys(openingHours); //It returns the array of keys.
console.log(properties); //(3) ['thu', 'fri', 'sat']

// console.log(`We are open on ${properties.length} days`); //imp:
let openStr = `We are open on ${properties.length} days: `; //imp:

// Loop over the property names(They are also called keys):-
for(const day of Object.keys(openingHours)){
  openStr += `${day}, `;
  // console.log(day);
}
console.log(openStr);


// PROPERTY VALUES:-
const values = Object.values(openingHours); //Array of object is retuned b'coz:- openingHours contains multiple objects
console.log(values); 
for(const value of Object.values(openingHours)){
  console.log(value);
}
//imp: NOTE:- Object.keys() and Object.values()  Accecpts object as an argument.


// PROPERTY NAMES and VALUES (Entire Object):-
// To Loop over the Entire Object we actually need the entries(). entries() is basically names + values together.
// We have already saw entries().
const entries = Object.entries(openingHours); //It returns an array of array. Where each inner array represent key-value pair.
console.log(entries);
for(const x of entries){
  console.log(x);
}
for(const [key, value] of Object.entries(openingHours)){ //Here, we have done destructing of an array. 
  console.log(key, values);
}
for(const [key, {open, close}] of entries){ //Nested destructuring is used.
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// imp: Note the Difference Between(SYNTAX) For-of loop on an array and on an object.🌟🌟🌟🌟🌟🌟👆👆👆👆👆🌟🌟🌟🌟🌟🌟👇👇👇👇👇👇👇👇

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu.entries());  //It returns an array of array and inner array stores index no. and the element of that index of the array.
//imp: As, we know that 'item' is an array. We can destructure it. (See above For-of loop example)
for(const [i,el] of menu.entries()){ //As we know 'item' is an array, so here we have did the destructure the 'item'.
  // console.log(item); //item is written instead of [i,el] in for-of loop syntax
  // console.log(`${item[0] + 1}: ${item[1]}`);
  console.log(`${i + 1}: ${el}`);
}

// Destructuring array e.g:- 
const arr2 = [2,3,5,6];
const [a,b,c] = arr2;
console.log(a,b,c);
*/


// =================================================== Coding Challenge 2:- =========================================================
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,  //11.33
    x: 3.25,
    team2: 6.5,
  },
};


// 1.
for(const player of game.scored.entries()){  //entries function is used if we also want the index number.
  console.log(`Goal ${player[0]+1}: ${player[1]}`);
}
// or
for(const [playerIndex, playerName] of game.scored.entries()) console.log(`Goal ${playerIndex + 1}: ${playerName}`);  //AS, we know that:- entries() funtion return an array of an array of (index and element). So, Here we have also done the destructuring of an array.

// 2.   For-of loop on an object
let sumOdd = 0;
for(const value of Object.values(game.odds)) {
  sumOdd += value;
}
// let avgOdd = sumOdd/3; //imp: 👇👇👇
let avgOdd = sumOdd/Object.values(game.odds).length;  //As, we know that Object.values(game.odds) returns an array of values of game.odd object.
console.log(avgOdd);

// 3.
for(const [team, odd] of Object.entries(game.odds)){
  // let name = `${game.`${team1}`}`;  ===>  Wrong Syntax/line.

  let teamStr;
  if(team === 'x') teamStr = 'draw';  //imp: Don't use loosely comparison oprtr. Use 'strictly' comparison oprtr.
  else teamStr = game[team];

  // Using ternary oprtr:-
  // const teamStr = team === 'x' ? 'draw' : game[team]; //imp: 🌟🌟🌟⭐✨

  console.log(`Odd of victory ${teamStr}: ${odd}`);
}
// imp: NOTE:- In array ==> arrayName.entries() :- This returns an array of array of index and an element.                                     Whereas, In an object ==> Object.entries(objectName) :- This return an array of array of key & value. 


//4. Bonus:-  //todo: How to do this Question ??
const scorers = {
  // player name : No. of goals   
};
for(const player of game.scored){
  // scorers[player]++;   //imp: Note this is a wrong syntax. It doesn't work in JS as we did same thing in cplusplus.
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
// Ans:- 
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {};
// for (const player of game.scored) {
  // scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
*/


// ============================================================= Sets:- ====================================================================
/*
// In ES6, Two more DS were finally introduced, that are sets and map.
// Set :- collection of unique values. It can never have any duplicates. 
// imp: Set can also store mixed data type(i.e. Heterogeneous value) also.
const ordersSet = new Set([ //We have to pass an iterable in this set constructor.
  'Pasta', 
  'Pizza', 
  'Pizza', 
  'Risotto', 
  'Pasta', 
  'Pizza',
  2.4,
  3,
  true,
  3,
]); 
console.log(ordersSet);  //All the duplicates are gone. Set is also looks similar like an array, B'coz:- there are no key-value pairs.
// imp: ig, Array also stores heterogeneous elements.
// just Like Arrays, Set is also a iteratables.
// There are two difference between Set and Array ==> 1. Sets elements are unique.      2. Order of the elements in the set is irrelevant.

// Strings are also iteratables. Therefore, we can also pass strings in the set.
console.log(new Set('Jonas')); //Set(5) {'J', 'o', 'n', 'a', 's'}

console.log(new Set());  //Set(0) {size: 0}  ===> empty set 

// imp: Note:- We will use the 'size' property if we want to know the size of the Set. And we'll use 'length' property if we want to know the length of the array. 
console.log(ordersSet.size);  //'size' property is used to get the size of the set.

const arr = [1,2,3,true,'jonas',3.5];
console.log(arr, arr.length);

// We can also check that if certain element is present or not in the set using 'has' method.  'has' method returns bool value.
// imp: This 'has' methods of Set is similar to includes method in array's.
console.log(ordersSet.has('pizza')); //false  ==> Case-sensitive
console.log(ordersSet.has('Pizza')); //true
console.log(ordersSet.has('bread')); //false

console.log(arr.includes('jonas')); //true
console.log(arr.includes('true')); //false


//imp: Adding new element to a set. ====> using 'add' methods :-
// We can also add new element to a set. 
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

// imp: Deleting element from a set. =====> using 'delete' methods :-
// We can also delete element
ordersSet.delete('Risotto');
ordersSet.delete(true);
ordersSet.delete('Brijesh'); //imp: 'delete' methods returns false if elements is not present in the set, Otherwise returns true and removes that element from the set.
console.log(ordersSet);  //Set(5) {'Pasta', 'Pizza', 2.4, 3, 'Garlic Bread'}

//imp: Retrieving element from the set 
// How to retrieve the values out of the set ?  Can we use index as we done in an array ?
console.log(ordersSet[0]); //undefined    
console.log(ordersSet[3]); //undefined    
console.log(ordersSet[10]); //undefined    
// We will get undefined if we use indexes to retrieve the data from the set. It's bcoz:- There is no indexes in the set. Infact, there is no way of getting values out of a set.
// We have 'has' method to know/check whether that element is present or not in the set. As we already know that, set contains unique elements and there(element) order does not matter. 
//If your goal is store the value in order and then retrieve it, than use an Array.

// imp: Deleting all elements of the set. ===> 'clear' method is used. 
// ordersSet.clear();  //Set(0) {size: 0}
console.log(ordersSet);

// As, we know that Sets are also an iterables.  Therefore, we can loop overthem.
for(const order of ordersSet) console.log(order);

//imp: UseCase of Sets :- Main usecase is 'To remove duplicates values of arrays' 
// Example:- 
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// We're interesting only knowing which different positions they are in restaurants.
const staffUniuqe = new Set(staff);
console.log(staffUniuqe); //Set(3) {'Waiter', 'Chef', 'Manager'}

//imp: 🌟🌟🌟 Conversion from a set to an array is easy b'coz they both are iteratables. Also, REMEMBER that SPREAD oprtr works on iteratables. 
// SPREAD oprtr is used to Unpack the value. Whereas, REST oprtr is used to pack the values.
const staffUniuqeArray = [...new Set(staff)] //SPREAD oprtr is used. Which will unpack the array returned by the Set constructor.
console.log(staffUniuqeArray);  //(3) ['Waiter', 'Chef', 'Manager']

// And If we onlyt want to know that How many different positions there are than the size property is very useful.
console.log(new Set(staff).size);  //3

// imp: Same thing we will to count the 'How many letters arevthere in the strings ?'
console.log(new Set('jonas').size); //5  ===> B'coz:- Strings are also an iteratable.

// Use Array :- When Order matters of the element and might contain duplicates. Or When we need to manipulate data b'coz:- Arrays have access to a lot of array methods.
*/


// ======================================================== Maps; Fundametal:- ============================================================
/*
// Maps are more useful than sets.
// Maps:- It's a DS which is used to map values to keys. 
// Just like an objects, Data is stored in key-value pair in maps.
//imp: Big Difference between Objects and Maps :- In Maps, the keys can have any type(It(key) can be objects, arrays or other maps). Whereas, In object keys are always string.

const restaurant = new Map(); //empty map   ===> This is contructor of map.

// imp: To fill up the map ==> use 'set' methods. This is similar to 'add' method in set.
restaurant.set('name', 'Classic Hotel') //Key-value is passed as an argument. If that key is already exists then value of that key will be updated.
restaurant.set('name','Classico Italiano');   

// Remember that we can use any data type as a key name as we want, unlike in object.
restaurant.set(1,'Firenze, Italy'); //imp: Calling 'set' method ==> It not only update the map but it also returns the map.
console.log(restaurant.set(2,'Lisbon, Portugal'));  //Map(3) {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal'}
console.log(restaurant);  //Map(3) {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal'}

// imp: 'set' method returns updated map and allows us to change the map. 
// restaurant.set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic']);  //imp: Value can be anything
restaurant.set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open :D').set(false, 'We are closed :(');  //imp 🌟🌟⭐✨✨  // This happens b'coz:- 'set' methods returns an updated map.

// imp: 'get' method ==> To read data from a map. //key is passed to an argument and value is returned which is mapped to that key. If there is no value than undefined is returned. If value is an object than reference of that object will returned.
// 'get' method is available on all the maps. 
console.log(restaurant.get('name')); //Classico Italiano
console.log(restaurant.get(true)); //We are open :D
console.log(restaurant.get('true')); //undefined
console.log(restaurant.get('1')); //undefined
console.log(restaurant.get(1)); //Firenze, Italy

// Fun example:- Power of boolean as a map keys ==> see example 👇👇👇
const time = 21; //21 hrs == 9pm  //try with 8 
console.log(restaurant.get(time > restaurant.get('open') && time < restaurant.get('close')));  //result of this expression will be boolean.
// @me:- Actually, here short-circuiting of OR, AND oprtr is happening.
// And we know that, Logical oprtr like > , < , <= , >= , == , === , != , !== gives result in boolean type. Which is used in Or, ANd short-circuiting above.

// imp: check Whether given key is present in the map or not ?  ===> using 'has' methods 
console.log(restaurant.has('categories')); //true
console.log(restaurant.has('Main Menu')); //false

// imp: Delete elements from the map based on the key ===> using 'delete' method .  //It returns true if an element is existed in the map or false if doesnot exist in the map. 
restaurant.delete(2); 
console.log(restaurant);

//imp: Now, comparing this👆👆☝  with objects, we can actually also delete properties from an object using 'delete operator'.===> It's really slow proccess.
// Object also have the method called 'hasOwnProperty()' to check whether given property is exist in an object or not ? As, 'has' method is exist in the map.
// We will learn more about this in Object Oriented Programming Section.

// imp: 'size' property ===> gives the no. of items present in the map.
console.log(restaurant.size); //7

// imp: Remove all the element from the map ====> using 'clear' method 
// restaurant.clear(); //Map(0) {size: 0}
console.log(restaurant);
console.log(restaurant.size); 

// =====> As You can see there is similar methods in map and set DS. Set and Map both is introduced in ES6.

// imp: Arrays or objects as Map keys:- 🌟⭐✨⭐🌟 //This can be very useful with DOM elements which is actually an objects. see example below 👇👇
// We can also use arrays or objects as map keys
restaurant.set([1,2], 'Test');
console.log(restaurant); //7 {Array(2) => "Test"} 
                          // key: (2) [1, 2]
                          // value: "Test"

console.log(restaurant.get([1,2])); //undefined  ====> //imp: REMEMBER:- How JS works behind the scenes ? Primitives v/s object .
// B'coz:- [1,2] 👉 This object which is written in 'set' and 'get' method doesn't same object. We have written same But it is not actually same.
// They have the same elements but not same the object in the Heap.

//imp: This can be solved by this :- 🌟🌟🌟🌟🌟
const arr = [1,3];
restaurant.set(arr, 'Test');
console.log(restaurant);
console.log(restaurant.get(arr)); //Test

// imp: Arrays and object as a key. See DOM manipulation example 👇👇👇
restaurant.set(document.querySelector('h1'), 'Heading');  //Hover this key 'h1' in the console log. //todo: What is the actual use of this in DOM Manipulation ???
console.log(restaurant);
*/


// ===================================================== Maps: Iteration ===================================================================
/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = { //It's an object of objects.
  [weekdays[3]]: { //We could also destructuring here.
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: { //imp: Here, we compute the property name. As in Es6 there is some enhanced object literals.
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};
const restaurant = { //imp: This 'restaurant' object is an object literal. B'coz:-we wrote this object literally in  our code using this {} curly braces syntax. 
  name: 'Classico Italiano', //todo: What is the data-type of name property, Is it a string ? How can i access the property name of an object ?
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals.
  openingHours, //Take this 'openingHours' object and put it into the restaurants object and create a property name with exactly that variable name. You can see this==> console.log(restaurant);
  
  order(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //'this' represents to an object which calls this method.
  }, //This will now work exactly the same as before but with a slightly easier syntax.

  orderDelivery({starterIndex=1, mainIndex=0, time='20:00', address}){ 
    console.log(`Order received! ${this.starterMenu[starterIndex]}  and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    //ig, same thing happens in python. when we have done the practical of pyplot and numpy and pandas(in functions).
  },

  orderPasta(ing1, ing2, ing3 ){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// Adding element in the map in Another way:- without using 'set' method.   -------> Prefered by 'jonas' 
// B'coz:- when there a lot of values to set then using a 'set' method is a hectique task.
// imp: Initializing map at the time of declaration. 
const question = new Map([
  ['question', 'what is the best programming language in the world ?'],
  [1, 'C'],
  [2, 'JAVA'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct🎉'],
  [false, 'Try again!'],
]);
console.log(question);

console.log(Object.entries(openingHours)); //This returns an array of an array of key-value pair.

// Convert Object to map 
const hours = new Map(Object.entries(openingHours));
console.log(hours);

console.log(question.get('question'));

// As maps are also iteratable, so iteration is also possible here. 
for(const [key, value] of question){ //Destructuring is happening here
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);

// 👇👇👇 see the syntax difference 👆👆👆

// For-of loop on Entire Objects 
for(const [key, value] of Object.entries(openingHours)){
  console.log(key, value);
}

//imp: We can use the Power of boolean key to print either success or Error message 

// Wrong syntax 👇👇👇👇🚫⛔⛔🚫 //imp: It's not like in C++ 🌟🌟🌟🌟
// if(answer === question['correct']) console.log(question[true]);
// else console.log(question[false]);
// // using ternary oprtr :-
// const print = answer === question['correct'] ? question[true] : question[false] ;
// console.log(print);

// Right Syntax 👇👇👇🎉
if(answer === question.get('correct')) console.log(question.get(true));
else console.log(question.get(false));

// using ternary oprtr :-
const print = answer === question.get('correct') ? question.get(true) : question.get(false) ;
console.log(print);

// BEST WAY:- 🌟🌟🌟🌟👇👇👇
console.log(question.get(question.get('correct') === answer)); //imp 
 

//imp: Convert map to array :- //Destructuring of map is used
console.log([...question]);  //(7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// todo: How this works ???  //imp Ans:- See the question map ==> How it is constructed. It is actually constructed as an Array of an array. That's why we're able to use Destructuring here.


// imp: Other methods in maps :- Just like we have this method in objects 
console.log(question.entries()); //This returns mapIterator 
console.log(question.keys()); //This returns mapIterator
console.log(question.values()); //This returns mapIterator

console.log([...question.entries()]); //todo: Learn Yourself! That How we are able to destructure this 
console.log([...question.keys()]);
console.log([...question.values()]);
// todo: Q. When should i use map & when should i use object b'coz:- They are pretty similar.
*/


// ===================================== SUMMARY: Which Data Structure To use ? ===================================================
/*
// DS Like :- Built-in DS(Arrays and Objects), Sets and Maps
// We will discuss Pros and cons of DS and When to use which DS ?

// Sources od Data :- 
//  1. From the Program itself :- Data written directly in source code(e.g. status messages) 
//  2. From the UI(User Interface) :- Data input from the user or data written in DOM(e.g. tasks in todo app)
//  3. From external sources :- Data fetched for example from web API(e.g. recipe objects)  =======> Most Common source of data in Modern JS(me), Comes in JSON Data format.
                            // 👇
                      // Collection of data       
                          // 👇
                      // Data Structure 
                        // 👇             👇
                // Simple Lists       Key/Value Pairs ?
                        // 👇             👇
                // Arrays or Sets     Objects or Maps {Keys allows us to describe values}
          
//imp: There are also Weak Sets and Weak Maps DS in JS.


// imp: 1. Arrays  v/s  Sets ==> Used for simple lists of values when we donot need to describe the values.
// Arrays:- 
tasks = ['Code', 'Eat', 'Code']; //["Code", "Eat", "Code"]
// Use When You need ordered list of values(might contain duplicates)
// Use When you need to manipulate data 

// Sets:- 
tasks = new setInterval(['Code', 'Eat', 'Code']); //{"Code", "Eat"}
// Use When you need to work with unique values.
// Use When high-performance is really important. {b'coz Searching and deleting is much faster than arrays.}
// Use to remove duplicates from arrays.


// imp: 2. Objects  v/s  Maps ==> USed this Key-value DS Whenever we need to describe values using keys.
// Objects :-  
task = {
  task: 'Code',
  date: 'today',
  repeat: true
};
// More "traditional" Key/Value store("abused objects").   {b'coz:- It is already inytroduce before ES6}
// Easier to write and access values with . and [] 
// Use When you need to include functions(methods). {if you need functions as values then you should absoluetly use an object for that. And we can use the this keyword to access property of the same object which is impossible in maps.}
// Use when working with JSON(can convert to map)

// Maps :- Introduced in ES6
task = new Map([
['task', 'Code'],
['date', 'today'],
[false, 'Start coding']
]);
// Better performance 
// Keys can have any data type.  //todo: What about the data type of Objects Keys ????? ===> Ig, It's data type is only strings.
// Easy to iterate 
// Easy to compute size
// Use When you simply need to map key to values
// Use When you need keys that are not strings 
// imp: Conclusion : We should use a map, When we simply need to map keys to values And also when we need to use keys that are not strings.
*/


// ===================================================== Coding Challenge #3 ==========================================================
/* Do this task/challenge again 👇👇👇
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
// Here, Keys are the minutes in which the events are occur.

// 1.
// console.log(gameEvents.values());
let events = new Set(gameEvents.values()); //@me:- loop to map and store the values in set.
console.log(events);

// Converting sets to an array :-
events = [...new Set(gameEvents.values())];
console.log(events);


// 2.
gameEvents.delete(64); //key is passed to the delete function


// 3.
console.log(`An Event happened, on average, every ${90 / gameEvents.size} minutes`); //imp
const time = [...gameEvents.keys()];
console.log(time);

// last keys of GameEvents:- taking all keys into an Array. We can use Pop method to delete last elements but it also return last elements.
const last_element_time = [...gameEvents.keys()].pop();
console.log(last_element_time);
console.log(`An Event happened, on average, every ${last_element_time / gameEvents.size} minutes`); //imp


// 4. 
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/


// ============================================= Working with Strings - Part 1 ===========================================================
/*
const airline = 'TAP Air Portugal';
const plane = 'A20';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]); // undefined
console.log('B737'[0]); // B

// length of string:-
console.log(airline.length);
console.log('B737'.length);

// Methods:- 
// Index Method :- 
console.log(airline.indexOf('r')); //Note:- Strings are also '0' based.
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal')); // 8
console.log(airline.indexOf('portugal')); // -1

// Slice Method :- 
console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4,9)); // Air P    ===> length is 9-4=5
//starting index is included and ending index is excluded.
// imp: Length of the extracted string is always end-begining index.
// starting index is the position at which the extraction will start.
// imp: Strings are primitive. Therefore, it is immutable.
// Therefore, this slice method always return a new string.

// Extracting the first word :-
console.log(airline.slice(0,airline.indexOf(' '))); 

// Extracting the last word :-
console.log(airline.slice(airline.lastIndexOf(' ')+1)); // + 1 is added to remove the space b'coz:- starting(begining) index is included.
// If we don't specify the last(end) index then it will simply extract everything untill the end. 

//imp: Negative index in slice method :- {looks lke similar in python slice operator}
console.log(airline.slice(-2)); // al
console.log(airline.slice(2,-1)); // P Air Portuga
// Negative begin argument will start counting from the end & extracting from the end.

const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1); //-1 is as a begin character.
  if(s == 'B' || s == 'E') console.log(`you got the middle seat 😟`);
  else console.log(`You got lucky 😊`);
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// todo: We know that Strings are just Primitive. so, Why they do have methods ??
// shouldn't methods will be available on objects such as an arrays. ----->doubt stmt
// imp: Wehenever we call a method on a string, JS will automatically behind the scenes convert that string primitive to a string object with a same content. ANd then it's on that object where the methods are call. =====> This process is called "Boxing". B'coz:- It basically takes our string and puts it into a box which is the object.   And then when the operation is done, the object is converted back to a regular string primitive. Infact all string methods returns primitive even if called on a string objects.
console.log(new String('jonas')); //Note:- this string will look like an object in the console.
console.log(typeof new String('jonas')); // object
console.log(typeof new String('jonas').slice(1)); //string 
*/


// ============================================= Working with Strings - Part-2 ===========================================================
/*
const airline = 'TIP Air Portugal';

// Changing a case:-
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('jonas'.toUpperCase());  //We can also call this method directly on the string.

// .Fix Capitalization in name:- 
const passenger = 'jOnAS'; // It should be like this 👉 Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1); //begining(start) position no. 1 and take everything untill the end of the string.
console.log(passengerCorrect);

// imp: Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n'; //It's a same email

const lowerEmail = loginEmail.toLowerCase();
// Now, We want rid all empty(white) space and also enter(\n){which is also count as white space}
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// writing above code in one line
const normalizeEmail = loginEmail.toLowerCase().trim(); //imp
console.log(normalizeEmail);
console.log(email === normalizeEmail);
// Challenge:- Create a function and pass two string in it. 1) which is correct email  2) which is incorrect email   ANd return true or false after comparing both the email.


// imp: Since ES2019 there is also "trimStart" 👉 {Trim white space only from the start} and "trimEnd" 👉 {Trim white space only from the end}

// Replace parts of Strings(Replacing):- 
const priceUS = '288.97$'; // price in US
const priceGB =  priceUS.replace('$','pounds').replace('.', ','); //price in Europe which is pounds sign ===> comma(,) is used as a decimal separator in europe instead of .
// chaining is used in above stmt. ==> as, we already know that replace method returns a string.
console.log(priceGB);
// imp: Just like the other method that we studied, Replace also creates a new string. It doesn't mutate the original string.

// imp: very very 🌟🌟🌟 ===> replace method will replace only 1st occurrence.
const announcement = 'All passenger come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate')); //Problem:- It only replace the first 'door' NOT all the 'door'

// imp: To replace all the ocuurence we can use "replaceAll()" methods 👉 ES2021 method 🌟🌟🌟 
// Solution of above problem :- Regular Expression ===> To replace all the Occurrence of the 'door'
// To create the Regular Expression, We need to write the string between slashes NOT between quotes.
console.log(announcement.replace(/door/g, 'gate')); //Here, g stands for Global. //imp: 🌟🌟🌟🌟
// imp: replace method is also a case sensitive just like all of the other string methods are.


// Three simple methods that returns Boolean:- 1) includes   2) startsWith   3) endsWith
const plane = 'Airbus A320neo';
// includes:-
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); // false

// startsWith:-
console.log(plane.startsWith('')); // true  //imp:
console.log(plane.startsWith('Air')); // true  //imp: Note:- Doesn't have to match the entire word.
console.log(plane.startsWith('Ai')); // true  
console.log(plane.startsWith('Aib')); // false
if(plane.startsWith('Airbus') && plane.endsWith('neo')) console.log('Part of the new Airbus family');

// endsWith:- 
console.log(plane.endsWith('')); //imp:

// Practice exercise :- 
const checkBaggage = function(items){
  const baggage = items.toLowerCase(); //imp: Whenever we will get and want to compare, we'll always convert it into lower case first of all. So, it will be easy to compare all the cases like Knife, KnIFe, KNIFE, etc...
  if(baggage.includes('knife') || baggage.includes('gun')) console.log('You are NOT allowed on board');
  else console.log('Welcome aboard');
}
checkBaggage('I have a laptop, some food and a pocketKnife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/


// ============================================ Working with strings - Part-3 ============================================================
/*
// Split Method:- It allows us to split a string into multiple parts based on divider strings.
// imp: Compare this split method with slice method.
console.log('a+very+nice+string'.split('+')); // (4) ['a', 'very', 'nice', 'string']
console.log('a+very+nice+string'.split('+',3)); // (3) ['a', 'very', 'nice']
console.log('a+very+nice+string'.split('+',7)); // (4) ['a', 'very', 'nice', 'string']
// split method 👉 splits into sub parts by string divider and stores it into an array and returns that array.
// 2nd parameter is "limit" 👉  A value used to limit the number of elements returned in the array.
console.log('Jonas Schmedtmann'.split(' ')); // (2) ['Jonas', 'Schmedtmann']

// Now, we will use the power of Destructuring to create variables directly like this 👇
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName, lastName); // Jonas Schmedtmann

// Join Method:- 
// Now, we want to make lastName in Uppercase and then we also want to add "Mr." in the begining. ===> for this we could use simple template literal.
// But, Here we will use the "join" method which is opposite of "split" method.
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' '); //Here, "join" method, joins all the strings of an array by space separating which is define in the "join" method.
console.log(newName); // Mr. Jonas SCHMEDTMANN


const capitalizeName = function(name) {
  const names = name.split(' ');
  const namesUpper = [];

  for(const n of names){
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas Schmedtmann');
capitalizeName('brijesh rajput');
// Challenge:- Think another way to capitalize a word. 
// solution:- Ig, we can use replace method and only replacing first letter to an uppercase if it is in lowecase. see above e.g:- 👆


// Padding a String:- It means, to add a number of characters ,to the string, untill the string, has a certain desired length.
const message = 'Go to gate 23!';
console.log(message.padStart(25,'+')); // +++++++++++Go to gate 23!    ====> Result string length is 25 
console.log('jonas'.padStart(25,'+')); // ++++++++++++++++++++jonas
console.log(message.padStart(25,'Hello How are You?')); // Hello How aGo to gate 23!
console.log(message.padStart(25,'+').padEnd(35,'+')); // +++++++++++Go to gate 23!++++++++++  ===> result length is 35 where 10 '+' are padding at the end of string of 25 length. 
console.log('jonas'.padStart(25,'+').padEnd(30,'+')); // ++++++++++++++++++++jonas+++++
// padStart 👉 This will add some characters to the begining of the string. 1st argument is the length of the string after the padding & 2nd argument is the character which we want to do pad.
// padEnd 👉 This will add some characters to the ending of the string.

// imp: Real world Example of padding:- 
// when you see a credit card number on the internet, you never see the entire number. Usually, we see the last 4 digits and the rest is mask with some symbol.
// Implementing this function which actually does masking:-
const maskCreditCard = function(number) {
  // const str = String(number);
  const str = number + ''; // another easier way to convert number into a string.
  const last = str.slice(-4); // last four digits of a credit card number wil be taken. //imp: 🌟🌟🌟⭐⭐
  return last.padStart(str.length, '*');
}
console.log(maskCreditCard(12345678)); // ****5678
console.log(maskCreditCard(1234567891234566789)); // ***************7000
console.log(maskCreditCard('564892522357891562247')); // *****************2247
// @me:- I will use for loop and replace all the charcters upto last 4 digits. ===> TC=O(n)    Whereas,👆 Here It's very simple.


// Repeat Method:- It allows us to repeat the same string multiple times. @me:- Ig, we can do this using padStart() & padEnd() Method, if length of final string is larger.
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5)); // Bad waether... All Departues Delayed... Bad waether... All Departues Delayed... Bad waether... All Departues Delayed... Bad waether... All Departues Delayed... Bad waether... All Departues Delayed... 

// imp: 🌟🌟⭐⭐✨
const planesInLine = function(n) {
  // wrong syntax ⛔ 👇
  // console.log(`There are ${n} planes in line ${'✈'.repeat(${n})}`);
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
}
planesInLine(5); // There are 5 planes in line ✈✈✈✈✈
planesInLine(3); // There are 3 planes in line ✈✈✈
planesInLine(12); // There are 12 planes in line ✈✈✈✈✈✈✈✈✈✈✈✈
// imp: Check all the string Methods in MDN website ✨✨✨
*/


// ================================================ Coding Challenge #4 ====================================================================
/* @me:- Without DOM or UI input. Using Hardcoded Data. Ig, Here i forgot to make 1st word in lowercase. see Some_Variable example.
const capitalizeWord = function(word){
  // console.log(typeof word);
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
const underscore_caseToCamelCase = function(listUnderscore_case) {
  const listCamelCase = [];
  for(const word of listUnderscore_case){
    
    //converting underscore_case to a CamelCase
    const temp_word_array = word.split('_');
    // Now, capitalizing the all word of temp_word_array except the first word.
    // for(let i=1; i<temp_word_array.length; i++) temp_word_array[i].replace(temp_word_array[i][0], 'A'); 👉 wrong syntax 🚫⛔
    for(let i=1; i<temp_word_array.length; i++){
      temp_word_array[i] = capitalizeWord(temp_word_array[i]);
    } 
    listCamelCase.push(temp_word_array.join(''));
  }
  return listCamelCase;
}
// const listCamelCase = ['Hello', 'Brijesh', 'Kumar', 'Rajput'];
const listCamelCase = underscore_caseToCamelCase(['underscore_case', 'first_name', 'Some_Variable', 'calculate_AGE', 'delayed_departure']);
for(let i=0; i<listCamelCase.length; i++){
  // console.log(`${listCamelCase[i]}, '✅'.repeat(i+1)`); 👉👉 Wrong syntax 🚫  //imp: Those thing which is variable should be in ${} this.
  console.log(`${listCamelCase[i]}    ${'✅'.repeat(i+1)}`);
}
*/
/* //imp: start 
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// TestData:-
// underscore_case
//  first_name
// Some_Variable 
//   calculate_AGE
// delayed_departure

// wrong syntax 👇👇👇
// document.querySelector('button').onclick(this, {
//   return console.log('Hello');
// })

document.querySelector('button').addEventListener('click', function(){
  const text = document.querySelector('textarea').value;
  // console.log(text);
  const rows = text.split('\n');
  // console.log(rows);

  for(const [i, row] of rows.entries()){ //imp: 👈👈 see syntax
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    // console.log(output);

    // console.log(output.padEnd(20,' ')); // We if want to add only empty space at end then we can omit the 2nd part. see this 👇👇👇
    // console.log(output.padEnd(20)); //same as above 👆👆

    // imp: Remember How we access current index in For-of loop ?  ===> see 👆👆 For-of loop syntax

    console.log(`${output.padEnd(20)}${'✅'.repeat(i+1)}`);
  }
});

// Given Input ---> Desired Output 
// underscore_case ---> underscoreCase
//  first_name ---> firstName
// Some_Variable ---> someVariable
//   calculate_AGE ---> calculateAge
// delayed_departure ---> delayedDeparture
// imp: There is also a For-in loop in JS. 
*/


// =================================================== String Method Practice ============================================================
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Required Output:- 👇
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)


const getCode = str => str.slice(0,3).toUpperCase(); //Arrow function  
console.log(flights.split('+'));
for(const flight of flights.split('+')){
  // console.log(flight);
  const [type, from, to, time] = flight.split(';');
  // console.log(type, from, to, time);
  // console.log(type);
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_',' ')} from ${from.slice(0,3).toUpperCase()} to ${getCode(to)} (${time.replace(':','h')})`.padStart(60,'-'); //if we give space in pad start instead of '-' then we don't need to pass 2nd argument.
  // const output = `${type.replaceAll('_',' ')} ${from.padStart(8,'from')} ${to.padStart(6,'to')} ${time.replace(':','h')}`; 👈👈 Wrong
  console.log(output);
}
// "slice()" Method is used to part of the word. see real world example above 👆👆👆






