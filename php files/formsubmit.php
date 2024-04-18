<?php 
    header('Access-Control-Allow-Origin: *');
     
    $conn = new mysqli("localhost","root","","reactjs");
     
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
        $name = $_POST['name'];
        $id = $_POST['id'];
        $email = $_POST['email'];
        $branch = $_POST['branch'];
        $year = $_POST['year'];
         
        $sql = "INSERT INTO form(name,id,email,branch,year) VALUES('$name','$id','$email','$branch',' $year');";
        $res = mysqli_query($conn, $sql);
         
        if($res){
            echo "Success!";
        }
        else{
            echo "Error!";
        }
        $conn->close();
    }
?>