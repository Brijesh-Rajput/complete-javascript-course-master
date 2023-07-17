'use strict';

// OOP is a programming paradigm based on the concept of objects. Paradigm is the Style of the code => "How" we write and organize code.
// Functional programming allows us to achieve the exact same goal i.e. avoiding spaghetti code. It is also a one type of programming paradigm.
console.log("Hello");
// Till now, we have only used the literal objects BUT we didn't create the objects programatically.

// 4 Fundamental principles:-  1. Abstraction   2. Encapsulation   3. Inheritance   4. Polymorphism 
// Abstraction :- Ignore or hide details that don't matter. for e.g:- addEventListener()  ----> We don't know how it works behind the scene bcoz its implementataion is abstract from us. 
// Encapsultaion :- Properties & method should be private. It shouldn't accessible from outside the class. some method can exposed as public interface(API)
// Inheritance :- To avoid duplicates code. 
// Polymorphism :- child class can overwrite method which is inherited from parent class by defining same method in child class.

// How OOP actually looks like in JS ? It is implemented in bit different way.
// ----------------------------------------------------- OOPs in JS ---------------------------------------------------------------
// Prototypes :- 👉 Objects are linked to a prototype object.
              // 👉   Prototype  <------ Object

            // All objects in JS are linked to a certain prototype object. so, we say that each object has a prototype.
            // Prototype object contains methods and properties that all the objects which are linked to that prototype can access and use the methods of prototype object. This behaviour is usually called Prototypal inheritance. 
            // 👉 Prototypal inheritance :- Prototype contains methods(behaviour) that are accessible to all objects linked to that object.

            // All objects that are linked to a certain prototype objects can use the methods and properties that are defined on that prototype. so, basically objects inherit methods & properties from the prototype which is the reason why this mechanism called the Prototypal inheritance.

    // We have used prototypal inheritance many times without knowing that. for e.g:-
    const num = [1, 2, 3];
    num.map(v => v * 2); // map method is not defined on the num array itself but on its prototype.
    console.log(num);
    // Here, we're able to use map method bcoz of the prototypal inheritance. i.e:- Array.prototype.map()
    // Array.prototype is the prototype of all array objects we create in Js. Therefore, all arrays have access to the map method! 

//todo: "How do we actually create prototypes ?  And how do we link objects to prototypes ?  How can we create new objects, without having classess ?" 
// 3 ways of implementing prototypal inheritance in JS :-
        // 1. Constructor functions 
        // 2. ES6 Classes
        // 3. Object.create()

            // 1. constructor functions :- 👉 creating objects programatically using a function 
            // 2. ES6 Classes :- 👉 More modern way of doing OOP in Js. ES6 classe work exactly like constructor functions.
            // 3. Object.create :- Easiest & most straight forward way of linking an object to a prototype object.

            // "How to implement 4 fundamental principles of OOPs using prototypal inheritance ? "


