<DOCTYPE html>
 <html lang=”en-US”>
 <head>
 <meta charset=”utf-8">
 </head>
 <body>
    
    <p>
        Hola querid@ alumn@ {{ $name }} :
    </p>  
    <p>Tu cuenta ha sido creada satisfactoriamente y desde ahora puedes iniciar sesion con tus datos de acceso</p>
    <ul>
        <li>Usuario: {{$email}}</li>
        <li>Clave: {{$clave}}</li>
        <li>Link de acceso : <a href="alumnos.fascialmemoryrelease.com">alumnos.fascialmemoryrelease.com</a></li>
    </ul>
    <p>
        <b>Equipo de {{ env('APP_NAME') }}</b>
    </p>
</body>
</html>