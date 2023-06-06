import React from "react";
import Slider from "../components/slider";
import NavBar from "../components/navbar";
import Categories from "../components/categories";
import { Link } from "react-router-dom";

const Index = () => {




    return (
        <div>

            <NavBar />

            <Slider />

            <Categories />

            <div className="homeButton">
                <Link to={'#'}>Back to tthe top</Link>
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