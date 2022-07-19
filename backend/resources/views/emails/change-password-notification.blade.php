<DOCTYPE html>
 <html lang=”en-US”>
 <head>
 <meta charset=”utf-8">
 </head>
 <body>
    <h1>Restablecer cuenta</h1>
    <p>Fecha: {{date('d/m/y H:i:s')}}</p>
    <p>Hola {{$name}} tu clave ha sido cambiada satisfactoriamente</p>
    <span>Si no has sido tu, puedes ponerte en contacto con nuestro servicio de soporte técnico:</span>
    
    <br/>
    <p>
        <b>Equipo de {{ env('APP_NAME') }}</b>
    </p>
</body>
</html>