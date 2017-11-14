// main.js

'use strict'

// ***** check for required fields ************
// global variable to allow form submission
let formOK = 0;

// select all input elements
const inputs = document.querySelectorAll('input');

const checkAttribute = ( elements, attr, func) => {
    elements.forEach((element) => {
        if (element.hasAttribute(attr)) {
            func(element);
        }
    });
};

const checkEmpty = (element) => {
    if( element.value === ''){
        formOK++;
        // few modern browser options
        // element.style = 'border: red solid 1px';
        // element.style.borderColor = "red";
       element.setAttribute('style', 'border: red inset 3px');

    } else {
        formOK--;
        element.removeAttribute('style');
    }
};

const checkPattern = (element) => {
    const pattern = new RegExp(element.getAttribute('pattern'), 'i');
    const value = element.value;
    if ( element.value === ''){
        formOK++;

        element.setAttribute('style', 'border: red inset 3px');

    } else if (!pattern.test(value)){

        element.setAttribute('style', 'border: yellow inset 3px');

    } else {

        formOK--;
        element.setAttribute('style');
    }
}

const form = document.querySelector('form');

form.addEventListener('submit', (evt) => {

    evt.preventDefault();
    formOK = 0;

    checkAttribute(inputs, 'required', checkEmpty);
    checkAttribute(inputs, 'pattern', checkPattern);
    console.log(formOK);

    if(formOK === -8)
        form.submit();

});