<DOCTYPE html>
 <html lang=”en-US”>
 <head>
 <meta charset=”utf-8">
 </head>
 <body>
    <h1>Restablecer cuenta</h1>
    <p>Fecha: {{date('d/m/y H:i:s')}}</p>
    <p>Hola {{$name}}:</p>
    <p>Hemos recibido una solicitud de restablecimiento de contraseña de tu cuenta</p>
    <p>Usa el codigo que aparece a continuación para cambiar tu contraseña</p>
    <p>Ten en cuenta que este codigo es válido solo durante 24 horas o una vez usado. Una vez transcurrido el plazo, deberás volver a solicitar el restablecimiento de la contraseña. </p>
    
    <span>Codigo de recuperacion:</span>
    <h1>{{ $token }}</h1>
    <br/>
    <p>
        <b>Equipo de {{ env('APP_NAME') }}</b>
    </p>
</body>
</html>