const form = document.querySelector('.js-form')
const datePicker = document.querySelector('.js-date')
const today = new Date();
const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, '0')
const day = today.getDate().toString().padStart(2, '0')

   currentDate = `${year}-${month}-${day}`
   datePicker.min = currentDate;


const serviceSelection = document.querySelector('.js-service-select')
const userName = document.querySelector('.js-name')
const mail = document.querySelector('.js-mail')
const adress = document.querySelector('.js-adress')
const phone = document.querySelector('.js-phone')
const submitButton = document.querySelector('.js-submit')
