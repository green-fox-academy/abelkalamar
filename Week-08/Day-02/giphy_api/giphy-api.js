
const getGiphies = () => {
  const xhr = new XMLHttpRequest();
  const URL = 'https://api.giphy.com/v1/gifs/search?api_key=PYXQGIvR8i9QDq23exxMSJShmkLRmvbP&q=cat&limit=16&offset=0&rating=G&lang=en';
  const content = document.querySelector('.container');

  xhr.onload = () => {
    if (xhr.status === 200) {
      const result = JSON.parse(xhr.responseText);
      for (let i = 0; i < result.data.length; i++) {
        let img = document.createElement('img');
        img.setAttribute('src', result.data[i].images.original_still.url);
        content.appendChild(img);

        img.onclick = () => {
          img.setAttribute('src', result.data[i].images.downsized.url);
        }
      }
    }
  }
  xhr.open('GET', URL);
  xhr.send();
}

getGiphies();
