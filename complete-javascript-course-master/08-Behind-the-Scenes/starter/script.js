'use strict';

// JS is a high-level, OO, Multi-paradigm programming language.
// JS is a high-level, Prototype based OO, Multi-paradigm, interpreted or Just-in-time Compiled, Dynamic, Single-threaded, Garbage-collected Programming Language with first-class functions and a non-blocking event loop concurrency model.

/*
1. High-level :- 
    Every program that runs on the computer that needs some hardware resources like memory & cpu to do it's work.  
    
    low level languages like C where we have to manually manage these resources. e.g:- Asking a computer memory to create a new variable. e.g:- new, malloc(), calloc()
    
    High level languages like JS, python where we donnot have to manage resources. Everything happens Automatically(It's abstraction).
    Disadvantage :- Programs will never optimize or fast as C programs.

2. Garbage-Collected:-
     Garbage collection is a memory management(away from the developers) tool which is bassically an algorithm inside the JS engine which          automatically removes all unused objects from the computer memory.

3. Js is an interpreted or just-in-time compiled language :-
    convert to machine code ==> This happens in JS engine.

4. Multi-paradigm :-
    Paradigm is an approach & mindset of structuring code, which will direct your coding style & technique.
    These are 3 popular paradigm 
    1. Procedural ---> organizing code in linear way & some functions between them.
    2. Object-Oriented
    3. functional 

    We can clasify paradigm as Imperative & Declarative.

5. Prototype-based OO :-
    About the OO nature of JS :- It is a Prototype-based OO.
    Almost Everything in JS is an Object except Primitive Values(such as Numbers, strings, etc...).
    
    Q. Have you ever wonder ?
    Why we can create an array & then use Push method on it. ==> It happens b'coz of prototypal inheritance.
    E.g:- const arr =[1,2,3];
          arr.push(4);
          const hasZero = arr.indexOf(0) > -1;
    Basically, we create arrays from an array blueprint(which is like a template) & this is called protoype. This prototype contains all the array method. e.g:- Our array inherits methods from the prototype.
    Array.prototype.push()
    Array.prototype.indexOf()

6. First-class Function :-
    That means, Functions are simply treated as variables. We can pass them into other functions & return them from functions.\
    This allows for functional programming. E.g:- function which we pass in "click" event Listner in previous projects.

7. Dynamic :- 
    i.e:- JS is a Dynamic-typed language. 
    e.g:-
    let x = 23; //No data-type definations. Type becomes known at runtime.
    x = 'Brijesh'; //Data type of variable is automatically changed.

    JS should be Strongly typed language b'coz strongly-typed language prevents many bugs.
    Typescript is a strongly typed language. Use this... if want strongly typed language.


8. Single-threaded :- (It's a Complex topic)
9. Non-blocking event loop :- (It's a Complex topic)
==> Concurrency model : How the Js engine handles multiple tasks happening at the same time.
    
    Q. Why do we need that ?
    Ans:- JS itself runs in one single thread, so it can only do one thing at a time.
          Therefore, we need a way of handling multiple things happening in the same time.
    In computing, thread is a set of instructions that is executed in the computer's CPU. Basically, the thread where our code is actually executed in the machine processor.

    Q. so what if there is a long-running task ?
    Ans:- That will block the single thread where the code is running. BUT ofcourse we don't want that.
          We want non-blocking behaviour.
        
    Q. How do we achieve that(non-blocking behaviour) ?
    Ans:- By using an event loop: Takes long running tasks, execute them in the "background", and puts them back in the main thread once they are finished.

*/

/* 
THE JS ENGINE AND THE RUNTIME :- HOW code is converted into machine code ?
    1. JS ENGINE :- It's a computer Program that executes JS code.
        Every browser has it's own Js engine. E.g:- Googles V8 Engine & nodeJS  ==> for chrome
        All the Other browsers have their own JS engines.

        Every Js Engine Always contain :- Call stack and Heap
        Call stack :- Where our code is actually executed using execution context.
        Heap:- It's an Unstructured memory Pool which stores all the objects that our applications need.(Where objects stored)

        Compilation :- Entire Source Code is converted into machine code at-once. This machine code is then written into a portable file that can be
                    executed on any computer.
                    source code ---> machine code ---> Program running 

        Interpretation :- There is an Interpreter runs through the source code & executes it line by line. 
                        source code ---> Program running 

        Q. How the Code is compiled to the machine code so that it can be actually executed afterwards(in the Call Stack) ?
        Ans:- 
            JS is used to be a purely interpreter language. BUT, Interpreted languages are much much slower than compiled languages.
            Modern JS engine now used mixed between compilation and interpretation which is called just-in-time(JIT) Compilation.
            
            //imp: doubt in JIT defination. ig:- it convert one line then go for execution like in python and Java ==> PVM and JVM.
            JIT compilation:- Entire code is converted into machine code at once, then executed immediately. But, there is no Portable file to execute.
            
        MODERN JIT Compilation of JS :-
        1. Parsing:- Parse/read the code. During Parsing process, the code is parse into a DS called AST(Abstract Syntax Tree). This step also checks
                    "if there any syntax errors". Now resulting tree later be used to generate Machine code.
                    This AST tree is nothing to do with DOM tree. It is not related anyway. It's a just representation of entire code inside the engine.
        2. Compilation:- Takes generated AST and compiles it into machine code.
        3. Execution:- This machine code will executed. Remember, Execution happens in the JS engines Call Stack.
        4. Optimization:- Happens During Execution... This makes V8 engine fast  //todo: But how? why need this step ?
        All these above 4 steps are happens in some special threads inside the engine that we cannot access from our code. Completely separated from the main thread.
        NOTE:- JS is not an interpreted language.
        
    2. JS RUNTIME:- 
        JS RUNTIME IN THE BROWSER :- JS Runtime is a Container including all the things that we need to use javascript(in this case in the browser). 

        1. Heart of Any JS RUNTIME is always JS Engine. Not only JS engine need BUT We also need access WEB API's like DOM, Timers, Fetch API, ...
        
        2. WEB API's :- Functionalities provided to the engine(But which are not part of JS language itself), accessible on window object.
        JS simply gets access to this API's through the global window object. WEB API's are also part of JS RUNTIME.
        
        3. JS RUNTIME also includes so called CALLBACK QUEUE.
        CALLBACK QUEUE:- This is a DS that contain all the callback functions that are ready to be execute. 
        e.g:- we attach eventhandler function to DOM Elements like a button to react to certain events. This EventHandler functions are also called Callback functions. As the event happens(for e.g:- click) the callback function will be called.

        Q. What Happens After the Event happens ?
        Ans:- First thing that actually happens after the event, the callback function is put into the Callback queue then, when the CallStcak
                (Where code is actually executed) is empty the callback function is to be passed to the stack so that it can be executed. And this happen by something called EVENT LOOP.
        EVENT LOOP:- It takes Callback Functions from the CALLBACK QUEUE and puts them into CallStack so that they can be executed.
                        It is Essential for non-blocking concurrency model.

REMEMBER:- JS can exists outside the Browser. e.g:- NodeJS
JS RUNTIME IN NODE.JS:-
    It is Similary to the "JS RUNTIME IN THE BROWSER". BUT since we don't have a browser, ofcourse we can't have the WEBAPI's b'coz It's the Browser who provides WEBAPI's.
    Instead We have multiple C++ Bindings and Thread Pool. 

*/

