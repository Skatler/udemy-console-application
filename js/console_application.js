"use strict";

const nuberOfFilms = prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
  count: nuberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних просмотренный фильмов ?", ""),
      b = prompt("Сколько фильмов вы уже посмотрели ?"),
      c = prompt("Один из последних просмотренный фильмов ?", ""),
      d = prompt("Сколько фильмов вы уже посмотрели ?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);