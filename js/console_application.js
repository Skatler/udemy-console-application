const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');

    // eslint-disable-next-line eqeqeq
    while (personalMovieDB.count == '' || personalMovieDB.count == null || Number.isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
    }
  },
  rememberMyFilms: () => {
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
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log('Вы посмотрели довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    }
  },
  showMyDb: () => {
    if (personalMovieDB.privat === false) console.log(personalMovieDB);
  },
  toggleVisibleMyDb: () => {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenre: () => {
    for (let i = 1; i <= 3; i += 1) {
      const genre = prompt(`Ваш любимый жанр под номером ${i}`);
      if (genre === '' || genre == null) {
        console.log('Вы ввели не корректные данные');
        i -= 1;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};
