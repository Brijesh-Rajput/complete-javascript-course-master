'use strict';
// todo: NOTE:- In this application, we have use four form in one html and all this work only as a button{bcoz:- we have used event.preventDefault() function in eventlistner callback function} then why we make it form => instead of form, we can make a div or section and in that we can mention one button and whenver it will click then we will do all same operation which is happening now using form element.
// ================================================== Simple Array Methods ==============================================================
/*
// Q. Why arrays do actually have methods ?
// Ans:- Remember, methods are simply functions that we can call on objects. Basically, They are functions attched to objects. If we have Array methods that means that Arrays themselves are also objects. These array methods are simply functions that are attached to all arrays that we create in JS.
// review: We will learn Why all arrays have access to this methods in the prototypal inheritance lectures.
// imp: Arrays are objects & that a get access to special built-in methods.


let arr = ['a','b','c','d','e'];


// SLICE Method:-  Very Similar to the slice method availabe on the string.
// Slice Method 👉 We can extract part of any array but without changing the original array. This method returns a new array. It doesn't mutate the original array, instead it returns a new array{A copy of the array but only with the extracted parts}.
console.log(arr.slice(2)); // begin parameter value is index no. 2 and end parameter is not defined, so it's default value "undefined" will be consider.  "begin" value is included and "end" is excluded.
console.log(arr.slice(2,4)); // begin = 2 & end = 4   // imp: Length of the output array will be "end" parameter - "begin" parameter.
console.log(arr.slice(-2)); // Just like in strings, Due to negative begin parameter, It will start copyting from the "end" of the array.
// imp: 👆 Due to this, It's easy to get last element of any array.
console.log(arr.slice(-1)); // begin=-1 is the last element of any array. 
console.log(arr.slice(1,-2)); // begin=1 end=-2  👉 start extracting at position 1 & extract everything except the last 2.
// We can use the Slice method to simply create a Shallow copy of any array 👇 For this We will simply call the slice method without any argument.
console.log(arr.slice()); // (5) ['a', 'b', 'c', 'd', 'e']
// review: 👆 Remember We already did the same thing using SPREAD oprtr. see this 👇 example.
console.log([...arr]); // Spread oprtr
// todo: Q. Should we use the Spread oprtr or Slice method in order to create a shallow copy ?  // imp: It's Your choice.



// SPLICE Method :-  Works almost same way as the slice method. Difference bet.n slice & splice method is 👉 It(Splice method) does change the original array. It mutates the original array. Original array looses that part which are extracted using splice method.
// imp: Focus on Output 👇👇👇
let arr1 = arr;
console.log(arr1.splice(2)); // (3) ['c', 'd', 'e']    // As Splice method is used so changes will happen in original array 👈 This is the diff.n bet.n slice & splice method. Therefore, here splice method extract element from index 2 upto end. so in the original array, there is only two element which are of index no. 0 & 1.
console.log(arr1); // (2) ['a', 'b']
// We are interested to delete some(1 or more) elements(continuous element) from an original array using splice method.
// USecase of Splice method:- To simply remove last element of an array.
console.log(arr1);
arr1.splice(-1); // start=-1 👉 It represents the last element.
console.log(arr1);
console.log(arr);

// REVIEW: To learn more about any methods 👉 Use MDN website.
// 2nd parameter of the splice Method is "deleteCount" NOT the "end" Parameter.
let arr2 = ['a','b','c','d','e'];
console.log(arr2);
console.log(arr2.splice(1,2)); // "deleteCount" defines no. of element want to remove from an original array.
console.log(arr2);



// REVERSE method:- This mutates the original array & returns the reference of the original array{returns the reverse array}. 
// imp: See this 👇 How we re-assign the array.  See this 👆 Copy the arr into arr1 {Both pointing to the same array}
console.log(arr2);
arr2 = ['a','b','c','d','e']; 
console.log(arr2);
const arr3 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr3.reverse()); // reverse method does Mutates the original array(arr2).
console.log(arr3);



// CONCAT Method:- This is used to concatenate the arrays. This returns new array without modyfing the existing arrays.
const letters = arr2.concat(arr3);
console.log(letters); // (10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log(letters.concat('k','l','m')); // (13) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'] ✨🌟⭐
// We can also concat in other way using SPREAD oprtr 👇👇👇
console.log([...arr2, ...arr3]); // (10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']



// JOIN Method:- It returns a string. Joining all the elements of an array using some separators. Default Parameter is ','(Comma)
console.log(letters.join('-')); // a-b-c-d-e-f-g-h-i-j
console.log(letters.join()); // a,b,c,d,e,f,g,h,i,j


// Push, Unshift, Pop, Shift, indexof, includes 👉 This methods we already know( We have already learnt about this).


// =============================================== The New "at" method in ES2022 =========================================================
// At method:-
const arr4 = [23, 11, 64];
console.log(arr4[0]); // It gives the element of the array at position 0. For doing this, we have similar method which is "at" 👇
console.log(arr4.at(0)); 

// NOTE:- We have learnt the "at" methods in C++. Why it was introduced. But here It's not the same reason. I tried this to cnf 👇 
console.log(arr4[8]); // No Error in C++,  "undefined" in JS
console.log(arr4.at(8)); // This gives an Error in C++, "undefined" in JS

// "at" method features in JS:- To use "at" method instead of square[] methods
// Suppose, We want to get the last element out of the array. BUT, we don't know the length of the array then 👇
console.log(arr4[arr4.length-1]);
console.log(arr4.at(arr4.length-1));
console.log(arr4.slice(-1)); // [64]   👉 To get the last element of the array. Slice method will give me the copy of the array only with the last element of the array. 
console.log(arr4.slice(-1)[0]); // 64
console.log(arr4.at(-1)); // That's why, We will use "at" method here. 👉 Negative index just like in slice() basically starts counting from the end of the array.
console.log(arr4.at(-2)); // 11
// imp: If we want to get the last element of an array OR basically, start counting from the end of an array then We should use the "at" method. AND also, if we want to do method chaining(we'll talk later in this section) then the "at" method is also perfect for that{Basically, Combining multiple methods all at a same time}.
// imp: If we just want to quickly get a value from an array(to get first element) then use the bracket[] notation.


// At method:- It also works on a string 
console.log('jonas'.at(0));
console.log('jonas'.at(-1));
*/


