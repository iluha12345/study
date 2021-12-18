'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('how many films you watched', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('how many films you watched', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Last watched film?', ''),
            b = prompt('Rate', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            console.log('done');
            personalMovieDB.movies[a] = b;
        } else {
            console.log('error');
            i--;
        }
    }
}

//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('You watched very small count of films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are classical watcher');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are wathced very lot of films');
    } else {
        console.log('ERROR');
    }
}

//detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt('Your most like genres of number ' + i, '');
    }
}

writeYourGenres();

console.log(personalMovieDB);