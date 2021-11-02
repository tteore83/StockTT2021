window.onload = function(){

//on sélectionne l'input text avec l'ID (#cp) et on lui ajoute un écouteur d'évènement 'input' qui enclenchera une fonction
document.querySelector('#cp').addEventListener('input', function(){
    
    //écriture de la fonction qui, si la longeur de la valeur input est égale à 5, envoye un requête à l'API qui à pour variable 'this.value'(=valeur de l'input)
    if(this.value.length == 5){

        //attention!!! pour pouvoir intégrer une variable dans l'url, il faut remplacer les '' par `` et intégrer notre variable comme ceci ${variable}
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,codesPostaux,population&format=json&geometry=centre`;
    

        //fetch va communiquer avec l'API par l'intermediaire de l'URL
        fetch(url)

        //on récupère une promesse en réponse et on va devoir traiter la réponse de cette requête
        //on va demander à ce que le format de cette réponse soit du json
        .then(response => response.json())

        //le traitement de la réponse ci-dessus nous envoye une nouvelle promesse et on fait un .then pour récupérer les résultats(data) de cette promesse
        .then(data => 
            {
                console.log(data);
                //création d'une liste à puce sous forme de variable ('affichage')pour afficher les résultats. on ouvre une balise <ul>
                let affichage = '<ul>';
                //boucle pour aller chercher les différentes villes dans le tableau
                for(let ville of data){
                    //on ajoute à affichage autant de <li> que l'on a de résultat.
                    // <li> dans laquelle on place le nom de la ville et sa population
                    affichage += `<li><strong>${ville.nom}</strong>- ${ville.population} habitants</li>`;
                }
                //on ferme la liste à puce </ul>
                affichage += '</ul>';

                //on ajoute la liste ('affichage') sur la page, dans la div ayant comme ID #ville
                document.querySelector('#villes').innerHTML = affichage;
            })

        //traitement de la requête si elle n'a pas aboutie
        //ici on affiche une alerte avec le motif d'erreur     
        .catch(error => alert('Erreur:'+ error));
}
});
}