/* EXECUTION CONTEXTS AND THE CALL STACKS :- HOW JS Execute in the Call Stack ?
    
Q. What is an Execution context ?
    EXECUTION CONTEXTS :- Environment in which a piece of javascript is executed. Stores all the necessary information for some code to be executed. 
                        such as local variables or arguments passed into the functions.
        JS code always run inside the EXECUTION CONTEXTS. 

    ----> Let suppose that our code was just finished compiling and ready for the exceution.
    Below are the Steps of EXECUTION OF THE CODE :- 
    1. Creation  of global execution context(for top-level code) :-
        Top-level Code is basically code which is not inside Any functions.
        In the begining, only the code that is outside of functions will be executed. This make sense b'coz Functions should only be executed when they are called.
        e.g:- pig-game ==> init() function.

        Function expression & function declare will be declared.
        Function body only executed when called!.

        ===> IN Any JS Project, there is only one Global Execution context(EC) :- Default context, created for code that is not inside any function
            (top-level).

    2. Execution of TOP-level code:- (inside global EC)
    3. Execution of functions and waiting for callbacks :-
        One execution context per function:- For each function call, a new execution context is created. ====> All these execution context together make the call stack.
        SAME FOR THE METHODS b'coz they are simply function attached to objects.

        when all functions are done executing the engine will basically keep waiting for callbacks functions to arrive so it can execute this.
        for e.g:- callback functions is associate with click event. 
        Remember:- That it's Event loop who provides these new callback functions.

Q. What's inside execution context ?
Ans:- These below are the content of the execution context.
    1. Variable Environment :- In this environment, all are variables and function declarations are stored. Also there is a special argument object.
                               This argument object contains all the argument that we passed into the function that current execution context belongs to. B'coz, each function gets it's own execution context as soon as the function is called.
                               A Function can also access variables outside of the functions.
            -> let, const and var declarations
            -> functions
            -> arguments object
    
    2. Scope chain:- It basically consits of references to variables that are located outside of the current functions.
                     To keep track of this scope chain it is start in each execution context.
                     
    3. this keyword:- Each context also gets a special variable called "this" keyword.
                      Generated during "creation phase", right before execution.

    NOTE:- Execution context belong to the arrow functions, 1. Do not get their arguments object 
                                                            2. Nor they get "this" keyword
                Instead, they(Arrow functions) can use the arguments object and the "this" keyword from their closest regular function parent.
    
Q. What actually is callStack ?
Ans:-
    It basically a "place" where execution contexts get stacked on top of each other, to keep track of where we are in the programs execution.

    After execution of all the Execution context of functions and global then program will stay in the state forever(where global execution context exist in the callStack even though completion of the all execution context) untill it is eventually really finished. That only happens when we close the browser tab or the browser window. Only when the program is really finished like this is when the global execution context is also popped of the callStack.

    JS Code runs inside the execution context that are in the callStack.

*/

