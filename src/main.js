const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const $id = (selector) => document.getElementById(selector);

// Form elements
const form = $id('contact-form');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
})