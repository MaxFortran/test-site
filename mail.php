<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$date = $_POST['user_date'];
$comment = $_POST['user_comment'];


$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';  																							
$mail->SMTPAuth = true;
$mail->Username = '8noreplay8@gmail.com';
$mail->Password = '[kt,bcfkjrjk,fcf';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('8noreplay8@gmail.com', 'Васильев Максим');
$mail->addAddress('agrokip@yandex.ru');

$mail->isHTML(true);

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$name . ' оставил заявку на сайте <br>Телефон: ' .$phone. '<br>Указанная дата приема: ' .$date. '<br><p>Комментарий:</p>'.$comment;
$mail->AltBody = '';

if(!$mail->send()) {
    $message = 'Ошибка отправки!';
} else {
    $message = 'Заявка отправлена';
}

$response = ['message' => $message];
echo json_encode($response);
?>