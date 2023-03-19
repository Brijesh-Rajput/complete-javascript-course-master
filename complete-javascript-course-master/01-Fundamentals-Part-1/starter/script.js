//TODO: ecmaScript :- NOTES theory 
 
/*
alert("Hello world!");
// NOTE:- for strings => double quotes and singles quotes are used to represent strings in js as like in python.

let js = 'amazing';
if(js === "amazing") alert('JavaScript is FUN!');

js = 'boring';
if(js === "amazing") alert('javaScript is FUN!');
console.log(40 + 8 + 23 -10);  //consol.log() links js script to developer console sections of webpage.

console.log(10000000000000000*10000000000000000000); //work like a python.
*/

// ----------------------------------------- Values and Variables :-  -------------------------------------------------------
/*
console.log("Brijesh"); //Brijesh is a value
alert(5);
console.log(23);

let firstName = "Brijesh";
console.log(firstName);

let $function = 27;
let myFirstJob = 'Programmer'; //variable name should be more descriptive.
let myCurrentJob = 'Teacher';
console.log(myFirstJob);
*/


//imp:- 
/*
==> Convention for naming variables:- same as c,c++
   variable name:- contains letters,numbers,underscore,$.  Name Can't start with numbers.  Don't use reserved keywords.
   1. Camel case :- first_word with lower case and then the other word with uppercase when multiple words are there.
                    e.g:- firstName, fullName, firstNamePerson  (famous in js)
   2. first_name_person (famous in ruby)
*/

// Don't start variable name by uppercase(e.g:- let Person = 'brijesh'). It's a convention. b'coz it is used in OOP 
// variables with uppercase are reserved for constant variables whose value will never change. e.g:- let PI = 3.1415;
let PI = 3.1415; //NOTE:- constant names are shown differently here.

/*
Error's:-
let 3years = 3;   NOTE:- we don't need use console.log() to show the error on console.
let new = 27;   new is a reserved keyword in js.  
*/

//Reserved keywords in js:- new, function, name
// NOTE:- name keyword can be use as a variable name. But it creats some problem in some cases.
let name = "Brijesh";
console.log(name); //so don't use name as a variaable name. 


//----------------------------------------------- Data types :- -----------------------------------------------------------

//Every value in js is either an object or primitive(let firstName="Brijesh";) 
/* Object:- let me = {
                        name: 'Brijesh' 
                    }; 
*/
/* 7 primitive data-type :-
    1. number => float  //e.g:- let age = 23; //All numbers(can be integer or decimal) are simply of the type 'number'. There is no different data-type like int,float as in C,C++.
    2. string  => sequence of character. (single or double quotes are used)
    3. boolean => true or false
    4. undefined => empty value (value taken by variable that is not yet defined.)  e.g:- let children; --> children is an empty variable.
    5. Null => also means 'empty value'  BUT used in different context.
    6. symbol => Value that is unique and cannot be changed. (defined in es6 2015)
    7. Big int => larger integers than the Number type can hold. (defined in es2020)
*/
/*
   JS has Dynamic typing(like in python)  => we don't have to manually define the data type of the value stored in variable.(as we also are not doing this also. let/var variableName) Instead, data types are determined automatically.
   This Distinction bet.n value and variable is very imp b'coz in js, its value that has the type NOt the variable. 
   //imp: Value has type NOT variable.
   e.g:-  x=23;  //Ig, this variable is defined globally i.e. var keyword used internally to define a variable.
          x="Brijesh";
          //same working as in python.
*/

//NOTE:-
// number firstNumber = 45;  ==> Error


// Error:-
// string firstPerson = "brijesh";
// NOTE:- if we did syntax error then compilation will not happen that means, we will not able to see all the output which will display if this error doesnot comes.Like in C++. ==> first compilation will happen.

