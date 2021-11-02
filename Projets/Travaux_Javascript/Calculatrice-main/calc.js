/**
 * Calculatrice basique
 */

// 1er argument : message; 2ème argument (optionnel) : valeur par défaut
let number1 = Number(prompt('Premier nombre à calculer', '0'));
let number2 = Number(prompt('Deuxième nombre à calculer', '0'));
let operator = prompt('Type opération (+, -, /, *, %)');

// Contiendra le résultat de l'opération
let result = null;

/**
 * ==  : Egalité de valeur
 * === : Égalité de valeur et de type
 * 
 * (34 == "34") c'est vrai
 * (34 === "34") c'est faux car les types ne sont pas les mêmes
 * 
 */
if (operator === '+') {
    result = number1 + number2;
}
else if (operator === '-') {
    result = number1 - number2;
}
else if (operator === '/') {
    // Si le deuxième nombre est un zéro, alors erreur
    if (number2 === 0) {
        console.error('Pas de division par zéro');
    }
    // Sinon, je divise
    else {
        result = number1 / number2;
    }
}
else if (operator === '*') {
    result = number1 * number2;
}
else if (operator === '%') {
    result = number1 % number2;
}
else {
    console.error('Je ne connais pas cet opérateur');
}

/**
 * Concaténation :
 * assembler deux ou plusieurs chaînes de caractères ensemble
 */

/**
 * != (différent), vérifie que la valeur
 * !== (strictement différent), vérifie la valeur et le type
 */

// isNan() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/isNaN
if (result === null || (isNaN(result) === true)) {
    console.error('Une erreur est arrivée durant le calcul');
}
else {
    console.info('Résultat de mon opération : ' + result);
} 

 