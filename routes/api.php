<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Siswa Routes
Route::get('/siswa', 'SiswaApiController@all');
Route::get('/siswa/{nis}', 'SiswaApiController@show');
Route::post('/tambah_siswa', 'SiswaApiController@store');
Route::put('/editsiswa/{nis}', 'SiswaApiController@update');
Route::delete('/deletesiswa/{nis}', 'SiswaApiController@destroy');

//Nilai Routes
Route::get('/nilai/{nis}', 'NilaiApiController@shownilai');
Route::get('/siswa/{nis}/{semester}', 'NilaiApiController@nilaiSemester');
Route::put('/nilai/{nis}/{kelas}/{semester}/{kode}', 'NilaiApiController@updateNilai');
Route::post('/siswa/{nis}/matpel', 'NilaiApiController@addNullMatpel');

//Matpel Routes
Route::get('/matpel', 'MatpelApiController@index');
Route::get('/matpel/{id}', 'MatpelApiController@show');
Route::post('/matpel/tambah', 'MatpelApiController@store');
Route::put('/matpel/{id}', 'MatpelApiController@update');
Route::delete('/matpel/{id}', 'MatpelApiController@destroy');

//Guru Routes
Route::get('/guru', 'GuruApiController@index');
Route::get('/guru/{id}', 'GuruApiController@show');
Route::post('/guru', 'GuruApiController@store');
Route::put('/guru/{id}', 'GuruApiController@update');
Route::delete('/guru/{id}', 'GuruApiController@destroy');

// Route::get('/editsiswa/{id}', 'SiswaController@edit');
// Route::post('/editsiswa/{id}', 'SiswaController@update');
// Route::get('/shownilai/{id}', 'NilaiController@show');
