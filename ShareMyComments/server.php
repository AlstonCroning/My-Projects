<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>ShareComments</title>
    <link type="text/css" rel="stylesheet" href="styles.css" />
</head>

<body>

<?php
$link = mysqli_connect("localhost","root","a1xcr0nge","sampledatabase");
$rows = "";
if(mysqli_connect_error()){
    die("couldn't connect to Database");
}
?>

<header>Share Your Comments Here</header>


<div id="wrapper">
    <form method="post" action="<?php $_SERVER['PHP_SELF'];?>">

        Comment Here<br />
        <textarea id="inputComment" name="inputComment1" cols="30" rows="2" autofocus ></textarea>
        <input type="submit" id="submitButton" /><br />

        <textarea id="displayComment" name="displayComment1" cols="50" rows="10" disabled ></textarea><br />

    </form>
</div>


<footer>Copyright &copy All Rights reserved for Alston Croning</footer>



<?php
$comment = $_POST['inputComment1'];
if($comment != ""){
    $query = "INSERT INTO `users` (`name`,`email`) VALUES ('hello','$comment')";
    mysqli_query($link, $query);
    /*
            if($result = mysqli_query($link,$query)) {
                while($rows = mysqli_fetch_array($result)) {
                    //print_r($rows);
                }
            }*/

//print $comment;
}
?>


<script src="JavaScript.js"></script>
</body>

</html>