// --------------------------------------------- Constructor functions and the new operator -------------------------------------
/*
// We can use constructor functions to built an object using a function. Constructor function is actually a completely normal function.
// Only difference between normal function and constructor function is that ==> we call constructor function with the "new" operator.
const Person = function(firstName, birthYear) {// convention:- Constructor function always start with a Capital letter. Like Array, Map 
    // 👉 Here, we're using function expression but ofcourse function declaration will also works. //imp: Arrow function willnot work as a function constructor. That's bcoz:- It doesn't have its own "this" keyword & we need that.
    // NOTE that :- This function basically produce an object & in this case "Person" object

    console.log(this); // It should be an empty object which is created in first step of behind the scene work. That's bcoz:- we're calling with the new keyword.
    // Browser tells that that it's type is person. This is just the name of the constructor function.

    // Now, we will use this knowledge to our advantage :- B'coz we already know that in the end of the function the "this" keyword will basically be returned. And so, whatever we add to that empty object will then be returned from the function. And that returned object is going to be an object that we are trying to build here actually.

    // 👇 These properties are called instance properties. b'coz:- "firstName" & "birthYear" will be available on all the instances that are created through this constructor function
    this.firstName = firstName;
    this.birthYear = birthYear;

    // console.log(this);

    // Adding methods // imp: This is bad practice.👇👇👇
    // this.calcAge = function(){
    //     console.log(2017 - this.birthYear);
    // }; 

    // You should never create a method inside of a constructor function 🌟✨⭐. That's bcoz:- Imagine you create 1000's of Person object using thsi constructor function then each of the function would carry around this function. If we had 1000's object we would essentially create a 1000's copies of this function. That wiil be terrifble of performance fo the code. 
    // 👆👆 To solve this problem we are gona to use prototype and prototypal inheritance just like we discuss in the last video.
    // imp: NOTE:- Function Constructor are not really feature of the JS Language. Instead they are a simple pattern that has been developed by other developers & now everyone simply uses this.

}
new Person('jonas', 1998);
// This 👆 new operator is actually a very special operator b'coz:- It calls the function(i.e Person) & lot more thing it does.
// "What happens behind the scene, when we call the function(constructor function) with new operator ?"
// Ans:- 4 steps are happens behind the scene. //imp: These below steps also works with ES6 Classes BUT NOT with the Object.create()
     // 1. a new empty object is created. 👉 New {} is created 
     // 2. function is called & in this functioncall the "this" keyword will be set to this newly created object. 👉 this = {}
     // 3. This newly created object is linked to a constructor function prototype property. 👉 {} linked to prototype. //More about later //todo: What does it mean ??  Can you just tell me ? ⭐✨🌟 //imp: this steps create "__proto__" property for an object and it sets its value to the prototype property of the function that is being called. It sets the proto property on the object to the prototype property of the constructor function.
     // 4. Object that is created in the begining is then automatically returned from that contructor function. 👉 function automatically returns {}
        // But, actually at this point the object no longer needs to be empty. And This is actually the trick of making the constructor function work. 
        // new object is returned from constructor function call, unless we explicitly returned something else.

const jonas = new Person('jonas', 1995);
console.log(jonas);
// Now, we can use this constructor function to create as many different object as we want.
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 2017);
// This Constructor function is the blueprint(analogy -> Blueprint of house). And each of the object which we creates through that constructor function will be the  actual house in real world.
console.log(matilda, jack);
// 🎉 We create objects programatically using a constructor function.
// imp: Js doesn't really have classes in the sense of traditional OOP. However we did create an object from a constructor function. Constructor function have been use since the begining of the JS to kind of simulate classes.
// so, Therefore we can still say that "jonas", "matilda", "jack" is an instance of Person. 
// 👆 There is an operator to test that. Whether "jonas" is an instance of Person ?
console.log(jonas instanceof Person);
const jay = 'Jay';
console.log(jay instanceof Person);


// ======================================================= Prototypes =====================================================================
// each and every function in Js, automatically has property called Prototype. That includes ofcourse constructor function. that means, in constructor function also Prototype property is also exist. 
// Every object that created by a certain constructor function will get access to all the methods and properties that we define on the constructor prototype property.

console.log(Person.prototype);

//Prototype property of the constructor function Person.
Person.prototype.calcAge = function(){
    console.log(2017 - this.birthYear);
};
// imp: 👆 All the objects that are created through this constructor fucntion(Person) will inherit to all the methods and properties that are define on this "Peron.prototypoe" property.
// Person.prototype 👉 this prototype is actually an object.


// We can now, use this calcAge() function on the jonas, matilda, jack object even though it is not really on the object itself.
console.log(jonas); // 👉See it doesn't contain calcAge() function. But still we have access to it bcoz of prototypal inheritance. same for matilda,jack objects.
jonas.calcAge();
matilda.calcAge();
jack.calcAge();
// This jonas, matilda, jack objects are somehow connected to the Person that's why they can have an access to this(calcAge()) method which is located inside the prototype property of Person constructor function.
// BUT, How & why does this actually work ? It works bcoz:- any object always has access to the method & properties from its prototype. And prototype of jonas, matilda and jack is "Person.prototype". 👉 We can actually confirm that bcoz:- each object has a special property called "__proto__".
// imp: Now, It looks like C++ Classes & objects. BUT How does inheritance works in JS ? How to make Private & public accessible properties and method in JS ?
console.log(Person.prototype === jonas.prototype); // byme:- Person.prototype is the prototype of the object of Person whereas, jonas.prototype is the prototype of object of jonas.
console.log(Person.prototype === matilda.prototype);
console.log(Person.prototype === jack.prototype);

console.log(Person.prototype);
console.log(jonas);
console.log(jonas.__proto__); //imp: where does this "__proto__" property of jonas object actually come from ?  Ans:- Remember "new" operator, It contain the step number-3 Which links empty new object to the prototype. This step number-3 creates the "__proto__" property.

console.log(Person.prototype === jonas.__proto__); // ⭐⭐jonas's prototype is the prototype property of the Person(Constructor Function).
console.log(Person.prototype === matilda.__proto__);
console.log(Person.prototype === jack.__proto__);

// "Person.prototype" is not the prototype of the Person BUT instead it is gonna be used as the prototype of all the objects that are created with the person Constructor function. 🌟✨✨✨⭐  Proof 👇👇👇

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(jack));

// .prototypeOfLinkedObjects  ?????????????


// setting properties on the prototype NOT just method
Person.prototype.species = 'Homo Sapiens'; // This property is common to all the objects.
console.log(jonas,matilda); //see this species property on "__proto__"
console.log(jonas.species, matilda.species, jack.species); //imp: Bcoz of its prototype it has the access.{It is in the prototype property of the person}
// NOTE:- "species" property is not really directly in the object. so, it's not its own property. Own properties are only the ones that are declared directly on the object itself. NOT including inherited properties. Actually in Js, there is a way of checking to that. 👇
console.log(jonas.hasOwnProperty('firstName')); //true ✨🌟⭐
console.log(jonas.hasOwnProperty('species')); //false
// todo: hasOwnProperty() method :- "How we are able to access this method in jonas object ?" From where this method comes into "jonas" object ? "Is it inherited ? if yes then from where ?"


// =================================== Prototypal inheritance AND the Prototype chain ======================================
console.log(Person);
console.log(Person.prototype);
console.log(Person.prototype.constructor); //imp: Person.prototype.constructor === Person. It points to iteself
console.log(Person === Person.prototype.constructor);

console.log(Person.prototype); //This tells that it's a prototype of an object of Person 
console.log(Person.prototype.__proto__); // This tells that it has all methods & properties which are inherited from its parent And that are stored in this "__proto__" property.
console.log(Person.prototype.__proto__.constructor); //This is that whose "prototype" property is assigned to Person.prototype.__proto__  bcoz:- Person.prototype{i.e prototype} is also an object and each object has its own prototype
console.log(Person.prototype.__proto__.constructor.prototype === Person.prototype.__proto__); //That's we're getting true.🌟✨✨


//imp: NOTE:- We can also override the methods{of parent} in prototypal chaining.
// e.g:- 
const me = function(myName){
    this.name = myName;
    this.hasOwnProperty = function(propertyName){
        console.log("Hii I overwride the method! It's my function called", ` I will not tell that whether ${propertyName} is its own Property or NOT bcoz its my function`);
    }
}
const birju = new me();
birju.hasOwnProperty();

console.log(jonas); // see, How jonas is accessing "hasOwnProperty()" from Object.prototype in prototypal inheritance.
// REMEMBER:- "hasOwnProperty()" method has not been copied to the "jonas" object. instead, it simply inherited method from Object.prototype through the prototype chain. 


// ============================================== Prototypal inheritance on Built-in Objects ============================================
console.log(jonas.__proto__ === Person.prototype);
console.log(jonas.__proto__); // It represents the Person.prototype
console.log(jonas.__proto__.__proto__); // It represents the Object.prototype object
console.log(jonas.__proto__.__proto__.__proto__); // It represents Null bcoz:- there is no parent of Object class.{Object.prototype is the top of the prototype chain}

// -----------------------------------------
// console.log(jonas.prototype.constructor); 👉👉 IT's an Error NOTE that bcoz:- ig, jonas is not a function
function fun1(){
    console.log("Hii");
}
console.log(fun1.prototype);
console.log(fun1.prototype.constructor);
console.dir(fun1.prototype.constructor);

//-------------------------------------------
console.log(Person.prototype.constructor); // constructor property points back to the "Person"
console.dir(Person.prototype.constructor); //imp: dir use to inspect it 

console.log(Person);
console.dir(Person);

// -----------------------------------------
const arr = [1, 2, 3, 6, 9];
console.log(arr.prototype); // undefined, ig, it is bcoz:- we can't inherit this arr into an another array
console.log(arr.__proto__); // This is an Array.prototype methods & properties. All these are inherited from Array.prototype
console.log(arr.__proto__ === Array.prototype); // where, Array is a constructor function.
// Therefore, arr = [2,1,4]    is equal to this 👉 new Array([2,1,4])
// similarly like, new Person("jonas",1995); where Person is also a constructor function just like an Array.
const arr1 = new Array([1,2,4]);
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__); // This is an object.Prototype bcoz:- "arr.__proto__" itself is an Array.prototype which inherits the properties & methods from Object.prototype like this 👉 Array.prototype.__proto__ = Object.prototype

console.log(arr,arr1); // see prototype property(__proto__)

// ---------------------------------------------
// At this point, we know that any array inherits all methods from its "prototype". ===> We can use this knowledge to extend the functionality of Arrays even further.
Array.prototype.birjuMethod = function(){ //Now, all the array will inherit this method
    console.log(this); // it represent the object which calls this method
    console.log(typeof this); // object 🌟✨
    console.log("Hey, It's birju!");
}
Array.prototype.join = function(){
    console.log("Hii join! I override the Array.prototype.join() inbuilt-method. NOTE:- It's a bad practice. DON'T do this.");
}
const arr2 = [1,4,6,8,9,4,9,6,1,1];
arr2.birjuMethod();
arr2.join();

Array.prototype.unique = function() {
    return [...new Set(this)];
}
console.log(arr2.unique());
// Here, we have extended the prototype of a built-in objects. ===> That's not a good idea. //imp:

// ----------------------------------------------
const h1 = document.querySelector('h1'); // imp: we already know that all the DOM elements are objects behind the scenes.
console.log(h1);
console.dir(h1); //imp: see its prototype and prototype chain.
// HTMLHeadingElement ---> HTMLElement ---> Element ---> Node ---> EventTarget ---> Object //we have already seen this in DOM lectures, these are types of object. See DOM manipulation that how its works. Remember its tree. It looks like similar.
// NOTE:- in this EventTarget Object, addEventListener() is exist. Element access this method through prototype chain.

console.dir(x => x + 1); // As, we know that the function itself is also an object. so, therefore it also should have the prototype.
// this will contain the methods of function object that is apply(),call(),bind(),...
// Thats a reason why we're able to call the apply,call,bind function on a function.
*/

