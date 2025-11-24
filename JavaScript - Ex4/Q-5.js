const section = document.querySelector('section');

picArray.forEach(pic => {
  const article = document.createElement('article');
  article.classList.add('card');

  const h2 = document.createElement('h2');
  h2.textContent = pic.title;

  const figure = document.createElement('figure');

  const img = document.createElement('img');
  img.src = pic.medium;
  img.alt = pic.title;

  const cap = document.createElement('figcaption');
  cap.textContent = pic.caption;

  figure.appendChild(img);
  figure.appendChild(cap);

  const p = document.createElement('p');
  p.textContent = pic.description;

  article.appendChild(h2);
  article.appendChild(figure);
  article.appendChild(p);

  section.appendChild(article);
});