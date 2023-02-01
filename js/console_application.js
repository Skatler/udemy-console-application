let numberOfFilms;
function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

  // eslint-disable-next-line eqeqeq
  while (numberOfFilms == '' || numberOfFilms == null || Number.isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i += 1) {
    const a = prompt('Один из последних просмотренный фильмов ?', '');
    const b = prompt('На сколько оцените его ?');

    if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i += 1;
    }
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Вы посмотрели довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB >= 30) {
    console.log('Вы киноман');
  }
}
detectPersonalLevel();

console.log(personalMovieDB);
