'use strict';

const btn = document.querySelector('#btn')
const inputText = document.querySelector('#text')
const square = document.querySelector('#square');
const btn2 = document.querySelector('#e_btn')
const range = document.querySelector('#range');
const circle = document.querySelector('#circle');

btn.addEventListener('click', function(){
  square.style.backgroundColor = inputText.value;
})

btn2.style.display = "none";

range.addEventListener('input', function(event) {
  circle.style.width = range.value + "%"
  circle.style.height = range.value + "%"

})




