import React, { useEffect, useRef, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import axiosApi from '../assets/axiosapi';

const Slider = () => {
    const [products, setProducts] = useState([]);
    const owlCarouselRef = useRef(null);

    useEffect(() => {
        getProducts();
    }, []);

    // Add componentDidUpdate
    useEffect(() => {
        if (owlCarouselRef.current) {
            owlCarouselRef.current.refresh();
        }
    }, [products]);

    const getProducts = async () => {
        try {
            const response = await axiosApi.get('/api/get_products');
            setProducts(response.data.products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };


    return (

        <div className="containerCust owl-2-style">
            <h2 className="hotDeals">HOT DEALS!!!</h2>

            <OwlCarousel className="owl-carousel owl-2" items={3} margin={10}
                loop
                autoplay
                autoplayTimeout={3000}
                autoplayHoverPause
                smartSpeed={1000}>
                {products.map((product, index) => (
                    <div className="media-29101" key={index}>
                        <Link to='/new/order'>
                            <img src={`http://localhost:8000/upload/${product.Products_image}`} alt="Image" className="img-fluid" />
                        </Link>
                        <h3>
                            <a href="#">{product.Products_name}</a>
                        </h3>
                    </div>
                ))}
            </OwlCarousel>


            <h2 className="hotDeals">NEW ARRIVALS!!!</h2>

            <OwlCarousel className="owl-carousel owl-2" items={3} margin={10}
                loop
                autoplay
                autoplayTimeout={3000}
                autoplayHoverPause
                smartSpeed={1000}>
                {products.map((product, index) => (
                    <div className="media-29101" key={index}>
                        <Link to='/new/order'>
                            <img src={`http://localhost:8000/upload/${product.Products_image}`} alt="Image" className="img-fluid" />
                        </Link>
                        <h3>
                            <a href="#">{product.Products_name}</a>
                        </h3>
                    </div>
                ))}
            </OwlCarousel>
        </div>


    );
};

export default Slider;
