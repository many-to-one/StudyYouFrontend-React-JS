import React, { useState, useEffect, useRef } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { 
  BsFillCalendarCheckFill, 
  BsReverseLayoutTextWindowReverse,
  BsJustifyLeft,
  BsXCircle
} from 'react-icons/bs'
import { GiArchiveResearch } from 'react-icons/gi'
import { AiFillHome } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { MdOutlineLogout, MdLogin, MdRefresh } from 'react-icons/md'
import { isAuthenticated } from '../services/AuthService';
import '../styles_css/Header.css';  
import '../App.css';

const Header = () => {

    const {username} = isAuthenticated();
    const [isMobile, setIsMobile] = useState(true);

    let auth_choise;

    if (username == undefined) {

    auth_choise = (

      <button className='event-btn' onClick={() => setIsMobile(!isMobile)}>
            <Link 
            to={"/"}
            style={{textDecoration: 'none'}}
            >
              <div className='h-result'> 
                <MdLogin
                  style={{
                    width: "30px",
                    height: "50px",
                    color: "#F0007F",
                  }}
                /> 
                <p>LOG IN</p>
              </div>
            </Link>
          </button> 

    )

    } else {

    auth_choise = (

      <button className='event-btn' onClick={() => setIsMobile(!isMobile)}>
            <Link 
            to={"/logout"}
            style={{textDecoration: 'none'}}
            // onClick={refreshPage}
            >
              <div className='h-result'> 
                <MdOutlineLogout
                  style={{
                    width: "30px",
                    height: "50px",
                    color: "#F0007F",
                  }}
                /> 
                  <p>LOG OUT</p>
              </div>
            </Link>
          </button> 

    )

  }

	console.log('username:', username);

    return (
        <div className='header-main'>

          <div className='menu'>
            <button 
              className='menu-open'
              onClick={() => setIsMobile(!isMobile)}
              > 
                { isMobile? 
                <BsJustifyLeft 
                  style={{
                    width: "30px",
                    height: "50px",
                    color: "#F0007F",
                  }}
                /> :
                <BsXCircle 
                  style={{
                    width: "30px",
                    height: "50px",
                    color: "#F0007F",
                  }}
                />
                }
            </button>
          </div>

          <nav 
            className={ isMobile ? "nav-links-mobile" : "nav-links" }
            onClick={() => setIsMobile(true)}
          >

            <div className='nav-links-cont'>

              <div className='header'>
                {auth_choise}
              </div>

              <div className='header'>
                <button className='event-btn' onClick={() => setIsMobile(!isMobile)}>
                  <Link 
                  to={"/profile"}
                  style={{textDecoration: 'none'}}
                  >
                    <div 
                      className='h-result'
                      >
                        <FaUserCircle 
                          style={{
                            width: "30px",
                            height: "50px",
                            color: "#F0007F",
                          }}
                        /> 
                        <p>Hi {username}</p>
                    </div>
                  </Link>
                </button>
              </div> 

            </div>

          </nav>

        </div>
      )

  
}

export default Header
