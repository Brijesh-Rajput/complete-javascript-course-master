'use strict';

// =================================== Activating Strict Mode:- =============================================================
// 'use strict'; 

// strict mode is a special mode in js which makes it easierfor us to write secure js code.
// strict mode stmt must be first stmt to activate it for entire script.(commands are allowed before strict mode.)
// we can also activate strict mode for a particular block or particular function.

//TODO: https://youtu.be/luq6aflInTQ ===> Watch this.
// with strict mode we're witing secure code and avoid accidentle errors.(it avoids bugs into our code.)
//1. It does certain things.
//2. It creates visible errors for us in a certain situation in which without-strict mode(sloppy mode) js would simply fail silently without letting us know that we did a mistake.

/* 1. use of strict mode e.g:- Avoiding bug
let hasDriversLicense = false;
const passTest = true;
if(passTest) hasDriverLicense = true; //NOTE:- name of the variable is incorrect.
if(hasDriversLicense) console.log('I can drive :D');

// 2. use of strict mode e.g:- introduce a shotlist of variables name that are reserved for features that might be added to a language a bit later.
// const interface = 'Audio'; 
// const private = 534;
// const if = 29;
*/

// ========================================================== Functions:- ======================================================================
// function hold one or more complete line of codes. use it over again and agian.
/*
function logger(){
    console.log('My name is Brijesh');
}
logger(); //invoking or calling or running the functions
logger();
logger();

function fruitProcessor(apples, oranges){ //imp: no need to use let,var
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

fruitProcessor(5,0);
//todo: Q. How to print the newline'\n'. like endl,'\n' in c++ ?
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

// NOTE:- note the parameters which are given and there output. //todo: why it doesn't gives an error ? Here, How function binding is happening ?
fruitProcessor(); //imp: It doesn't gives an error.
logger(4); //imp: It doesn't gives an error.

//imp NOTE:- this is an Error.
// function fun1(let x, var y){
//     console.log(x,y);
// }


// imp:  DRY(Don't repeat Yourself principle) ==> to write clean code in programming. Keep your program DRY. 
// console.log() is also a function but a built-in function.
// const num = Number('23');  // ==> Built-in function. (write num in console to see its output.)
*/


// ================================================== Function Declarations v/s Expressions:- =====================================================
// In js, there are different ways of writing functions.

// Function Declarations:-   already seen in last/previous code/lecture/section.
// e.g:-
/*
function callAge1(birthYear){  //Parameter :- It's a Placeholder in the function.
    //this birtYear is a local variable parameter which available inside this function.
    // const age = 2037 - birthYear;
    // return age;
    return 2037  - birthYear;
}
// console.log(birthYear); //Error:- birthYear is not defined. ==> That means, parameters of a function is a local variable to that function.
const age1 = callAge1(1991); //Argumnets:- Actual value that we used to fill that placeholder that is parameter.
console.log(age1);


// Function Expressions:- //Function without Name(also called as Anonynms functions.)
const calcAge2 = function (birthYear){
                    return 2037 - birthYear; //Remember:- Expression produces a value. That's why, this return stmt is assign to this calcAge2 variable. In js, Functions are just a value as like Number,string or boolean value.
                    // ===> (@me)ig, we should use this(function expressions) when function produces a value. 
                }
// Now, calcAge2 is a function.
const age2 = calcAge2(1991);
console.log(age1, age2);
*/
/* @me:- 
const me = function(){
    console.log("Hello");
}
me();
*/

//Q. Difference between Function Declarations and Function Expressions ?
//Ans:- Main Practical difference is That :- we can call Function declarations before their(function) defination(defined) in the code. 
// e.g:-
/*
// Function Declarations
const age1 = callAge1(1991); 
console.log(age1);
function callAge1(birthYear){ 
    return 2037  - birthYear;
}
*/


// Function Expressions
/*
const age2 = calcAge2(1991);  //===> Error:- Cannot access 'calcAge2' before initialization. //imp: Internally, this happens b'coz of the process called hoisting.
console.log(age1, age2);
const calcAge2 = function (birthYear){ //Here, Variable(calcAge2) stores a function.
    return 2037 - birthYear;  
}
*/

// Q. which of the two types of functions should i use when i write my own function ? Ans:- depend on personal preference. (jona's prefer :- function expression  ==> define function first at top then call it. It defines structure of code.) 


