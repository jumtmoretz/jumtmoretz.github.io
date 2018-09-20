<?
$host = "localhost";
$user = "root";
$passwd = "apmsetup";

$connect = mysql_connect($host, $user, $passwd) or die ("mysql Server Connection Error");
mysql_select_db('uki',$connect) or die ("DB Connection Error");
?>