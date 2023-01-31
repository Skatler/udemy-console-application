const nuberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
  count: nuberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

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
if (personalMovieDB.count < 10) {
  console.log('Вы посмотрели довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB >= 30) {
  console.log('Вы киноман');
}
console.log(personalMovieDB);