/*
console.log(true);
let javaScriptIsFun = true; //boolean value 
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);
//imp: Value that holds datatype and NOT by the variable.
//Dynamic typing:- we can easily change the type of value that is hold by the value.
javaScriptIsFun = "Brijesh"; //Don't use let again b'coz we already define it.
console.log(javaScriptIsFun, typeof javaScriptIsFun); //Or  console.log(javaScriptIsFun + " " + typeof javaScriptIsFun); 


// typeof  Operator ==> it's just like a '+' or '-' operator.  It shows the type of value.
console.log(typeof true);
console.log(typeof 23);
console.log(typeof "Brijesh"); //Note:- string must be in a quotes. Otherwise, js will consider it as variable.

let year; //value of variable(year) is undefined. And the type of variable is also undefined.
console.log(year, typeof year);
year = 1991; 
console.log(year, typeof year);

let myName = "Brijesh rajput"; //value of variable(myName) is "Brijesh rajput". And the type of variable is string.


//Error that exist in typeof operator. 
//null is another datatype. It's similar to undefined. Both value and type of value is null as in undefined variable.
console.log(typeof null);  //o/p:- Object  //imp: this is bug in js. It should return null just as typeof undefined returns undefined.
*/

// ================================================== Let, const , var =========================================================
// These are 3 different ways of declareing variable in js.(let,const,var)
// let, const introduce in es6(that's why they are modern js)

// When to use let keywords to declare variable ?   ==> used to declare variables that can change later during execution of program.(Reassigning a value to a variables Or mutate the variable)
//E.g:-
/* 
let javaScriptIsFun = true;
console.log(javaScriptIsFun, typeof javaScriptIsFun);
javaScriptIsFun = "YES!";
console.log(javaScriptIsFun, typeof javaScriptIsFun);

let age = 30;
age = 31; //we mutate the age variable in this case.

// used to declare empty variable.
let year = 2002;


// When to use const ?  ==> when value of variable will not change in future. (Immutable variable.)
// E.g:-
const birthYear = 2002;
birthYear = 2004 ; //This will not work.  This is runtime error.

// const varible or immutable variable can not be declare empty const variables. 
// E.g:-
// const job; //Error 


// When to use var ?  ==> try to avoid this completely. It allows to mutate the value of variable.
var job = "Programmer";
job = "teacher";
// var and let looks pretty similar. let is function's scope whereas var is block scope. Q) What is function's scope and block scope ?
// @me:- var is used when we have to use global variable. whereas let used to define local variable.

// NOTE:- we haven't use any let,var or const keyword to declare the variable.  //imp: Never write like this without declaring varibale.
lastName = "Rajput"; //This doesn't create a variable in current scope. instead js create it's in a global property. 
console.log(lastName);
*/



// ========================================================= Basic Operators =============================================================
// Mathematical,  arithmetic opertor
/*
const ageBrijesh = 2023 - 2002;
console.log(ageBrijesh);

console.log(ageBrijesh*2, ageBrijesh/10, 2**3); //2**3 means 2 to the power of 3 = 2*2*2
// real division oprtr. :-  / 
console.log(25/2, 25/10);
// floor division oprtr ????  ==> Q. How to convert real value to an integer value.

// oprtr. '+' used to concate the strings. 
console.log("Hello" + 7); //It works like in python. 
const firstName = "Brijesh";
const lastName = "Rajput";
const space = " ";
console.log(firstName + space + lastName);
// There is a better way to do concatination of strings which is called as 'Template strings'. Q) What is this 'Template strings' ?


//assignment oprtr (=) ==> asscociativity:- right to left for asgn oprtr. 
let x = 10 + 5; 
x += 10; //this is also supported in python But ++ , -- is not supported there(python).
x -= 1;
x++; //Not exists in python.
x--;
console.log(x);


// Comparison oprtr  ==> returns boolean value.
console.log(19 > 9);
console.log("Brijesh" > "brijesh"); //ASCII code
//imp: NOTE:- if u open the console and use this all above variables directly then it will work b'coz console has an access to all the variables that is running in the current browser tab. try this in console :- firstName > lastName ==> u will see the result in the console.
*/
/*
const isFullAge = ageBrijesh >= 18;
console.log(2023 - 2002 > 2023 - 2005); //Q. How the js knows that it should do math first or comparison first ?
// Ans:- using oprtr precedence rule (mdn oprtr precedence)
// usually, all maths oprtr's executed before comparison oprtr's

// imp:-
let x, y;
x = y = 25-10-5; //subtraction has highest precendece that's why it will solve first. i.e:-  x = y = 10;
console.log(x,y);

console.log( 3 + 5 / 2);
console.log( (3 + 5) / 2);
*/


