<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Signup extends Model
{
    protected $table ='signups';

    public $primaryKey ='id';

    protected $fillable= [
        'first_name',
        'last_name',
        'role',
        'email',
        'password',
        'confirm_password'
    ];

    protected $hidden =[
        'password',
        'confirm_password'
    ];

    public $timestamps = false;
}
