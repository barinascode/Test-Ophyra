<DOCTYPE html>
 <html lang=”en-US”>
 <head>
 <meta charset=”utf-8">
 </head>
 <body>
    <h1>{{ env('APP_NAME') }}</h1>   
    <p>Hola querido alumn@ de Escuela de Espalda:</p>
    <p>
        Una vez acabado el curso te ofrezco la posibilidad de tener los apuntes y como novedad, la
        grabación en vídeo de los ejercicios.
    </p>
    <p>
        Están disponibles en el área de alumnos creada para vosotr@s dentro de mi nueva página
        web, llamada www.fascialmemoryrelease.com
    </p>
    
    <ul>
        <li>Usuario: {{$email}}</li>
        <li>Clave: {{$clave}}</li>
    </ul>
    
    <p>
        <b>Equipo de {{ env('APP_NAME') }}</b>
    </p>
</body>
</html>