// ===================================== First coding Challenge Solution:- =============================================
/*
//unit in kg
let massMarks = 95; //another data = 78kg 
let massJoans = 85; //92 kg

//value/unit in meter
let heightMarks = 1.88; //1.69m
let heightJoans = 1.76; //1.95m

// (Formula)BMI = mass / height ** 2 = mass / (height * height)
const BMI_Marks = massMarks / heightMarks ** 2;
const BMI_Joans = massJoans / heightJoans ** 2;

const markHigherBMI = BMI_Marks > BMI_Joans ;
console.log(markHigherBMI, BMI_Marks, BMI_Joans);
*/

//========================================= Strings and Template literals:- =================================================  
/*
const firstName = "Brijesh";
const job = "teacher";
const birthYear = 2002;
const currentYear = 2023;

const Brijesh = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years young ' + job + '!';
// as, we know that '+' work as a concatination oprtr to concate the string. But, here (year - birthYear) => this will be calculate in number. Now, How concatination will work ?  ANS:- js internally converts this number into string type then concatination will happen.

// Now, we will do same thing which we have done above using template literals which comes in es6. 
const BrijeshNew = `I'am ${firstName}, a ${currentYear - birthYear} years young ${job}!`; //Backtick symbol is used to tell js that we are writing template literals. 

console.log(Brijesh);
console.log(BrijeshNew);

console.log(`Hello, Hii How are you ? ${1000} boyz`);

const stringUsingBacktick = `Similar to quotes used in string. No variable value is used.`;
console.log(stringUsingBacktick);
console.log(`works just like a regular string...`);
//imp: NOTE:- use backtick for string so that, we can use variable also in it. if don't want to iuse varobale then also it's ok!


//multi-line string before es6
console.log('string with \n\
multiple \n\
lines'); // \n means newline in string(same as in c,c++). But, in js we have to use \ after \n. //imp: if we don't use \ after \n then it's a syntax-Error

//imp: another use of Backtick :- To create multi-line strings
console.log(`string 
multiple
lines`);
// backtick used(for multiple lines) building an html from js ? means what ???? ==> to create multiple elements to insert in html page.
*/


// ==================================================== Decision: if/else =======================================================================
/*
const age = 15;
const isOldEnough = age >= 18; //imp

if(isOldEnough){
    console.log('Sarah can start driving license 👧');
}else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. wait another ${yearsLeft} years :)`);
}

/*
const birthYear = 1991;
if(birthYear <= 2000){
    let century = 20; //this variable will not be accessible outside the block.Any Variable which is declared inside the blocks will not be accessable outside of the block.
}else{
    let century = 21;
}
// console.log(century); //Error
*

const birthYear = 2012;
let century;
if(birthYear <= 2000){
    century = 20; 
}else{
    century = 21;
}
console.log(century); 
*/

// ================================================= Coding challenge solution:- ================================================================
/*
//unit in kg
let massMarks = 95; //another data = 78kg 
let massJoans = 85; //92 kg

//value/unit in meter
let heightMarks = 1.88; //1.69m
let heightJoans = 1.76; //1.95m

// (Formula)BMI = mass / height ** 2 = mass / (height * height)
const BMI_Marks = massMarks / heightMarks ** 2;
const BMI_Joans = massJoans / heightJoans ** 2;

// const markHigherBMI = BMI_Marks > BMI_Joans ;
// console.log(markHigherBMI, BMI_Marks, BMI_Joans);

if( BMI_Marks > BMI_Joans ){//or if(markHigherBMI)
    // console.log(`"Mark's BMI is higher than john's!"`); //imp: make a habit of using backtick(my suggestion) 
    console.log(`"Mark's BMI (${BMI_Marks}) is higher than john's (${BMI_Joans})!"`);
}
else{
    console.log(`"John's BMI (${BMI_Joans}) is higher thann Mark's (${BMI_Marks})!"`);
}
*/