/* SCOPE AND THE SCOPE CHAIN:-

Q. Scoping and Scope in JS :-
Ans:- As we learned that In each execution context has a variable Environment, a scope chain and a "this" Keyword.

      Scoping:- How our program's variables are organized and accessed "Where do variables live ?" or "Where can we access a certain variable and where not ?"

      Lexical Scoping:- Scoping controlled by placement of functions and blocks in the code.
                        It means that the way variables are oranized and accessed is entirely controlled by the placement of functions & of blocks in the programs code.
                        for e.g:- A function that is written inside the another function has accessed to the variable of the parent function.
    
      Scope:- Scope or Environment in which a certain variable is declared(variable environment in case of functions). 
              There is global Scope, function scope, and block scope.

      Q. What's the difference between scope and variable Environment ?
      Ans:- In case of functions, It's a same.

      Scope of variable:- Region of our code where a certain variable can be accessed.
      Scope !== Scope of variable.


      1. Global Scope:- for top-level code.
                        Outside of any functions or block.
                        Variables declared in global scope are accessible everywhere in the programs(in all functions or in all blocks).

      2. Function Scope:- Each and every function creates a scope. 
                          And the variables declared inside that function scope are only accessible inside that function.This is also called as local scope(Oppose to the global scope).
                          local variables live inside the function.
                          Variables are accessible only inside function, NOT outside.
                          Also called local scope.

            E.g:- function calcAge(birthYear) {
                    const now = 2037;
                  }
                  console.log(now); //referenceError
                  JS is trying to find the "now" variable in this global scope, so outside of the function BUT it cannot find it. Therefore Error comes.

      3. Block Scope(ES6):-
                Traditionally, Only functions used to create scopes in JS. BUT, Starting in ES6 Blocks also creates scope now. Blocks means everything which is between the curly braces{}. e.g:- if stmt, for-loop, etc...
                Variables are accessible only inside block(block scoped).

                HOWEVER, this only applies to "let" and "const" variables!. That's why, we say that the "let" & "const" variables are block scoped.
                If i declared a variable using var in the block then that variable would actually still accessible outside of the block. and that variable will be scoped to the current function or to the global scope. That's why, we say "var" is a function scoped.

                Functions are also block scoped(only in strict mode).


    Scope chain:-
    E.g:-
        const myName = 'Brijesh';

        function first(){
            const age = 30;

            if(age >= 30){ //true
                const decade = 3;
                var millenial = true;
            }

            function second(){
                const job = 'teacher';

                console.log(`${myName} is a ${age}-old ${job}`); //NOTE:- variable "age" & "job" is not declared in the current scope. But we need that.
                //Brijesh is a 30-old teacher.
            }

            second();
        }
        
        first();

    // for simplification, we will only consider variable declaration NOT the function declaration's.
    Global scope:- myName = "Brijesh"

    first() scope:- age = 30
                    myName = "Brijesh" //access from the global scope
                    millennial = true //decared in the if block. But "var" is a function scope Not the block scoped. //imp:

    if bloack scope:- decade = 3

    second() scope:- job = "teacher"
                     age = 30 //access from the first() scope
                     myName = "Brijesh" //access from the global scope
                     millennial = true; //access from the first() scope

                    
    Q. How the scope chain works ?
    ---> Every Scope always has access to all the variables from all outer scopes(Parent's scope). All this also apply to the function arguments.
    ---> If one scope needs to use certain variable But cannot find it in the current scope, it will look-up in the scope chain & see if 
         it can find the variable in one of the parent scopes. //todo: But ig, every scope has only one parent scope ??? e.g:- myName variable access from the second() function. Whereas for the second() function Global scope is also a one of the parents.
         If it can then it will use that variable. And if it can't then there will be an Error.
         This Process is called as variable lookup.(Variable lookup in scope chain)
         @me:- It looks like How the function overriding resolves...
         NOTE:- These variables are not copied from one scopes to another. Instead, Scopes simply looks-up in the scope chain untill it find the variable that they need & then they use it.
         A certain scope will never ever have the access to the variables of innner scopes.


    Q. Difference Between Scope chain & call Stack ?
    Ans:- 
        Scope chain:- Order in which functions are written in the code.
        NOTE:- scope chain has nothing to do with order in which functions were called!
               scope chain has nothing to do with the order of execution context in the callStack.
    
    SUMMARY:-
        👉 Scoping asks the question "Where do variables live?" or "Where can we access a certain variable, and where not?";
        👉 There are 3 types of scope in JS: the global scope, scopes defined by functions, and scopes defined by blocks;
        👉 Only let and const variables are block-scoped. Variables declared with var end-up in the closest function scope;
        👉 In JS, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code functions
            and blocks are written;
        👉 Every scope always has access to all variables from all its outer scopes. This is the scope chain!
        👉 When a variable is not in the current scope, the engine looks up in the scope chain untill it finds the variable it's looking for. 
            This is called variable lookup;
        👉 The scope chain is a one-way street: a scope will never, ever have access to the variables of an innner scope;
        👉 The scope chain in a certain scope is equal to adding together all the variables environments of the all parent scopes;
        👉 The scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all!

*/


// ================================ Scoping in Practice ================================
/*
function calcAge(birthYear){ //This calcAge() fun. is define in the global scope. That's why it is in top-level code.
    const age = 2037 - birthYear;
    console.log(firstName); //firstName is a global variable. Through the scope chain(variable look-up), it is also available inside this calcAge() function.
    console.log(name); //We're not getting Error b'coz it is a special varibale. As we have already disccused. Don't use it!

    // console.log(lastName); //referenceError
    // console.log(nickName); //referenceError //imp:

    function printAge(){
        const output = `${firstName}, You are ${age}, born in ${birthYear}`; //firstName variable is accessed from theglobal scope after it's not found in the calcAge() function. Look-up for firstName:- printAge() func. --> calcAge() func. --> global scope
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){ //Blocked Scope
            var millenial = true;

            // Creating NEW variable with same name as outer scope's variable.
            const firstName = 'Steven'; //Now, when JS found firstName in itself block then No look-up will be perform b'coz if that variable is looking for already in the current scope.

            /*
             Q. What would happens when we redefine a variable from a parent scopes inside of an inner-scope ? 
                  NOT creating a new variable but simply reassigning a value of a variable. /
            //Ans:-
            // Reassigning outer scope's variable
            output = 'NEW OUTPUT!'; //output variable is defined in the printAge() func.
            // const output = 'NEW OUTPUT';

            const str = `Oh, and You're a millenial, ${firstName}`; //Here, look-up for firstName is so longer if firstName variable is not defined in the current scope. 
            // b'coz:- (if look-up for firstName happens) current block scope --> printAge() func. --> calcAge() func. --> global scope
            console.log(str);

            // imp: function's are also a blocked scoped starting in ES6.
            function add(a, b){
                return a+b;
            }

        }
        // console.log(str); //Error:- b'coz, const and let variables are block scoped. They are only availabe inside the blocj inwhich they are created.
        console.log(millenial); //imp: NO Error:- var variables are function scoped to the first-closest functions. 
        // console.log(add(2,3)); //imp: Error:- b'coz, scope of the add() func is only in the block in which it was defined. It proves that function's are only blocked scoped. REMEMBER:- This is true only when we used 'strict mode'. But when strict mode is off then this add() func. will work outside the block also. Try it by removing 1st stmt which is 'use strict'.

        console.log(output); //imp: output is "NEW OUTPUT!" b'coz:- we have manipulated the value of output variable inside the if blocked. If we redefine the variable like 'const output = "NEW OUTPUT!";' inside the if block then it will work as "firstName" variable work inside if function.
    }
    printAge();
    // console.log(millenial); //Error:- //imp: very imp notes

    return age;
} //This function will creates it's own scope.

const firstName = "Brijesh";
// NOTE:- Even though this firstName variable was actually defined after the calcAge() function. Then also it is accessable inside the calcAge() function. That's not a problem at all. B'coz:- code in the function is only executed once it's actually called. That happens after the firstName declaration.
//Here, firstName variable is already in the global Execution Environment variable.
calcAge(1991);

const nickName = "Birju";
// console.log(age); //age is not accessible outside the calcAge() function. That is b'coz:- scope chain is a one-way street. Only an inner scope can have access to the variables of it's outer scope NOT vice-versa.
// printAge(); //refernecError  B'coz:- Same as the above reason. 
*/


