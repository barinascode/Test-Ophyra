<DOCTYPE html>
 <html lang=”en-US”>
 <head>
 <meta charset=”utf-8">
 </head>
 <body>

    <h1>Nuevo inicio de sesion</h1>
    <p>Hola {{ $name }}, has iniciado sesion en tu cuenta de {{ env('APP_NAME') }} </p>
    <p>Fecha: {{date('d/m/y H:i:s')}}</p>
    <p>Si no has sido tu, puedes ponerte en contacto con nuestro servicio de soporte técnico:</p>
    <p>
        <b>Equipo de {{ env('APP_NAME') }}</b>
    </p>
</body>
</html>