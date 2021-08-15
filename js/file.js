'use strict';

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

if (numberOfFilms < 10) {
  alert("Просмотрено довольно мало фильмов");
}
else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
    alert("Вы классический зритель");
}
else if (numberOfFilms >30) {
    alert("Вы киноман!!!");
}
else {
  console.log('error');
}


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


let i = 0;
do { const a = prompt('Какой фильм ты недавно смотрел?', ''),
           b = prompt('Оцени от 0 до 10', '');

        if (a != null && b != null && a.length < 50 && a !='' && b != '' ) {

         personalMovieDB.movies[a] = b;
         i++;
         }

         else {
           alert ('Заполни поля, пжлст');
         }
   }
         while (i < 2);


console.log(personalMovieDB);

