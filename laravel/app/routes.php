<?php

Route::post('login', 'UserController@login');
Route::get('logout', 'UserController@logout');

Route::get('/', function(){
    return View::make('index');
});

Route::group(['before' => 'auth'], function(){
    Route::resource('contacts', 'ContactController');
});

