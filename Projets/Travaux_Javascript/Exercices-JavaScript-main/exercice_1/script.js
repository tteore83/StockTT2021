/**
 * Exercice 1
 * 
 * Créer un tableau contenant des notes d’étudiants.
 * Les notes sont sur 20, exemple : [4, 14, 20, ...]. Alimenter ce tableau de plusieurs données.
 *
 * 1. Calculer la moyenne des notes.
 * 2. Afficher à l'écran que les notes supérieurs à 10.
 */

/**
 * 1. Calculer la moyenne des notes.
 */

// Tableau de notes
let notes = [19, 12.5, 3, 20, 1, 13, 12, 4.5, 16, 3];
let total = 0;
let moyenne = 0;

for(let i = 0; i < notes.length; i++) {
    // console.log(notes[i]);
    // total += notes[i];
    total = total + notes[i];
}

console.log(total);

// Moyenne des notes
moyenne = total / notes.length;
console.log(moyenne);


/**
 * 2. Afficher à l'écran que les notes supérieurs à 10.
 */
for(let i = 0; i < notes.length; i++) {
    // Vérifie si une note est supérieure à 10
    if (notes[i] > 10) {
        console.log(notes[i]);
    }
}