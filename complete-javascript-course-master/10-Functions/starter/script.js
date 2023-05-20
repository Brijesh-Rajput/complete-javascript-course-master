'use strict';
// In this Section, We will learn Higher-Order-functions, Bind Method, clousers, etc...

// ============================================== Default parameters ==========================================================
/*
const bookings = [];
const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) { //ES6
    // Default parameters can contain any expression. see this price variable 👉 price = 199 * 1.2. //imp: We can actually use the values of the other parameters that we set before it. 🌟🌟🌟
    // Note: function(flightNum, price = 199 * numPassengers, numPassengers = 1) 👉 This will not work!  B'coz Js specifys this parameters in orders. And as it reaches to the price then it doesn't knows about the numPassengers. That's why it won't work.

    //ES5 👉 In ES5, We are making default parameters by using short-circuiting. like this 👇
    // numPassengers = numPassengers || 1;
    // price = price || 109;
    // we have learnt short-circuiting concept in previous section.

    const booking = { //Object literal syntax is used. 👉 learnt in previous section
        flightNum, // or flightNum: flightNum,   //imp: 
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}
createBooking('LH123'); // see output to understand the below 👇 To Understand How to skip an argument value ?
createBooking('LH123',2,800);
createBooking('LH123',2);
createBooking('LH123',5);

// How we basically skip, a default parameter that we want to leave at it's default:-
// imp: We can not skip the arguments when we call the function.👇
// for e.g.:- When we want to leave the numPassenger value as the default value but then specify the price value. 👉 We can not do this.
createBooking('LH123', 1000); // Here, 2nd argument is always the map with the 2nd parameter.
// imp: If we want to leave any parameter value then there is a nice trick 👉 we can simply specify "undefined" value for theat paramter which we want to leave and consider it's value as it's default value. This works b'coz:- Setting the parameter to "undefined" is the same thing as not even setting it. REMEMBER 🤔, so when we don't set a parameter{when we don't pass an argument into that parameter} then it will take the value of "undefined". so, specifying "undefined" is exactly the same. e.g.:- 👇
createBooking('LH123', undefined, 1000); // Now, value of 2nd parameter will be consider it's default value.
*/


// ===================================== How passing arguments works: Value v/s Reference =====================================================
/*
// REMEMBER 🤔 primitive v/s objects{reference} ?
// How primitives & objects work in context of functions ?

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739479284,
};
const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 24739479284){
        alert('Checked in');
    }else{
        alert('Wrong passport!');
    } 
}
checkIn(flight,jonas);

// We havw already learnt this reason in primitive v/s reference(ojects) 👇
console.log(flight); // LH234 👉 No change 
console.log(jonas); // {name: 'Mr. Jonas Schmedtmann', passport: 24739479284} 👉 passenger name is change which happens inside of the functions.

// flight variable is a primitive type. It's just a string. And as we pass that value into the function then the flightNum variable is basically a copy of that original value. so, flightNum contains copy and Not simple original value of the flight variable. same as this👉 flightNum = flight    flightNum is the completely different variable. Therefore, as we change it, it will not reflected on outside flight variable.
// jonas variable is an object type{reference type}. When we pass it into a checkIn() function, in that function it is called as passenger Ad when we change that passenger objects and we saw that jonas object was also affected by that change. B'coz:- When we pass a reference type to a function, What is copied ??? It's really just a reference to the object in the memory heap will copied.

// Is the same as doing ...
const flightNum = flight;
const passenger = jonas; // we are only copying only reference to that object in the memory heap But they both point to the same object in memory. As we manipulating the passenger objects, it is exactly the same as manipulating the jonas object. B'coz:- They both are the same object in the memory heap.

// imp: Summary:-
// Passing a primitive type to a function is really just the same as creating a copy, outside of the function. The value is simply copied.
// Passing an object to a function is really just like copying object. Whatever we change in a copy will also happen in the original.
// BE CAREFUL ALWAYS of this 👆 BEHAVIOUR


// Real life example:- Interaction of different functions with the same object can create some issues here.{REAL MISTAKES due to reference type.}
const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000000000);
}
newPassport(jonas);
checkIn(flight, jonas);


// imp:
// In programming, there are two terms that are used in all the time when dealing with function which is 1) Passing by value    and     2)Passing by reference 
// In Js, there is Only Passing by value Even though it looks like its Passing by reference. It doesnot have Passing by reference.🌟🌟🌟
// In c++, We can pass a refernce to any value instead of the value itself. We can also pass the reference of primitive. for e.g:- reference of value is 5 passed and then original value outside the function would be changed. This is called Pass by reference.

// As we have just learnt for objects, we do infact passed a reference. so, the memory address of the objects. However, that reference itself still a value. It's simply value that contains a memory address. see above flight example and its points 👆👆👆
// Basically, We pass a reference to the function But we do NOT pass by Reference. //imp:
*/


