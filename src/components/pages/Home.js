import React from 'react'
import { isAuthenticated } from '../../services/AuthService'
import AllEvents from '../backend_app_pages/AllEvents';
import AddButton from '../buttons/AddButton'
import { Tast } from '../buttons/Test';

const Home = () => {

  const data = isAuthenticated();
  const usersToken = data.token
  console.log('data:', data)


  if(usersToken == data.token) {
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
