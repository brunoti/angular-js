<?php

Route::get('/', function(){
    return View::make('index');

});

Route::resource('contacts', 'ContactController');


