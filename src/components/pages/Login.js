import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { login } from '../../services/AuthService';
import '../../styles_css/Auth.css';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = async(e) => {

      e.preventDefault();

      try {
        await login(email, password);
      } catch (error) {
        console.error('error', error);
      }

    };

  return (
    <div className='main-cont' onSubmit={submit}>
      <div className='signup-cont'>

      <form className='signup'>
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='signupBtn'>
          Login
        </button>
      </form>

        <div>
          <p>
            Don't have an account?{" "}
            <button className='event-btn'>
                <Link 
                to={"/register"}
                style={{textDecoration: 'none'}}
                >
                    <p>REGISTER</p>
                </Link>
            </button> 
          </p>
        </div>

      </div>
    </div>

  )
}

export default Login