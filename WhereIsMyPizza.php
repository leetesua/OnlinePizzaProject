<?php
    
    session_start();

    include ('Connectdb.php');

    $orderno = $_POST['OrderNo'];
    echo $orderno;
    $orderno = stripslashes($orderno);
    
    $query = "SELECT OrderNo FROM Orders WHERE OrderNo='$orderno'";

    // search the order no from the db
    $result = $dbh->prepare($query);
    $result->execute();
    $count = $result->rowCount();


    if($count != 1){
        $message = "Incorrect OrderNo.";
        echo "<script type='text/javascript'>alert('$message');window.location.href = 'WhereIsMyPizza.html';</script>";
    }else
    {
        // goto mapview
        include("WhereIsMyPizzaMapView.html");
    }
?>