// ========================================== Type Conversion and Type coercion:-===============================================
/*
// Type conversion:- when we manually convert from one type to another.
// Type coercion:- when js automatically converts types behind the scenes for us.(completely hidden from us)

// Type conevrsion:-
const inputYear = '1991';
console.log(inputYear + 18); //Here, we want to do mathematically calculation. NOT string concatination.

console.log(Number(inputYear), inputYear); //Number() used to convert into Number data-type value. //imp: original value of variable is not converting b'coz Number() function returns number-type-value after converting.
console.log(typeof inputYear , typeof Number(inputYear));
console.log(Number(inputYear) + 18, inputYear + 18);

/* when course made. //imp:
console.log(Number("Brijesh"), Number(`Rajput`)); //o/p:- NAN NAN(Not a Number)
// NAN means invalid number.It doesn't means that it's not a number.
console.log(typeof NAN); //o/p:- number 
*
//But, Now 
console.log(typeof NAN); //o/p:- undefined  ==> i.e. NAN is undefined type value.
console.log(String(23), typeof String(23), 23, typeof 23); //o/p:- 23 string 23 number
// in js, we can converts into Number, into String, into Boolean only. We can't convert into undefined or into Null.




//Type coercion:- It happens whenever an oprtr is dealing with two values that have different type. In this case js, behind the scenes convert one of the value to match the other value. so that, in end oprtion can be executed.
console.log('I am ' + 23 + ' years old'); //whenever '+' oprtr is betwn Number and Strings then Number will converted into String.
//or console.log('I am ' + '23' + ' years old');
//or console.log('I am ' + String(23) + ' years old'); //manually type conversion if js doesn't do automatically.

//in template literals, all numbers are converted into strings.

// Q. What will be the o/p ?
console.log('23' - '10' - 3); //ans:- 10. In this time, js converted the string into Number.
console.log('23' - '10' + 3); // o/p:- 16 //imp:
console.log('23' + '10' + 3); // o/p:- 23103
console.log('23' * '2'); // o/p:- 46 => js converts string to Number
console.log('23' / '2'); // o/p:- 11.5  => js converts string to Number
console.log('23' > '18'); // o/p:- true. => js converts string to Number


//Guess the o/p:-
// Q1.
let n = '1' + 1;
n = n - 1;
console.log(n, typeof n); //10 number
        //Ans:- n = '1' + 1; ==> n="11",  n = n-1; n = "11" - 1 ; ==> n = 10;

//Q2. //imp:
let x = 2 + 3 + 4 + '5';
console.log(x, typeof x); //95 string
        // Ans:- x=2345  ============> WRONG ANSWER!!!!!!!!!!!
        //Ans:- 2+3=5 ==> 5+4=9 ==> 9+'5'='95'. Evaluation is based on associativity order

//Q3.
let y = '10' - '4' - '3' - 2 + '5';
console.log(y, typeof y); //15 string
        // Ans:-@me,  we will execute acc. to asscociativity order. '10'-'4'=6 ==> 6-'3'=3 ==> 3-2=1 ==> 1+'5'='15' 

// imp: People think, it's bad practice to rely on type-coercion. Type-coercion can introduce unexpected bugs. However, It only happens when we don't realy know what we are doing.                                                                             Acc. to joan's, type-coercion is great mechanism. to write readable code.
// we will see later type-coercion in boolean type after learning truthy & falsy values.
*/


// ===================================== Truthy and falsy values:- =========================================================
//Falsy values:- values that are not exactly false. But will be come false when we try to convert them into a boolean. There are only 5 falsy values in js. They are:- 0, empty string, null, undefined, NAN, false.
// These 5 values will converted into false when we attempt to convert them to a boolean. 

//Truthy values:- values that converted to true.
/*
console.log(Boolean(0));  //false
console.log(Boolean(undefined)); //false
console.log(Boolean("jonas")); //true
console.log(Boolean({})); //true 
// In js, object is represent by {}
console.log(Boolean('')); //false
//let a;
// console.log(a,typeof a, Boolean(a)); // a is NAN and it's a number type. //imp:
// JS, works like a python as both of them are scripting language. first comopilation happen and execution happens line by line. if any run-time syntax error or error comes then execution of all further line stops. Q) is This work as PVM (line by line interpretation) interpreter?? 
console.log(Boolean(null)); //false

// imp: conversion to Boolean is Type-coercion.
//e.g:-
const money=0;
if(money){ //js try to converts (any condition value/expression) internally into a boolean that happens based on truthy and falsy value rules. 
    console.log("Don't spend it all ;)");
}
else{
    console.log('You should get a job!');
}

//another usecase of truthy and falsy values:-Used To check whether a variable is defined or not ?
// imp: Bug here:- 
let height;
if(height){ //height is undefined and undefined is a falsy values. Therefore, height is false here.
    console.log('YAY! Height is defined');
}else{
    console.log('Height is UNDEFINED'); //this will execute.
}

let height1=123;
if(height1){ 
    console.log('YAY! Height is defined');  //this will execute.
}else{
    console.log('Height is UNDEFINED');
}

// imp: that's a bug. here, we have defined the height2 variable with 0 then also it executes else part b'coz :- 0 is also a falsy value.
let height2=0;
if(height2){ 
    console.log('YAY! Height is defined');  
}else{
    console.log('Height is UNDEFINED'); //this will execute.
}
//Using this approach can lead to problem.
//However, We can fix this problem using logical operators. we will see it later
*/


