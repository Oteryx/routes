<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/blackroom', [App\Http\Controllers\SpaController::class, 'index'])->name('blackroom');
Route::get('/judges', [App\Http\Controllers\Spa2Controller::class, 'index'])->name('judges');
Route::get('/spots', [App\Http\Controllers\SpotsController::class, 'index'])->name('spots');
