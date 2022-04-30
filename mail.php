<?php

use PHPMailer\PHPMailer\PHPMailer;

require 'vendor/autoload.php';


    try {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            //recibir valores
            $nombre = $_POST['nombre'];
            $correo = $_POST['correo'];
            $descripcion = $_POST['mensaje'];

            $correo = filter_var($correo, FILTER_VALIDATE_EMAIL);//verificar correo

            if ($nombre === '' or $descripcion ==='' or $correo === '') {
                echo "Valores completos por favor";
            } else {
                $mail = new PHPMailer(true);
                //configurar SMTP o Host
                $mail ->isSMTP();
                $mail ->Host= 'smtp.gmail.com';
                $mail ->SMTPAuth = true;
                $mail ->Username = 'portafoliojuanchis@gmail.com';
                $mail ->Password= 'FolioPortChis';
                $mail ->SMTPSecure = 'tls';
                $mail ->Port=587;
    

                //configurar el contenido del correo
                $mail ->setFrom('portafoliojuanchis@gmail.com', "Portafolio.com");
                $mail ->addAddress('juancaom12@gmail.com');
                $mail ->Subject = "Tienes un nuevo mensaje";

                //Habilitar HTML
                $mail->isHtml(true);
                $mail->CharSet = 'UTF-8';
                $mail->Subjec = "Mensaje de tu portafolio";
                //definir el contenido
                $contenido = "<html>
                <p>Mensaje de la siguiente persona: ${nombre}</p>
                <p>${descripcion}</p>
                <p>${correo}</p>
            </html>";
                $mail->Body=$contenido;

                //Enviar el correo
                if ($mail->send()) {
                    echo "Se envio";
                } else {
                    echo "No se envio";
                    echo $mail->ErrorInfo;
                }
            }
        }
    } catch (Exception $e) {
        echo $e;
    }


header("Location: index.html");
?>

<script src="build/js/main.js"></script>