// ============================================== Coding challenge #1 ===============================================================
/*
const Car = function(make,speed){
    this.make = make;
    this.speed = speed; // in km/he
}
Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(this.speed);
}
Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(this.speed);
}
const car1 = new Car('BMW',120);
const car2 = new Car('Mercedees', 95);

car1.accelerate();
car1.brake();
car1.accelerate();
car1.brake();
car2.accelerate();
car2.brake();
car2.accelerate();
car2.brake();
*/

// ======================================================= ES6 Classes ==============================================================
// This allows us to do exact same tg=hing which we done trough Constructor function, BUT using a niceier & more modern syntax.
// Classes in JS do not work like traditional classes in other languages like C++, JAva. 
// imp: Goal of adding ES6 Classes:- it still implement prototype inheritance behind the scenes BUT with a syntax which makes more sense to people coming from other programming languages.

/*
// class Expression
const PersonCl = class{ //classes are just a special type of function which doesn't take arguments.
    // Although we use the class keyword here. ==> Behind the scene classes are still functions. Therefore, we have class expression & class Declaration
    // ig, We don't have Arrow class bcoz:- Arrow function doesn't support prototype inheritance. Thats why, we don't have Arrow classes & Arrow function.
}
*/

/*
// class Declaration
class PersonCl {
    // This is a class Declaratrion. BUT just like a function, we have also Class Expression.
    constructor(firstName, birthYear){ // This constructor will work in a similar way as a Constructor function. But this one is a method of Class. Infact, it needs to be the call constructor.
        this.firstName = firstName;
        this.birthYear = birthYear;
        // The act o fcreating new object actually also works exactly in a same way as in Constructor function. using new operator.
        // Whenever we create new object(new instance) using "new" operator 👆 This constructor will automatically called.
    }

    // NOTE:- All of the methods that we write in the class i.e outside of the constructor will be on the Prototype(__proto__) of the objects.
    // Methods will be added to .prototype property
    calcAge(){
        console.log(2037 - this.birthYear);
    }
    // Methods which are written inside the class but outside the constructor will automatically be added to the prototype property of the class.
}
const jessica = new PersonCl('jessica', 1996); // so, basically when we create new instance(object) here then this 👆 "constructor" function is called & it will return new object. which is stored in this jessica.
console.log(jessica);
console.log(jessica.__proto__);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype); // true  //imp: PersonCl act just like any other "Constructor Function"
PersonCl.prototype.greet = function(){
    console.log(`Hey ${this.firstName}`);
}
jessica.greet();
// 👆 This proof that ES6 class just hides the true nature of prototypal inheritance in JS.

// important Points About Classes:-
// 1. Classes are NOT hoisted even if they are class declaration.
      // Function declaration are hoisted ---> That means, we can call the function before its declaration. But we can't do this thing with the class declaration.
// 2. class are first-class citizens. Just like functions.
      // That means we can pass them(class) into function and return them from the function. That is bcoz:- classes are really just a special kind of function behind the scenes.
// 3. Classes are executed in strict mode.
      // The body of class is always executed in the "strict mode". Even we didn't activated "strict" mode for entire script, all the code that is in the class will be executed in "strict mode"

// ================================================ setters & getters ========================================================
// This setter & getter properties are called as accessor property. while the normal properties are called data property.
// These are the basically function that gets and sets a value.
const account = {
    owner: 'Jonas',
    movements: [200,503,120,300],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        this.movements.push(mov);
    }
};
console.log(account.latest); //imp: Here, we don't call the method but instead we write it as if it was just a property.
// account.latest(50); // when it is a normal method BUT now, this is actually like a property And not the method. so, we can simply set it just like a another property.👇
account.latest = 50; // todo: How we will give the input if setter takes multiple argument ?
console.log(account.movements);
// This is how getters & setters work for any regular object in JS.
// However, classes also have getters and setters & they work in the exact same way.


// getters & setters in Classes
class PersonCl_1 {
    constructor(firstName, birthYear){ 
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
 
    // Methods will be added to .prototype property
    calcAge(){
        console.log(2037 - this.birthYear);
    }

    greet(){
        console.log(`Hey ${this.firstName}`);
    }

    // getter is indeed just like any other regular method that we set on the prototype
    get age(){
        return 2037 - this.birthYear;
    }

};
const jessica_1 = new PersonCl_1('jessica_1',1993);
console.log(jessica_1); // see get age method 
jessica_1.calcAge();
console.log(jessica_1.age); // here, get age method is working.
console.log(jessica_1.__proto__); 

// Setters & Getters can very useful for data validation.
// e.g:- trying validation with name
class PersonNameValidation{
    constructor(fullName, birthYear){
        this.fullName = fullName; // Whenever we set the fullName on "this" keyword then actually "fullName" setter will execute. and this fullNAme which we assign here in "this.fullName" will pass to fullName() & it become name in "set fullName(name)" method argument.  
        this.birthYear = birthYear;
    }

    //todo: NOTE:- When this will run ? will it run on object creation ? or before constructor execution ? or we have to run explicitly like we have done earlier e.g. object.fullName = "Brijesh Rajput"?
    // set property that already exists
    set fullName(name) { // this setter will run whenever object.fullName = ""; object.fullName is assigned by some name. as we have already seen this above example. so, here when in constructor method, object.fullName is assigned by fullName(object.fullName = fullName) which is taken as argument then this setter function will execute. so, hence we can do validation using setter and getter methods. like in C++.
        console.log(name);
        if(name.includes(' ')){
            // this.fullName = name; // Error: Maximum call stack size exceeded :- That's happen bcoz, there is a conflict:- both setter & constructor function are trying to set the exact same property name. so, that's gives the origin of this error.
            // so, we have to create new property name when setter trying to set the property that does already exist ==> as a convention we will add "_" underscore.
            this._fullName = name; // here, we are creating new variable. //imp: Now, we can't access the object.fullName property.unless we haven't defined "get fullName()" method to resolve problem.
        } 
        else alert(`${name} is not a full name!`);
    }

    get fullName(){
        return this._fullName;
    }

};
const jessicaFullName = new PersonNameValidation('Jessica Davis', 1996);
const brijesh = new PersonNameValidation('Brijesh', 2002);
console.log(jessicaFullName, brijesh);
console.log(jessicaFullName.fullName); // undefined --> when "fullName" getter method is not defined.//imp: Bcoz:- that doesnot exist. To fix this we have to create "getters"🌟🌟🌟
console.log(jessicaFullName._fullName); // _fullName is the actuall property which exist bcoz:- we have set it in setter method.
// BUT, we can compute the fullName() just as we compute age() in above example.

const walter = new PersonNameValidation('walter', 1965);
console.log(brijesh, walter); // see👉 Both object doesn't have the fullName property bcoz:- when object.fullName = fullName happens then internally it calls the setter method whose name is fullName and in this setter function ==> No property is set. That's why.
console.log(brijesh.fullName, walter.fullName);

const walterFullName = new PersonNameValidation('Walter white',1965);
console.log(walterFullName);
console.log(walterFullName.fullName);


// ====================================================== Static Methods ============================================================
// Array.from method is a built-in static method of Array constructor which converts any array like structure into real array.
console.log(Array.from(document.querySelectorAll('h1')));
// from() method is really a method that is attached to the Array Constructor.

// Erorr:
// [1,2,43,6].from() // Doesn't work that is bcoz:- this "from()" is really attached to the entire constructor(i.e. Array constructor) Not on the Array.prototype property of constructor.  //imp:
// so, all the arrays do not inherit this "from() method" bcoz: it's not on their prototype. It simply attach to the Constructor itself. 
// Array.from() is basically just a simple function but it's a function that is attached to the array constrcutor.
//todo: Learn & compare with Constructor Function where we avoid to add the methods inside the constructor. then if here this "form() method" is attached to constructor function then i think it will be copied in each object so, we can access it from object. i learnt this previously...
//e.g:-
const myConstructorfunction  = function(name){
    this.name = name;
    this.greet = function(){
        console.log(`Hello ${name}`);
    }

    //todo:
    // Why this below function gives me an Error:- As i know that this constructor function returns an object & i also know that this below greeting() function is not attached to the object.
    // greeting = function(){
    //     console.log(`This is a static Method`);
    // };

};
// myConstructorfunction.greeting(); // this also gives me an error. Why ???? //todo:
const s1 = new myConstructorfunction('Birju');
const s2 = new myConstructorfunction('ritesh');
console.log(s1, s2);
s1.greet();
s2.greet();
// todo: then How static methods are attached in the Constructor Function so, it is neither inherited nor copied in the child object ???
// todo: "How can we create static methods in a Constructor function ??" //imp:

// These are also a static() which is on the Number Constructor. 
Number.parseInt(743);
Number.parseFloat(43.437);

class PersonStaticMethod{
    
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance method  ===> these are the method that will be added to the prototype property.
     // Methods will be added to .prototype property
     calcAge(){
        console.log(2037 - this.birthYear);
    }

    set fullName(name){
        this._fullName = name;
    }

    get fullName(){
        return this._fullName;
    }

    //static method ---> NOT available on the instances. sometimes they are still useful to implement some kind of helper function about class or constrcutor function.
    static hey1(){
        // "static" keyword is used to create static method in Class. And rest all are instance method which doesnot uses "static" keyword during method creation.
        console.log(this);
        console.log(`Hey1 👩👩`);
    }

};
PersonStaticMethod.hey = function(){ //imp: In this same way we can create "static method" in Constructor Function.
    // It's a static method of PersonStaticMethod Class
    console.log(`Hey there 👋`);
    console.log(this); // constructor function bcoz:- that's the object which call the hey() methods
};
PersonStaticMethod.hey(); //Calling static method 
PersonStaticMethod.hey1(); 

const b1 = new PersonStaticMethod('Birju singh',2020);
const b2 = new PersonStaticMethod('Marry',2030);
console.log(b1,b2); // In both object you will not see the hey() method b'coz:- its a static method

//Error
// b1.hey(); bcoz:- it is not in the b1.__proto__; 

console.log(PersonStaticMethod);
console.dir(PersonStaticMethod);
*/

