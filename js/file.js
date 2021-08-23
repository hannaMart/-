"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    while (personalMovieDB.count == '' || isNaN(personalMovieDB.count) || personalMovieDB.count == null) {
      personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      alert("Вы киноман!!!");
    } else {
      console.log('error');
    }
  },
  rememberMyFilms: function () {
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
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    } else {
      console.log('база приватная');
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
      
      if (genre === "" || genre == null) {
        console.log("error");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр номер ${[i + 1]} - это ${item}`);
    });
  }
};


// function showMyDB() {
//   if (personalMovieDB.privat == false) {
//     console.log(personalMovieDB);
//   } else {
//     console.log('база приватная');
//   }
// }
// showMyDB();

// ????



// function writeYourGenres1() {
//   let i = 1;
//   while (i <= 3) {
//     const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
//     personalMovieDB.genres[i - 1] = genre;
//     i++; 
//   }
// }

// writeYourGenres1();



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



// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'red',
//     bg: 'black'
//   },
//   makeTest: function () {
//     console.log('Test');
//   }

// };
// options.makeTest();
// console.log(Object.keys(options).length);


// console.log(options.name);

// delete options.name;

// console.log(options);


// let counter = 0;
// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for (let i in options[key]) {
//         console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         counter++;
//       }
//     } else {
//       console.log(`Свойство ${key} имеет значение ${options[key]}`);
//       counter++;
//     }

// }
// console.log(counter);