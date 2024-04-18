<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<style>
    body{
        background-color: #d1deec;
    }
    .line {
            border-radius: 40px solid  #d1deec ;
            margin-top: 5px;
            width: 100%;
        }
.output{
border: solid 2px navy;
border-radius: 15px;
background-color:white;
color:darkblue;
text-align: left;
margin-left: 15%;
margin-right: 15%;
}
.norecord{
border: solid 5px purple;
border-radius: 15px;
color:black;
background-color: white;
font-size: 25px;
text-align: center;
}
h2{
    padding-left: 10%;
}
.searchbar{
    width: 100%;
    padding: 15px 0px 50px 25%;
}
.logoBox{
    width: 7%;
}
.logoBox img{
    width: 50px;
    border-radius: 50%;
}
img{
    position:fixed;
    display: grid;
}
.searchpos{

    margin-top: 15%;
    size: 40px;
}
button
{
    margin-top: -17%;
    margin-left: 80%;
    height: 47px;
    width: 120px;
}
input{
    height: 50px;
    border-radius: 50px;
    margin-left: 5%;

}

</style>
<body >
<div >
<div><img src="college logo.png" alt="logo" width="1500" height="150"></div>
<div class="container">
        <div class="row">
            <div class="col-md-12">
            <div class="searchbar">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <form action="" method="GET">
                                    <div>
                                      <p><br><br><br><br><br><br><br><br></p>
                                        <input type="text" name="search" required value="<?php if(isset($_GET['search'])){echo $_GET['search']; } ?>" class="form-control" placeholder="Search data">
                                        <button type="submit" class="btn btn-primary">Search</button>
                                       
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                                <?php 
                                    $con = mysqli_connect("localhost","root","","reactjs");

                                    if(isset($_GET['search']))
                                    {
                                        $filtervalues = $_GET['search'];
                                        $query = "SELECT * FROM project WHERE CONCAT(mentor) LIKE '%$filtervalues%' ";
                                     
                                        $query_run = mysqli_query($con, $query);

                                        if(mysqli_num_rows($query_run) > 0)
                                        {
                                            foreach($query_run as $items)
                                            {
                                                ?>
                                                 <div class="output">
                                                 <h1><br></h1>
                                                <h2>ID : &nbsp;&nbsp;<?= $items['id']; ?></h2>
                                                    <h2><b>Project Title : &nbsp;&nbsp;</b><?= $items['title']; ?></h2>
                                                    <h2><b>Project Description : &nbsp;&nbsp;</b><?= $items['des']; ?></h2>
                                                    <h2><b>Project Domain : &nbsp;&nbsp;</b><?= $items['domain']; ?></h2>
                                                    <h2><b>Mentor : &nbsp;&nbsp;</b><?= $items['mentor']; ?></h2>
                                                    <h2><b>Semseter : &nbsp;&nbsp;</b><?= $items['sem']; ?></h2>
                                                    <h2><b>Type of Project : &nbsp;&nbsp;</b><?= $items['type']; ?></h2>
                                                    <h2><b>Team members : &nbsp;&nbsp;</b><?= $items['members']; ?></h2>
                                                    <h2><b>Project related file : &nbsp;&nbsp;</b><a href="<?= $items['file']; ?>">Click Here</a></h2>
                                                    <h1><br></h1>  
                                                </div>
                                                    <h1><br></h1>        
                                            <div class="line"></div>
                                                    
                                                <?php
                                            }  
                                        }
                                        else
                                        {
                                            ?>
                                                  <div class="norecord"> <h1 >No Record Found</h1></div>

                                            <?php
                                        }
                                    }
                                ?>
                </div>
            </div>
        </div>
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>