/* Variable Environment: Hosting and the TDZ :-
We have learnt that, An Execution context always contains 3 part: 1. variable environment
                                                                  2. scope chain
                                                                  3. "this" Keyword
We have already learn sscope chain. Now, we will learn variable environment.

Q. How variables are actually created in Js ?
Ans:-
    In Js, we have a mechanism called Hoisting.
    Hoisting:- Makes some types of variables accessible/usable in the code before they are actually declared. 
               "Variables are magically lifted/moved to the top of their scope". for e.g:- variables moved to the top of the functions.
               ig, example is function expression. //imp:

               Actually, that is not Happens Then,
               Q. What Happens Behind the Scene ?
               Ans:-
                    Before Execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object.
                    That's How the Hoisting is really works. BUT, Hoisting doesnot work the same for all variable types.

                                                Hoisted?                                    initial Value                Scope
                                                  👇                                             👇                       👇
                function declarations           ✅ YES                                      Actual function             Block(Only in strict mode)
                var variables                   ✅ YES                                      undefined                   Function
                let and const variables         🚫 NO(Technical Yes, But not in practice)   <uninitialized>, TDZ        Block
                function expressions and arrows                     🤷‍♀️ Depends if using var or let/const

                Explanation:- 
                Funtion declarations:- initial value = Actual function
                                        That means, We can use function declarations before they are actually declared in the code.
                                        B'coz they are stored in a variable environment object even before the code starts executing.
                                        // imp: If we use sloppy mode instead of strict mode then functions are function scoped.

                var variables:- Unlike functions When we try to access a var variable before its declared in the code, 
                                We don't get the declared value but get undefined. This is one of the main reason, why in modern Js We almost never used var. 
                                // Here, we might expect an Error. But we get an undefined output instead of an Error. 
                                   That's happens b'coz of Hoisting.
                
                let & const variables:- They are not hoisted BUT, Technically they are actually hoisted. BUT, There value is set to uninitialized.
                                        so there is no value to work with at all. And so in practice it is as if hoisting not happen at all.
                                        Instead We say that these variables are placed in TDZ(Temporal Dead Zone).
                                        We can't access the variable in the begining of the scopes.
                                        --> If we attempt to use let/const variables before it's declared we getan Error.
                                        Let and const are block scoped. So they exists in the block in which they were created.

                function expressions and arrow functions:- It depends if they were created using var or const or let.
                                                           B'coz these functions are simply variables. So they behave exact same as variables.
                                                        // imp: try this.

                            //imp: We cannot use function expressions before we write them in the code unlike function declarations. ==> ig, this stmt is only when we make function expression using let or const variables. If we use var variables then we can use it before function declarations . cnf it!
                
        TEMPORAL DEAD ZONE, LET AND CONST:-
            E.g:-

            const myName = 'Brijesh';

            if(myName === 'Brijesh'){
                console.log(`Brijesh is a ${job}`); //NOTE:- job variable is used before it's declarations. We will get referenceError :- cannot access 'job' before initialization.
                const age = 2037 - 1989;
                console.log(age);
                const job = 'teacher'; //It's a const variable so, it's scoped only to the if-block and it gonna to be accessible starting from the line where it is defined. B'coz:- Above 3 lines of code is a Temporal Dead Zone for "job" variable.
                console.log(x); //ReferenceError:- x is not defined. 

                // NOTE we have two different error stmt for "job" and x variables.
                // That means, variable job is infact in the Temporal Dead Zone where it is still initialized but the engine knows that it will eventually be initialized b'coz, it already read the code before and set the job variable in the variable environment to uninitialized. And When execution reaches the line where the variable is declared it is removed from the temporal dead zone and it 's then safe to use.
            }

            ---> Basically, Each and Every let and const variables get their own Temporal Dead Zone that starts at the begining of the scope untill the line where it is defined. And the variable is only safe to use after the TDZ.

            Q. What is the actuall need for Js to have TDZ ? Why TDZ ?
            Ans:- Main Reason:- TDZ is introduced in ES6
                  This above TDZ Behaviour -->
                  Makes it easier to avoid and catch errors:- accessing variables before declarations is bad practice and should be avoided.
                                                              Ans Best way to avoided is a simply way getting an error when we attempt to do so.
                                                              That's actually what Temporal Dead Zone does.
                  
                  2nd Reason of Why TDZ exists is To make const variables actually work the way they are supposed to do.
                  for e.g:- As we know, that we can't reassign a const variables.
                            so it will not be possible to set undefined first in const variables  and assign their real value later. 
                            const should never be re-assigned.
                            It(const) should only be when execution actually reaches the declaration.
                            That's make the immpossible to use the variable before.

                  B'coz using a variable that is set to undefined before a actually declared can cause serious bugs with might be hard to find.

    Q. If Hoisting creates so many problem then why does it exists in the first place ?
    Ans:-
         The creater of JS, basically implemented Hoisting so that we can use function declarations before we use them. //e.g:- mutual Recursion
         Hoisting of var variables is just a byproduct of hoisting functions.

*/