// ================================================ Looping arrays: ForEach  =================================================================
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; 
/*
// For-of Loop:- We have learnt{How to use for-of loop over an array}
// +ve values:- means Deposits
// -ve values:- means Withdraws


// For-of Loop:-
for(const movement of movements){
  if(movement > 0 ) console.log(`You deposited ${movement}`);
  else console.log(`You withdrew ${Math.abs(movement)}`); 
}
// Math.abs() 👉 Gives absolute value


// For-each loop:- 👆 achieving same output using foreach loop
// forEach() Loop requires a callback function. That's why, forEach() is the Higher order function.
console.log('---------------- ForEach -----------------');
movements.forEach(function(movement) { 
  // forEach function will call this callback function.
  // Q. When exactly will ForEach exactly call this callback function ?   Ans:- ForEach() method does is to loop over the array and in each iteration it will execute this callback function. AND also, forEach() function calls this callback function in each iteration it will pass in the current element of the array as an argument.
  if(movement > 0 ) console.log(`You deposited ${movement}`);
  else console.log(`You withdrew ${Math.abs(movement)}`); 
});
// iteration number: calling function with argument
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...
// 7: function(1300)
// We use callback function to tell another higherOrder function exactly what it should do. In this case, We tell forEach() in each iteration, It should log one of these two strings to the console. We gave the forEach method instructions by giving it a callback function which contains these instructions. 🌟✨⭐

// How To access the current index of the element fo an array in both for-of Loop & ForEach Loop ?
console.log('--- Accessing element with indx using for-of Loop ---');
for(const [indx, movement] of movements.entries()) {
  // movements.entries() 👉 It returns an array of arrays. And in 1st position, it contains the indx & in 2nd position it contains value itself.
  // console.log(`${indx}: ${movement}`);
  if(movement > 0) console.log(`Movement ${indx+1}: you deposited ${movement}`);
  else console.log(`Movement ${indx+1}: you deposited ${Math.abs(movement)}`);
}


console.log('--- Accessing element with indx using forEach() Loop ---');
// forEach() method will call the callback function in each iteration. As it(forEach) calls the callback function, it also passes in "the current element of the array". Beside, it(forEach) also passes current element, index, & the entire array that we are looping in the callback function
movements.forEach(function(movement, indx, arr) { 
  // Names of the callback fucntion doesn't matter at all but Order matters !!  so, the 1st parameters always need to be the current element & the 2nd parameter always the current indx & the 2rd parameter will always be an entire array that we are looping over. That's the order, in which the arguments(the actual values passed into our callback function)
  if(movement > 0) console.log(`Movement ${indx+1}: you deposited ${movement}`);
  else console.log(`Movement ${indx+1}: you deposited ${Math.abs(movement)}`);

  // Try this 👇👇👇🌟✨
  // console.log(arr);  // B'coz:- We call this "callback function" in each iteration of the array by the ForEach() function.
});

// todo: When should you use ForEach() Loop & when should you use ForOf Loop ???
//imp: There is one fundamental difference between these both Loop(ForLoop & ForEach() Loop) is that 👉 We can not break-out from the forEach() Loop. The "continue" & "break" stmts donot work in the forEach() Loop.🌟✨🌟
// If we really need to break out of the loop then use ForLoop. Otherwise It's Your preference to use which loop.
*/


// ============================================ ForEach with maps and Sets =============================================================
/*
// For Each with Map
// review: Try ForOf loop with Map
const currencies = new Map([
  ['USD', 'United States dollar'],  // This is the one entry of the map. And in this, 1st element is the key & 2nd is the value.
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(currentValue, key, map) { // 👉 These parameters are similar to the array. In array, 1st Parameter -> current Element of the array. 2nd Parameter -> index, 3rd -> Entire array
  // this callback function will also have 3 parameters. 
  // When the forEach method calls it(callback function), It will call the function with 3 argument.
  console.log(`${key}: ${currentValue}`);
  // console.log(map);  // 👈 Try this.
});


// For Each with Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);  // NOTE:- Here, Set is a constructor.
console.log(currenciesUnique); // Set(3) {'USD', 'GBP', 'EUR'}

// currenciesUnique.forEach(function(value, key, map) {
//   console.log(`${key}: ${value}`); // Output is amazing 🌟🌟🌟 
//   // A set doesn't have the keys. And It doesn't have the index either. 
// });

currenciesUnique.forEach(function(value, _ , map) { // Variable name = _  👉 It Js, It means throwaway variable that is compeletly unnecessary. It's a convention in JS.
  console.log(`${value}: ${value}`); // Output is amazing 🌟🌟🌟  
});
*/


// ==================================================== Project: 'Bankist' App ===============================================================
// REVIEW: Flowchart is prepared(designed) for this application.🌟🌟✨

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// 👆 Most common way to organizing code in Js.

// Q. Why we use an object for each account(one object for an each object) instead of a map ? 
// Ans:- We are pretending that all these data are coming from an Web API. Whenever we get data from an API, this data usually comes in the form of objects. That's why, we are using objects here.

