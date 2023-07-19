'use strict';

///////////////////////////////////////
// Asynchronous JS:- The goal of Asynchronous JS is basically to deal with long running task that basically run on background.
// The most common usecase of Asynchronous Js is to fetch data from remote servers in AJAX call.

// ================================ Asynchronous JS, AJAX and APIs =========================================
// synchronous code: executed line by line(in Execution thread Which is a part of Execution Context).
// Each line of code waits for previous line to finish.
// Long running operations block code execution.

// Asynchronous code: executed after a task that runs in the "background" finishes.
// Non-blocking code
// Execution doesn't wait for an asynchonous task to finish its work
// Callback functions alone do NOT make code asynchronous! ---> e.g: [1,2,3].map(v => v*2);
// For e.g:- setTimeout(), setInterval() ---> Asynchronous code

// Setting the source attribute of any image is essentially loading a image in the background while rest of the code keep running. ---> That's why setting the source attribute was iumplemented in JS in asynchronous way. Imagine that there is a huge image, we wouldn't want our entire code  to wait for the image to load.
// e.g: document.querySelector('.dog').src = 'dog.jpg';  ----> asynchronous code //imp:
// "load" eventlistener will execute once the image will load successfully.
// NOTE:- EventListener() alone do NOT make code asynchronously. for e.g: An eventlistener() listening for a "click" on a btn is not doing any work in background. It's simply waiting for a click to happen but its not doing anything.

// e.g. of Asynchronous code: Geolocation API or AJAX calls

// AJAX: Asynchronous JS & XML  ----> It allows to communicate with remote server in an asynchronous way.
// With AJAX calls, we can request data from web servers dynamically. { so, without reloading the page, we can use that data in our application dynamically. }

// API: Application Programming Interface
// Piece of s/w that can be used by another piece of s/w, in order to allow "applications to talk to each other"
// Many APIs in webdevelopment: DOM API, Geolocation API, own class API(public methods for properties), "Online" API
// "Online" API: Application running on a server, that receives requests for data, and sends data back as response.{It is just call as "API" or "WEB API"}
// we can build "our own" Web APIs(requires back-end development, e.g: with node.js) or use 3rd-party APIs.
// APIs like 👉 weather data, Data about countries, Flights data, Currency conversion data, APIs for sending email or SMS, Google Maps, Millions of possibilites.

//  API data format: X stands XML in AJAX. XML is a data format which widely used to transmit data on web.
// However, these days we don't use XML data format. we mostly uses JSON data format.
// JSON : It's basically a Js Object but converted to a string.

// ============================== Our First AJAX Call: XMLHTTPREQUEST =========================================
/*
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// In JS, there are multiple ways of doing AJAX call:-
// old way to do AJAX call ----> i.e. XMLHTTPREQUEST
// "How AJAX calls used to be handle with events and callback function ?" 👈 You will learn this in XMLHttpRequest
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/India'); // It doesn't work for this 👉 https://restcountries.com/v3.1/name/Portugal 
// todo: I have to create RESTFul API such that it will have same structure for all. so that this above problem can't arise.
// CORS: cross origin resource sharing ---> without CORS we cannot access 3rd party api from our own code. //imp:
request.send();
console.log("Hey👋 I'm using API here 😊");
console.log(request.responseText); //👉 see output // As data is not arrives so it doesnot set.

request.addEventListener('load', function(){
    // Once, data fetched is done then it will emit the "load" event & using this eventListener we're waiting for the "load" event. As soon as the data arrives this callback function will be resolved.
    console.log(this.responseText); // "this" keyword is request
    // console.log(request.responseText);

    // responseText will only be set when data arrives.

    // converting JSON(big string of text) to an object
    const data = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <article class="country">
    <img class="country__img" src="${data[0].flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data[0].name.common}</h3>
      <h4 class="country__region">${data[0].region}</h4>
      <p class="country__row"><span>👫</span>${(data[0].population / 1000000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data[0].languages.hin}</p>
      <p class="country__row"><span>💰</span>${data[0].currencies.INR.name}</p>
    </div>
  </article>
  `;
    // countriesContainer.insertAdjacentElement('beforeend', html); //Error ⛔🚫 bcoz: here, html is not a just single element. it's just a multiple element.
    countriesContainer.insertAdjacentHTML('beforeend',html);
    countriesContainer.style.opacity = 1;

    console.log(data[0]);
    console.log(data[0].flags.svg); // we're writting this bcoz: svg property is present inside the flags object.
    console.log(data[0].postalCode);
    console.log(data[0].postalCode.region); // we can't write this bcoz: region is not in postalCode object. // That's why we're getting "undefined" //imp:
    console.log(data[0].region);

    console.log(data[0].population, typeof data[0].population, +data[0].population, typeof +data[0].population);
    console.log(typeof +data[0].population);
    console.log((data[0].population / 1000000).toFixed(1));
});
console.log(typeof +"45"); // used to convert into a Number 
// imp: REFER final code of JONAS for General use of this "REST Countries" API.
*/

// =========================================== How the web works: Requests And Responses =============================================
// https://restcountries.eu/rest/v2/alpha/PT  👉 "https" is a Protocol
// 👉 "restcountries.eu" is a Domain name
// 👉 "rest/v2/alpha/PT" is Resource or resource location
// DNS: Domain name server 👉 https://104.27.142.889:443
// 104.27.142.889 👉 IP address
// 443 👉 port number(Default 443 for Https, 80 for Http)
// me:- https://104.27.142.889:443/rest/v2/alpha/PT
// bydefault home page 👉 '/' resource link
// TCP/IP: Transmission communication protocol & Internet Protocol
// HTTP(Hyper Text Transfer protocol) request & response.
// GET: requesting data //todo: we can also use to send data but it is not recommended.
// POST: sending data
// PUT & PATCH: For modifying data
// Main difference between HTTP & HTTPS is "HTTPS is encrypted using TLS(Transport layer secure) or SSL(secure shell layer) ==> They are protocol" //imp:
// Status Code & Status Message ===> Are used to let the client know that whether request has been successfull or failed.
// e.g:  200  ---> means "OK"
//       404  ---> means "Page NOT found"
// Response header has the info. about response ---> It is similar like a Request header.