// ============================================ First-Class and Higher-Order functions ==========================================================
/*
// NOTES:- 👇⏬⬇
// First Class functions:-
// JS has the first class function which in technical term means that function are so called first citizens. 
//👉 JS treats functions as first-class citizens
//👉 This means that functions are simply values
//👉 Funtions are just another "type" of object
// Since, objects are values. functions are values too
// Since functions are values, we can store them in variables, etc...

//👉 store functions in variables or properties:-
const add = (a,b) => a + b; //function expression or arrow functions
const counter = {
    value: 23,
    inc: function(){ this.value++; }
};

//👉 Pass functions as arguments to OTHER functions:-
const great = () => console.log('Hey Jonas');
btnClose.addEventListner('click', greet); //EventHandler functions

//👉 Return functions FROM another functions
// REMEMBER 🤔 that functions are objects. And many types of object in Js have methods. for e.g. Array methods. Actuall, there are also function methods {Methodsthat we can call on functions}

//👉 Call methods on functions:
counter.inc.bind(someOtherObject); //bind() method 


// Higher-Order functions:-
// JS have first-class functions makes it possible for us to use & write Higher-Order function.
// Higher-Order functions:-
//👉 A function that receives another function as an argument, or a function that returns a new function, or both.
//👉 This only possible because of first-class functions.

//👉 Function that receives another function
const greet = () => console.log('Hey Jonas');
btnClose.addEventListner('click', greet); //addEventLister is a Higher-Order function. B'coz:- It receives another function which is greet(callback function) as an input. addEventListner will call the "greet" callback later as soon as the "click" event happens.
// We usually say that the function that is passed in is a Callback function that's b'coz the callback function will be called later by the Higher-Order function. see above e.g. 👆

//👉 Funtion that returns another function 
function count() { // 👈 "count" is a Higher-Order function
    let counter= 0;
    return function(){ //returned function
        counter++;
    };
}

// First-class functions is just a feature that a programming language is either has or donesn't have. All functions are values. There are no First-class functions in practice. It's just a concept.
// There are however Higher-Order functions in Practice which are possible b'coz the language supports the First-class functions.
*/


// ============================================== Functions Accepting Callback Functions ===================================================
/*
const oneWord = function(str) {
    // return str.replaceAll(' ','').toLowerCase();
    return str.replace(/ /g, '').toLowerCase(); //regular Expression is used
};
const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' '); //Destructuring asgn oprtr
    return [first.toUpperCase(), ...others].join(' '); //Spread oprtr 
};
// Higher-Order functions:-
const transformer = function(str, func) { //2nd argument will take a function, That's Why it is called as Higher-Order functions
    // return func(str);
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${func(str)}`);

    // Functions even have method and besides methods functions can even have properties. REMEMBER 🤔
    console.log(`Transformed by: ${func.name}`); //imp: Functions also have the properties and methods like an object. B'coz:- function is an another type of an object.
}
// console.log(transformer('Javascript is the best', upperFirstWord));
transformer('Javascript is the best', upperFirstWord); // In this transformer function, we are passing callback functions. i.e. upperFirstWord is a callback function.
transformer('Javascript is the best', oneWord); // oneWord is a callback function. This callback function is called by the "Transformer()" function.
// imp: 
console.log(transformer.name);
console.log(transformer.length);


// JS uses callback all the time 
const high5 = function() {
    console.log(`✋`);
}
document.body.addEventListener('click',high5); // high5{which is a callback function} is passed to an addEventListner function. In this case, callback function{high5} is also called as EventHandler or EventListner. Here, addEventListner is the Higher-Order function.

//imp:
['jonas', 'Martha', 'Adam'].forEach(high5); // ✋✋✋  b'coz:- We have 3 elements in an array and for each of them this callback(high5) is called.
// We will lear forEach() method in next section.

// Q. Why are callback function is so much used in JS & Why are they so helpful ???
// Ans:- 1) It makes it easy to split-up our code into more reusable and inter-connected parts.
//       2) callback function allows us to create abstraction. Abstration 👉 Hide the detail of some code implementation b'coz we don't really care about all that detail.
*/


