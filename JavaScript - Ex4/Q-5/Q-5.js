'use strict';

fetch('https://api.chucknorris.io/jokes/random')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log('Random joke:');
    console.log(data.value);   // print only the joke text
  })
  .catch(function(error) {
    console.log('Error:', error);
  });