// One Request & One Response when we are accessing API.
// However, if we're accessing web page then there are many requests & respones. AND That's bcoz: When we do the 1st resquest ---> we get only just initial html file. That html file will then get scanned by the browser for all the assets that it needs in order to build entire page like js, css file, image file, or other assets. Then, for each different file there will be a new Http request made to the server. This entire back&forth between client & server happens for every single file that is included in the web page.

// TCP/IP: It's a communication that define "How data travels accross the web "
// 1st job of TCP is to brake the request & responses down into 1000's of small chunks called "packets" before they are send.
// Once they're arrive at final destination, TCP will reassamble all the packets into the original request & response. And this is neccessary. so, that each packet can take different route through the internet. //imp: ig, this is wrong b'coz: In TCP, first conneection is oriented that means path is fixed for sending packets of one request or one response. for reliable transfer of data.
// Job of the Ip protocol is to actually send & route this packets through the internet. so, it ensures that they(packets) arrive at the destination they should go using ip addresses on each packet.

// ================================================ Welcome to Callback hell ===========================================================
/*
// In this lecture, we will create sequences of AJAX calls of above code so that the 2nd one runs only after the 1st one has finished.
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
        <p class="country__row"><span>💰</span>${data.currencies.EUR}</p>
        </div>
    </article>
    `;
  // data.currencies.EUR.name
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`); // https://restcountries.eu/rest/v2/name/${country}
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders; // borders is an array so, here we're taking only 1st element using destructuring
    if (!neighbour) return;

    // NOTE:- Here, 2nd AJAX call is really dependent on the 1st AJAX call. Boc: we're firing of the 2nd AJAX call in the callback fucntion of the 1st AJAX call.
    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`); // https://restcountries.eu/rest/v2/name/${country}
    request2.send();

    request2.addEventListener('load', function () {
      console.log(this.responseText); // request2.responseText.
      const [data] = JSON.parse(this.responseText);
      console.log(data);

      // Render country 2
      renderCountry(data, 'neighbour');

      //   Get neighbour country
      const [neighbour] = data.borders;
      if (!neighbour) return;

      // AJAX call country 3
      const request3 = new XMLHttpRequest();
      request3.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`); // https://restcountries.eu/rest/v2/name/${country}
      request3.send();

      request3.addEventListener('load', function () {
        console.log(this.responseText); // request2.responseText.
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        // Render country 2
        renderCountry(data, 'neighbour');
      });
    });
  });
};

// imp: 👇👇👇👇👇
// Learn from this below output 👇👇 that "How asynchronous code is working ?" 👉 See the output.
getCountryAndNeighbour('portugal');
getCountryAndNeighbour('portugal');
// Here, both above line work as a asynchronously but when 1st line is executing then its output with neighbour country is in a synchronous way BUT, due to anothe line of asynchronous code it's output is intrupting between the 1st line asynchronous code. //todo: Therefore, What i want is that when i am calling AJAX call then its output should be in a synchronous way that means no other asynchronous or synchronous interupt this. Overall -> I want that AJAX call should work as a synchronous way ? How can i do it ?

// getCountryAndNeighbour('America');
// getCountryAndNeighbour('India');

// This is a Nested AJAX call. But if we wanted to do more requests in sequenece like neighbour of neighbour of nighbour of ..... 10 times          so, in that case we will end up callbacks inside of callbacks inside of callbacks ... like 10 times.  =====> This kind of structure and that kn=ind of behaviour we have special name called "callback hell".
// callback hell: When we have a lot of nested callbacks in order to execute Asynchronous task in sequence. 🌟✨🌟✨ //imp: Infact, this happen for all asynchronous task which are handled by callbacks NOT just AJAX calls. e.g. setTimeout() function
setTimeout(() => {
  console.log(`1 second passed`);
  // starting new tumer after the 1st timer has finished
  setTimeout(() => {
    console.log(`2 second passed`);
    // starting new tumer after the 2nd timer has finished
    setTimeout(() => {
      console.log(`3 second passed`);
      // starting new tumer after the 3rd timer has finished
      setTimeout(() => {
        console.log(`4 second passed`);
        // starting new tumer after the 4th timer has finished
        setTimeout(() => {
          console.log(`5 second passed`);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
// callback hell 👆 Easily identify by this triangle shapes. 
// Problem of callback hell: It makes our code vary Messy 🤑😈 And also it makes our code hard to maintain and very difficult to understand and to reason about. Due to this, code can have more bugs & difficult to debug. ===> More difficult to add new feature to the application as it is hard to understand.
// To solve this 👆 callback hell:- since ES6 there is way of escaping callback hell by using "Promises".
*/

// ================================================= Promises and the Fetch API =========================================================
/*
// Replacing OLD XMLHttpRequest() function with the modern way of making AJAX call that is "fetch API"
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// AJAX call using XMLHttpRequest() method
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`); // https://restcountries.eu/rest/v2/name/${country}
// request.send();

// request.addEventListener('load', function () {
//   const [data] = JSON.parse(this.responseText);
//   console.log(data);
// }

// AJAX call using "Fetch API"
const request = fetch('https://restcountries.com/v3.1/name/${country}'); // for "get" request
// "fetch()" method immediately returns promise
console.log(request);
// Error: When offline 👉 Promise {<pending>}[[Prototype]]: Promise   [[PromiseState]]: "rejected"   [[PromiseResult]]: TypeError: Failed to fetch at http://127.0.0.1:5500/complete-javascript-course-master/16-Asynchronous/starter/script.js:252:17

// imp:
// Promises: An object that is used as a placeholder for the future result of an asynchronous operation.
// A container for an asynchronously delivered value.
// A container for a future value. // e.g. of "future value" is Response coming from AJAX call.
// Advantages of using promises: 1) we no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results.  2)Intead of nesting callbacks, we can "chain promises" for a sequence of asynchronous operations: "escaping callback hell"

// Since promises works with asynchronous operations, they are time sensitive. They(promises) change over time and so promises can be in different states. This is called as "Lifecycle of Promises".
// LifeCycle of Promises:
// 1) Pending: Before the future value is available.{This is Before any value is resulting from the asynchronous task is available}. During this time the asynchronoustask is still doing its work in the background.
// 2) Settled: Asynchronous task has finished {When the task is finially finishes we say that the promise is settled}
// There are two different types of settled promise. that is 1) Fullfilled Promises   AND   2) Rejected Promises
// Fullfilled Promises: Success! The value is now available.{It's a Promise that has successfully resulted in a value just as we expected} For e.g: When we use the promise to fetch data from an API, A Fullfilled promise successfully got that data and it's avilable for the use.
// Rejected Promises: An error happened {There has been an error during asynchronous task}  For e.g: user is offline or can't connect to API server.
// 🌟✨ We're able handle these 👆 different states in our code!

// These 👆 different states are relevant & useful when we use the promise to get a result which is called to "Consume a promise".
// Consume Promise: When we already have a promise. e.g: promise that was returned from the fetch function(API)
// In order for a Promise to exist at 1st, it must 1st be build{It must be created}.
// In case of Fetch API, its the fetch() function that builds the promise and returns it for us to consume. That's why in this case we don't have to buid the promise to consume it.
*/

