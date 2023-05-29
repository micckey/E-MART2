import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useAuthContext from '../contexts/authcontexts';

export default function Signup() {

  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');  

  const {register, errors} = useAuthContext();

  const [passwordVisible, setPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setPasswordVisible((prevState) => !prevState);
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    register({fname, lname, email, phone, gender, password});
    setFName('');
    setLName('');
    setEmail('');
    setPhone('');    
    setPassword('');
  }

  return (
    <div className="containerCust">
      <div className="login-box">
        <h2>Register</h2>
        {errors.fname &&
          <div className="alert">
            <p>{errors.fname[0]}</p>
          </div>
        }

        {errors.lname &&
          <div className="alert">
            <p>{errors.lname[0]}</p>
          </div>
        }
        {errors.email &&
          <div className="alert">
            <p>{errors.email[0]}</p>
          </div>
        }

        {errors.phone &&
          <div className="alert">
            <p>{errors.phone[0]}</p>
          </div>
        }

        {errors.gender &&
          <div className="alert">
            <p>{errors.gender[0]}</p>
          </div>
        }

        {errors.password &&
          <div className="alert">
            <p>{errors.password[0]}</p>
          </div>
        }
        <form onSubmit={handleRegister}>
          <div className="user-box">
            <input type="text" required onChange={e => setFName(e.target.value)} />
            <label>First name</label>
          </div>
          <div className="user-box">
            <input type="text" required onChange={e => setLName(e.target.value)} />
            <label>Last name</label>
          </div>
          <div className="user-box">
            <input type="text" required onChange={e => setEmail(e.target.value)} />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="text" required onChange={e => setPhone(e.target.value)} />
            <label>Phone No</label>
          </div>
          <div className="dropBox">
            <div><p>Gender: </p></div>
            <div className="selectBox">
              <select required onChange={e => setGender(e.target.value)}>
                <option value="">Select your gender  </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-Binary">Non-Binary</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
          </div>

          <div className="passwordWrapper">
            <div className="user-box">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                required
                onChange={e => setPassword(e.target.value)}
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
            <button>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              SIGN UP
            </button>
            <div className="signAlt mt-auto" >or Log in <Link to={'/login'}>here</Link> </div>
          </div>
        </form>
      </div>
    </div>
  )
}