// ===================================== Hoisting and TDZ in practice ==========================================
/*
//Hoisting with variables:-
console.log(me); //undefined ==> B'coz, variables declare with var are actually Hoisted but they are hoisted to the value of undefined. Therfore, when we try to access them, undefined is exactly the result that we get.

console.log(job); //referenceError:- Cannot access 'job' before initialization.
console.log(year); //referenceError:- Cannot access 'job' before initialization.
//B'coz, job and year variable is still in the Temporal Dead Zone(TDZ).
// Remember:- TDZ of a variable declared with let or const starts from the begining of the current scope untill the code where that variable is defined.

var me = 'Brijesh';
let job = 'teacher';
const year = '1991';
*/

//Hoisting with functions:-
/*
console.log(addDeclaration(3,6)); //output is 9
//imp: NOTE:-We are able to call the function Declaration before it was actually defined in the code.
//imp: The Only function that we can use before declaring it is the Function Declarations.

// console.log(constAddExpression(3,6)); //ReferenceError: Cannot access 'constAddExpression' before initialization
// console.log(constAddArrow(3,6)); //ReferenceError: Cannot access 'constAddArrow' before initialization
// B'coz:- This function are now const variable too. In js, functions are nothing but a value and it is stored in const variable. That means, It is now also in TDZ.

function addDeclaration(a,b){
    return a+b;
}
const constAddExpression = function(a,b){ 
    //This function are now const variable too. In js, functions are nothing but a value and it is stored in const variable. That means, It is now also in TDZ. We are simply assigning function value to this constAddExpression variable And since this variable was defined with const. so it is now in the TDZ. Therefore, will get an Error if we use it before its defination in the code.
    return a+b;
}
const constAddArrow = (a,b) => a + b; //NOTE:- when we use curly braces then we have to write curly braces{} manually. --> cnf this stmt.


// ================== let is used for function Expression and Function Arrow :- Conslusion:- Same as const ========================
// console.log(letAddExpression(3,6)); //ReferenceError: Cannot access 'letAddExpression' before initialization
// console.log(letAddArrow(3,6));  //ReferenceError: Cannot access 'letAddArrow' before initialization
let letAddExpression = function(a,b){
    return a+b;
}
let letAddArrow = (a,b) => a + b; 
*/


// =================== var is used for function Expression and Function Arrow ==================
/*
console.log(varAddExpression(3,6)); //TypeError: varAddExpression is not a function.
console.log(varAddArrow(3,6)); //TypeError: varAddArrow is not a function.
// B'coz:- As we know, that any variable declared with var will be Hoisted and set to undefined. Therefore, varAddExpression is declared with undefined.(same for the varAddArrow). Variable(varAddExpression, varAddArrow) declared with var and right now it's undefined. And here we are trying to call undefined basically. 
// e.g:-
console.log(undefined(2,3)); // TypeError: undefined is not a function
console.log(varAddExpression, typeof varAddExpression, varAddArrow, typeof varAddArrow);

var varAddExpression = function(a,b){
    return a+b;
}
var varAddArrow = (a,b) => a + b; 
*/


//imp: Example:-
/*
console.log(numProducts);
if(!numProducts) deleteShoppingCart(); //at this point numProducts is undefined NOT 10, And undefined is also a falsy value. That's why, deleteShoopingCart() function called and execute.
// Hoisting working with var. e.g:-
// It's gonna be a bug that will be Hard to find.
// Q. What are the Best Practice? What is the conclusion of all this ?
// Ans:- 1. Just Don't use var to declare variables. Use const most of the time to declare variables and let if we really need to change later.     
//          And in order to clean code, we should to declare variables at the top of each scope.
//       2. Always declare all your function first and use them after the declaration. 
//          This applies to all types of functions even function Declarations which are hoisted.
//          We can use the function Declarations before we declare them. But still just Don't do that.

var numProducts = 10;

function deleteShoppingCart(){
    console.log('All products deleted!');
}
//Note:- output is : All products deleted!
// All product's  deleted even though numProducts is actually 10. It happens b'coz of Hoisting.
*/


// imp: Example:- Let see another difference between let,var and const
/*
var x = 1; //We also get a property x=1 in the window object. That exactly the variable which is declared with var keyword.
let y = 2; //However, we cannot find 'y' or 'z' anywhere in the window object and that's b'coz they were declared with let or const.
const z = 3;
//So, variables declared with let or const donot create properties on the window object.
console.log( x === window.x); //true //imp: NOTE:- variables which are declaraed with 'var' will be property of window object.
console.log(y === window.y);
console.log(z === window.z);
// Conclusion:- variables declared with var will create a property on the global window object.
// todo: I know it's not related to do this BUT, can we find object similarly in console screen in window object as we see variable(declaraed with var) as a property of window ????


//window is the Global object of Js in the Browser.
//imp: e.g:-
console.log(window, typeof window); //window object will be printed.

//todo: How to use onmousemove using window object ? How to understand documentation of Js code ?
// imp: 🎉 I got the answer!🤩  see 👉👇 
// window.onmousemove =  () => { console.log(`Hello 1`); };  

// window.alert('Hello JS Learner');
// alert('Hello');
// window.console.log(`My name is Brijesh`);
*/