// ========================================================= Consuming Promises =========================================================
/*
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
          <p class="country__row"><span>💰</span>${data.currencies.EUR}</p>
          </div>
      </article>
      `;
  // data.currencies.EUR.name
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const request = fetch(`https://restcountries.com/v3.1/name/Portugal`); // for "get" request
// console.log(request);

// Code:😊😊😊😊✅✅
// const getCountryData = function (country) {
//   // then() will be used to handle the Fullfilled promises which is available on all Promise. Into the "then()" method we need to pass the callback fucntion that we wanted to be executed as soon as the promise is actually fullfilled.{so, as soon as the result is available}. This callback function will recieve one argument Once it is called by the JS and that are argument is the resulting value of the Fullfilled Promise.
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       // Handling FullFilled Promise
//       console.log(response);
//       console.log(typeof response);

//       // response has body which stores the actual data.
//       // To read the data from response body, we need to call the json() method on response. It returns Promise.
//       // json() method is available on all responses object of the fetch() method.
//       // This json() function itself is a asynchronous function. That means, It will also return a new promise.
//       return response.json(); //imp: me: Due to this "response.json()" we get the data but that will be futur value which will store in the promise. And this promise is returned by the json() method.
//     })
//     .then(function (data) {
//       // todo: can't we put "then()" method on directly on the json() method like we put on fetch() method ??//imp: Ans: so, that we can chain the promises and handle it. This makes more readable code & helps to easy understand and debug easily.
//       console.log(data);
//       renderCountry(data[0]);
//     }); //This another then function will handle the successful promises returned by the json() method
// };
// getCountryData('India');
// "fetch()" method returns a promise then we handle it using "then()" method. Then, to read the data from response we need to call the json() method on that response object. Now, this itself also returns a promise.

// 👇 Simplified Code:🤩🤩🤩
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0])); //but here, undefined is returned by the arrow function NOTE that.
  //We're still using the callbacks. Promises donot get rid of callbacks here BUT they do infact get rid of callback hell.
};
// getCountryData('India');

const getCountryAndNeighbour = function (country) {
  // country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return; //imp: Actually, this is not going to work!  so, we will talk aboutg Error handling in next video.

      // country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`); // We're returning this promises so, that we can do chain it using "then() method" // Fullfilled value of the next "then()" method will be fullfilled value of this "fetch()" function promise.
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'));
  // imp: "then()" method always returns a promises. No matter we return anything or not. BUT if we do return a value then that value will become the fullfillment value of the returned promises. see below example👇👇
};
// getCountryAndNeighbour('India');
getCountryAndNeighbour('Germany');
getCountryAndNeighbour('Portugal');

const example = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      return 23; // This value will become the fullfilled value(success value) of the promise that will returned.
      // imp:Whatever we return from this promise that will become the fullfilled value of the promise. and this promise will be returned and then we can handle it using "then()" method. // This fullfilled value{basically a success value} of the promise will be return from this then method.
    })
    .then(data => alert(data));
};
// example('India');

// Don't do this 👇. Avoid to have the callback hell. Always return the promise & then handle it outside by simply contuining the chain like this 👆
// Common Mistake done by the Beginner ⛔🚫🚫⛔ is to chain "then()" method directly onto a new nested promise.👇👇 e.g:
const beginnerMistake = function (country) {
  // country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      // country 2
      fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        .then(response => response.json()) //This callback function is inside another callback function ===> That's create a callback hell.
        .then(data => renderCountry(data[0], 'neighbour'));
    });
};
// 👆 This actually does still work BUT then we're infact back to callback hell. //Bcoz: we have one callback function here which is defined inside of another-one.
*/

