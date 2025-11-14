'use strict';
const name = prompt('Student name:');
const roll = Math.floor(Math.random() * 4) + 1; // 1..4
let house;
switch (roll) {
  case 1: house = 'Gryffindor'; break;
  case 2: house = 'Slytherin';  break;
  case 3: house = 'Hufflepuff'; break;
  default: house = 'Ravenclaw';
}
document.querySelector('#result').textContent =
  name ? `${name}, you are ${house}.` : `You are ${house}.`;