// =============================================== Object.create() =======================================================
/*
// Object.create() is the least way that is used in real world to implement prototype chain.
// This works in a different way  then "Constructor function" and "classes" works
// With object.create() there is a still the idea of prototypal inheritance. However, there are no prototype property involve & also no constructor function & no "new" operator. so Instead, we can use object.create() to manually set the prototype of an object to any other object that we want. //imp:
const PersonProto = { //just a simple object literal

    calcAge(){
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear){ //This looks like Constructor Function BUT however this has actually nothing to do with any constructor function bcoz: we are not using "new" operator to call this.
        this.firstName = firstName; //here, "this" keyword point to sarah bcoz: we have explicitly call init() method through sarah.
        this.birthYear = birthYear;
    }

}; 
const steven =  Object.create(PersonProto); // It takes object which will be considered as prototype of this steven object.
// This will return a new object that is linked to the prototype that we passed in Object.create() method. // Now, tow objects are linked through the proto property.
console.log(steven); // It is now an empty object which is linked to PersonProto.👉 see here.
console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
// In Object.create() we can set the prototype of objects manually to any object that we want. 
// in this case, We manually set the prototype of steven object to the personProto object.
// It just like worked as in Function Constructor or classes. Here also prototypal chain looks same.
// Big difference is here,(in Object.create()) we didn't need any constructor function & also no prototype property to achieve exact same thing.

const sarah = Object.create(PersonProto);
sarah.init('sarah',1979); // here, ig sarah is able to call init() bcoz: init() method is present in the sarah object.
sarah.calcAge();

// When we implement "true class inheritance" then we need Object.create() for that.
*/