// =============================================== Functions Returning Functions ==============================================================
/*
// imp: #example🌟🌟🌟
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    };
};
const greeterHey = greet('Hey'); // This greet() function will return a function which takes name as an argument. Therefore, Now this greeterHey() function will represent a function which is returned by the greet() function. 🌟⭐✨
console.log(greeterHey); //ƒ (name) { console.log(`${greeting} ${name}`); }
greeterHey('Jonas'); // Hey Jonas     👉 How and Why works ??? ==> It works b'coz of clousers.
greeterHey('Steven'); // Hey Steven   👉 How???  see above explanation 👆

// 🌟✨✨👇
greet('Hello')('Jonas'); // Hello Jonas  // This works b'coz:- greet('Hello') returns a function and then, that function is called by using ('Jonas') argument.🌟⭐✨

// imp: Challenge:- Rewrite the above greet() function using arrow functions.
const greetArrow = greeting => name => console.log(`${greeting} ${name}`); //One Arrow function returning another Arrow function. //imp:🌟⭐✨
// name => console.log(`${greeting} ${name}`); 👉 This represents another function. see above 👆
greetArrow('Hi')('Jonas'); // Hi Jonas
*/

// ============================================= The Call And Apply Methods =================================================================
// Q. How we set "this" keyword manually ? 👉 We will learn this.

/*
const lufthansa = { // lufthansa is biggest airline of european country.
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

    // book: function(){}  or 👇 this syntax
    book(flightNum, name) { // writing methods using Object literal syntax
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight:`${this.iataCode}${flightNum}`, name}) //imp: see name property syntax and bookings arrays in output.
    },
};
lufthansa.book(239, 'Jonas Schmedtmann'); // Jonas Schmedtmann booked a seat on Lufthansa flight LH239
lufthansa.book(635, 'Jonas Smith'); // Jonas Smith booked a seat on Lufthansa flight LH635
console.log(lufthansa); // {airline: 'Lufthansa', iataCode: 'LH', bookings: Array(2), book: ƒ}
console.log(lufthansa.bookings); 
*/