// ======================================== Handling rejected Promises ========================================================
/*
// "How to handle promise rejection ?" ---> we will learn this in this lecture
// Only way in which the "fetch" promise rejects is when the user loses internet connection.
// Handling the Error is also called as "Catching the Error".
// There are two ways to handle rejections:  1) Pass 2nd(another) callback function into the "then()" method. so, the 1st callback function in then() function will always be called for the fullfilled promises{so, for a successful one}. BUt we can also pass 2nd callback which will be called when the promise was rejected.    2) we can handle all the errors globally NO matter where they appear in the chain. write at the end of chain by writing catch method.
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
          <p class="country__row"><span>💰</span>${data.currencies.EUR}</p>
          </div>
      </article>
      `;
  // data.currencies.EUR.name
  countriesContainer.insertAdjacentHTML('beforeend', html);
  //   countriesContainer.style.opacity = 1;
};

// 👇👇
// Passing another callback function into "then()" method for handling promise rejection:-
const getCountryAndNeighbour = function (country) {
  // country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      response => response.json(),
      err => alert(err)
    )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      // country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(
      response => response.json(),
      err => alert(err)
    )
    .then(data => renderCountry(data[0], 'neighbour'));
};

// btn.addEventListener('click', function () {
//   // getCountryAndNeighbour('India');
//   getCountryAndNeighbour('Germany');
//   //   getCountryAndNeighbour('Portugal');
// });

// 👇👇
// Handling promise rejection using catch() method:
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbourCatch = function (country) {
  // country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response); // 404, NOT FOUND, ---> "ok" property is set to "false"
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`); // The effect of creating and throwing an error in any of these then() methods is  that the promise s will immediately reject. Now, this then() method return the rejected Promises. This rejected Promise will then propogated down to the catch() handler. // "throw" keyword immediately terminate the current function like "return" keyword
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      //   const neighbour = data[0].borders[0];
      const neighbour = 'shdvasdekwh';
      if (!neighbour) return;

      // country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      // This "err" error which is generated in JS is the really JS object. We can create errors in JS witha constructor Just like a Map or Set.
      // alert(err)
      console.log(`${err} 😈💀`); // This is an error object "err" ===> This also tells about the error stack  i.e. exactly from where error is originated.
      console.log(`${err.message} 😈💀`); // This is just a message of error object "err"
      console.error(`${err} 😈💀`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`); //imp:
    }) //🌟✨🌟 callback function inside this catch() function will also be called with the "error" object that occured & then we can handle it. This catch() method at the end of the chain will basically catch any errors that occurs in any place in the whole promise chain .// Errors basically propogated down to the chain untill they are caught AND only if there NOT caught anywhere then we get "Uncaught Error".
    .finally(() => {
      //This callback function will always executed. No matter if the Promise is fullfilled or rejected.
      // then() method will only be called when the promise if fullfilled. //todo: Think again! B'coz:- when promise is rejected then also "then()" method is called in which 2nd callback function called for handling an Error. We have learnt this in previously{Handling Error or Promise rejection by passing 2nd callback function into then() method.}
      // catch() method will call when the promise is rejected.
      // One Example of this "finally()" block is "To hide the rotating spinner circles which we see in web application when we load some data. so, this applications show a spinner when a asynchronous operation starts and then hide it once the operation is complete AND NO matter whther operation is successful or failed ===> For that finally() block is perfect."
      countriesContainer.style.opacity = 1; //imp: bcoz: This happens in both the case: 1. renderError  2. renderCountry

      // cath() itself also returns a promise that's why this finally() works here. finally() only works in promises.
    });
};

btn.addEventListener('click', function () {
  getCountryAndNeighbourCatch('Portugal');
  //   getCountryAndNeighbourCatch('Gfjbvy'); //imp: 404 status code // Then also fetch() fullfilled the promises. There is no rejection. so, our catch handler cannot pickup on this error. //todo: Here, we have to tell the user that "No country found of this name."
});
// NOTE:- Simply login the error to the console is not enough in a real application with a real user interface.
*/

// ============================================== Throwing Errors Manually ===================================================================

/*
// e.g: 404 Page NOT Found   ----> Error
// "Why should we even bother handle all these 👆👆 errors ?"  ==> Handling these errors is the only way in which we can display the error message on the screen for the user.

// simple code:🤩🤩👇👇 Refractoring the Code 😊😊😊
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
          <p class="country__row"><span>💰</span>${data.currencies.EUR}</p>
          </div>
      </article>
      `;
  // data.currencies.EUR.name
  countriesContainer.insertAdjacentHTML('beforeend', html);
  //   countriesContainer.style.opacity = 1;
};

// Handling promise rejection using catch() method:
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    console.log(response);
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const getCountryAndNeighbourCatch = function (country) {
  // country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
      //   console.log(data[0].borders[0]);
    //   const neighbour = data[0].borders[0];
        const neighbour = data[0].borders;
      //   const neighbour = 'shdvasdekwh';
      //   console.log(neighbour);
      //   if (!neighbour) return; // For e.g: Australia
      if (!neighbour) throw new Error(`There is No Neighbour Country!`); // Throwing an error inside of callback function of "then()" method will immediately reject this promise. And then that rejected promise will travelled down the chain untill it is eventually caught somewhere.

      //   country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.log(`${err} ${err.stack} 😈💀`);
      console.log(`${err.message} 😈💀`);
      console.error(`${err} 😈💀`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryAndNeighbourCatch('Australia'); // NO neighbour country of australia
  //   getCountryAndNeighbourCatch('Portugal');
  // getCountryAndNeighbourCatch('Gfjbvy');
});
*/

// ================================================= Coding Challenge #1 ================================================================

/*
// imp: See JONAS code
// ME:- Cheating 🤩🤣😅😅😅😂😂
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
          <p class="country__row"><span>💰</span>${data.currencies.EUR}</p>
          </div>
      </article>
      `;
  // data.currencies.EUR.name
  countriesContainer.insertAdjacentHTML('beforeend', html);
  //   countriesContainer.style.opacity = 1;
};

// Handling promise rejection using catch() method:
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    console.log(response);
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const getCountryAndNeighbourCatch = function (country) {
  // country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      console.log(neighbour);
      if (!neighbour) throw new Error(`There is No Neighbour Country!`);
      //   country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.log(`${err} ${err.stack} 😈💀`);
      console.log(`${err.message} 😈💀`);
      console.error(`${err} 😈💀`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
const whereAmI = function (latitudeValue, longitudeValue) {
  fetch(`https://geocode.xyz/${latitudeValue},${longitudeValue}?geoit=json`) //It allows only 3 request per second
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      //   console.log(data.country);
      console.log(`You are in ${data.city}, ${data.country}`); //todo: "You are in Throttled! See geocode.xyz/pricing, undefined"👈Handle this error. As we're not getting any status message. instead it gives 200 "Ok". I'm getting response instead of 403 bcoz: response data is not as i wanted to fetch from this api.
      getCountryAndNeighbourCatch(data.country);
    })
    .catch(err => {
      console.log(err, err.stack, err.message);
      console.error(`${err.message}💥💥`);
      console.error(err);
    });
};
whereAmI(21.204898, 72.882797);
whereAmI(52.508, 13.381);
whereAmI(-33.933, 18.474);
*/

// ========================================= Asynchronous behind the scenes: The Event Loop ==============================================