// ============================================= coding Challenge #2 =======================================================
/*
class Car{
    constructor(make, speed){
        this.make = make;
        this.speed = speed; //km/hr //When it is called then there is no setter function whose name is speed that set the value of speed. however there is method called speedUs which sets speed value but it will not called bcoz:- its function name is not speed.
    }

    get speedUS(){
        return this.speed/1.6; //mi/hr
    }

    set speedUS(speed){
        this.speed = speed*1.6; // No need of this 👉 this._speed = speed*1.6; bcoz: 
    }

    brake(){
        this.speed -= 5;
        console.log(`speed decrease by 5 ${this.make}`);
    }

    accelerate(){
        this.speed += 10;
        console.log(`speed decrease by 10 ${this.make}`);
    }


};
const ford = new Car('Ford', 120);
console.log(ford);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();
ford.accelerate();
ford.speedUS = 50; //NOTE:- ford.speed = 50; //imp: 👈Both are different bcoz:- when we set speedUS then first it see "is there any speedUS() setter function ? if yes then that will be called." ig, same thing will happen with "ford.speed" but as it(setter speed()) is not present then it will directly assign the given value to the "speed" property.
console.log(ford);
ford.speed = 20;
console.log(ford); // Now, here anyone can change the property value. //todo: How can we make it private property ?
*/