// ======================================================= Creating DOM Elements ===========================================================
const displayMovements = function(movements, sort = false) {
  containerMovements.innerHTML = ''; //clearing predefined movements-row
  // innerHTML is little bit similar to textContaint. Difference is :- textContaint simply returns the text itself While html returns everything including the html(all the html tags will be included). 
  //.textContain = 0

  const movs = sort ? movements.slice().sort((a,b) => a-b) : movements; //if do sorting then it will change the original array but we don't want that b'coz:- after sorting it will change the original array but when we want to sort in the order of original order of deposits and withdraws. so we will use the slice() method to create a copy of the array. This is the case where we want to use the slice() oprtr BUT not the spread oprtr b'coz:- we're here in middle of the chain. i.e. we are doing chaining here.

  movs.forEach(function(mov, indx) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${indx + 1} ${type}</div>
        <div class="movements__value">${mov}€</div>
    </div>
    `;
    // insert adjacent element will use to add this element into movements class element
    containerMovements.insertAdjacentHTML('afterbegin', html); //containerMovements is the movements class which is selected by queryselector.
    //Learn all values of this above function parameter from MDN website.
    // e.g:- 
    // <!-- beforebegin -->
    // <p>
    //   <!-- afterbegin -->
    //   foo 
    //   <!-- beforeend -->
    // </p>
    // <!-- afterend -->
  });
}
displayMovements(account1.movements);

// See Difference between .innerHTML and .textContent
console.log(containerMovements.innerHTML);
console.log(containerMovements.textContent);


// =================================================== Coding challenge 1 ================================================================
/*
const checkDogs = function(dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(); //todo: Why slice() is used ???
  dogsJuliaCorrected.splice(0, 1); // first element delete from the array 
  dogsJuliaCorrected.splice(-2); // last two element from the array delete
  // Or const dogsJuliaCorrected = dogsJulia.slice(1,3); ===> BUT it varies from array size
  console.log(dogsJuliaCorrected);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function(dog, i) {
    if(dog >= 3) console.log(`Dog number ${i + 1} is an adult, and is ${dog} year old`);
    else console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

// ================================================ Data Transformations: MAP, FILTER, REDUCE ==============================================

// MAP:-
// It is yet another method that is used to loop over arrays. Map is similar to the forEach method. But the difference:- The map creates a brand new array based on the original array. 
// The map method takes an array, loops over that array and in each iteration, it applys a callback function that we specify in our code to the current array element.
// e.g:- 
// original array = [3, 1, 4, 3, 2]
// Map => current * 2 {Each element should be multiply by 2}
// output:- [6, 2, 8, 6, 4]
// The map method multiplies every single element by 2 and puts it into a new array.
// Map returns a new array containing the results of applying an operation on all original array elements.


// Filter:- 
// It is used to filter for elements for the original array which satisfy a certain condition.
// e.g:- 
//  original array = [3, 1, 4, 3, 2]
// Filter => current > 2
// output:- [3, 4, 3]
// Only elements that pass the test that we specify will make it into a new filter array. In otherwords, elements for which the condition is true will be included in a new array that a filtered method returns. All other elements will get filtered out. so they will not be included in the new array.
// filter returns a new array containing the array elements that passed a specified test condition.


// Reduce:- 
// It is used to boil down all the elements of the original array into one single value.
// e.g:- of this 👉 can be to add all the elements of an array together.
// Reduce boils("reduces") all array elements down to one single value(e.g adding all elements together)
// e.g:- 
// original array = [3, 1, 4, 3, 2]
// Reduce => Accumulator + current      -> ig, Accumulator stores initial value like 0
// output:- 13 (Reduced value) --> This value then return from the Reduce method in the end.


// ================================================= The Map Method =============================================================
/*
const eurToUsd = 1.1;
const movementsUSD = account1.movements.map(function(mov) {
  return mov * eurToUsd;
  // return 23;
});
// Or 👉 const movementsUSD = account1.movements.map(mov => mov * eurToUsd);  //Callback function
console.log(account1.movements);
console.log(movementsUSD);


const movementsUSDfor = [];
for(const mov of account1.movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);


const movementsDescriptions = account1.movements.map((mov,i) => { // mov is the current element and i is the index of the current element.
  return `Movement ${i+1}: you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`;  //imp:
  // OR
  if(mov > 0) return `Movement ${i+1}: you deposited ${mov}`;
  else return `Movement ${i+1}: you withdrew ${Math.abs(mov)}`;
});
console.log(movementsDescriptions);
// There is a big difference between map and forEach approaches:- In forEach Method,in each of the iteration we perform some action that was then visible in the console and we can call this a "sideEffect". so, the forEach Method creates side-effect. But, In Map method,we return each of the strings from the callback and so basically they get added into a new array and then finally we log that entire to the console NOT the elements one by one. Here, in Map method we did not create a side-effects in each of the iteration. 
// This idea of "sideEffects" is more important as we talk about functional programming.
// "sideEffects" - do some work without returning anything. 
*/

// ================================================= Computing Usernames =====================================================================
/*
const user = 'Steven Thomas Williams'; //stw
// const username = user.toLowerCase().split(' ').map(word => word[0]).join(''); //@me
const username = user.toLowerCase().split(' ').map(function(name) {
  return name[0]; // we cna also use name.at(0); //imp NOTE:- callback function in the Map method always need to return the new value that should be in the new array.
}).join('');
console.log(username);
*/

// const createUsername = function(user) {
//   const username = user.toLowerCase().split(' ').map(name => name[0]).join('');
//   return username;
// }
// console.log(createUsername('Steven Thomas Williams'));


const createUsername = function(accounts) {
  accounts.forEach(function(account) {
    account.username = account.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  }); //To mutate the original object that is account
}
console.log(accounts); //NOTE the output //todo: Why username is added in each account object ??? b'coz:- createUsername() doesn't execute till now.
createUsername(accounts);
console.log(accounts); //imp NOTE:- Original objects change  //todo: Make a notes that when and on which object changes like array manipulate and when it doesn't.


// ================================================== The Filter Method =============================================================
/*
const deposits = account1.movements.filter(function(mov) {
  return mov > 0;
});
console.log(account1.movements);
console.log(deposits);

const depositsfor = [];
for(const mov of account1.movements) if (mov > 0) depositsfor.push(mov);
console.log(depositsfor);

const withdrawals = account1.movements.filter(mov => mov < 0);
console.log(withdrawals);
*/

// =================================================== The Reduce Method ============================================================
/*
// We use the Reduce method to essentially boil down all the elements in an array to one single value.
console.log(movements); 
//imp: Reduce function also gets a call back function But this ons is little bit different from the other ones like in map or forEach.
// const balance = movements.reduce(function(accumulator, current, currentIndex, arr) {
//   console.log(`Iteration No. ${currentIndex}: ${accumulator}`);
//   return accumulator + current; //This is how the new accumulator can then be used in next iteration of the loop.
// }, 0); // 2nd parameter of reduce method tells initial value of the accumulator. In this case, accumulator = 0 --> It is the initial value of accumulator which will be used iun first loop of iteration.
// console.log(balance);

const balance = movements.reduce((accumulator, current) => accumulator + current, 0);
console.log(balance);


let balance2 = 0;
for(const mov of movements) balance2 += mov;
console.log(balance2);
*/

const calcDisplayBalance = function(account){
  const balance = account.movements.reduce((accumulator, current) => accumulator + current, 0);
  account.balance = balance;
  labelBalance.textContent = `${balance}€`;
};
calcDisplayBalance(account1);

/*
// Maximum value 
const max = movements.reduce((acc, mov) => {
  if(acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/

// =================================================== Coding challenge 2 ============================================================
/*
// const calcAverageHumanAge = function(ages) {
//   const dogs = ages.filter(function(dogAge) {
//     return (dogAge<=2 ? 2*dogAge : 16+dogAge*4) >= 18;
//     // const humanAge = dogAge<=2 ? 2*dogAge : 16+dogAge*4;
//     // return humanAge >= 18; 
//   });
//   return dogs.reduce((acc, dog) => acc+dog , 0) / dogs.length();
// }; shortest code 👇👇👇

const calcAverageHumanAge = function(ages) {
  // return ages.filter(dogAge => (dogAge<=2 ? 2*dogAge : 16+dogAge*4) >= 18).reduce((accumulator, dog) => accumulator+dog, 0) / dog.size();
  // This is wrong 👆👆👆👆 b'coz:- we can't calculate filter dogs array size
  const dogs = ages.filter(dogAge => ((dogAge<=2 ? 2*dogAge : 16+dogAge*4) >= 18));
  console.log(dogs, dogs.size, dogs.length); //length variable is used NOT size //imp:
  console.log(dogs.reduce((accumulator, dog) => accumulator+dog, 0));
  return dogs.reduce((accumulator, dog) => accumulator+dog, 0)/dogs.length;
}
console.log("array1: ", calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log("array2: " ,calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
//imp: Wrong solution 👆👆👆👆 b'coz:- when we caculate humanAges we're not changing in the original array{we're only consider the original arrays} so our average value will different.     
// imp: Where as in original value average fo humanAges is calculates.👇👇👇👇👇

// ------------------------ Jonas solution:- --------------------------
console.log('-------------- Jonas Solution ---------------');
const calcAverageHumanAge1 = function(ages) {
  const humanAges = ages.map(age => age<=2 ? 2*age : 16+age*4);
  // console.log(humanAges);
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  // const average = adults.reduce((acc,age) => acc+age, 0) / adults.length;
  // 2,3 --> (2+3)/2 = 2.5 === 2/2 + 3/2
  // 2,3,4,5,6 ---> (2+3+4+5+6)/5 === (0+2+3+4+5+6)/5 === 0/5+2/5+3/5+4/5+5/5+6/5

  // const average = adults.reduce((acc,age) => acc+age/adults.length, 0); //@me
  const average =adults.reduce((acc, age, index, array) => acc + age / array.length, 0); 

  return average;
};
console.log("array1: ", calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]));
console.log("array2: ", calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4]));
*/

// ===================================================== The Magic of chanining Methods ===================================================
/*
// Task :- We want to take all the movement deposits and then convert them euros to Dollars and fiunally add them all up. 
// We can do each of these operations individually and store each results in a new variable But we will do it all in one go.
console.log(movements);
const eurToUsd = 1.1;
const totalDepositsInUSD = movements.filter(mov => mov > 0).map(mov => mov*eurToUsd).reduce((acc, mov) => acc+mov, 0);
console.log(totalDepositsInUSD + "$");
// NOTE:- This way of chaining is hard to debug if there is any error 👆👆👆

// imp: Learn How to do comment in chaining👇👇👇
const totalDepositsInUSD1 = movements
.filter(mov => mov < 0)
.map((mov, i, arr) => {
  console.log(arr);
  return mov * eurToUsd;
})
// .map(mov => mov * eurToUsd)
.reduce((acc, mov) => acc+mov, 0);
console.log(totalDepositsInUSD1);
*/

const calcDisplaySummary = function(account) {

  const movements = account.movements;
  console.log(movements); 
  
  const incomes = movements.filter(mov => mov > 0).reduce((acc, mov) => acc+mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = movements.filter(mov => mov < 0).reduce((acc, mov) => acc+mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = movements.filter(mov => mov > 0).map(deposit => deposit*account.interestRate/100).filter((interest, i, arr) => {
    console.log(arr);
    return interest >= 1; //That means, we will add only those interest which are >=1 of that particular deposit of a money.
  }).reduce((acc,interest) => acc+interest, 0);
  labelSumInterest.textContent = `${interest}€`;

};
// calcDisplaySummary(account1.movements);

// REMARKS ABOUT CHAINING:- 1st we should not over use chaining. We should try to optimize it b'coz:- chaining tons of methods one after the other can cause a real performance issuses if we have really huge arrays. If we have huge chain methods - chained one after other. we should try to compress all the functionality that they do into a littles methods as possible. 2nd It is a bad practice in Js to chain methods that mutate the underline original array. e.g:- splice & reverse method. ==> you should not chain splice and reverse method --> You can do this but you should avoid this.


// ================================================ Coding Challenge 3 =================================================================
/*
// const calcAverageHumanAge1 = function(ages) {
//   const humanAges = ages.map(age => age<=2 ? 2*age : 16+age*4);
//   // console.log(humanAges);
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   // const average = adults.reduce((acc,age) => acc+age, 0) / adults.length;
//   // 2,3 --> (2+3)/2 = 2.5 === 2/2 + 3/2
//   // 2,3,4,5,6 ---> (2+3+4+5+6)/5 === (0+2+3+4+5+6)/5 === 0/5+2/5+3/5+4/5+5/5+6/5

//   // const average = adults.reduce((acc,age) => acc+age/adults.length, 0); //@me
//   const average =adults.reduce((acc, age, index, array) => acc + age / array.length, 0); 

//   return average;
// };
// 👆👆 Rewrite this function as an arrow function and using chainning

const calcAverageHumanAge = ages => ages.
map(age => age<=2 ? 2*age : 16+age*4).
filter(age => age >= 18).
reduce((acc, age, index, array) => acc + age/array.length, 0);

console.log("array1: ", calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log("array2: " ,calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/

// =================================================== The Find Method ==============================================================

// This method is used to retrieve one element of an array based on a condition
//It also accepts a condition. It also accepts callback function which will then be called as the method loops over the array.
// find() is basically just another methods that loops over the array.
const firstWithdrawal = movements.find(mov => mov < 0
            //condition👆👆    //Just like the filter method the "Find" method also needs a callback function that returns a boolean.
            // unlike the "filter" method, the "find" method will actually not return a new array BUT it will only return 1st element in the array thats satisfy this condition.
); 
console.log(movements);
console.log(firstWithdrawal);

// This above find Method implementation using for-of loop:- //todo: Complete this task .......... below 👇👇👇
const firstWithdrawalFor = function(movements) {
  const movement = undefined;
  for(const mov of movements){
    if(mov.owner === 'Jessica Davis') { movement = mov; break; } //todo: can we break from for-of loop ????  In which loop we can't use break stmt ??
  }
  console.log(movement); //todo: why "undefined" ??????????
};
console.log(movements);
console.log(firstWithdrawalFor(movements)); //todo: imp ??? WHy this happens ?????????????????

// Find Method is similar to Filter Method BUT there are two fundamental differences :- 1st -> Filter returns all the methods that match the condition while the find Method only returns the first element which satisfy the condition.   2nd -> Filter Methods returns a new array while Find Method returns only element itself and NOT an array.

// Real example:-
console.log(accounts);
// Lets we want to select one account by name.
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// Goal of the Find Method:- To just find the one element. 

// =================================================== Implementing Login ==================================================
// Event handler
let currentAccount;

const updateUI = function(account) {
  // Display movements
  displayMovements(account.movements);
    
  // Display balance 
  calcDisplayBalance(account);
  
  // Display summary 
  calcDisplaySummary(account);
}


btnLogin.addEventListener('click', function(event) {

  // console.log('LOGIN');

  // Prevent form from submitting  ✨✨✨✨✨✨✨✨✨✨ That's why we are able to use multiple form in one html page.
  event.preventDefault();  // That means, After clicking this button page will not reload 

  // Another thing which is great about forms ==> is that Whenever We have one of these fields you inputed And when we then press/hit "Enter" button then that will actually automatically trigger a click event on this button.

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value); // review: ig, we can check both pin and username in this find function. B'coz:- suppose there is 2 users whose name is same but there password is diiferent then find function will fetch that user whose name matches first. After this if we compare with password then we get to know that it is wrong password. and we get to know that the user which comes after that user which math=ches the codition are our answer then How can we do this ??? Ans:- Username of all users must be unique then we will use this below if condition to verify password differently 👇👇👇
  console.log(currentAccount);

  // acc.username is not present in our accounts array then it will return undefined and undefined.pin ==> will give us an error. so we have to check that whether currentAccount is undefined or not. In other words, we have to check that whether currectAccount is exist or not. 
  // Two ways to solve this above problem when currentAccount is undefined 

  // 1st ways:-
  // if(currentAccount && currentAccount.pin === Number(inputLoginPin.value)){
  //   console.log('LOGIN');
  // }

  // 2nd way:- Using optional chaining  //imp: //Review: Revise this concept 
  if(currentAccount?.pin === Number(inputLoginPin.value)){ // Here, pin property only be read when currentAccount is actually exists. //imp
    // console.log('LOGIN');
    
    // Display UI and welcome message 
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`; // That is we are displayig first name 
    // todo: When we've to write value, textContent, innerHTML, etc.. ???
    containerApp.style.opacity = 100; // To show the main page  

    // updateUI
    updateUI(currentAccount);

    // clear input fiels ===> As we login, we have to remove username and pin content from the page 
    inputLoginUsername.value = inputLoginPin.value = ''; // Assignment oprtr works form right to left 
    inputLoginPin.blur(); // ig, this blur() function comes in DOM manipulation

  }

});


