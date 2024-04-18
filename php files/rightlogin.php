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

         //$result = "";
 
            if($email != "" and $password != ""){
                    $sql = "SELECT * FROM login WHERE email='$email';";
                    $res = mysqli_query($conn, $sql);
         
                    if(mysqli_num_rows($res) != 0){
                        $row = mysqli_fetch_array($res);
                        if($password != $row['password']){
                           echo "Invalid password!";
                        }
                        else{
                            echo"Loggedin successfully! Redirecting...";
        <a href="http://localhost:3000/frontend">
                        }
                    }
                    else{
                        echo "Invalid username!";
                    }
                }
                else{
                    echo "";
                }

        $conn -> close();
               // $response[] = array("result" => $result);
               // echo json_encode($response);
    }


/*


        $sql = "SELECT * FROM login WHERE  email ='$email' AND password ='$password'";
        $res = mysqli_query($conn, $sql);
        $count=mysqli_num_rows($res);
        if($count>0){
            echo "Success!";
            <a href="http://localhost:3000/frontend">
        }
        else{
            echo "No Record Found";
        }
        $conn->close();
    }
     
   *? 
?>