<?php

class UserTableSeeder extends Seeder {
    public function run() {
        DB::table('users')->delete();
        User::create([
            'username' => 'admin',
            'password' => Hash::make('admin')
        ]);
    }
}