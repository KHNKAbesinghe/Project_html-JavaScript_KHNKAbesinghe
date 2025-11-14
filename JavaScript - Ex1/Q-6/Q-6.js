'use strict';
const out = document.querySelector('#result');
if (confirm('Should I calculate the square root?')) {
  const n = Number(prompt('Enter a number:'));
  if (Number.isNaN(n)) out.textContent = 'Not a number.';
  else if (n < 0) out.textContent = 'The square root of a negative number is not defined.';
  else out.textContent = `Square root: ${Math.sqrt(n)}`;
} else {
  out.textContent = 'The square root is not calculated.';
}