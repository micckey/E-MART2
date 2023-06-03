import React, { useEffect, useState } from "react";
import axiosApi from "../assets/axiosapi";
import Slider from "../components/slider";
import NavBar from "../components/navbar";

const Index = () => {

    const [products, setproducts] = useState([]);
    useEffect(() => {
        getProducts()
    }, [])
    const getProducts = async () => {
        await axiosApi.get('/api/get_products')
            .then(({ data }) => {
                setproducts(data.products)
                localStorage.setItem('products', JSON.stringify(data.products))
            })
    }


    return (
        <div>

            <NavBar />

            <Slider />

            <div className="containerCust">
                <h2 className="hotDeals">CATEGORIES</h2>
                <div className="card-container">
                    {products.length > 0 && (
                        products.map((image, index) => (
                            <div className="cardItem" key={index}>
                                <h4>{image.Products_category}</h4>
                                <img src={`http://localhost:8000/upload/${image.Products_image}`} alt={`Slide ${index + 1}`} />
                                <h4>{image.Products_name}</h4>
                                <a href="/login" className="btnBook mx-auto mt-auto" >ORDER NOW</a>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div className="homeButton">
                <a href="#">Back to tthe top</a>
            </div>

            <div className="containerCust contactsContainer">
                <div className="contacts">
                    <div className="desc">
                        <h3>EMART</h3>
                        <h5>The Convenient place for online shopping</h5>
                    </div>
                    <div className="socials mx-auto">
                        <a><i className="bi bi-twitter"></i></a> <br />
                        <a><i className="bi bi-instagram"></i></a> <br />
                        <a><i className="bi bi-facebook"></i></a>
                    </div>
                    <div className="payment">
                        <h5 >Accepted payment methods</h5>


                    </div>
                </div>
            </div>
        </div>



    )
}


export default Index