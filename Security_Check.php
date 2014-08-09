<?php
//Twitter: @johntroony
//Github: JohnTroony

//assign variable
$id = $_GET["code"];

//logical test 
if ($id == "FaceBook") {
      $myFile = "main.jpg";
      $fh = fopen($myFile, 'r');
      $theData = fread($fh, 500000);
      fclose($fh);
      echo $theData;
}

//when logical test fail
else{
     $myFile1 = "fake.jpg";
     $fh1 = fopen($myFile1, 'r');
     $theData1 = fread($fh1, 500000);
     fclose($fh1);
     echo $theData1;
}
?>