// =================================================== Arrow functions:- =======================================================================
//This is 3rd type of functions which is added in es6. Arrow functions is a special form of Function expressions that is shorter and stay for fatser to write.

/*
//Function Expressions:-
const calcAge2 = function (birthYear){ //Here, Variable(calcAge2) stores a function.
    return 2037 - birthYear;  
}

//Arrow functions:-  Eassier and Faster to write for One Line of function.(for atmost parameter and one stmt of a function)
const calcAge3 = birthYear => 2037 - birthYear;
// birthYear => 2037 - birthYear;       --->  functionInput => returnValueOfFunction;
// Benefits:- 1. Don't need {} braces to define a code blocks.                                                                                
//            2. Actually, return will happens implicitly without writing return keyword explicitly.
const age3 = calcAge3(1991);
console.log(age3);
*/

/*
const me = () => console.log("Hello");  //() ==> used to represent that no input is taken.
me();
*/
/*
const me1 = () => { console.log("Hello me1"); console.log("Hii me1");}
me1();
*/
// imp: my suggestion:- use this Arrow function when we have to write one line of function. ===> just like a lambda function.


/*
//Q. can we call the function before writing arrow function definations ?
//Ans:- NO, we can use this only in function declarations type.
//e.g:-
me2();
const me2 = () => console.log("Hii me2"); //Error:- cannot access 'me2' before initialization. is it s run-time error or compile-time error ?
*/

/*
const yearsUntillRetirement = birthYear => { //one parameter is given to this function which is birthYear.
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement; //Explicitly we have to write if we have more than one line of code.
}
console.log(yearsUntillRetirement(1991)); 


//shortcut:- select variable and write paranthesis then vscode will wrap the variables into paranthesis on both side.
const yearsUntillRetirement1 = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} y`;
}
console.log(yearsUntillRetirement1(1991, "Brijesh"));
console.log(yearsUntillRetirement1(1980, "Bob"));
*/

/* //todo: 
const me3 = someValue => "write something such that it performs some operation and return some value also in one line of code";
me3();
console.log(me3());
*/

//Function declaration v/s Function expression v/s Arrow Function 
// imp:  Arrow functions donot get a "this" keyword.
//todo: What about Function declarations and Function expression ? are They get "this" keywords or not ?


// =========================================== Functions Calling Other functions:- ======================================================
/*
function cutFruitPieces(fruit){
    return fruit*4; //cut a fruit into 4 pieces.
}

function fruitProcessor(apples, oranges){
    //consider, fruitProcessor can only make juice with smaller fruit pieces. Now, it requires other machine which cut the fruits before making juice.
    const applePieces = cutFruitPieces(apples); //function calling other function. //imp: possible in js. NOT possible in c++ except we can use lambda functions. //todo: cnf it:-  Ig, in python also function calling other function also happens. like generator/enumerator.
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
fruitProcessor(2,3);
console.log(fruitProcessor(2,3));
*/

// =========================  Reviewing Functions:-(revising all function's whatever we have learn't till now.):- ================================
/*
//Q. convert this below function into Normal function:-
const yearsUntillRetirement1 = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} y`;
}
//Ans:-
const yearsUntillRetirement2 = function (birthYear, firstName) {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} y`;
}
*/

//------------------//

/*
const calcAge = function(birthYear){
    return 2037 - birthYear;
}
// function expression 👆👇
const yearsUntillRetirement3 = function (birthYear, firstName) { //this birtYear & firstName are local variable.
    // @me:- we can also make a global variable outside the function, for this functions.
    const age = calcAge(birthYear); //function calling other functions.
    const retirement = 65 - age;

    if(retirement > 0){
        return retirement;
        // return `${firstName} retires in ${retirement} y`;
    }
    else{
        console.log(`${firstName} has already retired 🎉  ---> Top stmt`);
        console.log(`${firstName} has already retired 🎉  ---> Top stmt`);
        return -1; //this return keyword immediately exit the function.
        console.log(`${firstName} has already retired 🎉  ---> Down stmt`); //this stmt will not affect anything.
    }
}
console.log(yearsUntillRetirement3(1991, 'jonas'));
console.log(yearsUntillRetirement3(1970, 'Mike'));
*/


