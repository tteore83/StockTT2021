/**
 * Exercice 3
 *
 * 1. Afficher tous les nombres pairs qui sont inférieurs à 20 en commençant par 2 à l’aide de la boucle while.
 * 2. Afficher les 10 premiers entiers et leurs carrés avec la boucle de votre choix.
 * 3. Afficher 5 fois un numéro aléatoire.
 * 4. Afficher les entiers de 2 à 20 hormis le nombre 13.
 */

/**
 * 1. Afficher tous les nombres pairs qui sont inférieurs à 20 en commençant par 2 à l’aide de la boucle while.
 */
let index = 2;
while(index < 20) {
    console.log(index);
    // Ajoute 2 à la valeur d'index à chaque itération
    index += 2; // index = index + 2
}

console.log('---');

/**
 * 2. Afficher les 10 premiers entiers et leurs carrés avec la boucle de votre choix.
 */
for(let index = 1; index < 11; index++) {
    console.log(index +' a pour carré : '+ index*index);
}

console.log('---');

/**
 * 3. Afficher 5 fois un numéro aléatoire.
 */

/* for(let index = 0; index < 5; index++) {
    console.log(Math.floor(Math.random() * 100));
} */

let i = 0;
while(i > 5) {
    console.log(Math.floor(Math.random() * 100));
    i++;
}

console.log('---');

/**
 * 4. Afficher les entiers de 2 à 20 hormis le nombre 13.
 */
let j = 2
while(j < 21) {
    if (j !== 13) {
        console.log(j);
    }
    
    j++;
}