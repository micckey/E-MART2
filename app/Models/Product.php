<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table = 'Products';
    protected $fillable = [
        'Products_name',
        'Products_description',
        'Products_category',        
        'Products_availability',
        'Products_price',
        'Products_image',
        'Sellers_Sellers_id',
    ];
    protected $primaryKey = 'Products_id';
    public $timestamps = false;
}
