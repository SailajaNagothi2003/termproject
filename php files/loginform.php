<?php 
    header('Access-Control-Allow-Origin: *');
     
    $conn = new mysqli("localhost","root","","reactjs");
     
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        $checkemail="SELECT * FROM login where email='$email'";
        $res1 = mysqli_query($conn, $checkemail);
        $count=mysqli_num_rows($res1);
        $checkuser="SELECT * FROM login where name='$name'";
        $res2 = mysqli_query($conn, $checkuser);
        $count1=mysqli_num_rows($res2);
        if($count>0)
        {
            echo("Email Already exists");
        }
        elseif($count1>0)
        {
            echo("UserName Already exists");
        }
        else
        {
        $sql = "INSERT INTO login(name,email,password) VALUES('$name','$email','$password');";
        $res = mysqli_query($conn, $sql);
         
        if($res){
            echo "Success!";
        }
        else{
            echo "Error!";
        }
    }
        $conn->close();
    }
?>