// ============================= inheritance between "classes" & "constructor functions" ===================================
// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 ⛔⛔⛔ TOUGHEST Lecture ⛔⛔⛔ 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
// In this section, we will inherit classes like we did in C++. 
// person class(parent class) ---> student class(child class)   👉 Think in C++

/*
// todo: Doubt...................................................................................................
// Inheritance of classes using Constructor Function 
const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
};
Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
};


const Student = function(firstName, birthYear, course){
    
    // this.firstName = firstName;
    // this.birthYear = birthYear;  👉This both line is a copy of Person Function Constructor. I violates DRY principle due to repeation of code.
    
    // Error
    // Person(firstName, birthYear); //👉 Bcoz: We are calling Person Function Constructor as a regular function call. so, we are NOT using "new" operator to call this Person Fucntion Constructor. ==> Therefore this function call is a regular function call. //imp: REmemeber, in regular function call the "this" keyword is set to "undefined".
    // To solve this above problem 👉 instead of calling Person function constructor we need to set manually "this" keyword as well.
    // imp: Remember how we will call the function & set the "this" keyword ?  ===> we can simply use the call() method. 
    Person.call(this, firstName, birthYear);

    this.course = course;
};
Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
};
Student.__proto__ = Person.prototype; //todo: Due to this why Person.prototype is not inherited ? Does it only work for classes & objects ? NOT for the classes-classes inheitation ? "is That a reason why we use Object.create() to link two classes ? " BUT why it is not working ?

const mike = new Student('Mike', 2020, 'CSE');
console.log(mike); //todo: But now also, we haven't done inheritance bcoz: if we did then calcAge() will inherit to Student & then this will be inherit to mike object which is of Student object.//imp: to solve this problem or inheirt the parent class to student class. we have to set the "__proto__" of student to "Person.prototype" 👉 Student.__proto__ = Person.prototype; //NOTE:- Those property which is present in the Person.prototype will only be inherited to Student class.
mike.introduce();

console.log(mike.__proto__ === Student.prototype);
console.log(Student.__proto__ === Person.prototype);
// mike.calcAge(); //Error: calcAge() is not a function   =====> As both above line is true then why mike is not able to call the calcAge() method ????
console.log(mike);
console.log(Student.__proto__); // as here, calcAge() method present then why i'm not able to call calcAge() through mike object of student using prototyal chain ????
*/

//  Inheritance: Parent & child class
const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
};
Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
};


const Student = function(firstName, birthYear, course){
    Person.call(this, firstName, birthYear);
    this.course = course;
};
Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

// Student.__proto__ = Person.prototype; 👉 NOT working
// Studnet.__proto__ = Object.create(Person.prototype); 👉 NOT working 
// Student = Object.create(Person.prototype); 👉 This is not working 
Student.prototype = Object.create(Person.prototype); //Now, Student.prototype will inherit Person.prototype. //todo: As Object.create() method returns an object which will linked to parent.prototype then "can't we do this 👉 Student.__proto__ = Person.prototype  ? bcoz: i think it does the same thing" //imp: Ans:- No, till now if we want to set __proto__ value then we're using Object.create() method we have learnt this. REMEMBER: we have n't done ever Object.__proto__ = Parent.prototype.
// To set manually prototype, we are using Person.prototype. That's why Student.__proto__ = Person.prototype is not working. 🌟✨⭐
// todo: But then also i have a Question that "Why we are setting it into __proto__ property bcoz: if we did then also object can acces can it through prototypal chain. If we did this then we can override the method also. And we will have both method." Studnet.__proto__ = Object.create(Person.prototype); 👉⛔ Then why it is not working ??? TEll me //imp: see below for answer.

// NOTE: Object.create() returns an empty object.

const mike = new Student('Mike', 2020, 'CSE');
console.log(mike.__proto__ === Student.prototype);
console.log(mike);
// mike.introduce(); // It's not a function bcoz: we have overwrite the value of Student.prototype by Person.prototype //imp:
console.log(Student.prototype === Person.prototype); // todo: Why it gives me an error ? //imp: It's bcoz: Person.prototype is assign to Student.prototype.__proto__ NOT on the Student.prototype
console.log(Student.prototype.__proto__ === Person.prototype); //todo: "What to do if i want to assign the Person.prototype into Student.__proto__ ?"//imp: as Student.prototype === mike.__proto__  => mike.__proto__.__proto__ === Person.prototype 

// //That means, indirectly we're setting it into Student.__proto__ ⭐✨🌟 ⛔👉👉 Totally wrong! 
// console.log(Student.prototype.__proto__ === Student.__proto__);
mike.calcAge(); 

console.log(Student.__proto__);
console.dir(Student.__proto__);

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


// ============================================== Coding challenge #3 ===================================================
/*
const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
    
};
Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(this.speed);
};
Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.speed} speed after brake applied`);
};

const EV = function(make, speed, charge){
    Car.call(this, make, speed);
    this.charge = charge;
};

// Link the prototypes 
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
    console.log(`${this.charge} charge value`);
};
EV.prototype.accelerate = function(){
    this.speed += 20;
    this.charge -= this.charge/100;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};
const tesla = new EV('Tesla',120,23);
console.log(tesla);
tesla.accelerate(); // It calls the accelerate method of EV NOT of Car. It's overriding in C++. BUT here, its a polymorphism.
tesla.chargeBattery(90);
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();
tesla.chargeBattery(90);
tesla.brake();
tesla.chargeBattery(90);
*/