/*
// 3 different ways of writing functions but they all work in similar ways:-
//Function declaration:- function(that) can be used before it's declared.
function calcAge(birthYear){
    return 2037 - birthYear;
}
//Function expressions:- Essentially a function value stored in a variable.
const calcAge = function(birthYear){
    return 2037 - birthYear;
}
//Arrow function:- Great for a quick one-line functions. Has no this keyword(more later...)
const calcAge = birthYear => 2037 - birthYear;
*/

// imp: ig:- If we are not returning anything then function return undefined.
// console.log(console.log("Hello"));

// we call the function with using () paranthesis. Without the paranthesis, the function is just a value. e.g:-const age = calcAge. ---> it is just a value.



// ================================================= Coding Challenge 1 solution:- ===========================================================

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3; //No need to write return keywords. as we have only one stmt so, it will be implicitly return 

/* @me:-
const me = () => console.log("Hello"); //it return console.log("Hello"). i.e. whatever we have written in this arrow function will be returned for one line function.
console.log(me());
o/p:-  Hello   undefined
*/

// DATA 1:- Dolphin:- 44,23,71  Koalas:- 65,54,49
// const dolphinAverage = calcAverage(44,23,71);
// const koalasAverage = calcAverage(65,54,49);

/*
// DATA 2:- Dolphin:- 85,54,41  Koalas:- 23,34,27
const dolphinAverage = calcAverage(85,54,41);
const koalasAverage = calcAverage(23,34,27);

function checkWinner(avgDolphins, avgkoalas){
    if(avgDolphins >= 2*avgkoalas)
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgkoalas})`);
    else if(avgkoalas >= 2*avgDolphins)
        console.log(`Koalas win 🏆 (${avgkoalas} vs. ${avgDolphins})`);
    else console.log(`Match Draw! No team wins...`);
}

checkWinner(dolphinAverage, koalasAverage);
*/


// ============================================================ Introduction to arrays:- =========================================================
// Arrays and objects are the 2 most imp data-structure in js.
// Give plural name to an array b'coz it contains multiple value.

// Different ways to create an array.
/*
const friends = ['Michael','Steven','Peter']; //-->called as literal syntax. //It looks like list(in python) => there also [] use. 
console.log(friends);

const y = new Array(1991,1984,2008,2020); //array is created using a function called Array.
console.log(y);

console.log(friends[0]); //0-based indexing array.
console.log(friends[2]);
console.log(friends.length); //length is a property of an array.
console.log(friends[friends.length-1]); //last element of an array.
console.log(friends[-1]); //imp: @me

// imp: NOTE:- we know that, value of variable with const cannot be change. But here, it happens:-
friends[2] = 'Jay'; //Mutate the array
console.log(friends);
//imp: NOTE:- Only Primitive values are immutable when const is used. BUT, array is not a primitive value.                                          we can mutate the arrays even thoughthey would declare with const. BUT, we cannot do replace the entire array.
// e.g:-
// friends = ['Bob','Alice'];  //Error:-Assignment to constant variable.  ~~~> This is not possible.



// An array can hold the values with different type all at the same time.
// e.g:-
const firstName = 'jonas';
const jonas = [firstName, 'Schmedtmann', 2837-1991, 'teacher', friends]; //In each position js simply expects an expression. This is 2837-1991 is perfectly fine.
// We can also put another arrays inside of an array.
console.log(jonas);


// Exercise:-
const calcAge = function (birthYear){
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

/*
//Wrong way!
console.log(calcAge(years));  // o/p:- NaN
// calcAge(years);
// NOTE:-
console.log(years + 10, "==> This array(years) is converted into string");
console.log(years - 10); // o/p:- NaN
*

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])]; //we can write this b'coz:- In js, each position of an array expect an expression.
console.log(ages); 
*/


