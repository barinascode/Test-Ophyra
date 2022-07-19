<DOCTYPE html>
 <html lang=”en-US”>
 <head>
 <meta charset=”utf-8">
 </head>
 <body>
   
    <p>
        Hola querid@ alumn@ {{ $name }} de “Déjate diafragma”:
    </p>

    <p>
    Me alegra haber contado contigo durante este curso.
    </p>

    <p>
    Para que puedas seguir practicando más y mejor, aquí tienes la clave que te dará acceso para
entrar en el área de alumnos de mi página web (<a href="https://www.fascialmemoryrelease.com">https://www.fascialmemoryrelease.com</a> ) y poder
acceder, desde la pestaña de “déjate diafragma” a los apuntes y vídeos de los ejercicios de
clase, para que los descargues y puedas verlos tantas veces como quieras, sin caducidad en el
tiempo.
    </p>
 

    <p>
        Contacta conmigo si tienes problemas para poder visualizarlos y espero que los disfrutes y te hagan mucho bien!
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