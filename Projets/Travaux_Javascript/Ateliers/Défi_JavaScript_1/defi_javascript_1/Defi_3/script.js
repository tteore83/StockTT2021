/**
 * Défi #3
 * Créer une variable de type tableau comportant quatre titres de film. À chaque chargement, le titre d'un des 4 films
 * s’affiche sur la page. Le titre du film est choisi aléatoirement dans le tableau.
 */

window.onload = function() {
    let movies = ['H2G2', 'Foundation', 'Chappie', 'District 9'];
    let random = movies[Math.floor(Math.random() * movies.length)];

    let p = document.createElement('p');
    p.innerText = random;
    document.querySelector('body').append(p);
}
