<?php
//Twitter: @johntroony
//Github: JohnTroony

//confirm the link contains the right id and open the webpage saved as main.jpg
$id = $_GET["code"];
if ($id == "Black_Panther") {
      $myFile = "main.jpg";
      $fh = fopen($myFile, 'r');
      $theData = fread($fh, 500000);
      fclose($fh);
      echo $theData;
}

//if url contains diffrent id content then open webpage saved as fake.jpg
else{
     $myFile1 = "fake.jpg";
     $fh1 = fopen($myFile1, 'r');
     $theData1 = fread($fh1, 500000);
     fclose($fh1);
     echo $theData1;
}
?>
