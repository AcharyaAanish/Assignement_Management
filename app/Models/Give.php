<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Give extends Model
{
    protected $table='gives';

    public $primaryKey = 'id';

    protected $fillable =[
        'subject_name',
        'topic',
        'given_time',
        'submit_time',
        'file'
    ];

    public $timestamps =false;
}
