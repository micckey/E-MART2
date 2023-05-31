import React, { useEffect, useState } from 'react'
import useAuthContext from '../contexts/authcontexts'
import { useNavigate } from 'react-router-dom';
import axiosApi from '../assets/axiosapi';
import Slider from '../components/slider';

export default function Dashboard() {

  const { user, logout } = useAuthContext();
  const navigate = useNavigate()
  const [products, setproducts] = useState([]);
  useEffect(() => {
    getProducts()
  }, [])
  const getProducts = async () => {
    await axiosApi.get('/api/get_products')
      .then(({ data }) => {
        setproducts(data.products)
        // localStorage.setItem('products', JSON.stringify(data.products))
      })
  }

  const newProduct = () => {
    navigate('/new-product')
  }

  const useToggleMenu = (initialState = false) => {
    const [showMenu, setShowMenu] = useState(initialState);
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
    return [showMenu, toggleMenu];
  };
  const [showMenu, toggleMenu] = useToggleMenu(false);
  const [showMenu2, toggleMenu2] = useToggleMenu(false);
  const [showMenu3, toggleMenu3] = useToggleMenu(false);


  return (
    <div>

      <div className="navBar containerCust">
        <div className="logoCont">
          <div className="my-auto mainMenuButton">
            <h2 onClick={toggleMenu3} >
              <i className="bi bi-three-dots-vertical"></i>
            </h2>
            {showMenu3 && (
              <div className="dropdownMenu">
                <button onClick={() => { newProduct() }}>Be a seller</button>
                <button >Be a rider</button>
                <button >Get in touch</button>
              </div>
            )}
          </div>

          <div className="navIcon"><h1>E-MART</h1></div>
          <div className='navIcon'>{user?.Customers_fname}</div>
        </div>

        <div className="navIcons">
          <div className="navIcon mainMenuButton">
            <h2 onClick={toggleMenu} >
              <i className="bi bi-person-fill"></i>
            </h2>
            {showMenu && (
              <div className="dropdownMenu">
                <button onClick={logout}>Logut</button>
              </div>
            )}
          </div>

          <div className="navIcon mainMenuButton">
            <h2 onClick={toggleMenu2} >
              <i className="bi bi-list"></i>
            </h2>
            {showMenu2 && (
              <div className="dropdownMenu">
                <button >Appliances</button>
                <button >Computing</button>
                <button >Fashion</button>
                <button >Health and Beauty</button>
                <button >Phones and Tablets</button>
                <button >Supermarkets</button>
                <button >TV and Audio</button>
              </div>
            )}
          </div>

        </div>
      </div>

      <Slider />

      <div className="containerCust">
        <h2 className="hotDeals">CATEGORIES</h2>
        <div className="card-container">
          {products.length > 0 && (
            products.map((image, index) => (
              <div className="cardItem" key={index}>
                <h4>{image.Products_category}</h4>
                <img src={`http://localhost:8000/upload/${image.Products_image}`} alt={`Image ${index + 1}`} />
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
