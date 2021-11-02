window.onload = function () {

let films = ["Spider-Man" , "Doctor Strange" , "X-men" , "Suicide Squad"];
let randomFilms = films[Math.floor(Math.random() * films.length)];

document.write(randomFilms);
}