/*
const lufthansa = { // lufthansa is biggest airline of european country.
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

    // book: function(){}  or 👇 this syntax
    book(flightNum, name) { // writing methods using Object literal syntax
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight:`${this.iataCode}${flightNum}`, name}) //imp: see name property syntax and bookings arrays in output.
    },
};
lufthansa.book(239, 'Jonas Schmedtmann'); // Jonas Schmedtmann booked a seat on Lufthansa flight LH239
lufthansa.book(635, 'Jonas Smith'); // Jonas Smith booked a seat on Lufthansa flight LH635
console.log(lufthansa); // {airline: 'Lufthansa', iataCode: 'LH', bookings: Array(2), book: ƒ}
console.log(lufthansa.bookings); 


const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
    // Don't copy the same book method of lufthansa in eurowings airline b'coz:- It's a bad method. Instead of that do this 👇 Create new variable store the book method into that variable.
};

// imp:
const book = lufthansa.book;
console.log(book);

// book(23, 'Sarah williams'); // Error ??? Why ??? 
// @me 👉 ig, B'coz:- book variable represents book method of lufthansa object. lufthansa.book represents book() method of lufthansa method. so, it's reference is store as a value into a book variable. And whenever we call that book() method using book variable, we didn't mention any object or which object calls that method(). //imp: 🌟⭐✨  👈👈👈👈👈👈👈⛔⛔WRONG EXPLANATION🚫⛔

// todo: As function is an another type of an object and it's just a value then why copy is happening instead of refering to the same thing using a reference value ????????????? 👆👇

// by Jonas 👉 This happens B'coz:- book() function is now just a regular function call. And we have learnt that, in a regular function call the "this" keyword points to undefined(atleast in 'strict' mode). //imp:
// This book() function is no longer book() method of lufthansa object. It's a separate function & It's a copy of lufthansa.book() method. And in Next line, It's a regular function call. Therefore, "this" keyword of inside of that points to undefined.
// imp: "this" keyword depends on that the 'How the function is called'.


// todo: How do we actually fix this problem ??? How we tell the Js that we want create booking on the new eurowings airline ???
// We need to tell JS explicitly what the "this" keyword will be ?
// If we want to book luftansa flight then "this" keyword should point luftansa But if we want to book a eurowings flight then the "this" keyword should point to eurowings. How we tell Js explicitly or manually ?  What the "this" keyword should look like ?
// imp: To do that 👆 There are three function method:- They are 1)Call   2)Apply   3)Bind

// Call Method:-  1st argument defines that what we want to describe the "this" keyword.
book.call(eurowings, 23, 'Sarah williams'); // A function is really just an object and an objects have methods & therefore function can have methods too. call() method is one of them.
// This time we didn't call the book function itselfs instead we call the call() method and then this call() method which will call the book() function with the "this" keyword set to eurowings.
// This allows us to manually & explicitly set the "this" keyword of any function that we want to call. And then all the arguments after the 1st arguments are simple the arguments of the original function.
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);


// Apply Method:- It is similar method to call method AND Actually, It does the same thing as Call Method.
// The only difference between apply method and call method is that apply() method does not receive a list of arguments after the this keyword But instead it can take an array of arguments.
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
// 👆 This apply method is not that used anymore in modern Javascript. B'coz:- Now, we actually have the better way of doing the exact same thing. That is 👇
book.call(swiss, ...flightData); // We have used a spread oprtr.   // It is same as book.apply(swiss, flightData);
// It allows us to explicitly define the "this" keyword in any function that we want.



// =================================================== The Bind Method ===================================================================
// Bind method:- It also allows us to explicitly define the "this" keyword in any function that we want. 👉 More important than call() and apply() methods 🌟🌟
// Just like the call() method, It also allows us to manually set the "this" keyword for any function call.
// Difference between call() and Bind() :- Bind() doesnot immediately call the function instead It return the new function where the "this" keyword is bound. It sets to whatever the value passed into bind().

// book.call(eurowings, 23, 'Sarah williams');
book.bind(eurowings); //This will not call the book() function instead it will return a new function where the "this" keyword will always be set to eurowings.
const bookEW = book.bind(eurowings);
bookEW(23, 'Steven williams'); //This now looks like the normal function call that's b'coz:- this function is already "this" keyword set to eurowings

const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookLH(11, 'Brijesh');
bookLX(12, 'Rahul');
book.bind(lufthansa)(18, 'Vikas'); // using currying function🌟

// In the call() method, we can pass the multiple arguments beside the "this" keyword. In the bind() method, we can actually do the same. 👇
const bookEW23 = book.bind(eurowings, 23); // flightNum is already set 
bookEW23('Jonas Schmedtmann'); // flightNum is preset 
bookEW23('Martha Cooper');

// @me:-
const bookEW24 = book.bind(eurowings, 24, 'Kartik');
bookEW24();

// Situation where we can use bind() method :-  e.g. 👇
// When we use objects together with eventListner.
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this); // "this" keyword point to the button element before using the bind() method.

    this.planes++;
    console.log(this.planes);
};
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); // imp: In an eventHandler Function the "this" keyword always point to the element on which that handler is attached to. 🌟🌟🌟 
// "this" keyword is really set dynamically. 👇see both output👆
// lufthansa.buyPlane();

// In this above handler function, we still need to "this" keyword to point to the lufthansa object itself. Therefore, we have to manually define the "this" keyword.  //todo: Q. How we should do that ? should we use call() method or the bind() method ?
// imp: ans:- We need to pass in a function here and NOT to call it. And we already know that the call() method calls a function. But that's not we need. Therefore, we use the bind method B'coz:- we already know that the bind() method returns a new function after setting the value of "this" keyword.
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application :- Another usecase of the bind() method
// Partial application means we can preset parameters.
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1,200)); // rate is 10% 

const addVAT = addTax.bind(null, 0.23); //rate = 23% fixed   ===> 1st argument for the bind is the "this" keyword but in this case we don't care about at all. so, we say null{It can be any other value b'coz nothing will happen with it BUT It's a standard to use a null}. This is same as below 👇👇👇
// addVAT = value => value + value * 0.23; 
console.log(addVAT(100)); // value is passed b'coz rate is preset(fixed)
console.log(addVAT(23));
// NOTE:- Here, Order of the arguments is important in partial applications. 

// imp: This can be easily done with default parameters. BUT, this is actually different than the default parameters 🌟 B'coz:- This creating a new more specific function based on the general function which is the addTax function.


// imp:👇👇👇👇  NOTICE 👆👆👆👆  Both the result and their code 🌟✨
// Challenge:- Rewrite the above example BUT using the technique of one function is returning the other function.
const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/


// ============================================== Coding Challenge #1 ==================================================================
/*
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        const ans = Number(prompt(`${this.question} \n${this.options.join('\n')}\n(Write option number)`));  
        // todo: Task: How to show option of a Question ?? 
        //{ for(const [indx, ans] of this.options.entries()) indx: ans  👈 Wrong!
        
        console.log(ans);

        // Register answer

        // @me 👇
        // if(ans>=0 && ans<=3) this.answers[ans]++;
        // else console.log(`Invalid answer!`);

        // Jonas 👇
        typeof ans === 'number' && ans < this.answers.length && this.answers[ans]++; // 🌟✨🌟 AND short-circuiting is used! instead of if-else
        console.log(this.answers);

        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        // console.log(type, typeof type);
        if(type === 'array'){
            console.log(this.answers);
        }else if(type === 'string'){
            console.log(`Poll results are ${this.answers.join(', ')}`); // 🌟✨🌟
            // console.log(`Poll results are ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]}, ${this.answers[3]}`); 👈 me 
            // "Poll results are 13, 2, 4, 1"
        }
    },
};
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
// poll.registerNewAnswer();

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
poll.displayResults();
poll.displayResults.call({answers: [5, 2, 3]}); // If we want to have the different "this" keyword then we have to use call() method. 👉 For that, we need an object which contains the answers property. Otherwise, there is no way for this method to call this.answers
poll.displayResults.call({answers: [5, 2, 3]}, 'string'); // object is passed for "this" keyword and called with 1 argument for type.
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}); // object is passed for which "this" keyword will represents.
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string');
// all these 👆 works b'coz :- displayResults is looking for this.answers property. 🌟⭐✨


// imp: for hint 👇
// const arr = [1,2,3,4,5,6,7,8,9];
// arr.entries() 👉 used in for-of loop so that we can also use index and as well as element of an array in For-of loop.

*/