// =============================================== Basic Array Operations(methods):- ============================================================
/*
const friends = ['Michael','Steven','Peter'];

//ADD Element:-
const newLength = friends.push('jay'); //push functions() returns array.length after pushing the element into an array. 
console.log(newLength, friends);
console.log(friends.push('Brijesh'), friends);

friends.unshift('john'); //unshift adds an element to an array at first poition and it also returns array.length as push() does.
console.log(friends);


//POP Element:-
const popped = friends.pop(); //Removes last element and returns it.
console.log(popped, friends);

friends.shift(); //Removes first element and returns it.
console.log(friends);

//------------------

friends.push(23);
console.log(friends);

// index of element return if element found. Else it returns -1 if not present:-
console.log(friends.indexOf('Steven'), friends.indexOf('Bob'));

// modern methods(es6)==> includes() ==> return true(instead of index) if element is present in an array else return false:-
console.log(friends.includes('Steven'), friends.includes('Bob'));
console.log(friends.includes('23'), friends.includes(23), friends.indexOf('23'), friends.indexOf(23)); 
// includes() ===> it is testing with strict equality which means it doesn't do type-coercion. //Todo: What about indexOf() ?? 
// Acc. to experiment, indexOf() is also testing with strict equality.

// usefull applications of includes() method:-
if(friends.includes('Steven')){
    console.log('You have a friend called Steven');
}else{
    console.log(`You don't have a friend called Steven`);
}
*/



// ================================================ Coding challenge 2 Solutions:- ============================================================
/*
//Function definations:-
function calcTip(bill){
    // return bill>=50 && bill<=300 ? 0.15*bill : 0.2*bill; //Ternary(conditional) operator
    if(bill>=50 && bill<=300) return 0.15*bill;
    else return 0.2*bill;
}
//OR:-
// //Function Expressions:-
// const calcTip = function (bill){
//     if(bill>=50 && bill<=300) return 0.15*bill;
//     else return 0.2*bill;
// }

// // Arrow functions:-
// const calcTip = bill => if(bill>=50 && bill<=300) 0.15*bill; else 0.2*bill;

console.log(calcTip(100));

const bills = [125,555,44];
console.log(bills);

// Or
// tip1 = calcTip(bill[0]);
// tip2 = calcTip(bill[1]);
// tip3 = calcTip(bill[2]);
// const tips = [tip1, tip2, tip3];

const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
console.log(tips);

// const total = bills + tips; -----> This is wrong!
const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
console.log(total);
*/


// =================================================== Introduction to objects:- =============================================================
//imp: NOTE:- In js, arrays and objects both con contain hetergeneous elements. 
// In js, Objects is also a data-Structure.
/*
const jonasArray = [
    'jonas', //firstName
    'schmedtmann', //lastName
    2037 - 1991, //age
    'teacher', //job
    ['Michael', 'Peter', 'Steven'] //friends
];
// In Arrays, there is no way of giving this elements a name. so, we can't reference by a name but only by their order no. in which they appear in the array.  ===> To solve this problem, we have another DS called Objects.

// Object :- Key-Value pair. curly {} braces are used for an objects.
//e.g:-
const jonas = { //This curly {} braces are to defined a new object. 
    'firstName': 'jonas', //key is firstName(basically, a variable name) ,   Value can be of anytype.
    'lastName': 'schmedtmann',
    'age': 2037-1991, //Each of these key are also called as properties. Therefore, this object(jonas) has 5 properties.
    'job': 'teacher',
    'friends': ['Michael', 'Peter', 'Steven']
}

// Objects are probably most fundamentally concept in the whole js lang.  There are many ways of creating an Objects.
// 1. Object literal syntax:- to create an object   ~~~~~~~~> easiest way to create an object.
const jonas1 = { 
    'firstName': 'jonas', 
    'lastName': 'schmedtmann',
    'age': 2037-1991, 
    'job': 'teacher',
    'friends': ['Michael', 'Peter', 'Steven']
}

// Main differnce between an object and array is that :- order of these values doesn't matter at all when we want to retrieve them in objects.
// Whereas, in arrays orders matters. In Array, elements are only access using their order no.
// imp: Therefore, we should use arrays for more ordered data AND objects for more unstructured data. 
*/


