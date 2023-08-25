<?php


ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
$message = "";
if ( $method === 'POST' ) {

    print_r($_POST) ;

	$project_name = trim($_POST["project_name"]);
	$admin_email  = trim($_POST["admin_email"]);
	$form_subject = trim($_POST["form_subject"]);

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message = "Номер телефона : $value ";
		}
	}
    $message = $message."Имя: " . $_POST["name"];
} else if ( $method === 'GET' ) {

	$project_name = trim($_GET["project_name"]);
	$admin_email  = trim($_GET["admin_email"]);
	$form_subject = trim($_GET["form_subject"]);

	foreach ( $_GET as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message = "Пользователь с e-mail $value подписался на рассылку";
		}
	}
}


function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "Отправлено с $project_name
От кого: $value
Кому: $admin_email";

mail($admin_email, adopt($form_subject), $headers,  $message );


