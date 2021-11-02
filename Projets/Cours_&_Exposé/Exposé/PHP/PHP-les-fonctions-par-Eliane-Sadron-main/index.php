<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php
/*******************************************************************************
*********************  creer sa fonction // LA PARAMETRER **********************
********************************************************************************/







//********************* Demo1 : Fonction FAIRE UNE ACTION **********************
?>


<?php
    // $nom = 'Roger';
    // echo 'Bonjour, ' . $nom . ' !<br />';

    // $nom = 'Pierre';
    // echo 'Bonjour, ' . $nom . ' !<br />';

    // $nom = 'Leon';
    // echo 'Bonjour, ' . $nom . ' !<br />';


     // ***Ecrivons plutôt*** :
     function DireBonjour($nom)
     {
         echo 'Bonjour ' . $nom . ' !<br />';
     }
 
     //instructions / passage d'argument
     DireBonjour('Roger');
     DireBonjour('Leon');
     DireBonjour('Paul');
     DireBonjour('Fritz');
     DireBonjour('Berlioz');
     DireBonjour('Bianca');
?>



<?php

$prenom = 'Pierre';
$x = 4;
$y = 5;
function bonjour($p){
    echo 'Bonjour ' .$p. '<br>';
}
function addition($p1, $p2){
    echo $p1. ' + ' .$p2. ' = ' .($p1 + $p2). '<br>';
}
bonjour($prenom);
bonjour('Mathilde');
addition($x, $y);
addition(1, 1);
   
?>


<?php
//*********************** Demo : Fonction RENVOIE UNE VALEUR *********************
?>

<?php

// Calcul du volume d'un cône de rayon 5 et de hauteur 2
    // $volume = 5 * 5 * 3.14 * 2 * (1/3);
    // echo 'Le volume du cône de rayon 5 et de hauteur 2 est : ' . $volume . ' cm<sup>3</sup><br />';

// Calcul du volume d'un cône de rayon 3 et de hauteur 4
// $volume = 3 * 3 * 3.14 * 4 * (1/3);
// echo 'Le volume du cône de rayon 3 et de hauteur 4 est : ' . $volume . ' cm<sup>3</sup><br />';
?>

<?php
    // Ci-dessous, créer une fonction qui calcule le volume du cône
    function VolumeCone($rayon, $hauteur)
    {
    $volume = $rayon * $rayon * 3.14 * $hauteur * (1/3); // calcul du volume
    return $volume; // indique la valeur à renvoyer, ici le volume
    }

    $volume = VolumeCone(3, 1);
    echo 'Le volume d\'un cône de rayon 3 et de hauteur 1 est de ' . $volume . '</br>';
    $volume = VolumeCone(7, 3);
    echo 'Le volume d\'un cône de rayon 7 et de hauteur 3 est de ' . $volume;
?>

</body>
</html>