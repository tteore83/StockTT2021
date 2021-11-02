<?php


function connexion() {
//Tentative de connexion :
	try{
		$host = 'mysql:host=localhost;dbname=sql_1';
		$username = 'root';
		$password = '';
		$options = array(
			PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8", /*Charset utf8 pour qu'on ait le même jeu de caractère entre le HTML et PDO */
			PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC , /*Mode par défaut des données qu'on reçoit : tableaux associatif*/
			PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING /*Si une erreur se produit, on aimerait bien que le pdo nous la signale */
		);
		$pdo = new PDO($host, $username, $password, $options); //Connexion
		return $pdo;
	}
	
	catch (PDOException $e)
	{
		die('<p>Une erreur est détectée : ' .$e->getMessage() . '</p>'); //On récupère le signalement de l'erreur.
	}
}

function deconnexion(){
	global $pdo, $requete;
	$pdo = null;
	$requete = null;
	return '<p>Deconnexion effectuée </p>';
}

//Afficher un seul étudiant :
function readItem($login) {
	global $pdo;
	$sql = "SELECT * FROM `etudiants` WHERE `Prenom`='$login'";
	$requete = $pdo->query($sql);
	$data = $requete->fetch();
	if ($data == null) {
		return '<p class="errorlog">Cet utilisateur n\'existe pas dans notre base de données</p>';
		}
	else {
		return '<p>Bonjour '.$data['Prenom'].', votre nom est : </p>
				<p>'.$data['Nom'].'</p>';
		}
}

//Afficher tous les étudiants :
function readAll() {
	global $pdo;
	$screen = "";
	$sql = "SELECT * FROM `etudiants`";
	$requete = $pdo->query($sql);
	$datas = $requete->fetchAll();
	$screen = $screen.'<table>';
	foreach ($datas as $data) {
		$screen = $screen.'<tr>
			<td>'.$data["ID"].'</td>
			<td>'.$data["Nom"].'</td>
			<td>'.$data["Prenom"].'</td>
			<td>'.$data["Age"].'</td>
			<td>'.$data["Ville"].'</td>
			<td>'.$data["Arriverle"].'</td>
		<tr>';
	}
	$screen = $screen.'</table>';
	return $screen;
}

//Ajouter un étudiant :
function addItem($nom, $prenom, $ville, $age, $sexe, $arriverle) {
	global $pdo;
	$sql = "INSERT INTO `etudiants`(`Nom`, `Prenom`, `Sexe`, `Ville`, `Age`, `Arriverle`) VALUES (:nom, :prenom, :sexe, :ville, :age, :arriverle)";
	$requete = $pdo->prepare($sql);
	$requete->bindValue(':nom', $nom, PDO::PARAM_STR);
	$requete->bindValue(':prenom', $prenom, PDO::PARAM_STR);
	$requete->bindValue(':sexe', $sexe, PDO::PARAM_STR);
	$requete->bindValue(':ville', $ville, PDO::PARAM_STR);
	$requete->bindValue(':age', $age, PDO::PARAM_INT);
	$requete->bindValue(':arriverle', $arriverle, PDO::PARAM_STR);

	// $sql = "INSERT INTO `etudiants`(`Nom`, `Prenom`, `Sexe`, `Ville`, `Age`, `Arriverle`) VALUES (?, ?, ?, ?, ?, ?)";
	// $requete = $pdo->prepare($sql);
	// $requete->bindParam(1, $nom, PDO::PARAM_STR);
	// $requete->bindParam(2, $prenom, PDO::PARAM_STR);
	// $requete->bindParam(3, $sexe, PDO::PARAM_STR);
	// $requete->bindParam(4, $ville, PDO::PARAM_STR);
	// $requete->bindParam(5, $age, PDO::PARAM_INT);
	// $requete->bindParam(6, $arriverle, PDO::PARAM_STR);

	$requete->execute();
	return "<p>Insertion effectuée</p>";
}

//Modifier un étudiant :
function updateItem($nom, $prenom, $ville, $age, $sexe, $arriverle) {
	global $pdo;
	$sql = "UPDATE `etudiants` SET `Nom`=:nom,`Prenom`=:prenom,`Sexe`=:sexe,`Ville`=:ville,`Age`=:age,`Arriverle`=:arriverle WHERE Nom=:nom AND Prenom=:prenom";
	$requete = $pdo->prepare($sql);
	$requete->bindValue(':nom', $nom, PDO::PARAM_STR);
	$requete->bindValue(':prenom', $prenom, PDO::PARAM_STR);
	$requete->bindValue(':sexe', $sexe, PDO::PARAM_STR);
	$requete->bindValue(':ville', $ville, PDO::PARAM_STR);
	$requete->bindValue(':age', $age, PDO::PARAM_INT);
	$requete->bindValue(':arriverle', $arriverle, PDO::PARAM_STR);
	$requete->execute();
	return "<p>Mise à jour effectuée</p>";
}

//Supprimer un étudiant :
function delItem($nom, $prenom) {
	global $pdo;
	$sql = "DELETE FROM `etudiants` WHERE Nom=:nom AND Prenom=:prenom;";
	$requete = $pdo->prepare($sql);
	$requete->bindValue(':nom', $nom, PDO::PARAM_STR);
	$requete->bindValue(':prenom', $prenom, PDO::PARAM_STR);
	$requete->execute();
	return "<p>Suppression effectuée</p>";
}

$pdo = connexion();
echo (is_object($pdo)==true)? '<p>Connexion établie</p>' : connexion();
// echo readItem("Sylvie");
// echo readAll();
// echo addItem("Chahbouni2", "Brahim2", "Auxerre", "35", "Homme", "2021-10-12");
// echo delItem("Chahbouni2", "Brahim2");
// echo updateItem("Chahbouni2", "Brahim2", "Lyon", "35", "Homme", "2021-10-12");



?>