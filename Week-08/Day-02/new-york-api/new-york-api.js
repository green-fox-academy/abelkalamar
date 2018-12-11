const xhr = new XMLHttpRequest();
const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=a51524984ef1471ab567ff9c5e0bd1b3&q=moon_landing_apollo_11&end_date=19700101";

xhr.onload = () => {
  const container = document.querySelector('.container');
  if (xhr.status === 200) {
    const content = JSON.parse(xhr.response);
    console.log(content.response.docs);
    content.response.docs.forEach(e => {
      const article = document.createElement('artice');
      const header = document.createElement('h2');
      const snippet = document.createElement('p');
      const date = document.createElement('p');
      header.innerHTML = e.headline.main;
      snippet.innerHTML = e.snippet;
      date.innerHTML = e.pub_date;
      container.appendChild(article);
      article.appendChild(header);
      article.appendChild(snippet);
      article.appendChild(date);

    });
  }
}

xhr.open('GET', url);
xhr.send();
