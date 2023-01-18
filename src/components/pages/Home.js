import React from 'react'
import { isAuthenticated } from '../../services/AuthService'
// import '../buttons/AddButton.js'
import { Tast } from '../buttons/Test';

const Home = () => {

  const {token} = isAuthenticated();
  const usersToken = token
  const {tast} = Tast

  if(usersToken == token) {
    return (
      <div>
        <p>Home</p>
        {/* <AddButton /> */}
      </div>
  
    )
  }else{
    window.location.replace('/')
  }
}

export default Home
