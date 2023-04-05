'use strict';

// All necessary elements need :- Selecting it & storing it in variable. DRY principle follows.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal'); //NOT '.closeModal'

//review:
/*
const btnsOpenModal = document.querySelector('.show-modal');
console.log(btnsOpenModal); //<button class="show-modal">Show modal 1</button>  :- only 1st element is selected. This is the limitation of querySelector() method.
//imp: Whenever we use querySelector() method with a selector which actually matches multiple elemnets, only the first-one will get selected. ==> Limitation of querySelector() method.
*/
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal); //Now, it returns nodelist. nodelist is like an array.
for(let i=0; i<btnsOpenModal.length; i++){
    console.log(btnsOpenModal[i]); //Each Element will print.
    console.log(btnsOpenModal[i].textContent); //textContent of each element will be print.
} 
//This way, we can select multiple elements which have the same class.


/*
// Working with Classes or How to manipulate classes with js :-
for(let i=0; i<btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click',function(){
        //It's an Anonymous function. function without the name. Also called as function Expression as it is a function value.

        console.log('Button clicked ' + i);
        modal.classList.remove('hidden'); //NOTE:- Don't use . here like .hidden, We can pass multiple classes by separating with comma.Name of the class is passed to this function.

        //Wrong!!!!!!!!!!!!!!!!!!!
        // modal.classList.remove('.hidden'); NOTE:- dot(.) is only used in the selector


        //todo: I clicked 1stly 2nd modal then 1st modal then 3rd modal, all are working BUT how ? as loop goes run from 0 to 2, and i'm selecting random modal. ig,loop will run one time as in sequence, but i'm selecting randomly then also work. HOW it works ??? 

        overlay.classList.remove('hidden'); //todo: Due to this, we are not able to select the other modal. BUT why ?????                                                                                                                   Answer:- b'coz modal is shown now on overlay and overlay is just a plane page whose background color is blur. and all modal options are behind the overlay page. so that's why we are not able to select the other modal. whereas, in previously we are able to select other modal b'coz:- modal is shown above the main html page and modal is a div/section container.
        //or 
       //overlay.style.display='block';  //this property will apply inline and inline property has more priority then external CSS.
       //for DRY principles, we will use class b'coz:- let we have so many elements which contains hidden class then we have to write this above line for all element which against DRY principle.
       //imp: usually, When u need to manipulate the style on the page then always just export the style into a class and then use the class just like we did it here.
    });


btnCloseModal.addEventListener('click', function(){
    // NOTE:- no for loop will apply for this b'coz there is only one element whose class is close-modal. for-loop used when we have multiple elements with the same class.
    console.log('close-modal btn works!');
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
overlay.addEventListener('click', function(){
    //same code as in btnCloseModal EventListner
    console.log('close-modal btn works!');
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
*/

const openModal = function(){
    console.log('Button Clicked');
    modal.classList.remove('hidden'); 
    overlay.classList.remove('hidden');
}

const closeModal = function(){
    console.log('close-modal btn works!');
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0; i<btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click',openModal); //we ae defining/declaring openModal function.

btnCloseModal.addEventListener('click', closeModal); //NOTE:- we're not calling the function, It will execute when click event happens.
overlay.addEventListener('click', closeModal); //whenever we click outside the modal-window. ig,that's why he used overlay page/section/div. If not used then we can select body and apply same thing b'coz then modal-window will display on body(tag) page.


// Check whether a specify class is exist in the element or not ??  Handling an "esc" KeyPress Event :-
//imp: Keyboard event are also called as global event b'coz they donot happen on one specific element. for global events like keyboard events we usually listen on the whole document.


document.addEventListener('keydown', function(event){
    //We are basically listening for events everywhere. No matter where i have happen on the page they will always trigger the eventhandler that we gona specify here.
    //This event will happen as soon as we hit any key on the keyboard.
    console.log('A key was pressed!');
    //todo: How we'll know which key was actually pressed if this event here happens for all the keys?
    //imp: The information about which key was pressed will be store in the event that is gona occured as soon as any key is pressed. Anytime that an event like this occurs, js does infact generate an object and that object contain all the informations about the itself, AND we can then actually access the object in the eventHandler function.
    //As the event occurs, js will call this function with the event object as an argument. 
    //NOTE:- This works b'coz we donot call this function here ourself, we only define the function. YOU WILL LEARN THIS MECHANISM LATER ..................
    console.log(event); //This event object is an Keyboard event.
    console.log(event.key);

    /*
    if(event.key === "Escape"){
        console.log('Esc was pressed');

        //we will close the modal when the modal is actually visible. How to know that whether modal is visible or not ? Ans:=> if modal contains class hiden that means it is not visible.
        if(!modal.classList.contains('hidden')){
            console.log('Modal is visible');
            closeModal();
        }
    } */
    if(event.key === "Escape" && (!modal.classList.contains('hidden'))){
        console.log('Modal is visible and Esc key was pressed');
        closeModal();
    }

});
//imp: 3 types of events for the keyboard:- keydown, keypress, keyup.                                  Keyup will only happen when we lift our finger off the keyboard/key.                                   keypress will fired continuously as we keep our finger on a certain key.                               keydown is fired as soon as we just press-down the key. 

