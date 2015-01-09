<?php

class UserController extends BaseController {
    public function login(){
       if(Auth::attempt(Input::all())){
           return Response::json(Auth::user());
       } else {
           return Response::json(['flash' => 'Wrong Credentials'], 401);
       }
    }
    public function logout() {
        Auth::logout();
        return Response::json(['flash' => 'You are logged out! I see you soon...']);
    }
}
