/**
 * Jeu du "Plus ou moins"
 * 
 * 
 * Demander à un utilisateur un nombre.
 * Comparer ce nombre à un nombre choisi aléatoirement par le programme.
 * Selon la différence entre les deux nombres, afficher un message afin de le guider :
 *  - "Ton nombre est trop grand"
 *  - "Ton nombre est trop petit"
 *
 * Si celui-ci, trouve le bon nombre, afficher un message de succès !
 */

// Génère un nombre aléatoire entre 1 et 100
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

// Permet de retenir le nombre du joueur
let response = 0;

do {
    if (response === 0 || isNaN(response)) {
        // Demande au joueur un  nombre
        response = Number(prompt('#1 Choisis un nombre entre 1 et 100'));
        // console.log(response);
    }
    else {
        // Si le nombre est plus petit...
        if (response < randomNumber) {
            document.write('<p>Le nombre à trouver est plus grand...</p>');
            // document.write('<img src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png" alt="Fleur">');
        }

        // Si le nombre est plus grand...
        else if (response > randomNumber) {
            document.write('<p>Le nombre à trouver est plus petit...</p>');
        }

        response = Number(prompt('#2 Choisis un nombre entre 1 et 100'));
    }
} while(response !== randomNumber);

document.write('Tu as gagné !');
if (confirm('Bravo, tu as gagné ! Veux-tu rejouer ?')) {
    // Recharge la page en cours
    location.reload();
}