// ==================================================== Equality operators: === v/s ==     ======================================================
/*
const age = 18;
if(age === 18) console.log("You just become an adult :D (strict)");
if(age == "18") console.log("You just become an adult :D (loose)");

// strict equality oprtr :- ===  --> it's strict b'coz it doesn't perform type-coercion. it returns true when both value are exactly the same.
//loose equality oprtr :- ==  --> it does type-coercion

// @me:- === ---> data-type and value must be same for true.  ==  ---> value must be same, data-type can be anything. 

console.log(18 === 18); //true
console.log(18 === 19); //false
console.log(18 === '18'); //false

console.log(18 == 18); //true
console.log(18 == 19); //false
console.log(18 == "18"); //true  ---> type-coercion is happening here. '18' is converted into number(18)

// imp: Avoid to use loose equality oprtr as much as you can. if we need type-conversion then also avoid this loose equality oprtr. In this case, first convert it manually and then do comparison.(It's a suggestion)

/*
const favourite = prompt("What's your favourite number ? "); //imp: prompt returns string
console.log(favourite, typeof favourite);

if(favourite == 23){ //'23' == 23  --> '23' converted into number internally(type-coercion by loose equality oprtr)
    console.log("Cool! 23 is an amazing number!");
}
if(favourite === 23) console.log("strict comparison");


const favourite1 = Number(prompt("What's your favourite Number ? "));
console.log(favourite1, typeof favourite1);
if(favourite1 === 23) console.log("strict comparison");
*

const favourite = Number(prompt("what's your favourite number ?"));
console.log(favourite, typeof favourite);
if(favourite === 23) console.log("Cool! 23 is an amazing number!");
else if(favourite === 7) console.log('7 is also a cool number');
else if(favourite === 9) console.log('9 is also a cool number');
else console.log('Number is not 23 or 7 or 9');

//imp: != --> loose version of not-equal-to oprtr
if(favourite !== 23){ //strict version not-equal-to oprtr
    console.log('Why not 23 ?');
}
// Try to use strict version of the oprtr.
*/

// =============================================== Boolean Logic(Logic oprtr's):-  ===========================================================
//  NOT oprtr(!) has the precedence over the Or(|), AND(&&) oprtr. e.g:- const istrue = true && !false;
//ig, AND(&&) has more priority than OR(||) oprtr. as in c,c++  ---> cnf this. 
/*
const hasDriversLicense = true; //A
const hasGoodVision = false; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
 console.log(!hasDriversLicense);

 const shouldDrive = hasDriversLicense && hasGoodVision;

//  if(shouldDrive) console.log(`Sarah is able to drive.`);
//  else console.log(`someone else should drive...`);

 const isTired = true; //C
 console.log(hasDriversLicense || hasGoodVision && isTired);

 if(hasDriversLicense && hasGoodVision && !isTired) console.log(`Sarah is able to drive.`);
 else console.log(`someone else should drive...`);
*/


// ================================================= Coding challenge 3 solution:- =============================================================
/*
const dolphinTotalScore = 96+108+89;
const koalasTotalScore = 88+91+110;

const avgDolphinScore = dolphinTotalScore/3;
const avgKoalasScore = koalasTotalScore/3;

console.log(avgDolphinScore, avgKoalasScore);

if(avgDolphinScore > avgKoalasScore) console.log("Dolphin teams won the match! 🏆🏆🏆");
else if(avgDolphinScore < avgKoalasScore) console.log("Koalas team won the match! 🏆🏆🏆");
else console.log("Game tied!!"); //avgDolphinScore === avgKoalasScore
*/


