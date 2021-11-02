/**
 * Défi #1
 * Au chargement de la page, l'utilisateur est invité à saisir son nom et son prénom dans une boite de dialogue.
 * Afficher dans la page Web le message suivant : « Votre prénom est ... et votre nom est ... ».
 */

window.onload = function() {
    let firstname = prompt("Ton prénom ?");
    let lastname = prompt("Ton nom ?");

    let p = document.createElement('p');
    p.innerText = `Votre prénom est ${firstname} et votre nom ${lastname}`;

    document.querySelector('body').append(p);
}
