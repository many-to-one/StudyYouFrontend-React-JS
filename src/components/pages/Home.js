import React from 'react'
import { isAuthenticated } from '../../services/AuthService'
import AllEvents from '../backend_app_pages/AllEvents';

const Home = () => {

  const {token} = isAuthenticated();
  console.log('token:', token)


  if(token) {
    return (
      <div>
        <AllEvents/>
      </div>
  
    )
  }else{
    window.location.replace('/')
  }
}

export default Home
