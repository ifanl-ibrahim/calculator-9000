<?php
    $conn = new PDO("mysql:host=localhost; dbname=calculator", 'root', '');
    $res = $conn->prepare("SELECT * FROM `save`");
    $res->execute();

    $result = $res->fetchAll();

    // var_dump($result);

    echo json_encode($result)
?>