/* THE THIS KEYWORD :-
'this' keyword/variable:- Special variable that is created for every execution context(every function).
                          'this' keyword Takes the value of(points to) the "owner" of the function in which the 'this' keyword is used.
                          This is the one of the 3 components of any execution context along with the variable environment and scope chain.
                          The value of the 'this' keyword is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called.

        Four different in which functions will be called:-
        1. Method :- 👉 this = <object that is calling the method>
                     As a Function attached to an object. 
                     So, when we call a method the 'this' keyword inside that method will simply point to the object on which the method is called.
                     or in otherwords, It(this) points to the object that is calling the method.
            e.g:-
            const jonas = {
                name: 'Brijesh',
                year: 1989,
                calcAge: function(){
                    return 2037 - this.year; //Q. What should be the value of 'this' keyword here ? Ans:- It should be jonas b'coz that is the object that is calling the method(in this line:- jonas.calcAge();).
                }
            };
            jonas.calcAge(); //48
            // Note:- calcAge is a method b'coz it is a function attached to the jonas object.

        2. Simple function call :- 👉 this = undefined.   Only valid for 'strict mode', Otherwise 'this' will point to the window.
                                   Another way, we call functions is by simply calling them as normal functions.
                                   In this case, 'this' keyword will simply be undefined. However this is only valid for 'strict mode'.
                                   Otherwise, 'this' keyword will point to the window(which is global object in the browser)(in the browser).
                                   And That can be very problematic and so this is yet another very good reason to always use 'strict mode'.
        
        3. Arrow functions:- 👉 this = < of surrounding function (lexical this)>
                             Arrow functions are not actually a way of calling functions. It's an important kind of function that we need to consider. B'coz:- Remember, Arrow functions do not get their own 'this' keyword.
                             Instead, if we use the 'this' variable in an arrow functions it will simply be the 'this' keyword of the surrounding functions(parent functions). In Technical terms this is called the lexical 'this' keyword b'coz it's simply gets picked up from the outer lexical scope of the arrow functions.
                             //imp: Arrow functions do not get their own 'this' keyword.
                // todo : me:- can we manipulate the 'this' keyword variable ? like this 👉 this='Hello this Keyword' . is 'this' keyword is mutable in JS unlike in C++ ?


        4. Event Listner:- 👉 this = <DOM element that the handler is attached to>
                          If functions is called as an event Listner then the 'this' keyword will always point to the DOM element that the handler function is attached to.

        // imp:
        --> 'this' will never point to the function in which we are using it.
        -->  Also the 'this' keyword will never point to the variable environment of the functions.

        There are actually other ways in which we can call a function. 
        for e.g:- Using 'new' keyword,call,apply,bind 👉 <We will learn later in the course ...⏳> 

*/

// ======================== THE 'This' KEYWORD IN PRACTICE ====================================
/*
console.log(this, typeof this, window, typeof window); //'this' Keyword point to window(global object in the browser)
*/

// Simple function call:-
/*
const calcAge = function(birthYear){
    console.log(2037 - birthYear);
    console.log(this); //imp: undefined    B'coz:- Regular function is called. (we're in 'strict mode')
}
calcAge(1991); //Regular function is called And we are also in strict-mode that's why the 'this' keyword value is undefined.  In sloppy-mode the value of 'this' keyword is point to window Global object when we call the function as we callin the regular functions.
// Regular function called means calling a function without the function being attached to any object.
*/


// function calling with an Arrow functions:-
/*
// Now, calcAgeArrow is an Arrow function
const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this); //imp: window object    B'coz:- Arrow functions doesn't have their own 'this' keyword. That's why, Arrow function use lexical 'this' Keyword. Which means that it uses the 'this' Keyword of its parent function or of its parent scope.
    //Here, 'this' keyword point to 'this' keyword of (the parent scope)global scope which is window object.
}
calcAgeArrow(1991);
*/



//function call with an object:-
/*
const jonas = {
    year: 1991,
    calcAge: function(){ //function Expression
        console.log(this); 
        console.log(2037 - this.year); //Here, advantage is:- we don't have to pass jonasYear as a argument in the functions. @me:- Looks Like OOPs concept learnt in CPP.
        // Here, 'this' Keyword is reference to an object.
    }
};
const matilda = {
    year: 2017,
};
jonas.calcAge(); //jonas object will print. ==> Here, jonas is owner of the method b'coz jonas is calling a method.
// When we have a method call then 'this' keyword inside of the method will be the object which/that is calling the method. Here, in this case jonas is calling the calcAge() method.
// matilda.calcAge(); //NaN  //imp: output is Nan  b'coz:- calcAge() function is not define in the matilda object.  ig, for this we should use Classes and object concept.

console.log(`-------------------------------------------------------------------------------------------------------`);

matilda.calcAge = jonas.calcAge; //Basically, here we simply copied calcAge method from jonas to matilda. ===> This is called METHOD BORROWING.
    //@ me:- As we know that functions are nothing but a value. Therefore, calcAge method in jonas is stored as a value in calcAge variable. And we create a varibale(whose name is calcAge) inside matilda object and Copied the calcAge value from the jonas and assign to the matilda calcAge variable.
    // METHOD BORROWING:- Borrowing method from one object to other object.
console.log(matilda);
matilda.calcAge(); //Here, 'this' keyword point to the matilda b'coz matilda calls the method.
// console.log(matilda.calcAge()); //undefined ---> b'coz calcAge() function doesn't returning anything.
// console.log(matilda.calcAge); //imp: NOTE the output.
// console.log(jonas.calcAge);//imp: NOTE the output.


const f = jonas.calcAge; //We're coping a function into a new variable. That is possible b'coz function is just a value. 
                         //And we take the value of calcAge & copied to f.
// console.log(f);
// f(); //'this' keyword is undefined as in simply(regular) function call And
        // getting 1 error ==> b'coz:- Cannot read properties of undefined (reading 'year')
*/

