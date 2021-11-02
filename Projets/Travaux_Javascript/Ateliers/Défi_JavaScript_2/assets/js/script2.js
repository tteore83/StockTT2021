/**
 * Mot de passe aléatoire
 */
window.onload = function(){
    // Écouteur d'événement sur le bouton
    document.querySelector('button').addEventListener('click', randomPassword);
}

function randomPassword() {
    let min = 8;
    let max = 16;
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/*-+$*ù';

    // Math.random génère un aléatoire entre 0 et 0.99
    // Il sera multiplié par la différence entre "max" et "min".
    // Ainsi, Math.random() donne un nombre aléatoire compris entre 0 et 0.8
    let maxLoop = Math.floor(Math.random() * (max - min + 1) + min);
    let password = '';

    for (let index = 0; index < maxLoop; index++) {
        // Génère un nombre aléatoire pas plus grand que 
        // le nombre de caractères compris dans la chaîne "chars"
        let random = Math.floor(Math.random() * chars.length);

        // Retourne un caractère de "chars" selon un indice de début et de fin.
        password += chars.substring(random, random + 1);
    }

    document.querySelector('p').innerText = password;
}