// ================================================== DOT vs BRACKET NOTATION:- ==============================================================
/*
//How to retrieve data from an object ?
//Ans:-
//Q. How to retrieve data from object and How to change data in objects using both the dot(.)  and  bracket notation
const jonas = { 
    firstName: 'jonas', 
    lastName: 'schmedtmann',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}
console.log(jonas);

//1st way of getting a property from an object :- (by using dot(it's a operator) notation)
console.log(jonas.lastName);

//2nd way:-
console.log(jonas['lastName']); //instead of 'lastName' we can also write expression.   //key should be in string.


//imp: We can also write expression in square bracket which derives key. e.g:-
const nameKey = 'Name';
console.log(jonas['first' + nameKey]); //'first' + nameKey ==> 'first' + 'Name' == 'firstName'.  
console.log(jonas['last' + nameKey]);

// imp: But, we can't write expression in dot operator. e.g:-
// console.log(jonas.'last' + nameKey); //Error:-
// console.log(jonas.('last' + nameKey)); //Error:-

// That's why we need square [] brackets. In dot Notation, we have to use real final property name NOT the computed property name.

//Q. In what situation we have to use dot notation and square [] brackets ?
// Ans:- when we need to first compute the property name then ofcourse we have to use square [] property and in any other case just use dot notation.

// ---------------------
const interestedIn = prompt('What do you want to know about jonas? choose between firstName, lastName, age, job, and friends'); //Built-in js function()  ==> This function returns a string
console.log(interestedIn);
// In prompt, there are two options :- 1. ok(returns string which entered by the user)  2. cancel(returns Null)
console.log(jonas.interestedIn); //imp: NOTE:- o/p:- undefined. b'coz:- jonas doesnot have a property called interestedIn. That means:- dot operator doesn't solve the expression(expression is not expected by dot operator). for expression we should use square [] operator b'coz it can accept expression as we have already seen previously.
// imp: undefined we get when we try to access a property on an object that doesnot exist. 
// That's a main difference between dot and [] brackets notation/operators.
console.log(jonas[interestedIn]); //expression can be written in square [] brackets. if user gives otherthan the object property then o/p will be undefined. We can solve this problem. as we know that undefined is a falsy value.

if(jonas[interestedIn]){
    console.log(jonas[interestedIn]); //Only valid properties ae allowed.
}else{ //falsy value or undefined or property doesn't exist in jonas object.
    console.log("Wrong request! choose between firstName, lastName, age, job, and friends ");
}

//How to use both dot(.)  and bracket []  notation to add new properties to an object ?
//Ans:-
jonas.location ="Portugal";
jonas['twitter'] = '@jonasschmedtmann';
console.log(jonas);


// Challenge:- "jonas has 3 friends, and his best friend is called Michael"
const stmt = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`; //imp: jonas.friends.length  ==> this represents that, length of the friends array of an object called jonas.Where, length is the inbuilt property of an array. friends is a property of jonas.
console.log(stmt);

// Operator precedence :- jonas.friends[0] , jonas.friends.length
// Both dot(member access) notation and (Computed Member Access)[] brackets has high priority. Both dot and [] has associativity from left-to-right.
// todo: Both dot and [] brackets have same priority. ig, acc. to mdn refernces. cnf this ???
*/


// ================================================ Object Methods:- =====================================================
// Object is just like arrays can hold different types of data and they can even hold arrays and infact object also.(i.e. object inside an object.)
// NOTE:- function is just another type of value. Then that means, we can create a key-value pair in which the value is a function.
// e.g:-
/*
const jonas = { 
    'firstName': 'jonas', 
    'lastName': 'schmedtmann',
    'birthYear': 1991,
    'job': 'teacher',
    'friends': ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true, //imp: i.e:- Key can be anything.   

    calcAge : function(birthYear){
        return 2037 - birthYear;
        // Function expression is used b'coz it produces some value. Whereas calcAge is used as a function name.
    },

    // function declaration will not work her. e.g:-
    // function calcAge (birthYear){ return 2037 - birthYear; } //Error:-

    calcAge1: (birthYear) => 2037 - birthYear, //@me:- to check whether it works or not ?
    // Any function that is attached to an object is called a method. And method is also called as properties(which holds function values) of an object.

}
console.log(jonas);
console.log(jonas.calcAge1(jonas.birthYear), jonas.calcAge(jonas.birthYear), jonas.calcAge(jonas['birthYear']));
console.log(jonas['calcAge'](jonas.birthYear), jonas['calcAge1'](jonas['birthYear'])); //imp: Syntax:-  NOTE:- calcAge sould be written in string in [] brackets. This 👉 jonas['calcAge'] will replaced by a function. 

// This is called as function Values:-
// function(birthYear){
//     return 2037 - birthYear;
// }

// This is string values:- "Hello"
// This is array value :- ['Michael', 'Peter', 'Steven']
*/


