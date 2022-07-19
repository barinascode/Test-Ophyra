<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\UploaderController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'api'], function($router) {
    
    /* 
        Products management routes 
    */
    Route::get('/products', [ProductsController::class, 'index']);
    Route::put('/products', [ProductsController::class, 'upsert']);
    Route::get('/products/{product_id}', [ProductsController::class, 'find']);
    Route::delete('/products/{product_id}', [ProductsController::class, 'delete']);

    /*
        Upload files management routes 
    */
    Route::post('/postContentFile', [UploaderController::class, 'postContentFile']);

});