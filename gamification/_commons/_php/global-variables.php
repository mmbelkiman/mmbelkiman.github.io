<?php

$port = "7777";
//$port = "8055";
//$port = "";

$path = $_SERVER['SCRIPT_FILENAME'];
$path_parts = pathinfo($path);
$_SESSION["PATH_SERVER"] = $path_parts['dirname'];

//Homolog or local
$path = $_SERVER['SERVER_NAME'] . ":" . $port . "/cv-marcelobelkiman/gamification";
//Server
//$path = $_SERVER['SERVER_NAME'];

$_SESSION["LINK_SERVER"] = $path;

//RUN IN HOMOLOG?
//$pos = strpos($_SESSION["LINK_SERVER"], "org") + 3;
//$_SESSION["LINK_SERVER"] = substr($_SESSION["LINK_SERVER"], 0, $pos) . ":" .$port . substr($_SESSION["LINK_SERVER"], $pos);
?>