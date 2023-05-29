<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table = "Customers";
    protected $fillable = [
        'Customers_fname',
        'Customers_lname',
        'email',
        'Customers_phone_no',
        'Customers_gender',
        'password',
    ];


    protected $primaryKey = 'Customers_id';

    public $timestamps = false;

    protected $hidden = [
        'password',        
    ];


    protected $casts = [        
        'password' => 'hashed',
    ];
}
