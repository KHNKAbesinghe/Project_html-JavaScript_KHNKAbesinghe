const trigger = document.getElementById('trigger');
const target = document.getElementById('target');

trigger.addEventListener('mouseover', () => {
  target.src = 'picB.jpg';
});

trigger.addEventListener('mouseout', () => {
  target.src = 'picA.jpg';
});