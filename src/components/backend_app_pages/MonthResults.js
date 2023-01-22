import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md'
import { isAuthenticated } from '../../services/AuthService';
import MonthResultItems from './MonthResultItems';

const MonthResult = () => {
// ################### GET ALL RESULT ###################
    const {id} = isAuthenticated();
    const [result, setResult] = useState([]);

    useEffect(() => {
      getResult()
    }, [])

    const getResult = async () => {
        const resp = await fetch(`/backend/get_month_results/${id}/`)
        const data = await resp.json()
        setResult(data)
        console.log(data)
    }

// #####################################################

return(
  <div>

    <button className="event-btn" id='back'>
      <Link 
        style={{textDecoration: 'none'}} 
        to={'/home'} 
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
    </button>

    {result.map((res, index) => (
      <MonthResultItems key={index} res={res} />
    ))}
  </div>
)
}

export default  MonthResult
