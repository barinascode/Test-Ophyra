<?php

namespace App\Http\Controllers;

use App\Helpers\General;
use App\Models\Content;
use App\Models\Ficheros;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class UploaderController extends Controller
{
    
    public function postContentFile(Request $request){

        // Obtener la extension del archivo
        $ext = pathinfo($_FILES['uri']['name'], PATHINFO_EXTENSION);

        // Nuevo nombre del archivo subido
        $filename =  time().'.'.$ext;


        // Check file size
        if ($_FILES["uri"]["size"] > 1000000000)
            return [ 'error' => 'El archivo es mayor a 1GB' ];


        // Check if $uploadOk is set to 0 by an error
        if (
            !move_uploaded_file(
                $_FILES['uri']['tmp_name'], 
                public_path().'/products/'.$filename)
            ) return [ 'error' => 'Ocurrio un error al mover el archivo' ];
        
        // Moviendo archivo
        
            return [
                "message" => "Transmicion satisfactoria",
                "file_name" => $filename,
                "ext"=>$ext
            ];
    }
}