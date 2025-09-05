import {
    validateName,
    validateEmail,
    updateFormValues
} from './utils/utils.js'

import {
    showError,
    hideError
} from './ui/dom.js'

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const $id = (selector) => document.getElementById(selector);

// Form elements
const form = $id('contact-form');
const inputName = $id('name');
const inputLastName = $id('last-name');
const inputEmail = $id('email');
const inputEnquiry = $id('general-enquiry');
const inputRequest = $id('support-request');
const inputMessage = $id('message');
const inputConsent = $id('consent');
const btnSubmit = $id('submit');
const checkboxBtn = $('.checkbox-btn');

// Error messages
const errorName = $('.required-name');
const errorLastName = $('.required-last-name');
const errorEmail = $('.required-email');
const errorQuertType = $('.required-query-type');
const errorMessage = $('.required-message');
const errorConsent = $('.required-consent');

const formValues = {
    "name": null,
    "last-name": null,
    "email": null,
    "query-type": null,
    "message": null,
    "consent": null
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log(formValues)
    Object.values(formValues).forEach(value => {
        if(value !== null)console.log(value)
    })
});


inputName.addEventListener('blur', (e)=> {
    validateInputAndUpdateField(e, validateName, errorName, inputName);
});
inputName.addEventListener('input', (e)=> {
    hideError(errorName, inputName)
});

inputLastName.addEventListener('blur', (e)=> {
    validateInputAndUpdateField(e, validateName, errorLastName, inputLastName);
});
inputLastName.addEventListener('input', (e)=> {
    hideError(errorName, inputLastName)
});

inputEmail.addEventListener('blur', (e)=> {
    validateInputAndUpdateField(e, validateEmail, errorEmail, inputEmail);
});
inputEmail.addEventListener('input', (e)=> {
    hideError(errorEmail, inputEmail)
});

inputConsent.addEventListener('change', ()=> {
    if(inputConsent.checked){
        checkboxBtn.classList.add('checkbox-btn-active');
        updateFormValues(formValues,  inputConsent.id, true);
    } else {
        checkboxBtn.classList.remove('checkbox-btn-active');
        updateFormValues(formValues, inputConsent.id, null);
        console.log('deschecked')
    }
})

inputMessage.addEventListener('blur', (e)=> {
    const isNotEmpty = (value) => value
    validateInputAndUpdateField(e, isNotEmpty, errorMessage, inputMessage);
});
inputMessage.addEventListener('input', (e)=> {
    hideError(errorEmail, inputMessage)
});

function validateInputAndUpdateField(event, validateInputFunction, spanError, input){
    const inputValue = event.target.value;
    const inputId = event.target.id;
    if(validateInputFunction(inputValue)){
        hideError(spanError, input);
        updateFormValues(formValues, inputId, inputValue);
        return
    }
    updateFormValues(formValues, inputId, null);
    showError(spanError, input)
}