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
        background-color:floralwhite;
    }
    .line {
            border-radius: 40px solid  #d1deec ;
            margin-top: 5px;
            width: 100%;
        }
.output{
border: solid 3px black;
border-radius: 15px;
background-color:lightcyan;
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
    margin-top: 20%;
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
    margin-left: 30%;
    size: 40px;
}

</style>
<body >
    <div >
        <div><img src="college logo.png" alt="logo" width="1500" height="150"></div>
        
                            
                                <form action="" method="GET">
                                    <div class="input-group mb-3">
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
                                        $query = "SELECT * FROM project WHERE CONCAT(id) LIKE '%$filtervalues%' ";
                                     
                                        $query_run = mysqli_query($con, $query);

                                        if(mysqli_num_rows($query_run) > 0)
                                        {
                                            foreach($query_run as $items)
                                            {
                                                ?>
                                                 <div class="output">
                                                <h1><br></h1>
                                                <h2>ID : &nbsp;&nbsp;<?= $items['id']; ?></h2>
                                                    <h2>Project Title : &nbsp;&nbsp;<?= $items['title']; ?></h2>
                                                    <h2>Project Description : &nbsp;&nbsp;<?= $items['des']; ?></h2>
                                                    <h2>Project Domain : &nbsp;&nbsp;<?= $items['domain']; ?></h2>
                                                    <h2>Mentor : &nbsp;&nbsp;<?= $items['mentor']; ?></h2>
                                                    <h2>Semseter : &nbsp;&nbsp;<?= $items['sem']; ?></h2>
                                                    <h2>Type of Project : &nbsp;&nbsp;<?= $items['type']; ?></h2>
                                                    <h2>Team members : &nbsp;&nbsp;<?= $items['members']; ?></h2>
                                                    <h2>Project related file : &nbsp;&nbsp;<a href="<?= $items['file']; ?>">Click Here</a></h2>
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