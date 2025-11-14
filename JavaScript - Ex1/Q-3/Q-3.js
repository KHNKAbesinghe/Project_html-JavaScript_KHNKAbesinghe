'use strict';
const a = Number(prompt('Enter integer 1:'));
const b = Number(prompt('Enter integer 2:'));
const c = Number(prompt('Enter integer 3:'));

const sum = a + b + c;
const product = a * b * c;
const average = sum / 3;

document.querySelector('#out').textContent =
  `Sum: ${sum}\nProduct: ${product}\nAverage: ${average}`;