// ======================================== Immediately invoked function expressions(IIFE) ==============================================
// Sometimes in JS, We need a function that is only executed only once and then never again. A function that disappears right after it's call once.
// 👆👈 We need This Technique later. For e.g. in async/await ✨⭐🌟
// todo: How could we do that ??? see this 👇
const runOnce = function(){
    console.log('This will run again');
}
runOnce();
runOnce();

// function() { // Error!   Uncaught SyntaxError: Function statements require a function name
//     console.log('This will never run again');
// }

(function() {
    console.log('This will never run again');
}); // Now, JS will think that, This is just an expression, We can do this by simply wrapping into paranthesis. Now, we transform stmt into an expression. This function didn't executed yet. We never call it. It's just a function value/expression.

// This 👇 is called immediately invoked function expression(IIFE)
(function() {
    console.log('This will never run again');
    const isPrivate = 23; // This variable is encapsulated inside of this function scopes. 
})(); // We immediately call the function value.
// console.log(isPrivate); // Uncaught ReferenceError: isPrivate is not defined 👈 ERROR

() =>  console.log('This will ALSO never run again'); //NO ERROR
(() =>  console.log('This will ALSO never run again'))();
// These 👆 are the Two ways of writing immediately invoked function expression.

// Why was this pattern actually invented ?
// We already know that functions create scopes. Once scope doesnot have access to variables from an inner scope.
// for e.g. We donot have access to any variables that are defined in the scope of any of these functions here. BUT inner scope would have access to anything defined outside in the global scope.
// All data defined inside the scope is private. we also say that this data is encapsulated.