// JS runtime is basically a "Container" which includes all the different pieces that are necessary to execute JS code. "Heart" of every JS runtime is JS Engine 👉 This is where code is actually executed.
// JS has only one thread of execution. so, it can only do one thing at a time. There is no multitasking happening in JS.
// Languages like JAVA, can exceute multiple pieces of code in same time{i think using threading} BUT not Js
// WEB APIs Environment: These are some APIs provided to the engine BUT which are actually not a part of JS language itself. like: DOM, Timers,setTimeout(), Fetch API, GEO LOCATION API,... //imp: Try these api like Geo Location API, & also check that which APIs are available.
// CALLBACK QUEUE: This is the DS that holds all the ready to be executed callback functions that are attched to some event that has occured. Whenever the callstack is empty, eventLoop takes callbacks from the callback Queue And Puts them in the callstack so, that they can be executed. so, the EventLoop is the essential piece that makes asynchronous behaviour possible in JS. It's the reason Why we can have the non-blocking concurrency model in JS. A concurrency model is simply how a language handles multiple things happening in the same time.

// JS Engine is build around the idea of a single thread. //todo: Then when we make web-server using JS then "How it gives responses to the multiple client without wating the client ? How JS works in Web server ?"

// todo: "What if we have "click" event in the code then How it will happen behind the scene ? does it goes to web API for listenening the event then it will go to callback queue if YEs then suppose, IF we have already lots of callback in the callback queue then "How this click evenet callback queue execute immediately whenever click event occur ?"

// imp: Imagine that ytou set a timer for 5 seconds & after 5 seconds the timer callback will be put on the callback Queue & let say that there were other callbacks waiting and let also say that it took 1 second to run all of those callbacks. Then in that case, our timer callback will only run after 6 seconds and NOT after 5 seconds. This 6 second = 5 second passed for the timer + 1 second that it took to run all the other callbacks that were already waiting in line infront of our timer.
// Thatmeans, Timer duration that we define is not a gurantee. The only guarantee is that timers callback will not run before timer value set like 5 seconds in above example. But it might varywell after 5 seconds have passed. It all depends on the state of the callback queue.
// Callback Queue also contains callbacks coming from DOM events like "click" or "keypresses" or whatever.
// As we have learnt before that the DOM events are not really asynchronous behaviour BUT its still used to call the queue to run their attached callbacks. so, if the "click" happens on btn then same thing will happen which happens with the asynchronous "load" event.

// EventLoop: It looks into the callstack & determines whether its empty or not except "Global execution". if the stack is being empty that means No code being exceuted then it will take the 1st callback from the callback queue & put it on the call stack to be executed. This is called an eventLoop tick.
// EventLoop has the extremely imp task of doing coordination between the call stack & the callbacks in the callback queue. EventLoop decides exactly when each callback is executed.

// imp: me: That means in JS runtime Environment, EventLoop is running continupously & Web APIs & also call stack.

// The WEB APIs environment, the callback Queue, and the Event Loop all together make it possible that asynchronous code can be executed in a non-blocking way even with only one thread of execution in the engine.

// Promises behind the scene: Callbacks related to promise{like callbacks in then() method} do actually not go into the callback queue. Instead, callbacks of promises have a special queue for a themselves which is called "MicroTasks Queue". This Queue has priority over the "callback Queue".
// At the end of an EventLoop tick, so after a callback has been taken from the Callback Queue, The EventLoop will check if there are any callbacks in the MicroTasks Queue. and if there are then EventLoop will run all the callbacks of MicroTasks before it will run any more callbacks from the regular callback Queue.
// This means that the "MicroTasks queue" can essentially starres the callback Queue. bcoz: If we keep adding more & more microtasks then callbacks in callback Queue can never execute.

// =================================================== EventLoop Practice =============================================================

/*
// Think about the Output:
console.log('Test start');
setTimeout(() => console.log(`0 sec timer`), 0);
Promise.resolve('Resolved Promise 1') // This allows us to build or create Promise that is immedieatly resolved.
  .then(res => console.log(res));
console.log('Test End');
// Here, both the "timer" and resolved promise will finish at the exact same time.(both after 0 seconds). Bcoz: we told the Timer to finish after 0 seconds and the Promise bcoz: we told it to immideately become reolved.
// Therefore, they will both finish exact same time.
// Promise callback will be executed first bcoz: "Microtask Queue" has more priority then callback Queue. That's why, callback of timer will execute later.
*/
// 👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆

/*
// "Microtask Queue" has more priority then "callback Queue".
// If one of the Microtasks takes long time to run then the timer will actually be the late and NOT run after the 0 seconds that we specify here so, instead it will run little bit later(after 0 second) just after the microtask is done with its Work.
// e.g:👇👇👇👇
console.log('Test start');
setTimeout(() => console.log(`0 sec timer`), 0); // 👈 Did You see here that this callbacks doesnot run after 0 seconds. It takes more time! B'coz: Execution of all the callback of "Microtask Queu"(Promise) is not finished that's why.
Promise.resolve('Resolved Promise 1').then(res => console.log(res));
Promise.resolve('Resolved Promise 2').then(res => {
  for (let i = 0; i < 1900000000; i++) {}
  console.log(res);
});
console.log('Test End');
// 👆 This is actual proof that this 0 second timer "setTimeout" are not guarantee that it will run immidiate after 0 seconds.
// imp: This means, we can not do any high precision things using JS Timers.
*/

// ============================================= Building A Simple Promise ==========================================================

/*
// Promise Constructor takes only one argument that is executer function.
const lotteryPromise = new Promise(function (resolve, reject) {
  // As soon as the Promise constructor runs it will automatically execute this executor function that we passed in Promise constructor. And as it executes this function 👆 here, it will do by passing other two arguments(resolve & reject) in the executer functions.
  // This Executer function that we specified here 👆 is the function which will contain the asynchronous behaviour that we are trying to handle with the promise.
  // So, This executer function should eventually produce a result value. so, the value that basically gona to be future value of the promise

  if (Math.random() >= 0.5) {
    // We win the lottery ===> That means a fullfilled promise.
    // In order to set the promiseas fullfilled, we use the resolve() function. basically calling the resolve() function like this 👇 will marked this promise as a fullfilled promise. Which we also say a resolved Promise. That's why this method is called as "resolve()"
    resolve(`You Win 💰`); // Promise going to be in "Fullfilled State"
    // Into the resolve() function here, we pass fullfilled value of the promise. so, it can later be consumed with the "then()" method. so, ofcourse we are going to handle the resolve of this Promise just like we handle any other Promise with the "then()" method.
    // Whatever value we pass into the "resolve()" function is going to be the result of the promise that will available in the "then()" handler.
  } else {
    // Into the reject() function, we pass in the error msg that related want to be able in the catch handler(so in the catch() method).
    reject(`You lost your money 💩`); // Promise going to be in "Rejected State"
  }
});

lotteryPromise
  .then(resolve => console.log(resolve))
  .catch(error => console.error(error));
// 👆 This is not really asynchronous yet.
console.log(typeof lotteryPromise); // Object
*/

