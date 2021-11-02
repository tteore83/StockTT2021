/**
 * Défi #2
 * Au chargement de la page, l'utilisateur rentre son âge dans un prompteur :
 * s’il a plus de 18 ans, alors écrire sur la page web « Tu es majeur. », sinon « Tu es mineur. »
 */

window.onload = function() {
    let age = Number(prompt("Ton âge ?"));
    let p = document.createElement('p');

    if (age >= 18) {
        p.innerText = 'Tu es majeur';
    }
    else {
        p.innerText = 'Tu es mineur';
    }

    document.querySelector('body').append(p);
}