// Q. What also creates scope in ES6 ?
// Ans:- variables declaraed with let or const create a own scope inside a block. see e.g. 👇👇👇
{//🌟⭐✨
    const isPrivate = 25; // We can not access this variable outside the block b'coz it is declared using const & inside a block.
    var notPrivate = 50; // This variable is declared with var. Therefore, it is completely ignore this block essentially. 
}
// console.log(isPrivate); //Error 
console.log(notPrivate);
// And  this is the reason why modern JS, immediately invoked function expression(IIEF) are not that used in anymore. B'coz:- If all we want is to create a new scope for data privacy, all we need to do is to just create block like this 👆
// Review: Watch this part AGAIN 👆👆 To understand this last line.🌟✨
// Execute a function just once, Then the IIFE(immediately invoked function expression) pattern is still way to go, even now with modern JS.
// imp: You will see great use-case of IIFE later in this section.



// ======================================================== Closures ==================================================================
/* //🌟⭐✨ You will see lots of theory concepts.
// A closure is not the features that we explicitly used. So we don't create closures manually like we create a new array, or a new function.
// A closure simply happens automatically in certain situation, we just need to recognize those situation.
const secureBooking = function() {
    let passengerCount = 0; // This variable cannot be manipulated & accessed from the outside.

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};
const booker = secureBooking();
console.log(booker);
booker(); // 1 passengers   // todo: How ??? //imp: ==> This happens due to closures.
booker();
booker();
console.log(booker.name); // "" 👉 Empty string{No name}

// Some Theory Notes {Mechanism behind the closures} 👉 See video
// closure makes a function, remember oll the variables that existed at a functions birth place essentially. for e.g:- secureBooking is the birth place of booker function{that function which is returned by the secureBooking function}. so, this returned function{booker function} remembers everything at it's birth-place by the time, it was created. 

// 👇👇👇
// Secret of closures:- Any function always has access to the variable environment of the execution context in which the function was created even after that execution context is gone.
// Closure:- Variable Environment attached to the function, exactly as it was at the time and place the function was created. 🌟⭐✨
// Closures has priority over scope chain ✨✨✨

// Closures Summary:-
// 👉 A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone; or in Otherwords, even after the function to which the execution context belongs has returned.
// 👉 A closure gives a function access to all variables of its parent function{The function in which it is defined}, even after that parent function has returned. The function keeps a reference to its outer scope even after that outer scope is gone, which basically preserves the scope chain throughout time.
// 👉 A closure makes sure that the function does never loose connection to the variable that existed at the function's birth place. It remember the variables even after the birth place is gone.
// 👉 Analogy :- A closure is like a person who doesn't loose connection to their home town. In this analogy,  the person is the "function" and the home-town is the functions "parent scope" AND the function then doesn't loose the connection to the variables stores in this parent scope.
// 👉 A closure is like a backpack that a function carries around whenever it goes. This backpack has all the variables that were present in the environment where the function was created. THEN, whenever a variable can't be found in the functions scope, JS will look into the backpack and take the missing variable from there.
// 👉 NOTE:- We do NOT have to manually create closures, this is a JS feature that happens automatically. We can't even access closed-over variables explicitly. A closure is NOT a tangible JS object. so, We cannot just read into a closure and take variables from it 👉 That's impossible b'coz A closure is just an internal property of a function. We can observe that a closure happens b'coz functions magically keep having access to varoiables that should no longer exist BUT we can not directly access this variables. However, What we can do ?? 👉 we can actually take a look at its internal property.{see 👇 this example}
console.dir(booker);  // Go inside internal scopes property, You will see closure which is coming from secureBooking ✨⭐🌟 AND this closure is the variable environment of the secureBooking function. 👉 This is being preserve by the closure.
// This internal scopes property is basically the variable environment of a booker function.
// imp: Whenever You will see double brackets like [[Scopes]], That means It is an internal property which we cannot access from our code.👆👆👆 See above code line, Where you will see the internal scopes property of booker function. 
*/