/*
// Asynchronouse Promise 👇
const lotteryPromiseAsync = new Promise(function (resolve, reject) {
  console.log(`Lottery draw is happening!🔮`);
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve(`You Win 💰`); // Promise going to be in "Fullfilled? State"
    } else {
      // reject(`You lost your money 💩`); // Promise going to be in "Rejected State"
      // Instead of just passing just string, we will pass new error object
      reject(new Error(`You lost your money 💩`));
    }
  }, 2000);
});
lotteryPromiseAsync
  .then(resolve => console.log(resolve))
  .catch(error => console.error(error));

lotteryPromiseAsync.then(
  res => console.log(res),
  err => console.log(err)
);
// see output: 👆 //todo: Why i am not getting "Lottery draw is happening!🔮" two times bcoz: I have called the promise two time ???
// Promisifying: It means to convert callback based async behaviour to promise based. //imp:
*/

/*
// Promisifying setTimeout
const wait = function (seconds) {
  // It will look like fetch() function which also return promise
  return new Promise(function (resolve) {
    // Actually, here we don't even need "reject" function & that's bcoz: It's actually imposible for the timer to fail. so, therefore we will never mark this promise as rejected. so, we don't need to specify "reject".
    setTimeout(resolve, seconds * 1000);

    // me: OR 👇 Ig, this is also right bcoz: same thing is happening as above. //imp:
    // setTimeout(() => {
    //     resolve(); // as we nothing is passed so, we will not get any argument in then() function when it is called.
    // }, seconds * 1000);
  });
};
/*
wait(2)
  .then(() => {
    console.log(`I waited for 2 seconds`);
    return wait(1); //this will create promise
  })
  .then(() => {
    console.log(`I waited for 1 second`);
  });
console.log('Hello');
// 👆 We have nice chain of asynchronous behaviour that happens in the sequence.
*

wait(1)
  .then(() => {
    console.log(`I waited for 1 seconds`);
    return wait(1); //this will create promise
  })
  .then(() => {
    console.log(`I waited for 2 second`);
    return wait(1);
  })
  .then(() => {
    console.log(`I waited for 3 second`);
    return wait(1);
  });
console.log('Hello');

// see this callback hell & relate this with above 👆
setTimeout(() => {
  console.log(`1 second passed`);
  // starting new tumer after the 1st timer has finished
  setTimeout(() => {
    console.log(`2 second passed`);
    // starting new tumer after the 2nd timer has finished
    setTimeout(() => {
      console.log(`3 second passed`);
    }, 1000);
  }, 1000);
}, 1000);

// There is also actually a way to very easy create a fullfilled or a rejected promise immediately. 👇
// These 👇 Promise will resolved or reject immediately
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
*/

// ============================================== Promisifying the Geolocation API ==================================================
/*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
navigator.geolocation.getCurrentPosition(
  // 👆 This is also an asynchronous behaviour
  position => console.log(position), // This is for the success callback function
  err => console.error(err)
);
// 👆 This is actually a asynchronous behaviour
console.log('Getting Position');
console.log(navigator);

// Let's Promisify the callback based API into Promise based API
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(
//       position => resolve(position), // position => console.log(position),
//       err => reject(err) // err => console.error(err)
//     );
//   });
// };

// shorter code 👇
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getPosition()
  .then(pos => console.log(pos))
  .catch(err => console.error(err));
  */

// todo:
// Task pending  ===> Copy from Jonas code

// We can really promisify all kinds of asynchronous stuff in JS. for e.g: That old XMLHttpRequest() function & image loading example, etc..

// =============================================== Coding challenge #2 =============================================
/*
// review: Nice Challenge & application of Promisify

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// My solution : 😈😈⛔⛔🚫🚫👇 WRONG!
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const image = document.createElement('img');
//     image.src = imgPath;
//     image.addEventListener('load', resolve(image));
//     image.addEventListener('error', reject(error));
//   });
// };
// const imgPath = './img/img-1.jpg';
// createImage(imgPath)
//   .then(resolve => {
//     resolve.classList.add('images');
//     document.body.appendChild(resolve);
//     wait(2);
//     imgPath.style.display = 'none';
//   })
//   .catch(err => console.error(err));

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement('img');
    image.src = imgPath;
    image.addEventListener('load', function () {
      imgContainer.append(image);
      resolve(image);
    });
    image.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};
let currentImg;
const imgPath = './img/img-1.jpg';
createImage(imgPath)
  .then(img => {
    currentImg = img;
    console.log(`Image 1 loaded`);
    return wait(2);
    console.log('Hii'); //todo: But "Why this is not executing ? As i know that after "return" statement Nothing is executing but we also that thius line of code synchronous code & wait() is asynchronous which takes some time."
    // img.style.display = 'none';  // imp: What happen when we uncomment this line ? //review: see, in then() function callback ==> only wait function is asynchronous code bcoz: it is a Promise and other lines are synchronous so, it will execute in a synchronous way. that's why before executing wait() method " display will set to none" ===> so as soon as image display immediately its display property sets to none that's why we're not able to see. If you want that image should display for 2 seconds and then its display property change to "none" then we have to do this only after the execution of wait method.
  })
  .then(() => {
    // As we have to hide the image, so for that we want "img" but it present in previous "then()" method that's why we need global variable
    currentImg.style.display = 'none';
    return createImage('./img/img-2.jpg');
  })
  .then(img => {
    // we're taking this "img" input bcoz: createImage() of previous then() method returns a promise with an "img"
    currentImg = img;
    console.log(`Image 2 loaded`);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('./img/img-3.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log(`Image 3 loaded`);
    return wait(2);
  })
  .catch(err => console.error(err));
*/

