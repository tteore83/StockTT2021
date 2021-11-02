/*Fonction qui me permet de générer seulement un chiffre de la séquence*/

/*function fibonacci(nbr) {

    var n1 = 0;
    var n2 = 1;
    var somme = 0;
  
    for(let i = 2; i <= nbr; i++){
       //somme des deux derniers nombres
       somme = n1 + n2; 
 
       //assigner la dernière valeur à la première
       n1 = n2; 
 
       //attribuer la somme au dernier
       n2 = somme; 
    }
  
    return nbr ? n2 : n1;
 }
 
confirm(fibonacci(8));*/


/*Fonction qui me permet d'afficher un tableau contenant les valeurs de la séquence'*/
/*Ici une fonction simple pour effectuer une itération de la suite de Fibonacci 
dans un tableau à l'aide des arguments dans la 'for' fonction plus que le corps de la boucle:*/

window.onload = function() {
}

var response = prompt("Donnez-moi un chiffre ou un nombre !", "<Donnez-moi un chiffre ou un nombre !>");
if (response > 20) {
    if(confirm('Choisissez un nombre inférieur à vingt')) {
        location.reload();
    }
}

fib = function(numMax){
    for(var fibArray = [response], i=0,j=1,k=0; k<numMax;i=j,j=x,k++){
        x=i+j;
        fibArray.push(x);
    }
confirm(fibArray);
console.log(fibArray);
}

/*J'attribue une valeur au fib afin qu'il puisse m'afficher le nombre total de valeurs dans le tableau, 
ici 10 valeurs*/
fib(response)