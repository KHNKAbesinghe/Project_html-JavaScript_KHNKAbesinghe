'use strict';
const year = Number(prompt('Enter a year:'));
const isLeap = (y) => (y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0);

const out = document.querySelector('#result');
if (!Number.isInteger(year)) {
  out.textContent = 'Please enter an integer year.';
} else {
  out.textContent = isLeap(year)
    ? `${year} is a leap year.`
    : `${year} is not a leap year.`;
}