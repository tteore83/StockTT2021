/**
 * Séquence de Fibonacci
 */

// Attente du DOM
window.onload = function() {
    // Nombres limites de nombres dans la séquence
    let limit = Number(prompt('Combien de nombres dans la séquence ?', 10));

    // Récupère un élément du DOM ayant la classe CSS "sequence"
    let sequenceDOM = document.querySelector('.sequence');

    // Déclaration des variables pour la séquence
    let number1 = 0;
    let number2 = 1;
    let numberNext;

    for(let index = 1; index <= limit; index++) {
        sequenceDOM.innerText += number1;

        // Permet d'afficher une virgule, sauf la dernière
        if (index < limit) {
            sequenceDOM.innerText += ',';
        }

        numberNext = number1 + number2;
        number1 = number2;
        number2 = numberNext;
    }
}