// NOTE:- In Every method, js gives access to a special variable called "this".
/* 
const jonas = { 
    'firstName': 'jonas', 
    'lastName': 'schmedtmann',
    'birthYear': 1991,
    'job': 'teacher',
    'friends': ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true, //imp: i.e:- Key can be anything.   

    calcAge : function(){
        //console.log(this); //this represent that object who calls this function. 
        return 2037 - this.birthYear; //todo: How other-person(object) can call this funcion such that this.birthYear will represent other that '1991'. As we know in C++, that objects have different value but they have same function's(method's) and variables(attributes) ? 
    },

    calcAge1: () => 2037 - this.birthYear, //imp: NOTE:- as we have already discuss that "this" keyword is not there(in arrow function). so don't use it in the methods 👈@me suggestion

}
console.log(jonas['calcAge'](), jonas['calcAge1']());

// todo: Why we should use object if their value's and attributes are fixed for a particular attribute ? Instead of that we can use Classes-&-object concept so that object can have different values of their attributes and have same methods. As we're doing in C++.

// instead of computing age again and again, we can store the age in an object.
console.log(jonas['calcAge']());
console.log(jonas['calcAge']());
console.log(jonas['calcAge']());
console.log(jonas['calcAge']());
*/

/*
const jonas = { 
    'firstName': 'jonas', 
    'lastName': 'schmedtmann',
    'birthYear': 1991,
    'job': 'teacher',
    'friends': ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true, 

    calcAge : function(){
        // console.log(this);
        this.age = 2037 - this.birthYear; //here, new property called "age" is created.
        return this.age; 
    }, //No error:- if we apply comma after writing last proerty.
    // calcAge1: () => 2037 - this.age,
}
console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
*/

/*
//Challenge:-
//e.g:- "jonas is a 46 Year old teacher, and he has a/no driver's license"
const jonas = { 
    'firstName': 'jonas', 
    'lastName': 'schmedtmann',
    'birthYear': 1991,
    'job': 'teacher',
    'friends': ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true, 

    calcAge : function(){
        this.age = 2037 - this.birthYear; 
        return this.age; 
    },
    // calcAge1: () => 2037 - this.age,

    getSummary: function(){
        console.log(`${this['hasDriversLicense']}`);
        // console.log(`${this[hasDriversLicense]}`); //Error:- hasDriversLicense is not defined at Object.getSummary. b'coz:- hasDriversLicense is not written in string. //imp: whenever we write properties in [] brackets then we have to write property name in a string. 

        return `${this.firstName} is a ${this.calcAge()} Year old ${this['job']}, and he has ${this.hasDriversLicense ? 'a' : 'No'} driver's License`;

    }
}
console.log(jonas.getSummary());
// console.log(`${jonas.firstName} is a ${jonas['calcAge']()} Year old ${jonas.job}, and he has ${jonas.hasDriversLicense ? 'a' : 'No'} driver's License`); //Ternary operator used instead of if else b'coz this oprtr produces a value(it's an expression) while if-else is not an expression.

//NOTE:-
const friends = ['Michael','Steven','Peter'];
friends.push(23); //push is a built-in methods. Arrays are objects.
//here, array is Nothing but an object. But it is just a special kind of object. 
*/



//======================================== Coding challenge 3 solution:- ===========================================================
/*
const mark = {
    'fullName': "Mark Miller",
    'mass': 78, //kg
    "height": 1.69, //m
    calcBMI: function(){
        this.BMI = this.mass / this.height ** 2; //or mass / (height*height);
        return this.BMI;
    }
   
}

const john = {
    fullName : "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function(){ //NOTE:- this calcBMI() function is same as calcBMI() function in mark. Which is repeating and it violates DRY principles. We can avoid this by using OOP
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }

}

mark.calcBMI();
john.calcBMI();
console.log(mark.BMI, john.BMI);

if(mark.BMI > john.BMI){
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`);
}else if(john.BMI > mark.BMI){
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`);
}

// @me:- //imp: is it correct way of writing ?? as we have written stmt in ${} Ans;- absoluetlt right b'coz we have written an expression NOT the stmt. In below, snippet we have written stmt. see the output difference.
console.log(`${ john.calcBMI() >= mark.calcBMI() ? `${john.fullName}'s BMI (${john['BMI']}) is higher(or equal) than ${mark['fullName']}'s (${mark.BMI})!` : `${mark.fullName}'s BMI (${mark['BMI']}) is higher than ${john['fullName']}'s (${john.BMI})!`}`);

console.log('\n');

// imp: compare o/p with above log snippet. 
console.log(`${john.calcBMI()} >= ${mark.calcBMI()} ? ${john.fullName}'s BMI (${john['BMI']}) is higher(or equal) than ${mark['fullName']}'s (${mark.BMI})! : ${mark.fullName}'s BMI (${mark['BMI']}) is higher than ${john['fullName']}'s (${john.BMI})!}`);

//todo: do this in this way(DRY principle). 👇
// if(john.calcBMI() >= mark.calcBMI()) const objectName = "john";
// else const objectName = mark;
*/



