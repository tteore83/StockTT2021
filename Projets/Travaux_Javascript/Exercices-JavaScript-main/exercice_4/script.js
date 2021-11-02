/**
 * Exercice 4
 *
 * Table de multiplications
 */

// Choix de l'utilisateur du nombre de tables
let table = Number(prompt('Combien de tables voulez-vous ?', 10));

// Si le nombre est supérieur à mille
if (table > 1000) {
    // Informe l'utilisateur du problème
    if(confirm('Choisissez un nombre inférieur à mille')) {
        // Recharge la page
        location.reload();
    }
}
else {
    // Ouverture de la table HTML
    document.write('<table border="1">');

    // Génère le nombres de lignes choisis par l'utilisateur
    for(let index = 1; index <= table; index++) {
        // Ouvre une ligne du tableau
        document.write('<tr>');

        // Génère 10 colonnes
        for(let column = 1; column < 11; column++) {
            // Créer une colonne contenant une opération
            document.write('<td>'+ index*column +'</td>');
        }
        
        // Fermeture de la ligne du tableau
        document.write('</tr>');
    }

    document.write('</table>');
}
