'use strict';

const img = document.getElementById('target');
const trigger = document.getElementById('trigger');

// when mouse enters the <p>
trigger.addEventListener('mouseover', () => {
  img.src = 'img/picB.jpg';
});

// when mouse leaves the <p>
trigger.addEventListener('mouseout', () => {
  img.src = 'img/picA.jpg';
});