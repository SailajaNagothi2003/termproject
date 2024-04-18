<?php 
    header('Access-Control-Allow-Origin: *');
     
    $conn = new mysqli("localhost","root","","reactjs");
     
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
        i$d=$_POST['id'];
        $title = $_POST['title'];
        $des = $_POST['des'];
        $domain = $_POST['domain'];
        $mentor = $_POST['mentor'];
        $sem = $_POST['sem'];
        $type=$_POST['type'];
        $members=$_POST['members'];
        $file=$_POST['file'];
        
         
        $sql = "INSERT INTO project_1 VALUES('$id',$title','$des','$domain','$mentor','$type','$members','$file','$sem')";
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