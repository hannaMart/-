'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
  while (numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null) {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
  }
}
start();

function detectPersonalLevel() {
  if (numberOfFilms < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
    alert("Вы классический зритель");
  } else if (numberOfFilms > 30) {
    alert("Вы киноман!!!");
  } else {
    console.log('error');
  }
}
detectPersonalLevel();


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  let i = 0;
  do {
    const a = prompt('Какой фильм ты недавно смотрел?', ''),
      b = prompt('Оцени от 0 до 10', '');

    if (a != null && b != null && a.length < 50 && a != '' && b != '') {

      personalMovieDB.movies[a] = b;
      i++;
    } else {
      alert('Заполни поля, пжлст');
    }
  }
  while (i < 2);

  console.log(personalMovieDB);
}

// rememberMyFilms();

// function showMyDB() {
//   if (personalMovieDB.privat == false) {
//     console.log(personalMovieDB);
//   } else {
//     console.log('база приватная');
//   }
// }
// showMyDB();

// ???? 

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  } else {
    console.log('база приватная');
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres1() {
  let i = 1;
  while (i <= 3) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
    i++;
    personalMovieDB.genres[i - 2] = genre;
  }

}

// writeYourGenres1();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '')
  }
}

writeYourGenres();

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Какой фильм ты недавно смотрел?', ''),
//           b = +prompt('Оцени от 0 до 10', '');

//   if (a != null && b != null && a.length < 50 && a !='' && b != '' ) {

//         personalMovieDB.movies[a] = b;       
//   } else {
//     i--;
//     alert ('Заполни поля, пжлст');
//   }

// }
// console.log(personalMovieDB); 



// let i = 0;
// while (i < 2) {

//   const a = prompt('Какой фильм ты недавно смотрел?', ''),
//         b = prompt('Оцени от 0 до 10', '');

//         if (a != null && b != null && a.length < 50 && a !='' && b != '' ) {

//         personalMovieDB.movies[a] = b;
//         i++;
//         }

//         else {
// 
//           alert ('Заполни поля, пжлст');
//         }
// }

// console.log(personalMovieDB);