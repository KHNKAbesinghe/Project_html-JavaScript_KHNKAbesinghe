'use strict';

const form = document.getElementById('searchForm');
const input = document.getElementById('query');
const resultsDiv = document.getElementById('results');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const searchText = input.value.trim();
  const url = 'https://api.tvmaze.com/search/shows?q=' + encodeURIComponent(searchText);

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // clear old results
      resultsDiv.innerHTML = '';

      data.forEach(function(tvShow) {
        // main <article>
        const article = document.createElement('article');

        // <h2> for name
        const title = document.createElement('h2');
        title.textContent = tvShow.show.name;
        article.appendChild(title);

        // <a> link
        const link = document.createElement('a');
        link.href = tvShow.show.url;
        link.target = '_blank';
        link.textContent = 'More details';
        article.appendChild(link);

        // <img> medium image (optional chaining)
        const img = document.createElement('img');
        const mediumImg = tvShow.show.image?.medium;  // safe access

        if (mediumImg) {
          img.src = mediumImg;
          img.alt = tvShow.show.name;
          article.appendChild(img);
        }

        // <div> summary (already contains <p> tags)
        const summaryDiv = document.createElement('div');
        summaryDiv.innerHTML = tvShow.show.summary || 'No summary available';
        article.appendChild(summaryDiv);

        // append final article to results
        resultsDiv.appendChild(article);
      });
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
});