// ======================================================= More Closure Examples ===========================================================
/*
// Both of these 👇 examples are going to demonstrate that we don't need to return a function from another function in order to create a closure.
// closure also create when we don't return a function from another function 👇👇 See example 
// Example 1 :- 
let f;
const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2); 
    };
};
const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    }
}
g();
f(); // 46
console.dir(f); // To see closure 👉 go to inside internal scopes property & then closure & then variable a 

// Re-assigning f function 
h();
f(); // 1554
console.dir(f); // To see closure 👉 go to inside internal scopes property & then closure 
// From above examples, We can say that:- closures can change as the variable is re-assigned.



// Example 2 :- Timer will use to see a closure. Here, also we don't need to return a function to see a closure in action
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    // ✨🌟⭐
    setTimeout(function(){ //This is a callback function.
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000); //Whatever the code which is inside of this function will be executed after 1000 millisecond.
    // 👆 This 2nd argument of setTimeout() should be in millisecond. And we will pass wait in seconds. Therefore, We multiply wait * 1000 to get in millisecond.

    console.log(`Will start boarding in ${wait} seconds`);
}

// Closure does have priority over the scope chain. See Proof 👇
const perGroup = 1000; // If scope chain have priority over the closure then this above callback function of setTimeout function would use this global variable. B'coz:- We can imagine here that, This callback function is basically being executed in global scope. 👉 This will proof that, closure priority is over the scope chain. That's why it uses the perGroup value n/3 NOT the 1000. See Output.

boardPassengers(180, 3);
// 👆👆 Here, also closure is used. B'coz:- code inside of callback function of setTimeout() function will execute after 3 seconds till then all code after will execute. And execution of boardPassenger will finish till wiating of 3 seconds and It's execution context will come out from the call stack. And as 3 second happens{after 3 seconds}, code inside of callback function will execute. BUT NOTE:- How it will access the variable 'n' & 'perGroup' ?? ==> It happens due to closure.🌟@me 
// Closure also includes arguments of a function b'coz:- They are local variable in the function. see 👆 this example.
*/

/*
// About Timer related example :- 
setTimeout(function(){  // This function is a callback function 🌟🌟
    console.log('Timer: You saw this line after 1000ms');
}, 1000);


// @me:-
setTimeout(function(){
    let i = 1; 
    while(i<=5){ console.log('Timer'); i++; }
}, 1000);
console.log('Hii. You saw this earlier ?');


// todo: Doubt in this 👇
let x = 1;
while(x<=500){
    setTimeout(function(){
        console.log(`Timer ${x} 👉 You saw after 1000ms`);
    },1000);
    i++;
}
*/


// =================================================== Coding challenge #2 ============================================================
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click',function(){
        header.style.color = 'blue';
    });
})(); 
// Why did this work ?? h1 tag color change from red to blue ??  AND How does this callback function get access to header variable ??
// NOTE:- Here also, closure is used. HOW???
// Ans:- As we know that this function will execute only once in a time. It's a Immediately invoked function expression(IIFE).
// so, This above function will start executing and during execution this callback function will come BUT it will not execute untill user doesnot click on the body element. So, execution of this function finished. And after that when user click on the body elemnt this callback function of IIFE function will start executing But during execution It is able to access the header variable due to closure and Complete it's execution.
// In this way, closure is working here. That's why Jonas has emphasis the header variable & NOT to select again h1 element.






















