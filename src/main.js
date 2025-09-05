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
const radios = [inputEnquiry, inputRequest];
const radioWrapper = $$('.radio-wrapper')

// Error messages
const errorName = $('.required-name');
const errorLastName = $('.required-last-name');
const errorEmail = $('.required-email');
const errorQuertType = $('.required-query-type');
const errorMessage = $('.required-message');
const errorConsent = $('.required-consent');

// Sent form notification 
const notificationSent = $id('notification-sent');

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

    const hasEmptyValues = Object.values(formValues).some(value => value === null);

    if(hasEmptyValues) return; 

    notificationSent.classList.add('active');
    notificationSent.setAttribute('aria-hidden', 'false');
    setTimeout(() => {
        notificationSent.setAttribute('aria-hidden', 'true');
        notificationSent.classList.remove('active');
    }, 4000);
});

// Name field
inputName.addEventListener('blur', (e)=> {
    validateInputAndUpdateField(e, validateName, errorName, inputName);
});
inputName.addEventListener('input', (e)=> {
    hideError(errorName, inputName)
});

// Last Name field
inputLastName.addEventListener('blur', (e)=> {
    validateInputAndUpdateField(e, validateName, errorLastName, inputLastName);
});
inputLastName.addEventListener('input', (e)=> {
    hideError(errorName, inputLastName)
});

// Email field
inputEmail.addEventListener('blur', (e)=> {
    validateInputAndUpdateField(e, validateEmail, errorEmail, inputEmail);
});
inputEmail.addEventListener('input', (e)=> {
    hideError(errorEmail, inputEmail)
});

// Query Type field 
radios.forEach(radio => {
    radio.addEventListener('change', (e)=> {
        radios.forEach(r => {
            r.nextElementSibling.classList.remove('radio-btn-active');
        });
        radioWrapper.forEach(wrapper => wrapper.classList.remove('active'));

        if(e.target.checked){
            e.target.nextElementSibling.classList.add('radio-btn-active');
            e.target.closest('.radio-wrapper').classList.add('active')
            updateFormValues(formValues, "query-type", e.target.id);
        };
    })
})

// Message field
inputMessage.addEventListener('blur', (e)=> {
    const isNotEmpty = (value) => value
    validateInputAndUpdateField(e, isNotEmpty, errorMessage, inputMessage);
});
inputMessage.addEventListener('input', (e)=> {
    hideError(errorEmail, inputMessage)
});

// Consent field
inputConsent.addEventListener('change', ()=> {
    if(inputConsent.checked){
        checkboxBtn.classList.add('checkbox-btn-active');
        updateFormValues(formValues,  inputConsent.id, true);
    } else {
        checkboxBtn.classList.remove('checkbox-btn-active');
        updateFormValues(formValues, inputConsent.id, null);
        console.log('deschecked')
    }
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