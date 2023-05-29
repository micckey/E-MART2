import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthContext from '../contexts/authcontexts';


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, errors } = useAuthContext();

  const [passwordVisible, setPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setPasswordVisible((prevState) => !prevState);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    login({ email, password });
    setEmail('');
    setPassword('');
  }

  return (
    <div className="containerCust">
      <div className="login-box">
        <h2>Login</h2>
        {errors.email &&
          <div className="alert">
            <p>{errors.email[0]}</p>
          </div>
        }

        {errors.password &&
          <div className="alert">
            <p>{errors.password[0]}</p>
          </div>
        }


        <form onSubmit={handleLogin}>
          <div className="user-box">
            <input type="text" name="" onChange={e => setEmail(e.target.value)} required />
            <label>Email</label>
          </div>

          <div className="passwordWrapper">
            <div className="user-box">
              <input
                onChange={e => setPassword(e.target.value)}
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                required
              />

              <label htmlFor="password">Password</label>
              <div>
                <span
                  className={`toggle-password ${passwordVisible ? 'bi bi-eye-slash' : 'bi bi-eye'}`}
                  onClick={togglePasswordVisibility}
                ></span>
              </div>
            </div>
          </div>

          <div className="buttonCont">
            <button type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              LOGIN
            </button>
            <div className="signAlt mt-auto" >or Sign up <Link to={'/signup'}>here</Link> </div>
          </div>
        </form>
      </div>
    </div>

  )
}
