<?php
if (!isset($_SESSION))
	session_start();

setlocale(LC_ALL, 'pt_BR', 'pt_BR.utf-8', 'pt_BR.utf-8', 'portuguese');
date_default_timezone_set('America/Sao_Paulo');
ini_set( 'default_charset', 'utf-8' );
ini_set( 'mbstring.http_output', 'utf-8' );
ini_set( 'mbstring.internal_encoding', 'utf-8' );

include_once "_commons/_php/global-variables.php";
include_once "_commons/_php/current-page-url.php";
?>
