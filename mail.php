<?php
$reason=$_POST['reason'];
$property_type=$_POST['property_type'];
$timeframe=$_POST['timeframe'];
$occupancy=$_POST['occupancy'];
$rental_income=$_POST['rental_income'];
$months_behind=$_POST['months_behind'];
$addressss=$_POST['addressss'];
$city=$_POST['city'];
$state=$_POST['state'];
$zip=$_POST['zip'];
$price=$_POST['price'];
$listed=$_POST['listed'];
$first_name=$_POST['first_name'];
$last_name=$_POST['last_name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$cell_phone=$_POST['cell_phone'];



$to = 'rocketbuyeronline@gmail.com';
$from = 'noreply@rocketpropertysolution.com';
$fromName = 'Rocket Property Solutions';

$subject = "MOTIVATED SELLER LEAD"; 

$htmlContent = ' 
<html> 
<body> 
<div style="width:650px; margin:50px auto; background:#29387b; padding:20px 20px;" >
<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#fff">
<tr>
<td width="100%" colspan="10" style="flot:left; background:#fff; padding:15px 0 10px 15px; text-align:center; border-bottom:1px solid #ddd;"><img src="http://'.$_SERVER['HTTP_HOST'].'/images/logo.png"  alt=""></td>
</tr>
<tr>
<td style="padding:0px 15px;"><p style="text-align:left; color:#4a4a4a; text-transform:uppercase; font-size:22px; margin:0; padding:10px 0; font-family:Verdana, Geneva, sans-serif; ">
MOTIVATED SELLER LEAD - '.date('d-m-Y').'</p></td>
</tr>

<tr>
<td style="padding:0px 10px;"><p style="text-align:left; color:#4a4a4a; font-size:15px; margin:0; padding:10px 0; font-family:Verdana, Geneva, sans-serif; ">
<span style="font-weight:bold;">Reason for wanting to sell? </span> '.$reason.' </p></td>
</tr>

<tr>
<td style="padding:0px 10px;"><p style="text-align:left; color:#4a4a4a; font-size:15px; margin:0; padding:10px 0; font-family:Verdana, Geneva, sans-serif; ">
<span style="font-weight:bold;"> Property Type? </span> '.$property_type.' </p></td>
</tr>

<tr>
<td style="padding:0px 10px;"><p style="text-align:left; color:#4a4a4a; font-size:15px; margin:0; padding:10px 0; font-family:Verdana, Geneva, sans-serif; ">
<span style="font-weight:bold;"> How soon would you like to sell? </span>'.$timeframe.' </p></td>
</tr>

<tr>
<td style="padding:0px 10px;"><p style="text-align:left; color:#4a4a4a; font-size:15px; margin:0; padding:10px 0; font-family:Verdana, Geneva, sans-serif; ">
<span style="font-weight:bold;"> Occupancy? </span> '.$occupancy.' </p></td>
</tr>

<tr>
<td style="padding:0px 10px;"><p style="text-align:left; color:#4a4a4a; font-size:15px; margin:0; padding:10px 0; font-family:Verdana, Geneva, sans-serif; ">
<span style="font-weight:bold;">Current Monthly Rental Income? </span> '.$rental_income.' </p></td>
</tr>

<tr>
<td style="padding:0px 10px;"><p style="text-align:left; color:#4a4a4a; font-size:15px; margin:0; padding:10px 0; font-family:Verdana, Geneva, sans-serif; ">
<span style="font-weight:bold;"> Behind on mortgage payments? </span> '.$months_behind.' </p></td>
</tr>

<tr>
<td style="padding:0px 10px;"><p style="text-align:left; color:#4a4a4a; font-size:15px; margin:0; padding:10px 0; font-family:Verdana, Geneva, sans-serif; ">
<span style="font-weight:bold;"> Property Address : </span> '.$addressss.' </p></td>
</tr>

<tr>
<td style="padding:0px 10px;"><p style="text-align:left; color:#4a4a4a; font-size:15px; margin:0; padding:10px 0; font-family:Verdana, Geneva, sans-serif; ">
<span style="font-weight:bold;"> City : </span> '.$city.' </p></td>
</tr>

<tr>
<td style="padding:0px 10px;"><p style="text-align:left; color:#4a4a4a; font-size:15px; margin:0; padding:10px 0; font-family:Verdana, Geneva, sans-serif; ">
<span style="font-weight:bold;"> State : </span> '.$state.' </p></td>
</tr>

<tr>
<td style="padding:0px 10px;"><p style="text-align:left; color:#4a4a4a; font-size:15px; margin:0; padding:10px 0; font-family:Verdana, Geneva, sans-serif; ">
<span style="font-weight:bold;"> Zip Code : </span> '.$zip.' </p></td>
</tr>

<tr>
<td style="padding:0px 10px;"><p style="text-align:left; color:#4a4a4a; font-size:15px; margin:0; padding:10px 0; font-family:Verdana, Geneva, sans-serif; ">
<span style="font-weight:bold;"> Estimated Home Value : </span>'.$price.' </p></td>
</tr>

<tr>
<td style="padding:0px 10px;"><p style="text-align:left; color:#4a4a4a; font-size:15px; margin:0; padding:10px 0; font-family:Verdana, Geneva, sans-serif; ">
<span style="font-weight:bold;"> Currently listed with a Realtor? </span> '.$listed.' </p></td>
</tr>

<tr>
<td style="padding:0px 10px;"><p style="text-align:left; color:#4a4a4a; font-size:15px; margin:0; padding:10px 0; font-family:Verdana, Geneva, sans-serif; ">
<span style="font-weight:bold;">First Name : </span> '.$first_name.' </p></td>
</tr>

<tr>
<td style="padding:0px 10px;"><p style="text-align:left; color:#4a4a4a; font-size:15px; margin:0; padding:10px 0; font-family:Verdana, Geneva, sans-serif; ">
<span style="font-weight:bold;"> Last Name : </span> '.$last_name.' </p></td>
</tr>

<tr>
<td style="padding:0px 10px;"><p style="text-align:left; color:#4a4a4a; font-size:15px; margin:0; padding:10px 0; font-family:Verdana, Geneva, sans-serif; ">
<span style="font-weight:bold;"> Email Address : </span> '.$email.' </p></td>
</tr>

<tr>
<td style="padding:0px 10px;"><p style="text-align:left; color:#4a4a4a; font-size:15px; margin:0; padding:10px 0; font-family:Verdana, Geneva, sans-serif; ">
<span style="font-weight:bold;"> Phone Number : </span> '.$phone.' </p></td>
</tr>

<tr>
<td style="padding:0px 10px;"><p style="text-align:left; color:#4a4a4a; font-size:15px; margin:0; padding:10px 0; font-family:Verdana, Geneva, sans-serif; ">
<span style="font-weight:bold;"> Is this a cell phone?  </span> '.$cell_phone.' </p></td>
</tr>

<tr>
<td style="padding:0px 10px;">&nbsp;</td>
</tr>

<tr>

</tr>
<tr>
<td style="background:#386e18; padding:6px 0;">
<p style="color:#fff; font-family:Verdana, Geneva, sans-serif; text-align:center; font-size:12px;"> ©'.date('Y').'. RPS Residential | www.rocketonlinebuyer.realestate | All Rights Reserved</p>
</td>
</tr>
</table>
</div>
</body> 
</html>'; 


$headers = "MIME-Version: 1.0" . "\r\n"; 
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 


$headers .= 'From: '.$fromName.'<'.$from.'>' . "\r\n"; 


if(mail($to, $subject, $htmlContent, $headers)){ 
echo '1'; 
}else{ 
echo '2'; 
}
?>
