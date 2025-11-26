'use strict';

const form = document.getElementById('searchForm');
const input = document.getElementById('query');
const resultsDiv = document.getElementById('results');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const searchText = input.value.trim();
  const url = 'https://api.chucknorris.io/jokes/search?query=' + encodeURIComponent(searchText);

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {

      resultsDiv.innerHTML = '';

      data.result.forEach(function(jokeObj) {
        const article = document.createElement('article');
        const p = document.createElement('p');

        p.textContent = jokeObj.value;
        article.appendChild(p);

        resultsDiv.appendChild(article);
      });

      if (data.result.length === 0) {
        resultsDiv.innerHTML = '<p>No jokes found.</p>';
      }
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
});