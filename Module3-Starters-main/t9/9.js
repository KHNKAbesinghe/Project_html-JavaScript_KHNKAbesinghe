'use strict';

const input = document.getElementById('calculation');
const btn = document.getElementById('start');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
  const text = input.value;

  let a, b, answer;

  if (text.includes('+')) {
    const parts = text.split('+');
    a = Number(parts[0]);
    b = Number(parts[1]);
    answer = a + b;

  } else if (text.includes('-')) {
    const parts = text.split('-');
    a = Number(parts[0]);
    b = Number(parts[1]);
    answer = a - b;

  } else if (text.includes('*')) {
    const parts = text.split('*');
    a = Number(parts[0]);
    b = Number(parts[1]);
    answer = a * b;

  } else if (text.includes('/')) {
    const parts = text.split('/');
    a = Number(parts[0]);
    b = Number(parts[1]);
    answer = a / b;

  } else {
    answer = 'Invalid input';
  }

  result.textContent = `Result: ${answer}`;
});