/*
// Bonus-1 solution :-  data => dolphin scores:-97,112,101      koalas scores:- 109,95,123
const dolphinTotalScore = 97+112+101;
const koalasTotalScore = 109+95+123;

const avgDolphinScore = dolphinTotalScore/3;
const avgKoalasScore = koalasTotalScore/3;

console.log(avgDolphinScore, avgKoalasScore, dolphinTotalScore, koalasTotalScore);

if(avgDolphinScore > avgKoalasScore && dolphinTotalScore >= 100) console.log("Dolphin teams won the match! 🏆🏆");
else if(avgDolphinScore < avgKoalasScore && koalasTotalScore >= 100) console.log("Koalas team won the match! 🏆🏆");
else console.log("Game tied!!"); 
*/

/*
// Bonus-2 solution :-  data => dolphin scores:-97,112,101      koalas scores:- 109,95,106
const dolphinTotalScore = 97+112+101;
const koalasTotalScore = 109+95+106;

const avgDolphinScore = dolphinTotalScore/3;
const avgKoalasScore = koalasTotalScore/3;

console.log(avgDolphinScore, avgKoalasScore, dolphinTotalScore, koalasTotalScore);

if(avgDolphinScore > avgKoalasScore && dolphinTotalScore >= 100) console.log("Dolphin teams won the match! 🏆");
else if(avgDolphinScore < avgKoalasScore && koalasTotalScore >= 100) console.log("Koalas team won the match! 🏆");
else if(avgDolphinScore === avgKoalasScore && dolphinTotalScore >= 100 && koalasTotalScore >= 100) console.log("Both win the trophy!");
else console.log("No one wins the trophy!😥");
*/



// ==================================================== Switch Statement:- ==============================================================
//same as in c,c++,python
/*
const day = 'moday';

switch(day) {
    case 'moday': //imp: day==='moday'   ==> strict equality oprtr used.    //no curly-braces are required for multiple-line here
        console.log('plan course structure');
        console.log('Go to coding meetup');
        break; //how happen's without the break ??? same as in c.  ==> It will execute till break or till switch stmt ends.
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday': //NOTE:- when day='wednesday'
    case 'thrusday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

// Above same code using if-else
if(day === 'moday'){
    console.log('plan course structure');
    console.log('Go to coding meetup');
}else if(day === 'tuesday'){
    console.log('Prepare theory videos');
}else if(day === 'wednesday' || day === 'thrusday'){
    console.log('Write code examples');
}else if(day === 'friday'){
    console.log('Record videos');
}else if(day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend :D');
}else{
    console.log('Not a valid day!');
}
*/


// ===================================================== Statements and Expressions:- ============================================================
// Exxpressions:- piece of code that produce value. e.g:- 1. 3*4  2. 1991(This is also a expression)  3. true && false && !false
// statements:- which doesn't produce value.
/*
if(23>10){
    const str = '23 is bigger';
}
// in Template literals, we always write/enter expressions not the statements.
const me = "Brijesh";
console.log(`I'am ${2037 -1991} years old ${me}.`);

// Error
// console.log(`${if(23>10){ const str = '23 is bigger'; }}`); //b'coz:- if(){} ==> this is if stmt NOT the expressions.
*/

// ======================================================= Conditional(Ternary opertor):- =======================================================
// smae as in c
/*
const age = 23;
age >= 18 ? console.log('I like to drink wine🍷'): console.log('I like to drink water');

// operator always procuces a value. ===> that means, opertors is an expression.
// conditional/ternary oprtr produces value. so, it's an expression.

// we can use ternary oprtr to declare variables conditionally.
//e.g:-
const drink = age >= 18 ? 'wine 🍷' : 'water';
console.log(drink);

// above snippet using if-else
let drink2;
if(age >= 18){
    drink2 = 'wine 🍷';
}else{
    drink2 = 'water';
}
console.log(drink2);


// We can use this ternary oprtr in Template literal. when we used if-else instead of this ternary oprtr it gives an error as we have seen earlier.
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water'}`);
*/


// ================================================= Coding challenge solution 4:- ===========================================================
/*
const billValue = 275; //test Data for 275,40,430
const tipValue = billValue >= 50 && billValue <= 300 ? 15*billValue/100 : 20*billValue/100;
// console.log(billValue, tipValue, billValue + tipValue);
console.log(`The bill was ${billValue}, the tip was ${tipValue}, and the total value ${billValue + tipValue}`);
*/

// ===================================================== JS Releases: ES5, ES6+ and ESNEXT:- ====================================================
// Theory NOTES:-





































