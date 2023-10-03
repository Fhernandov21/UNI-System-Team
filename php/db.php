<?php

$host = "localhost";
$dbname = "CNUDamageAssessmentSystem";
$username = "root";
$password = "";

$mysqli = new mysqli($host, $username, $password, $dbname);

if($mysqli->connect_errno){
    die("Error de conexión: " . $mysqli->connect_errno);
}

return $mysqli;