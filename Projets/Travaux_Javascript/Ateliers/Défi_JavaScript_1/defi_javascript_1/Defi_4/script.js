/**
 * Défi #4
 * Créer une variable de type tableau comportant six capitales d'Europe en minuscule.
 * Faire une boucle qui va parcourir les éléments du tableau et les afficher en majuscule sur
 * la page et dans un liste ordonnée.
 */

window.onload = function() {
    let capitales = ['Berlin', 'Paris', 'Vienne', 'Bruxelles', 'Madrid', 'Sofia', 'Séoul'];
    let ol = document.createElement('ol');

    for(let i = 0; i < capitales.length; i++) {
        let li = document.createElement('li');
        li.innerText = capitales[i].toUpperCase();
        ol.append(li);
    }

    document.querySelector('body').append(ol);
}
