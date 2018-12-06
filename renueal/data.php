<? php
//보내는 이
  $recipient = "justmoretz@naver.com";
//이름 처리
  $subject = '=?UTF-8?B?'.base64_encode($_GET['name']).'?=';
//나이 처리
  $mail_from = '=?UTF-8?B?'.base64_encode($_GET['age']).'?=';
//이메일 처리
  $subject = '=?UTF-8?B?'.base64_encode($_GET['email']).'?=';
//연락처
  $mail_from = '=?UTF-8?B?'.base64_encode($_GET['call']).'?=';
//개설희망 처리
  $subject = '=?UTF-8?B?'.base64_encode($_GET['wantarea']).'?=';
//희망시간
  $mail_from = '=?UTF-8?B?'.base64_encode($_GET['wanttime']).'?=';

//메일내용
  $mail_body = "<table width='600' border='0' cellpadding='0' cellspacing='1' bgcolor='#CCCCCC'>
        <tr> 
          <td width='100' height='30' align='center' bgcolor='#eeeeee'>이름</td>
          <td width='400' bgcolor='#FFFFFF'>". $_GET['name']."</td></tr>".

       " <tr> 
          <td width='100' height='30' align='center' bgcolor='#eeeeee'>나이</td>
          <td width='400' bgcolor='#FFFFFF'>". $_GET['age']."</td></tr>".		
		  
       " <tr> 
          <td width='100' height='30' align='center' bgcolor='#eeeeee'>이메일</td>
          <td width='400' bgcolor='#FFFFFF'>". $_GET['email']."</td></tr>".	
		  
       " <tr> 
          <td width='100' height='30' align='center' bgcolor='#eeeeee'>주소</td>
          <td width='400' bgcolor='#FFFFFF'>". $_GET['add']."</td></tr>".	
 
       " <tr> 
          <td width='100' height='30' align='center' bgcolor='#eeeeee'>연락처</td>
          <td width='400' bgcolor='#FFFFFF'>". $_GET['call']."</td></tr>".	
		  
      " <tr> 
          <td width='100' height='30' align='center' bgcolor='#eeeeee'>개설희망지역</td>
          <td width='400' bgcolor='#FFFFFF'>". $_GET['wantarea']."</td></tr>".	
		  
      " <tr> 
          <td width='100' height='30' align='center' bgcolor='#eeeeee'>희망상담시간</td>
          <td width='400' bgcolor='#FFFFFF'>". $_GET['wanttime']."</td></tr>".	

      "</table>";

 
//메일 발송처리

  $header = "From:$subject\n";
  $header = "Content-Type: text/html;charset=UTF-8";
  $header .= "From : $mail_from <".$mail_from.">\n"; 

 
  $email = mail($recipient, $subject, $mail_body, $header);



  if (!$email)
    echo "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /> <script>
         window.alert('메일 발송이 실패하였습니다. ');
         history.go(-1);
         </script>";
  else
    echo "         <script>
         window.alert('메일이 정상적으로 발송되었습니다.');
         history.go(-1);
         </script>";
?>

