<!-- 
    Online Pizza 
    Filename: Connectdb.php

    Author: Chatsuda Rattarasan   
	Date:  DEC 11 2017 -->
	
<?php 
 	$dbhost = "localhost";	//database server address
	$dbuser = "OnlinePizza";		//username
	$dbpass = "OnlinePizza";		//password
	$dbname = "OnlinePizza";		//database name
	
	global $dbh;
	try {
		$dbh = new PDO('mysql:host=localhost;dbname=OnlinePizza', $dbuser, $dbpass);
		// foreach($dbh->query('SELECT * from Client') as $row) {
		// 	print_r($row);
		// }
		// $dbh = null;
	} catch (PDOException $e) {
		print "Error!: " . $e->getMessage() . "<br/>";
		die();
	}

	
?>