// ================================================== Implementing Transfering ===========================================================

btnTransfer.addEventListener('click', function(e) { //todo: How does we know that which argument should we have to pass as an argument for inner function(call back function) ??? As here, we've passed event as an argument BUT there can be many more arguments in this function ?? How we will know ??

  e.preventDefault(); //We need this B'coz:- This is also a form and we are applying eventListner on btn of this form. so, To prevent the page from reload we have to use preventDefault() function. Without this function if we click on button then that will reload the page.
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(acc => acc.username === inputTransferTo.value);
  console.log(amount, receiverAccount);

  // clearing input field 
  inputTransferTo = inputTransferAmount.value = '';

  if(amount > 0 && 
    receiverAccount &&  
    currentAccount.balance >= amount && // 33:00 imp theory about object topic //imp:
    receiverAccount?.username !== currentAccount.username){ //optional chaining is used to check whether receiverAccount is exist or not. If recevierAccount doesn't exist then 'receiverAccount?.username' will become undefined and the whole AND operation will failed.

      console.log('Transfer valid');

      // Doing the transfer
      currentAccount.movements.push(-amount);
      receiverAccount.movements.push(amount);

      // updateUI
    updateUI(currentAccount);

  }

});


// ======================================== THE FIND INDEX METHOD =====================================================
// This method is similar to find method and almost works same as "Find" method. "Find" Method returns first element which satisfy the condition. Whereas "FindIndex" Method returns the index of the first element which satisfy the condition{i.e. for which element this given condition returns true}.
// This method is similar to .indexOf() which we've already studied And argument of this indexOf() function is an element. //imp:
// NOTE:- In this our application, we have close account feature. Closing an account means to just delete an account object from the account array.
// To Delete an element from an array ---> We use the "splice" Method. BUT for the splice method we need the index at which we want to delete. 
// We can find the index using "FindIndex" Method.

