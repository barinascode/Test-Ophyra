<?php

namespace App\Http\Controllers;

use Validator;
use Illuminate\Http\Request;
use App\Models\Products;

class ProductsController extends Controller
{

    public function index()
    {   
        return Products::paginate(5);
    }

    public function find($id)
    {   
        $product = Products::find($id);
        if(!$product) return response()->noContent(404);
        return $product;
    }


    public function upsert(Request $request)
    {   
        $req = $request->all();

        Products::updateOrCreate(
        [
            "id"=> $req['id']
        ],
        [   
            "id"=> $req['id'],
            "title"=> $req['title'],
            "description"=> $req['description'],
            "price"=> $req['price'],
            "image"=> $req['image'],
        ]
    );

        return response()->noContent(201);
    }

    public function delete($id)
    {   
        $product = Products::find($id);
            if(!$product) return response()->noContent(404);
        
        Products::where('id','=',$id)->delete();
        return response()->noContent(200);
    }
}
