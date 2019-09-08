<?php
              
if(isset($_POST['textdata']))
{
$data=$_POST['name'];
$data=$_POST['email'];
$data=$_POST['subject'];


$fp = fopen('data.txt', 'a');
fwrite($fp, $data);
fclose($fp);
}
?>