btnClose.addEventListener('click', function(e) {
  console.log('Delete');
  e.preventDefault();

  // // By me:- //review: wrong!! ==> I thought we have privilages to close others account as well if we know their username and password.
  // const closeAccount = accounts.find(account => account.username === inputCloseUsername.value);
  // if(closeAccount && closeAccount.pin === Number(inputClosePin.value)) {
  //   console.log('Valid Credentials to close the Account');
  // }else console.log("Invalid Credentials 🚫");

  if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin){
    // We're going to use the splice method to delete the current account.
    const index = accounts.findIndex(acc => acc.username === currentAccount.username); //imp: The big difference between indexOf() and findIndex()function is we can use the complex condition like this in the "findIndex" method. Whereas in the "indexOf()" method we can only search the value which is in the array But we can't check the condition like above b'coz:- accounts is an array of an object and we are checking the condition of the object.
    // todo: ig, we can use "find()" Method + indexOf() Method instead of findIndex() Method. @me:- find() + indexOf() === findIndex()
    console.log(index);
    
    console.log(accounts); //todo: Note the both output of accounts array before and after the splice operation.
    // Delete Account
    accounts.splice(index, 1);// from given index of the accounts we want to delete 1 element. // splice method mutate the accounts array itself.
    console.log(accounts);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';

  // imp: NOTE:- Both the find() and findIndex() method get access also to the current index and the current entire array. //todo: What its means ??
  // Both "find()" and "findIndex()" added in ES6 
});
 