//NOTE:- 'this' keyword with EventListner function will be seen later in Advanced DOM Manipulation lecture...





// ============================ This Keyword Related to Regular functions v/s Arrow functions ================================================
/*
// var firstName = 'matilda'; //Uncomment this line and see the output of :-jonas.greet(); function

const jonas = { //NOTE:- this is not code block(You might think for this block {} ==> Execution context create and 'this' keyword also BUT it's NOT). It's just an object literal.
    firstName: 'Brijesh',
    year: 1991,
    calcAge: function(){ //function Expression
        console.log(this); 
        console.log(2037 - this.year); 
    },

    greet: () => { 
        console.log(`Hey ${this.firstName} Hello, Now printing this keyword. ${this}`); //NOTE the output....
        // console.log(this, typeof this);
    }, //Parent scope of this greet method is the global scope. //todo: BUT how parent is global scope??????
};
jonas.greet(); //Hey undefined //todo: Why we don't get the output:- Hey window object??? //imp: I got the answer. 'this' points to window object. And firstName is not a property of window object, It's a property of jonas object. 
//todo: Then How can i access the firstName property of jonas object through window object in console ???? my means that windows.jonas.greet() ===> something like that. How to see an object inn window object in console screen as we see variable(declared with var) as a property of window(global objcet) ??? 
//imp: NOTE:- Arrow functions do not have their own 'this' keyword. It simply use 'this' keyword of parents scope(surrounding). That's why, in above snippet:- 'this' represents to window object even though it is called by 'jonas' object.


// imp: NOTES:- 
console.log(this, typeof this, this.firstName); //When we try to access the property that doesn't exists on a certain object, we do not get an error but simply undefined.
//And Actually this behaviour can be dangerous in case we use 'var' to declare variable. See the Output of this line of code :- jonas.greet();    We will get Output :-Hey matilda Hello, Now printing this keyword. [object Window]    instead of this:-Hey undefined Hello, Now printing this keyword. [object Window]   B'coz:- As variable is declared with var so that variable will become property of a global object called window.         That's the another reason that why we should not use the 'var' variable.
// imp: Variables declared with var actually create properties on the global object.
*/


//imp: Conclusion of above Example:-
// As a Best Practice, You should never ever used an Arrow functions as a method(NOTE:- We can use an Arrow functions as a functions). Always use normal function expression. This above kind of mistake will be prevent.



// When function is inside of method :- this keyword
/*
const jonas = { 
    firstName: 'Brijesh',
    year: 1991,
    calcAge: function(){ //function Expression
        console.log(this); //'this' point to an object which calls calcAge() method.
        console.log(2037 - this.year); 

        const isMillenial = function(){
            console.log(`------------inside isMillenial functions----------`);
            console.log(this); //undefined  B'coz:- 
            console.log(this.year >= 1981 && this.year <= 1996); //'this' points to whom ??????  Ans:- TypeError: Cannot read properties of undefined (reading 'year')
        }
        isMillenial(); //It is simple regular function call, Even though it happens inside of a method. Acc. to below rule, 'this' keyword is undefined in this function.
        //imp: RULE says:- Inside a Regular function call, the 'this' keyword must be undefined.
    },

    greet: () => { 
        console.log(this, typeof this);
        console.log(`Hey ${this.firstName} Hello, Now printing this keyword. ${this}`); //NOTE the output....
    }, //Parent scope of this greet method is the global scope. //todo: BUT how parent is global scope??????
};
jonas.greet();
jonas.calcAge();
*/



//There are two solutions of above problem :-
/*
const jonas = { 
    firstName: 'Brijesh',
    year: 1991,
    calcAge: function(){ //function Expression
        console.log(this); //'this' point to an object which calls calcAge() method.
        console.log(2037 - this.year); 

        // 1. Use extra variable which is usually called self or that.
        /*
        const self = this; //object which calls calcAge() method will be assign to self variable.
        const isMillenial = function(){
            console.log(`------------inside isMillenial functions:- 1st Solutions ----------`);

            // Through the scope chain, self access from parent. ===> Remember the Scope chain working.... If variable not found then go to one of the parents............ We have learnt all this already.
            
            console.log(self); //jonas object.  Here, self points to that object which calls the calcAge() method.  
            console.log(self.year >= 1981 && self.year <= 1996); 
        }
        isMillenial(); 
        /

        // 2. Now we have more modern solution in ES6:- i.e:- use to an Arrow functions. ==> That is going to work b'coz Arrow functions does not have it's own 'this' keyword. It(Arrow function) will simply use 'this' keyword of the parent scope.
        const isMillenial = () => {
            console.log(`------------inside isMillenial functions:- 2nd Solutions ----------`);
            console.log(this); //'this' keyword of parent scope will be used which is calcAge() method. And in calcAge() method, 'this' represent to an object which calls calcAge() method.
            // imp: here, Basically An Arrow functions inherits the 'this' keywords from the parent scope.
            console.log(this.year >= 1981 && this.year <= 1996); 
        }
        isMillenial(); 
    },

    greet: () => { 
        console.log(this, typeof this);
        console.log(`Hey ${this.firstName} Hello, Now printing this keyword. ${this}`); //NOTE the output....
    }, //Parent scope of this greet method is the global scope. //todo: BUT how parent is global scope??????
};
jonas.greet();
jonas.calcAge();
*/

/*
const isMillenial = function(){
    console.log(`----------------------`);
    console.log(this); //undefined  B'coz:- 
    // console.log(this.year >= 1981 && this.year <= 1996); //'this' points to whom ?  Ans:- It points to an undefined acc. to rule.
    //TypeError: Cannot read properties of undefined (reading 'year')
}
isMillenial();
*/
// imp: mysuggestion:- use method for function which is attached to an object. Otherwise, use function. This helps to understand easily.