// ========================================= Iteration: the for loop :- =======================================================
/*
console.log('Lifting weights representation 1 ✨');
console.log('Lifting weights representation 2 ✨');
console.log('Lifting weights representation 3 ✨');
console.log('Lifting weights representation 4 ✨');
console.log('Lifting weights representation 5 ✨');
console.log('\n');

for(let rep=1; rep<=10; rep++) //in python there is range() function for -> loop
{
    console.log(`Lifting weights representation ${rep} ✨`);
}

for(let rep=5; rep<=8; rep++) console.log(`Hello ${rep}`);
*/



// ======================================= Looping Arrays, Breaking and Continuing :- =======================================
/*
const jonas = [
    'jonas', 
    'Schmedtmann',
    2837-1991, //this will produce a value after evaluating an expression
    'teacher',
    ['Michael','Steven','Peter'],
    true
];  //===> It's an Array NOT an object.

const types = []; //Empty array
for(let i=0; i<jonas.length; i++){
    console.log(jonas[i], typeof jonas[i]);
    // types.push(typeof jonas[i]);  //push --> elements add at last  whereas in unshift elements are added at first/starting of an array.
    types[i] = typeof jonas[i]; //imp: this works! 
}
console.log(types);

// todo: How to loop through an object ? as we know that array is also an object.


const friends = ['Michael','Steven','Peter'];
console.log(friends, typeof friends); //Note:- Array is an object. see the o/p for your confirmation/satisfaction.


// Calculate ages of this birthYear and store it into another array:-
const years = [1991, 2007, 1969, 2020];
const ages = [];
for(let i=0; i<years.length; i++){
    ages[i] = 2037 - years[i]; //or use push() function.
}
console.log(ages);
// NOTE:- we can not do simple operation with array like addition, subtraction(e.g:- 2037 - years ==> This is wrong!). As You know the reason which was learnt in C++. primitive operation with an objects.


//Continue(is to access current iteration loop and continued to the next iteration) and break(is to complete the terminate of the whole loop);
console.log('----------- ONY STRINGS -------');
const jonas1 = [
    'jonas', 
    'Schmedtmann',
    2837-1991, //this will produce a value after evaluating an expression
    'teacher',
    ['Michael','Steven','Peter'],
    true
];
for(let i=0; i<jonas1.length; i++){
    if(typeof jonas1[i]  !== 'string') continue;
    console.log(jonas1[i], typeof jonas1[i]); //Only string type value will be shown in output.
}


console.log('-------- if any Number found then will not print further---------');
const jonas2 = [
    'jonas', 
    'Schmedtmann',
    2837-1991, //this will produce a value after evaluating an expression
    'teacher',
    ['Michael','Steven','Peter'],
    true
];
for(let i=0; i<jonas2.length; i++){
    if(typeof jonas2[i]  === 'number') break;
    console.log(jonas2[i], typeof jonas2[i]); 
}
*/



// ==================================== Looping Backwards and loops in loops :- =========================================
/*
//Looping Backwards :- loop over an array backwards.
const jonas = [
    'jonas', 
    'Schmedtmann',
    2837-1991, 
    'teacher',
    ['Michael','Steven','Peter'],
    true
];
for(let i=jonas.length-1; i>=0; i--){
    console.log(i, jonas[i]);
}
// Q. is there any for-each loop in js as in c++,java,etc.


// loop inside loop 
for(let exercise=1; exercise<=3; exercise++){
    console.log(`---------Strating Exercise ${exercise} ----------`);
    for(let rep=1; rep<=5; rep++){
        console.log(`   --- Exercise ${exercise}: Lifting weight Repetition ${rep}`);
    }
}
*/



