<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class ProductController extends Controller
{
    public function getProducts(){
        $products = Product::all();
        return response()->json([
            'products' => $products
        ], 200);
    }

    public function addproducts(Request $request)
    {
        $product = new Product();

        $product->Products_name = $request->name;
        $product->Products_description = $request->description;
        $product->Products_category = $request->category;
        $product->Products_availability = $request->availability;
        $product->Products_price = $request->price;

        $name = '';
        if($request->image !=''){
            $strpos = strpos($request->image, ';');
            $sub = substr($request->image, 0, $strpos);
            $ex = explode('/', $sub)[1];
            $name = time().'.'.$ex;
            $img = Image::make($request->image)->resize(117, 100);
            $upload_path = public_path()."/upload/";
            $img->save($upload_path.$name);
            $product->Products_image = $name;
        }else{
            $product->Products_image = 'image.png';
        }
        
        $product->Sellers_Sellers_id = $request->sellerID;

        $product->save();

        // Optionally, you can return a response or redirect after saving the product
        return response()->json([
            'message' => 'Product added successfully',
            'product' => $product,
        ]);
    }

}