//========================================= Arguments keyword :- ====================================================================
// ===In Execution context & call-stack video, we have learnt that:- Functions also get access to an 'arguments' keyword just like 'this' keyword ==
//NOTE:- just like 'this' keyword, the 'arguments' keyword is only available in regular functions.
// todo: BUT ig, 'this' keyword is also available in the funtion expression as well as in regular functions. above e.g:-
/*
const constAddExpression = function(a,b){
    console.log(arguments);
    return a+b;
};
constAddExpression(2,5);
// This 'arguments' keyword can be useful when we need a function to accept more parameters than actually specified. ig, Like keywordargs in python. Kewargs**
// e.g:-
constAddExpression(2,5,6,7,8,9.7,'Hello',() => { console.log(`Hello`); }); //imp: NOTE:- It is completely legal to add more arguments. They don't have name but they are exists. we can see them in arguments array.


var varAddArrow = (a,b) => { 
    console.log(arguments);
    return a+b; //Remember:- When we have more than one line of code in Arrow function then we have to do explicitly return.
}
varAddArrow(2,5,6,7,8,9.7,'Hello',() => { console.log(`Hello`); }); //ReferenceError: arguments is not defined //imp: Error
// imp: 'arguments' keyword exists only in regular functions.
//Anyway 'arguments' keyword is not that important in modern JS any more. B'coz:-  Now, we have a modern way of deal with multiple parameters.
*/




// =============================== Primitive v/s Objects (primitive v/s Reference types) :- ====================================================
/*
//Primitive types:- 
let age = 30;
let oldAge = age;
age = 31;
console.log('age:',age); //age: 31
console.log('oldAge:',oldAge); //oldAge: 30


//Objects or Reference types:-
const me = {
    name: 'Brijesh',
    age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friends:', friend); //Friends: {name: 'Brijesh', age: 27}
console.log('Me:',me); //Me: {name: 'Brijesh', age: 27}
*/

/*primitive v/s Reference types:- See the video... to understand better... 
//imp: You must see this video to learn "How primitive & reference type works behind the scene ?"

Primitives types in JS:- They are stored in callStack(That means, they are stored in Execution context in which they are declared)
1. Number
2. String 
3. Boolean
4. Undefined
5. Null
6. Symbol
7. Bigint


Objects or reference types:- They are stored in Memory Heap
1. Object literal
2. Arrays
3. Functions
4. etc...


JS Engine:- CallStack(Where functions are executed) + Heap(where objects are stored in memory)
--> Execution Context runs in callStack.

--> //imp: Whenever we are coping an object, we are really just creating a new varaible that point to the exactly same object.                      See the "Primitive versus Reference types.jpg" present in this current folder.
*/


/* =======================================================================================================
"How JS works behind the scenes" Topics for later...
1. Prototypal Inheritance 👉 Object Oriented Programming(OOP) with JS
2. Even loop 👉 Asynchronous JS Promises, Async/Await and AJAX
3. How the DOM Really works 👉 Advanced DOM and Events
*/


// ============================================== Primitives v/s Reference(or objects) in Practice ==============================================
//Primitive types:-
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);  

// Reference types:-
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
const marriedJessica = jessica; //copying the object. Behind the scenes:- We are actually just copying the reference which will then point to the same object. 
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
// It happen b'coz when we attempted to copy the original jessica object, it did infact not created new object in the heap.

// marriedJessica = {}; //Error:- B'coz this new object will be stored at a different position in memory(Heap). Therefore, the referenced to that position in the memory(callStack) will have to change in this variable. Therefore, that doesn't work since it is const.

// imp: When const is used then we can't change the value in the callstack but can change the value in heap. As we have done in above e.g:- marriedJessica.lastName = 'Davis'                                                                                                               const is only about the value which is in the stack.
// todo: How to prevent this above problem ?? What if we actually want to copy the object so that we could then change one of them without changing the other. 
//todo: Q. How you will do this in C++ language ? //imp: Ans:- vector<int> vec = func('this function will return the reference of vector').         or we can copy by iterating to all the elements.                                                                                                  If we want to point to the same object then, vector<int> &vec = func('this will return reference of vector'). 

//copying objects:-
console.log(`---------------- Copying objects :- -------------------`);
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
const jessicaCopy = Object.assign({}, jessica2); //This function merge two objects and returns new objects.
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
//imp: NOTE:- However there is still a problem b'coz using this technique(object.assign()) only works on the first level. In otherwords, if we have an object(object can be functions,array,object literal, etc...) inside of an object then this inner object will actually still be the same. So, it will still point to the same place in memory. That's why we say that, Object.assign() only creates a shallow copy and NOT a deep-clone.           Shallow copy will only copy the properties in the first level while a deep clone would copy every thing.
// todo : Revise the Shallow-copy and Deep-copy in C++. This concept is also present in C++.

// e.g:- Problem with Object.assign() ===> only shallow copy
console.log(`-------- Problem with Object.assign()---------`);
const jessica3 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'], //An array is just an object. //imp:
};
const jessicaCopy1 = Object.assign({}, jessica3); //This function merge two objects and returns new objects.
console.log('Before changing family Array:-');
console.log('Before marriage:', jessica3);
console.log('After marriage:', jessicaCopy1);

jessicaCopy1.lastName = 'Davis';
jessicaCopy1.family.push('Mary');
jessicaCopy1.family.push('John');

console.log('After changing family Array:-');
console.log('Before marriage:', jessica3);
console.log('After marriage:', jessicaCopy1);
// Here,Both the object jessica3 and jessicaCopy1 have a property called 'family' which points at the same objects in the memory Heap.And that object is an array 'family'.

// todo: Now, we understand the importance of Deep-shallow or Deep-clone. so, my suggestion:- Always do Deep-shallow to avoid the bug/error in future.
// Using an external library we can do Deep-clone.for e.g like:- 'lodash' ==> we will see later...