// ========================================== Consuming Promises with Async/Await ================================================
/*
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
        <p class="country__row"><span>💰</span>${data.currencies.EUR}</p>
        </div>
    </article>
    `;
  // data.currencies.EUR.name
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/*
// since ES2017, there is now even better and easier way to consume Promises Which is called Async/Await. //imp:
const whereAmI = async function (country) {
  // Now, this function is now asynchronous function due to addition of "async" before that.
  // Asynchronous function is the function that is keep running in the background while performing the code that inside of it. Then, when this function is done It automatically returns a Promise. //imp:

  // inside an async function, we can have one or more "await" statements.

  // As soon as this below fetch() method Promise resolved then the value of whole await expression is gona be the result value of the promise. so, we can simply store that into the value. //todo: What if Promises is rejected then ?
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`); // In this case, execution of function will stop until the data has been fetched.
  // await will stop the execution at this point of the function until the Promise is not Fullfilled.
  // todo: Is n't stopping the code, blocking the execution ? //imp: No, bcoz:Stopping execution in a asyc function is actually not a problem.Bcoz:This function is running asynchronously in the background. Therefore, it is not blocking the main thread of execution. so, It's not blocking the callstack.
  // Infact, that was so special about async/await. It makes our code look like regular synchronous code While behind the scenes everything is asynchronous.

  // imp: myanswer: Bro, we are using "await" inside the async function that means this function will execute behind the scenes and synchrous code will execute as it was. But, Note: It's very helpful. bcoz: When we want that if Promise doesn't fullfilled then rest of code should not have to execute whether the rest of code is synchronous or Asynchronous. 💥💥👉👉👉 see "what happen When we are not using "await" ==> Basically at that time, fetch() will exceute behind the scene but all the rest of code which are synchronous will execute without blocking the code AND as soon as Promise gets Fullfilled or Rejected ==> then() & catch() method execute as per the result of Promises.

  // imp: me --> 1. "await" is used inside async function.  2. It is used with Promise which stops until that promise is not fullfilled. Similar like ===> When Promise fullfilled then & then only "then()" function execute or if Promise rejected then "catch()" function will execute.

  // console.log(res);
  const data = await res.json(); //bcoz: .json() method will also return Promise
  console.log(data);
  renderCountry(data[0]);

  //review:
  // const res = await fetch(`https://restcountries.com/v3.1/name/${country}`); console.log(res);
  // This both are same 👇👇👆👆
  // fetch(`https://restcountries.com/v3.1/name/${country}`).then(res => console.log(res));
};
whereAmI('portugal');
console.log('FIRST');
// see Output:- 👉 You will cofirm that whereAmI is an asynchronous function. bcoz: "console.log('FIRST');" this executed before the whereAmI() method.

// imp: Async/Await is infact simply syntatic sugar over the "then()" method in Promises. so, ofcourse behind the scene we're still using promises. In Async/Await, we are simply using different ways of consuming Promise.
// review: Think what happen behind the scenes when we use Promise inside the Asychronous code or via-versa.//todo:
*

// review: see Jonas code 👇
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))
const whereAmI = async function () {
  // Geolocation
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  // Reverse geocoding
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

  const dataGeo = await resGeo.json();
  console.log(dataGeo);

  // Country data
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${dataGeo.country}`
    // `https://restcountries.com/v3.1/name/India`
  );
  // console.log(res);
  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
};
whereAmI();
console.log('FIRST');
*/

// ================================================ Error Handling with Try catch ===========================================================
/*
// Try ... Catch statement actually used in Regular JS
// Try ... Catch has nothing to do with Async/Await But we can still useit to catch errors in Async functions.

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   console.log(err);
//   alert(err.message);
// }

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
        <p class="country__row"><span>💰</span>${data.currencies.EUR}</p>
        </div>
    </article>
    `;
  // data.currencies.EUR.name
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
};

// fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))
const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition(); // for this --> we donot want to throw the error manually bcoz: in the case when something goes wrong with the geolocation. we already build our promise that it automatically rejects in this case.

    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`); // Here, Promise will only rejected when the user has no internet connection. // In case, 4O3 or 4O4 error fetch() doesn't reject the promise that's why we have to manually throw the error for this fetch().//imp:👇

    if (!resGeo.ok) throw new Error(`Problem getting location data`); //imp: Why we need to throw Error manually ? see answer 👆

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
      // `https://restcountries.com/v3.1/name/India`
    );

    if (!res.ok) throw new Error(`Problem getting country`); //imp: Why we need to throw Error manually ? see answer 👆

    // Handle this 👇 Which is coming from this fetch() 👆
    // FIX: GET https://restcountries.com/v3.1/name/India net::ERR_CERT_DATE_INVALID //review: This error is already catched by the catch() method

    // console.log(res);
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.log(`${err.message} 💀😈💀`);
    console.error(`${err.message} 💀😈💀`);
    console.log(`${err.stack} 💀😈💀`);
    renderError(`Something went wrong 💥 ${err.message} 💀😈💀`);
  }
};
whereAmI();
whereAmI();
whereAmI();
console.log('FIRST');
*/

