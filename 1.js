const numberOfFilms = +prompt("How many films do you see?", "");
const PersonsofMovie = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Какой последний фильм ты посмотрел?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Какой последний фильм ты посмотрел?', ''),
      d = prompt('На сколько оцените его?', '');

      PersonsofMovie.movies [a] = b;
      PersonsofMovie.movies [c] = d;

console.log(PersonsofMovie);