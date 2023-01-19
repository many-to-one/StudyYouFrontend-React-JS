import React from 'react'

const TestHeader = () => {
  return (
    <div>

{username ? (
            <div className='nav-links-cont'>

              <div className='header'>
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
                </div>

              <div className='header'>
                  <div>
                    <Link to={'/profile'}>
                      Profile
                    </Link>
                  </div>
              </div> 

            </div>
            ): (
              
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

            )}
    
          {username &&  <p>Hello {username}</p>}
      
    </div>
  )
}

export default TestHeader
