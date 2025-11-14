'use strict';
const name = prompt('Type your name.');
document.querySelector('#greeting').textContent =
  name ? `Hello, ${name}!` : 'Hello!';