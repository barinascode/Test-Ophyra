<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Products;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      
        Products::create([
            "id"=>"8c21fac8-b423-4067-a554-d9aa01cf3b50",
            "title"=>"Procesador i7",
            "description"=>"También vendemos componentes para computador en gama baja, media y alta de diferentes marcas (Intel, AMD, Asus, Gigabyte, Msi, EVGA, XFX, Sapphire, Thermaltake, LG, Samsung) como boards, procesadores, memorias, tarjetas de video, discos duros, quemadores de dvd, chasis atx, monitores y demás artículos y accesorios para complementar tu compra. En la sección de preguntas al vendedor puedes consultarnos por la que más se ajuste a tus necesidades.",
            "price"=>650000,
            "image"=>"1658259952.webp",
        ]);

        Products::create([
            "id"=>"e54a0f0d-8103-43a0-a024-c1b77c872fec",
            "title"=>"Combo Board H510m Procesador Intel Core I7 11700 Pc",
            "description"=>"PAGA ARTÍCULOS ADICIONALES (OPCIONAL): Si vas a llevar artículos adicionales haz la compra normalmente y en el detalle de compra podrás añadir el excedente.",
            "price"=>350000,
            "image"=>"1658260197.webp",
        ]);

        Products::create([
            "id"=>"f639262d-d8b3-41e4-b70a-b42d3aa2a6ce",
            "title"=>"Procesador AMD Ryzen 7 5700G 100-100000263BOX de 8 núcleos y 4.6GHz de frecuencia con gráfica integrada",
            "description"=>"Es ideal para jugadores y creadores de contenido que requieran un instrumento de gran ejecución.",
            "price"=>650000,
            "image"=>"1658260299.webp",
        ]);

        Products::create([
            "id"=>"2334a9a2-7671-48f3-9d61-380ca5d8755c",
            "title"=>"Memoria RAM Trident Z RGB gamer color negro 16GB 2 G.Skill F4-3200C16D-16GTZR",
            "description"=>"Si adviertes que tu computadora tiene bajo rendimiento o que su capacidad no se adapta a tus necesidades de uso, es momento de renovar su memoria RAM. Aumentarás su productividad y podrás trabajar de manera rápida y en simultáneo con múltiples aplicaciones.",
            "price"=>300000,
            "image"=>"1658260388.webp",
        ]);

        Products::create([
            "id"=>"c1a7623f-7207-4778-85af-24fe2ab2417e",
            "title"=>"Memoria RAM Fury Beast DDR4 RGB color negro 8GB 1 Kingston KF432C16BBA/8",
            "description"=>"Si tu portatil funciona con lentitud, si un programa no responde o no se carga, lo más probable es que se trate de un problema de memoria. Estos son posibles indicios de un rendimiento defectuoso en el día a día de tus tareas. Por ello, contar con una memoria Kingston -sinónimo de trayectoria y excelencia- mejorará la productividad de tu equipo: las páginas se cargarán más rápido y la ejecución de nuevas aplicaciones resultará más ágil y simple.",
            "price"=>229000,
            "image"=>"1658260440.webp",
        ]);


        Products::create([
            "id"=>"f60e16a3-aa7e-4f36-9380-f9e4f570bd70",
            "title"=>"Nuevo Apple iMac Con Pantalla Retina 5k (27 Pulgadas, 8 Gb D",
            "description"=>"¡Este producto lo podrás encontrar con un descuento en nuestra tienda Online 100% soportada por Mercado Libre como RIVERTECHNOLOGY en Mercado Shops!",
            "price"=>9299000,
            "image"=>"1658266115.webp",
        ]);
       
    }
}

