import React, { useEffect, useState } from 'react'
import axiosApi from '../assets/axiosapi';
import { Link } from 'react-router-dom';

export default function Categories() {

    const [products, setproducts] = useState([]);
    useEffect(() => {
        getProducts()
    }, [])
    const getProducts = async () => {
        await axiosApi.get('/api/get_products')
            .then(({ data }) => {
                setproducts(data.products)                
            })
    }

    return (
        <div className="containerCust">
            <h2 className="hotDeals">CATEGORIES</h2>
            <div className="card-container">
                {products.length > 0 && (
                    products.map((image, index) => (
                        <div className="cardItem" key={index}>
                            <h4>{image.Products_category}</h4>
                            <img src={`http://localhost:8000/upload/${image.Products_image}`} alt={`Slide ${index + 1}`} />
                            <h4>{image.Products_name}</h4>
                            <Link to={"/login"} className="btnBook mx-auto mt-auto" >ORDER NOW</Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