// ============================================================ SOME AND EVERY ============================================================

console.log(movements);
/*
// Equality
console.log(movements.includes(-130)); // includes() method is used to test if an array includes a certain value. But However we can only really test for equality. for e.g:- 👆 Wheteher -130 is present in the array or not. includes() here returns true if any value in the array is exactly equal to -130. 
// BUT, What if we want to test condition instead of equality. so, that's where "some()" method comes into play.

// Lets say, we would like to know if there has been any deposits in this account{In otherwords, we want to know any positive movements in the array}. so here we will use the some() method.
// SOME: Condition
const anyDeposits = movements.some(mov => mov > 0); // some() methods returns true.
console.log(anyDeposits); //imp: NOTE the output.It's true. 
*/

// This is 👇 exactly same as includes() method whenever we use ===(equality) oprtr like this.
console.log(movements.some(mov => mov === -130));

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= 0.1*amount)){
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';

});


/*
// EVERY
// every() method is similar to some() method. Difference is only:- every() method only returns true if all of the elements in the array satisfy the condition that we passed in.{In otherwords, if every element passes the test in our callback function only then the every() method returns true.}
console.log(movements.every(mov => mov > 0)); // we're checking whether all movements are deposit. if it is then every() method will return true else false.
console.log(account4.movements);
console.log(account4.movements.every(mov => mov > 0)); //In account4, all movements are deposits{movements which are > 0}.

// separate callback  ---> we can write callback separately
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
*/

// ==================================================== FLAT and FLATMAP ============================================================
// flat and flatmap ---> introduce in es19

/*
const arr = [[1,2,3], [4,5,6],7,8];
// We want to take all elements from 1 to 8 and put into one big array.
console.log(arr.flat()); //imp: 1 is bydefault argument.

const arrDeep = [[[1,2],3], [4,[5,6]],7,8];
console.log(arrDeep.flat()); //imp:
//imp: That means, flat() method goes only one level deep when flatening the array.

console.log(arrDeep.flat(2)); //Now, flat() method goes two level deep. --> It goes now 2nd level of nesting and also takes the element out of the array.

// Real example:- 
// Lets say Bank(in our application) itself wants to calculate the overall balance of all the movements of all the accounts.
const accountMovements = accounts.map(acc => acc.movements); //todo: Learn this✨✨✨🌟🌟🌟⭐⭐⭐
console.log(accountMovements);
const allMovements = accountMovements.flat(2);
console.log(allMovements);
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

const overallBalanceUsingChaining = accounts.map(acc => acc.movements).flat(2).reduce((acc, mov) => acc + mov, 0);
console.log(overallBalanceUsingChaining);

// flatMap --->combination of flat and map method. {see above example where we have to use both map and flat method together}
const overallBalanceUsingFlatMap = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0); //imp: flatMap only goes one level Deep 
console.log(overallBalanceUsingChaining);
*/