// ======================================== Inheritance between classes and ES6 classes ======================================
class PersonStaticMethod{
    
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance method  ===> these are the method that will be added to the prototype property.
     // Methods will be added to .prototype property
     calcAge(){
        console.log(2037 - this.birthYear);
    }

    set fullName(name){
        this._fullName = name;
    }

    get fullName(){
        return this._fullName;
    }

    //static method ---> NOT available on the instances. sometimes they are still useful to implement some kind of helper function about class or constrcutor function.
    static hey1(){
        // "static" keyword is used to create static method in Class. And rest all are instance method which doesnot uses "static" keyword during method creation.
        console.log(this);
        console.log(`Hey1 👩👩`);
    }

};

// As we know already that the class syntax hides lots of detail that are actually happening behind the scenes. bcoz: Classes are really just the layer of abstraction over the Constructor Function.
// To implement inheritance between classes we need only two thing. 1) "extend" keyword  2) "super" function
class StudentSubclass extends PersonStaticMethod{
    constructor(fullName, birthYear, course){ //same argument as the parent but with additional argument 
        // Here, we don't need to call parent constructor like this 👉 Person.call()  bcoz: That is need in the constructor function
        // Instead, we will call the super() function 
        // Always needs to happen first!  //imp: That's bcoz: 👇 This call to the super function is responsible to creating "this" keyword in this sub-class.
        super(fullName,birthYear); // super() is basically a constructor function of the parent class.
        // here, in the child class constructor 👆 This always has need to be first. Without doing this, we're not able to access the "this" keyword.
        this.course = course; // 👉 Actually if we didn't want to do this then we didn't need any constructor function at all. In this case, the "super" function will automatically called with all the arguments that are passed into this constructor.
    }