// =============================================== Returning values from Async Functions ===========================================
/*
// Note: Async function always return a promise 👇 see this
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
        <p class="country__row"><span>💰</span>${data.currencies.EUR}</p>
        </div>
    </article>
    `;
  // data.currencies.EUR.name
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
};

// fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))
const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition(); // for this --> we donot want to throw the error manually bcoz: in the case when something goes wrong with the geolocation. we already build our promise that it automatically rejects in this case.

    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`); // Here, Promise will only rejected when the user has no internet connection. // In case, 4O3 or 4O4 error fetch() doesn't reject the promise that's why we have to manually throw the error for this fetch().//imp:👇

    if (!resGeo.ok) throw new Error(`Problem getting location data`); //imp: Why we need to throw Error manually ? see answer 👆

    const dataGeo = await resGeo.json();
    // console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`

      // 👇👇
      // `https://restcountries.com/v3.1/name/${dataGeo.countryqqqqqqqqqqq}` // for testing error if occur in try block then "undefined" will be returned by Async function as a Promise. 🌟🌟⛔⛔ BUT then also "then()" method of whereAmI() executing even though "undefined" is returned. That means Promise is fullfilled NOT rejected. Even though there is an Error in the Async Function. If we want to catch the Error here as well then we have to re-throw the error.

      // `https://restcountries.com/v3.1/name/India`
    );

    if (!res.ok) throw new Error(`Problem getting country`); //imp: Why we need to throw Error manually ? see answer 👆

    // console.log(res);
    const data = await res.json();
    // console.log(data);
    renderCountry(data[0]);

    // This returned👇 will never be reached if no error occur in the try block. Let say if any error occur in try blcok then control will immideately returned to the catch block.
    return `You are in ${dataGeo.city} ${dataGeo.country}`; // imp: Async function returns "Promise"
  } catch (err) {
    console.log(`${err.message} 💀😈💀`);
    console.error(`${err.message} 💀😈💀`);
    console.log(`${err.stack} 💀😈💀`);
    renderError(`Something went wrong 💥 ${err.message} 💀😈💀`);

    // Reject Promisereturned from async function
    throw err; // Rethrowing the Error.
  }
};
console.log('1: Will get location');

// const city = whereAmI(); // At this point of the code, JS has no way of knowing yet that we want string as a return bcoz: the function is still running.
// console.log(city); // see output 👈 // This Promise will fullfilled by the string which is returned by the Async function.

whereAmI()
  .then(city => console.log(`2: ${city}`))
  .catch(err => console.error(`2: ${err.message} 💀😈💀`)) // 🤩
  .finally(() => console.log('3: Finished getting location'));

// Here, we have merge the "Async/Await" with "then() & catch()" ===> Now, we will convert them into Async/Await.
// But we know that for using await we have to use async function.
// so, instead we can use "iffi" ===> They are immideatley invoked function expressions //imp:
// 👇👇👇 Converted into Async/Await
(async function(){
  try{
    const city = await whereAmI();
    console.log(`2: ${city}`);
  }catch(err){
    console.error(`2: ${err.message} 💀😈💀`);
  }
  console.log('3: Finished getting location')
})();
*/

// ============================================== Running Promises in Parallel ===================================================
/*
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    console.log(response);
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(
    //   `https://restcountries.com/v3.1/name/${c1}`
    // );
    // const [data2] = await getJSON(
    //   `https://restcountries.com/v3.1/name/${c2}`
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.com/v3.1/name/${c3}`
    // );
    // console.log([data1.capital, data2.capital, data3.capital]);

    // This Promise.all() takes an array of Promises and it will return a new Promise which will then run all the promises in the array at the same time.👇👇👇 Also NOTE that if one of the Promises rejects then whole Promise.all() also rejects as well. so, we say that => Promise.all shortcircuits when one promise rejects. // 👇 It's call a combinator function bcoz: it allows us to combine multiple Promises.
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('portugal', 'canada', 'tanzania');
*/

// ============================= Other Promise combinators: Race, ALLSettled and ANY ==========================
/*
// imp: important combiators are: Promise.all() & Promise.race()
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    console.log(response);
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// Promise.race ===> It recieves an array of Promises and returns a Promise.
// This Promise which is returned by Promise.race is settled as soon as one of the i/p Promises is settles.
// Settle simply means a value is available BUT it doesn't matter that the Promise get the rejected or fullfilled.
// so, In Promise.race() basically the first settles Promise wins the Race.
// Promise that get rejected can also win the race.
// so, we say that Promise.race() shortcircuits whenever one of the Promises get setteled. No atter fullfilled or rejected.
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res[0]);
})();
// imp: It prevents from never ending Promises or also very long running Promises. for e.g: if your user have very bad internet connection then fetch() request in our application might take way to long to actually be very useful. so, we can create a special timeout promise which automatically rejects after a certain time has passed.👇👇

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};
// This is similar to wait() Promise that we have done earlier. 👆👆

Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
  timeout(5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled  ===> It takes an Array of Promises & return an array of all the settled Promises. NO matter a Promises is rejected or NOT.
// It is similar to Promise.all{It also returns an array of Promise in result when all Promises are fullfiled} BUT difference is: Promise.all() will shortcircuit as soon as one Promise is rejects.
// Promise.allsettled simply never shortcircuit. It simply returns all the result of all the Promises.
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any [ES2021]  ===> It takes an array of multiple promises and this returns theh first fullfilled Promise unless ofcourse all of then=m reject.
// It will simply ignore the rejected Promise
// It is similar to Promise.race() with the difference that rejected Promises are ignored.
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
*/

// ========================================= Coding challenge #3 =======================================================
const imgContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement('img');
    image.src = imgPath;
    image.addEventListener('load', function () {
      imgContainer.append(image);
      resolve(image);
    });
    image.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

const loadNPause = async function () {
  try {
    let img = await createImage('./img/img-1.jpg');
    console.log(typeof img, img);
    console.log(`Image 1 loaded`);
    await wait(2); //as it doesn't return anything so, we don't want to save anything.
    img.style.display = 'none';

    img = await createImage('./img/img-2.jpg');
    console.log(`Image 2 loaded`);
    await wait(2);
    img.style.display = 'none';

    img = await createImage('./img/img-3.jpg');
    console.log(`Image 2 loaded`);
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(`${err.message} 💀😈💀`);
  }
  // we can also ue the catch without any parameters like this 👉 catch{}
};
// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img)); // createImage() will return a Promise
    console.log(imgs); // It is not the collection of images. //imp: It is a collection of Promises Why ???
    // Bcoz: .map() function we have written async function and we know that async function always returns Promise. The value that we want to return is going to be a fullfilled value of the Promise that async function returns.

    // review: "How to take each image element from the Promise ?"
    // 1. we can could take each Promise out of the array and then manually await it. ===> No sense bcoz: It will not happen parallel
    // 2. Promise.all() ==> Therefore, we will use this

    const imgsElement = await Promise.all(imgs);
    console.log(imgsElement);
    imgsElement.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(`${err.message} 💀😈💀`);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

// review: That's the important point 👇👇
// const imgs = imgArr.map(async img => await createImage(img));
// const imgsElement = await Promise.all(imgs);