// ==================================================== Sorting arrays ===============================================================
/*
// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Matha'];
console.log(owners.sort()); //This sort() method mutates the array.
console.log(owners);

// Numbers
console.log(movements); //see below 👇 result BUT consider all numbers are actually strings.
console.log(movements.sort()); //imp: Note the output. Result is not in sorted as it is number. //B'coz:- sort() method does the sorting based on strings.
// Basically, sort() method converts everything into strings and then does the sorting itself.

// so, we have to fix this 👆👆👆👆.
// We can fix this by passing a compare callback() in the sort() method.
// return < 0 => A, B (keep order)
// return > 0 => B, A (switch order)
movements.sort((a,b) => {
  if(a < b) return -1;
  else return 1;
}); //In our(sort() method) callback function if we return less than 0 then the value "a" will be sorted before value "b". And the opposite if we return a positive value then "b" will be put before "a" in the sorted output array.
console.log(movements);

// Descending Order sorting for Numbers
movements.sort((a,b) => {
  if(a > b) return -1;
  return 1;
});
console.log(movements);

// imp: implementation for increasing order sorting for a Number
movements.sort((a,b) => a-b); //if a>b then a-b>0 that means callback function return +ve value otherwise a-b<0 ==> callback function return -ve value
console.log(movements);

// imp: implementation for decreasing order sorting for a Number
movements.sort((a,b) => b-a);
console.log(movements);
*/


let sorted = false;
btnSort.addEventListener('click', function(e){
  // e.preventDefault();
 //todo: NOTE:- Why we're using preventDefault() as this button is not in the form. B'coz:- if it is in the form the whenever we submit the form it will refresh the page & go to given page.
//  imp: YES 🤩🤩🤩 I'm right BUT then also we have to read the documentation on this preventDefault() function.

  displayMovements(currentAccount.movements, !sorted); //Whenver, sorted=false that means we will sort the movements
  sorted = !sorted;
  // NOTE:- BUT it is not fully correct. B'coz:- 
  // Lets we are in {js,1111} account and as JS will execute only once in a time. so firstly, sorted will be initialized with false and when we click the sort button then sorted value will become true and that will be passed to displayMovements function so it will display in sorted array. But if then switch the account, lets say {jd,2222} account and we know that JS execute only once and only EventListner function execute whenever events happens. And we also know that in last time the value of sorted is true. and if we want to sort in jd account and if we click the sortbtn then sorted variable value will become false from true. so, in displayMovements false will passed as an 2nd argument. so it will display the movements in the order of deposits and withdraws but NOT in the order of sorted. That's why it is not Totally correct. 
  // todo: Think How can you resolve this above problem ? //imp: ans:- We can define the sort function globally but its value will be initialized by false whenever the user login. That is ===> In Loginbtn EventHandler we will set the sorted variable value as false.🤩🤩🤩

});

// ========================================== MORE Ways of creating and filling arrays ==================================================
/*
const arr = [1,2,3,4,5];
console.log(arr);
const arr1 = new Array(1,2,3,4,5);
console.log(arr1);
console.log(arr.map(() => 5)); //[5,5,5,5,5]
arr.fill(23,2,5);
console.log(arr);

// Generate arrays programatically:-

// 1. easiest way of creating arrays using constructor
const x = new Array(7); // It creates new array with 7 empty elements in there
console.log(x); 
// Note :- we can't put element using map in this array. We can only do one operation with the empty array that is fill() method. This fill() method mutates the entire array.
console.log(x.map(() => 5)); // expected answer [5,5,5,5,5,5,5]
// x.fill(1); // All elements will filled by this element "1"
x.fill(1,3,5); //1st argument is value & 2nd argument is starting index(included) & 3rd argument is ending index(excluded)
console.log(x);

// 2. Array.from
// To create array programatically using from() method  //NOTE:- we're using from() method in the array constructor NOT on the array
const y = Array.from({length: 7},() => 1);  //ig, from is a static method b'coz it is called using a class name
// 1st argument is length and 2nd function is a mapping function ==> it is exactly like the callback function that we pass into the map function.
console.log(y);

// const z = Array.from({length: 7},(current, currentIndex) => currentIndex+1);
// As we're not using the first argument in the 2nd argument callback function of from() method. so, we will use "_" as a name so other programer can understood that this 1st parameter is not using. It's a convention. Like this 👇👇👇
const z = Array.from({length: 7},(_, currentIndex) => currentIndex+1);
console.log(z);

// Real use of Array.from() 
// This is introduce into Js in order to create arrays from array like structure.
// Iterable --> strings, maps, sets ===> so this can be converted into real array using Array.from() 
// Another array like structure e.g:- result of querySelectorAll() is nodelist which is something like array {which contains all the selected element} BUT it is not an actual array. querySelectorAll returns nodelist. It doesn't have methods like map,reduce, etc... so, If we want to use real array methods like that on a nodelist then we would have to first convert nodelist into a real array. For this Array.from() is perfect
// see lecture again for better understanding and exampes 

labelBalance.addEventListener('click', function() {
  // const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
  // // Now, movementsUI is an actual array b'coz we have created an array from nodelist using an Array.from()
  // console.log(movementsUI.map(element => element.textContent.replace('€',''))); // We're only displaying only the value NOT the euro sign
  // console.log(movementsUI.map(element => Number(element.textContent.replace('€',''))));

  // NOTE:- we can use the 2nd argument of the Array.from() ==> which is mapping function 
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), element => Number(element.textContent.replace('€','')));
  // That means, array like structure{1st argument of Array.from()} which converted into an actual array, on that map function will be apply{which is the 2nd argument of the Array.from() method}.
  console.log(movementsUI);

  // 2. Another way of creating an actual array using spread operator ===> But here, we have to do mapping separately 
  const movementsUI2 = [...document.querySelectorAll('.movements__value')]; 

  // i will prefer this 👇👇👇
  // so, my conclusion:- if i want to convert array like structure into an actual array then i will use spread operator. And if we want to convert array like structure into an actual array and as well as we want to use map on that to transform it which we want then we will use Array.from() method b'coz:- both step/operation we can do only using this one Array.from() method.
})
*/