    introduce(){
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge(){
        // Overriding calcAge() method
        console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel like ${2037 - this.birthYear + 10}`);
    }
};
const martha = new StudentSubclass('Martha Jones', 2012, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge(); // this method calcAge() is present on the Parent class. But overriden method is executing
// That's a very simple way to create classes & work as a inheritance

// ========================================== Inheritance between "classes" & Object.create ====================================
/*
const PersonProto = { //just a simple object literal

    calcAge(){
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear){ 
        this.firstName = firstName; 
        this.birthYear = birthYear;
    },

}; 
const steven =  Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName,birthYear,course){
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};
StudentProto.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
console.log(jay);
jay.init('Jay', 2010, "CSE");
jay.introduce();
jay.calcAge(); // method preset in Parent class
*/


// ========================================== Another class example =================================================
/*
class Account{
    constructor(owner, currency, pin, movements){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = movements;
    }

};
const acc1 = new Account('Jonas', 'EUR', 1111, []);
console.log(acc1);
*/
/*
class Account{
    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = []; //imp: We can create even more properties on instance that are not based on any inputs.
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    deposit(val){
        this.movements.push(val);
    }

    withdraw(val){
        this.deposit(-val); // we're calling another method inside a method!
    }
    // 👆 These "deposit" & "withdraw" are interface between objects. These methods are also called as API.

    approveLoan(val){
        return true;
    }

    requestLoan(val){
        if(this.approveLoan(val)){
            this.deposit(val);
            console.log(`Loan Approved!`);
        }
    }

};
const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
acc1.movements.push(250);
acc1.movements.push(-140);
// 👆 It's not a good idea at all to do this. Instead of interacting with a property like this --> It's a better to create methods that interact with these properties. //imp: To avoid accessiblity we will use private methods.
console.log(acc1);
acc1.deposit(360);
acc1.withdraw(300);
console.log(acc1);
console.log(acc1.pin); // It shouldn't be accessible from outside the class.
acc1.requestLoan(1000);
acc1.approveLoan(1000); //It doesn't do anything BUT in real world we should not have to allowed to access this from outside the class.
*/


// ==================================== Encapsulation: Protected Properties and Methods =======================================
/*
// Encapsulation basically means to keep some properties & methods private inside the class. so, they are not accessible from outside of the class. 
// 2 big Reason that "Why need Data encapsulation & Data privacy ?"    
    ///Ans:- 1) To prevent code from outside of a class to accidently manipulate data inside the class. we've already seen example above.
    //       2) 
// imp: However, JS classes actually donot yet support real data privacy and encapsulation.
class Account{
    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        
        // "underscore" infront of property name:- To protect properties from accessing outside the class. //imp: i think, same thing happens in Python OOPs for data privacy{private properties}
        // This doesnot make the property truely private bcoz this is just a convention. We call it protected 
        // protected property 
        this._movements = []; //imp: We can create even more properties on instance that are not based on any inputs.
        this._pin = pin;

        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Public interface
    getMovements(){
        return this._movements;
    }

    deposit(val){
        this._movements.push(val);
    }

    withdraw(val){
        this.deposit(-val); // we're calling another method inside a method!
    }
    // 👆 These "deposit" & "withdraw" are interface between objects. These methods are also called as API.

    // protected methods //imp:
    _approveLoan(val){
        return true;
    }

    requestLoan(val){
        if(this.approveLoan(val)){
            this.deposit(val);
            console.log(`Loan Approved!`);
        }
    }

};
const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
acc1.deposit(472);
acc1.withdraw(220);
// console.log(acc1._movements); // Data is still accessible if we use "_"(underscore) outside as well. //imp: we will fix this problem in next section
console.log(acc1.getMovements());
*/

// ==================================== Encapsulation: Private Class fields & methods  =============================================
/*
// Properties are called as field in traditional OOP like C++, java
// 4 different kinds of fields and methods{actually it is even 8} :- //todo: "which 8 ?" 
    // 1) Public fields
    // 2) Private feilds
    // 3) Public methods
    // 4) Private methods
    // Besides these👆 4, There is also a static version of same above four types  ---> That's why we have 8 features.

class Account{
    // Public field {instances} ---> which will be there in every objects 
    locale = navigator.language; 
    // this👆 public fields will be present on all the instances that are creating through the class. 
    
    // Private fields ---> properties that are really, truly not accessible from the outside.
    #movements = []; //imp: This is the syntax that makes a field private in the new class proposal.
    #pin; //creating an empty variable

    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        
        // protected property 
        // this._movements = []; //imp: We can create even more properties on instance that are not based on any inputs.

        this.#pin = pin; //imp: syntax

        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Public methods
    // Public interface
    getMovements(){
        return this.#movements;
    }

    deposit(val){
        this.#movements.push(val); //imp: NOTE syntax
    }

    withdraw(val){
        this.deposit(-val);
    }

    // // protected methods //imp:
    // _approveLoan(val){
    //     return true;
    // }

    requestLoan(val){
        if(this.#approveLoan(val)){
            this.deposit(val);
            console.log(`Loan Approved!`);
        }
    }

    // static methods will not be available in all instances but only in the class itself.
    static helper(){
        console.log('Helper function');
    }

    // Private methods  ---> very important to hide the implementation details from the outside
    #approveLoan(val){
        return true;
    }

};
const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
acc1.deposit(472);
acc1.withdraw(220);
// console.log(acc1._movements); // Data is still accessible if we use "_"(underscore) outside as well. //imp:
console.log(acc1.movements); //undefined //imp:
// console.log(acc1.#movements); //imp: Error comes BUT there is a hack -> that we can access #movements from windows console feature{in dev tools browser} //todo: It's not protecetd in windows browser console log screen. 
console.log(acc1.getMovements());
// console.log(acc1.#pin); //Error⛔🚫
// console.log(acc1.#approveLoan(1000)); //Error⛔🚫

// acc1.helper(); //Error🚫⛔
Account.helper();
*/

// ================================================== Chaining Methods ==========================================================
// "DO You remember How we chained Array methods one after another ?" e.g.:- filter(), map(), reduce() methods
// We can actually implement the same ability of chaining methods in the methods of owr class.
// It's very easy: Return the object itself at the end of method that we want to be chainable.
class Account{
    // Public field {instances} ---> which will be there in every objects 
    locale = navigator.language; 
    // this👆 public fields will be present on all the instances that are creating through the class. 
    
    // Private fields ---> properties that are really, truly not accessible from the outside.
    #movements = []; //imp: This is the syntax that makes a field private in the new class proposal.
    #pin; //creating an empty variable

    constructor(owner, currency, pin){ //👉 This constructor is automatically called by the "new" operator whenever we create a new instance of class. This constructor method is mandatory in regular class. BUT It might be omitted in a child class if we wanted to have the exact same number and the exact same name of the parameters of parent class.
        this.owner = owner;
        this.currency = currency;
        
        // protected property 
        // this._movements = []; //imp: We can create even more properties on instance that are not based on any inputs.

        this.#pin = pin; //imp: syntax

        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Public methods
    // Public interface
    getMovements(){
        return this.#movements;
    }

    deposit(val){
        this.#movements.push(val); //imp: NOTE syntax
        return this;
    }

    withdraw(val){
        this.deposit(-val);
        return this;
    }

    // // protected methods //imp:
    // _approveLoan(val){
    //     return true;
    // }

    requestLoan(val){
        if(this.#approveLoan(val)){
            this.deposit(val);
            console.log(`Loan Approved!`);
            return this;
        }
    }

    // static methods will not be available in all instances but only in the class itself.
    static helper(){
        console.log('Helper function');
    }

    // Private methods  ---> very important to hide the implementation details from the outside
    #approveLoan(val){
        return true;
    }

};
const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
acc1.deposit(472);
acc1.withdraw(220);
console.log(acc1.getMovements());
Account.helper();

// Chaining 
acc1.deposit(300).deposit(560).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

// NOTE:- Static method cannot access the instance properties nor methods. It can only static properties & methods. That's a obvious thing!

// =============================================== Coding challenge #4 ================================================================
class Car{
    constructor(make, speed){
        this.make = make;
        this.speed = speed; //km/hr //When it is called then there is no setter function whose name is speed that set the value of speed. however there is method called speedUs which sets speed value but it will not called bcoz:- its function name is not speed.
    }

    get speedUS(){
        return this.speed/1.6; //mi/hr
    }

    set speedUS(speed){
        this.speed = speed*1.6; // No need of this 👉 this._speed = speed*1.6; bcoz: 
    }

    brake(){
        this.speed -= 5;
        console.log(`speed decrease by 5 ${this.make}`);
        return this; //imp: task 
    }

    accelerate(){
        this.speed += 10;
        console.log(`speed decrease by 10 ${this.make}`);
    }


};

class EV extends Car{
    #charge;
    constructor(make, speed, charge){
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo){
        this.#charge = chargeTo;
        return this; 
    }

    accelerate(){
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} is going at ${this.speed} km/hr with a charge of ${this.#charge}`);
        return this;
    }
};
const rivian = new EV('Rivian',120,23);
console.log(rivian);
// console.log(rivian.#charge); //Error
rivian.accelerate().accelerate().accelerate().brake().chargeBattery(50).accelerate();

// Our child class also inherit the getters and setters from the parent class.
console.log(rivian.speedUS);
rivian.speedUS = 89;
console.log(rivian.speedUS);































