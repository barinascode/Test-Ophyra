<DOCTYPE html>
 <html lang=”en-US”>
 <head>
 <meta charset=”utf-8">
 </head>
 <body>
   
    <p>
        Hola querid@ alumn@ {{ $name }} de Escuela de Espalda:
    </p>

    <p>
    ¡Muchas gracias por tu aportación!
    </p>

    <p>
        Aquí tienes la clave que te dará acceso para entrar a EE dentro del área de alumnos de mi
        página Web ( <a href="https://www.fascialmemoryrelease.com">https://www.fascialmemoryrelease.com</a> ) y poder acceder a ver / descargar los apuntes y
        vídeos de los ejercicios de clase para poder practicarlos más y mejor.
    </p>

    <p>
        Te recomiendo buscar un huequito para tu propia práctica, o bien de un bloque entero cada
        vez, o eligiendo un ejercicio de cada uno de los bloques agrupándolos en una serie.
    </p>

    <p>
        La única contraindicación es no sentir más molestia conforme se van haciendo.
    </p>

    <p>
        Contacta conmigo si tienes problemas para poder visualizarlos.
    </p>

    <p>
        Espero que los disfrutes y te hagan mucho bien!
    </p>

    <ul>
        <li>Usuario: {{$email}}</li>
        <li>Clave: {{$clave}}</li>
        <li>Link de acceso : <a href="alumnos.fascialmemoryrelease.com">alumnos.fascialmemoryrelease.com</a></li>
    </ul>

    <p>
        <b>Equipo de {{ env('APP_NAME') }}</b>
    </p>

    <p>
    Un abrazo y hasta pronto!
    </p>

    <p>
        <b> Amaia </b>
    </p>
</body>
</html>