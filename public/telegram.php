<?php
$token = "6313225012:AAF-lWBd2E42ZMS6Um2-l6Y2ynLIOPx1EAI";
$chat_id = "-411094732";

$test_telgram_masege ='тестовый  отправка сообшения '

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$test_telgram_masege}","r");

if ($sendToTelegram) {
 echo " gooot";
} else {
  echo "Error";
}
?>

<?php

/* https://api.telegram.org/bot6313225012:AAF-lWBd2E42ZMS6Um2-l6Y2ynLIOPx1EAI/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

// $name = $_POST['user_name'];
// $phone = $_POST['user_phone'];
// $email = $_POST['user_email'];
// $arr = array(
//   'Имя пользователя: ' => $name,
//   'Телефон: ' => $phone,
//   'Email' => $email
// );
?>