// ============================================ The While loop:- =====================================================
/*
//for loop
for(let rep=1; rep<=10; rep++){
    console.log(`Lifting weights representation ${rep} ✨`);
}

//while loop
let rep=1;
while(rep <= 10){
    console.log(`While:- Lifting weights representation ${rep} ✨`);
    rep++;
}

//Q. Does do-while loop exist in JS ?
*/


//--------- Dice-roll game untill we get :-
//@me:-
/*
let dice = Math.random();  //==> It gives random number between 0 and 1
console.log(dice);
for(let i=1; i<=15; i++){
    console.log(Math.random());
}
*/


//we want random numbers from 1 to 6. So, we can't use % b'coz if we do then there is possibility that 0 will also come. But, actually we don't want it. //But we can resolve this problem by adding 1.
// @me:-
/* 
console.log(Math.trunc(23.4567880834934));
console.log(Math.trunc(23.567880834934));
console.log(Math.trunc(23.94567880834934));
*/

/*
for(let i=1; i<=15; i++){
    let random = Math.random();
    console.log(`myExpression:- ${Math.trunc(random * 10) % 6 + 1}`);
    // Math.trunc() ==> returns floor value. 

    //imp:
    console.log(`jonasExpression:- ${Math.trunc(random * 6) + 1}`); //It works b'coz:- In Table of 6, first digit covers from 0 to 6. //todo: Why above jonas expression gives result from 0 to 5 instead of 0 to 6.
    //imp: ans:- it correct b'coz 6*10 ~ 6*1 is also same b'coz we are dealing with decimal. Do observation and analysis, You will get it.

    // let random = 0.613;
    // Acc. to myExpression(after applying trunc function also):- (0.613 * 10) % 6 + 1 ==> 1
    // Acc. to jonasExpression(after applying trunc function also):- (0.613 * 6) + 1 ==> 4
}
*/



// Keep running the loop untill dice doesn't have 6 :-
/*
let dice = Math.random();
// console.log(dice);
while(dice !== 6){ //This is an infinity loop b'coz dice is not updating and initially dice stores any decimal number between 0 and 1.
    console.log(`You rolled a ${dice}`);
}
*/
/*
let dice = Math.trunc(Math.random() * 6) + 1;
while(dice !== 6){ //when dice is initially 6 then output will be blank.
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log("Loop is about to end ...");
}
// Jonas Suggestion:- use while loop when we don't know the number of iterations will happen.
//imp: NOTE:- we have loop-else concept in python like for-else, while-else.
*/


// ================================== Coding Challenge 4 Solution :- =======================================

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

// const calcTip = function(bill){ return bill>=50 && bill<=300 ? 0.15*bill: 0.2*bill; }  //Function Expression
// const calcTip = bill => bill>=50 && bill<=300 ? 0.15*bill: 0.2*bill; //Arrow Function

function calcTip(bill){ //Function Declarations
    return bill>=50 && bill<=300 ? 0.15*bill: 0.2*bill;
    // if(bill>=50 && bill<=300) return 0.15*bill;
    // else return 0.2*bill;
}

for(let i=0; i<bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}
console.log(bills, tips, totals); //todo: How to add new line between this ???????????????????
// console.log(`${bills} '\n' ${tips} '\n' ${totals}`); //todo: This is wrong !

function calcAverage(arr){ //generic-Function
    let sum = 0; 
    //imp: No need to initialize it with 0(as we are doing in c,c++ b'coz it contains garbage value.)  b'coz:- In js, uninatialized variable contains undefined value.===================> This is totaly wrong! We must have to initalize a variable Otherwise it contains undefined value. And any-operation(like addition) with undefined gives NaN.
    for(let i=0; i<arr.length; i++)  sum += arr[i];
    let avgValue = sum / arr.length ;
    return avgValue;
}
// console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(bills), calcAverage(tips), calcAverage(totals));

//@me:-
// imp: we're not getting an error. But we should get an error to avoid the bug in program. B'coz:- it is good to have compile-time error instead of run-time error. ig, We can solve this by using try-catch block.
console.log(calcAverage("Hello")); //NaN
console.log(calcAverage(1234567898)); //NaN


/* //imp:
let variable;
variable += 10;
console.log(variable); //output:- NaN
*/

//imp:
// @my suggestion:- Use function Expression:-

