// ====================================== SUMMARY: WHICH ARRAY METHOD TO USE ? ==========================================
// Till now we have studied 23 different array methods 
// See sort notes{jpg file} in this folder

// ============================================= Array Methods Practice ==========================================
/*
// 1. Calculate overall deposit in the bank from all the accounts
const bankDepositSum = accounts.map(acc => acc.movements).flat().filter((mov) => mov > 0).reduce((acc, mov) => mov+acc,0); // Note:- 1st argument of reduce function is accumulator
// or 
const bankDepositSum1 = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((sum, current) => sum + current,0);
console.log(bankDepositSum);


// 2. How many deposits there have been in the bank with atleast 1000$
const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((sum, current) => sum + (current >= 1000 ? 1 : 0) , 0); 
const numDeposits1000_1 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length; //imp:
//or
const numDeposits1000_2 = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((sum, current) => current >= 1000 ? sum + 1 : sum,0); 
//or
const numDeposits1000_3 = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((sum, current) => current >= 1000 ? ++sum : sum,0); //imp: Learn and analyse why we have used preincrement operator and why not postincrement operator ?? B'coz:- if we use post increment then firstly 0 will return and the increment will happen and that 0 which is returned firstly will be used later on ==> so, our result become 0
console.log(numDeposits1000, numDeposits1000_1, numDeposits1000_2);

// Pre & Post increment operator
let a = 10;
console.log(a++);
console.log(a);
console.log(++a);


// 3. create a new object instead of numbers or just a string
// As we know that reduce() method boils down an array one value. That value might be an object. It could be even new array as well as. Infact, we could use reduce() to replace any of the other methods. //imp:
// Goal:- Create an object which contains sum of deposits and sum of withdrawls

// by me:-
// const sums = accounts.flatMap(acc => acc.movements).reduce((sum, mov) => {
//   mov > 0 ? sum.depositSum += mov : sum.withdrawalSum += abs(mov);
// }, {depositSum:0, withdrawalSum:0});
// // fixme: wrong 👆👆👆👆👆👆
// console.log(sums);

//or 

const sums1 = accounts.flatMap(acc => acc.movements).reduce((sums, current) => {
  current > 0 ? sums.deposits += current : sums.withdrawals += current;  //imp: if we are writing return to this line then also it is wrong b'coz:- we have to return accumulator not other things. 

  // or 
  // sums[current > 0 ? 'deposits' : 'withdrawals'] += current; //imp:

  // As we have used curly{} braces so Now, we have to returned accumulator implicitly 
  return sums;
}, {deposits:0, withdrawals:0}); // {deposits:0, withdrawals:0} 👉 This will be always initial value of accumulator sum here.
console.log(sums1);
const {deposits, withdrawals} = sums1; //destructurinhg of an object is happening here.
console.log(deposits, withdrawals);


// 4. Create a simple function to convert any string to a titleCase.
// titleCase means all the words in a sentence are capitalized except for some of them.
// e.g:- this is a nice title --> This Is a Nice Title 
const convertTitleCase = function(title) {

  const capitalized = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'and','in', 'with']; //words that should not be capitalized.
  
  // @me:- Wrong!!!!!!!!
  // const titleCase = title.toLowerCase().split(' ')
  // .forEach((e) => console.log(typeof e, e))
  // error:- 👇👇👇 B'coz:- there is no toCapitalized() method 
  // .forEach((e) => console.log(e.toCapitalized()))
  // .join(' ');
  // console.log(typeof title.toLowerCase().split(' '));
  // console.log(titleCase);

  const titleCase = title.toLowerCase().split(' ').map(word => exceptions.includes(word) ? word : capitalized(word)).join(' '); //imp: NOTE:- Wheneverwe want a new array of the same as before.we use map. That's why here map is used.
  return capitalized(titleCase); //B'coz:- We want that the first word of a sentence shoud be capitalized.

}
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/


// ================================================ Coding challenge 4 ================================================================
 
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1.
dogs.forEach((dog) => {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
}); //As we don't want to create an array 
console.log(dogs); //imp: Math.trunc() ??

// 2.
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahsDog);
const isTooMuchEating = sarahsDog.curFood > (sarahsDog.recommendedFood);
console.log(isTooMuchEating ? "Too Much Eating" : "Too little");

// 3.
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).map(dog => dog.owners).flat();
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);
// imp: map creates an array.

// 4. 
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5. 
const eatingExactFood = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(eatingExactFood);

// 6. 
const okayAmountFood = dogs.some(dog => (dog.curFood > dog.recommendedFood * 0.90) && (dog.curFood < dog.recommendedFood * 1.10));
console.log(okayAmountFood);

// 7. 
const dogsOkayAmountFood = dogs.filter(dog => (dog.curFood > dog.recommendedFood * 0.90) && (dog.curFood < dog.recommendedFood * 1.10));
console.log(dogsOkayAmountFood);

// 8.
// imp:
const dogsCopy = dogs.slice().sort((dog1, dog2) => dog1.recommendedFood - dog2.recommendedFood); //ascending order of recommended food 
console.log(dogsCopy);










































