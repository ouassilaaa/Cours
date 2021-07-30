<?php
  header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    //récupération du json
    $data = json_decode(file_get_contents("php://input"));


//création des variables
$name = $_POST['name_user'];
$first_name = $_POST['first_name_user'];
$login = $_POST['login_user'];
$mdp = $_POST['mdp_user'];

//hashe le mot de passe en md5
$mdp = md5($mdp);
?>