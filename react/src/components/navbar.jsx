import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../contexts/authcontexts';

export default function NavBar() {

    const { user, logout } = useAuthContext();
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

    const newProduct = () => {
        navigate('/new-product')
    }

    const navigate = useNavigate()
    const login = () => {
        navigate('/dashboard')
    }

    const register = () => {
        navigate('/register')
    }


    return (
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
                <div className='navIcon mt-auto'> {user ?
                    <>
                        <h4>Welcome back, {user.Customers_fname}</h4>
                    </>
                    :
                    <>
                        <h4>You are not logged in</h4>
                    </>
                } </div>
            </div>

            <div className="navIcons">
                <div className="navIcon mainMenuButton my-auto">
                    <h2 onClick={toggleMenu} >
                        <i className="bi bi-person-fill"></i>
                    </h2>
                    {showMenu && (
                        <div className="dropdownMenu">{
                            user ?
                                <>
                                    <button onClick={logout}>Logut</button>
                                </>
                                :
                                <>
                                    <button onClick={() => { login() }}>Sign In</button>
                                    <button onClick={() => { register() }}>Sign Up</button>
                                </>
                        }
                        </div>
                    )}
                </div>

                <div className="navIcon mainMenuButton my-auto">
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
    )
}
