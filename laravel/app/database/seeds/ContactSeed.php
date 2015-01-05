<?php

class ContactSeed extends Seeder {
    public function run() {
        DB::table('contacts')->delete();

        Contact::create([
            'name'  =>  'Bruno Oliveira',
            'email' =>  'bruno@indb.com.br',
            'desc'  =>  'Web Developer'
        ]);

        Contact::create([
            'name'  =>  'José Carlos',
            'email' =>  'jc@indb.com.br',
            'desc'  =>  'Developer'
        ]);

        Contact::create([
            'name'  =>  'Jhonny',
            'email' =>  'jhonny@indb.com.br',
            'desc'  =>  'English Teacher'
        ]);
    
    }
}
