import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md'
import { AiFillSave } from 'react-icons/ai'
import { isAuthenticated } from '../../services/AuthService'
import '../../styles_css/Result.css';


const Result = () => {
// ################### GET ALL RESULT ###################
    const [result, setResult] = useState([]);

    const {id} = isAuthenticated();

    useEffect(() => {
      getResult()
    },[])

    const getResult = async () => {
        const resp = await fetch(`backend/results/${id}/`)
        const data = await resp.json()
        setResult(data)
        console.log(data)
    }

    const saveResult = async () => {

      const resp = await fetch(`/backend/month/create/${id}/`)
      const data = await resp.json()
      window.location.replace('/all_months')
    }

// #####################################################

  return (
    <div className='result'>

      <div className='res-btn-cont'>

        <Link 
          style={{textDecoration: 'none'}} 
          className="event-btn" to={'/home'} 
          id="back"
          type="submit"
          >
          <MdArrowBackIosNew 
            style={{
              width: "50px",
              height: "50px",
              color: "#F0007F",
            }}
          />
        </Link>

        <button className="event-btn" 
          id='archivate' 
          type="submit"
          onClick={saveResult}
          >
          <AiFillSave
            style={{
              width: "50px",
              height: "50px",
              color: "#F0007F",
            }}
          /> 
        </button>

      </div>

      <div className='result-container-main'>

        <h3 className='month'>{result.date}</h3>

        <div className='row-container'>
          <div className='row'>
            <div className='left'>
              <p>Hours:</p>
            </div>
            <div className='right'>
              <p>{result.hours}</p>
            </div>  
          </div>
        </div>

        <div className='row-container'>
          <div className='row'>
            <div className='left'>
              <p>Minutes:</p>
            </div>
            <div className='right'>
              <p>{result.minutes}</p>
            </div>  
          </div>
        </div>

        <div className='row-container'>
          <div className='row'>
            <div className='left'>
              <p>Visits:</p>
            </div>
            <div className='right'>
              <p>{result.visits}</p>
            </div>  
          </div>
        </div>

        <div className='row-container'>
          <div className='row'>
            <div className='left'>
              <p>Publications:</p>
            </div>
            <div className='right'>
              <p>{result.publications}</p>
            </div>  
          </div>
        </div>

        <div className='row-container'>
          <div className='row'>
            <div className='left'>
              <p>Films:</p>
            </div>
            <div className='right'>
              <p>{result.films}</p>
            </div>  
          </div>
        </div>

      </div>

    </div>
  )
}

export default  Result
