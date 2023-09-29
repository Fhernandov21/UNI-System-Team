<?php

if(empty($_POST["usuario"])){
    die("Escriba su nombre de usuario");
}


if(strlen($_POST["pass"])<8){
    die("La contraseña debe tener 8 caracteres como mínimo");
}

if(! preg_match("/[a-z]/", $_POST["pass"])){
    die("La contraseña debe tener por lo menos una letra");
}

if(! preg_match("/[0-9]/", $_POST["pass"])){
    die("La contraseña debe tener por lo menos un número");
}


if($_POST["pass"] != $_POST["passcon"]){
    die("Las contraseñas no coinciden");
}

$passHash = password_hash($_POST["pass"], PASSWORD_DEFAULT);

print_r($_POST);
var_dump($passHash);

?>