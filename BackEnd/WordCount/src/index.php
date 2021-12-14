<?php
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json");
require('functions.inc.php');

$output = array(
	"error" => false,
	"errorMessage" => "",
	"string" => "",
	"answer" => 0
);
$t = $_REQUEST['input'];
$answer=wordcount($t);
if($t === ""){
	$output['error'] = true;
	$output['errorMessage'] = "no value entered";
} else {
	$output['string']="Contains ".$answer." words";
    $output['answer']=$answer;
}


echo json_encode($output);
exit();
