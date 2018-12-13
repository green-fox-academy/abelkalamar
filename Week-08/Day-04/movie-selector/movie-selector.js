const genre = document.querySelector('.form-list select');
const movies = document.querySelector('#movies');


const dramas = ['Select a movie', '21 grams', 'Seven', 'Babel'];
const scifis = ['Select a movie', 'Prometheus', 'Life', 'Ex Machina'];
const actions = ['Select a movie', 'Avengers', 'Sicario', 'John Wick'];

const movieForm = document.querySelector('.lists');

const clearer = () => {
  while (movies.firstChild) {
    
  } 
}

const addMovies = () => {
  movies.value = '';
  switch (genre.value) {
    case 'sci-fi':
      scifis.forEach(e => {
        let movie = document.createElement('option');
        movie.innerText = e;
        movies.appendChild(movie);
      })
      break;
    case 'drama':
      dramas.forEach(e => {
        let movie = document.createElement('option');
        movie.innerText = e;
        movies.appendChild(movie);
      })
      break;
    case 'action':
      actions.forEach(e => {
        let movie = document.createElement('option');
        movie.textContent = e;
        movies.appendChild(movie);
      })
      break;
  }
}

const printTitle = () => {
  const result = document.querySelector('.resultMovie');
  result.textContent = movies.value;
}

movieForm.addEventListener('change', addMovies);
movies.addEventListener('change', printTitle);