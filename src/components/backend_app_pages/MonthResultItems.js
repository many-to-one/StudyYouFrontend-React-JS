import React, { useEffect, useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import '../../styles_css/Result.css';


const MonthResultItems = ({res}) => {

// ################### DELETE MONTH RESULT ###################
  const deleteMonthResult = async () => {
    await fetch(`/backend/month/delete/${res.id}/${res.user}/`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      },
  })
  console.log("delete:" + res.username)
  window.location.replace('/all_months')
//   window.location.reload(false);
  };

  return (

    <div className='result'>
    <br></br>
    <br></br>

      <div className='result-container-main'>

        <div className='date-del-cont'>
          <h3 className='month'>{res.date}</h3>

          <button className="event-btn" onClick={deleteMonthResult} type="submit">
            <MdDeleteForever 
              style={{
                width: "50px",
                height: "50px",
                color: "#F0007F",
              }}/>
          </button>
        </div>

        <div className='row-container'>
          <div className='row'>
            <div className='left'>
              <p>Hours:</p>
            </div>
            <div className='right'>
              <p>{res.hours}</p>
            </div>  
          </div>
        </div>

        <div className='row-container'>
          <div className='row'>
            <div className='left'>
              <p>Minutes:</p>
            </div>
            <div className='right'>
              <p>{res.minutes}</p>
            </div>  
          </div>
        </div>

        <div className='row-container'>
          <div className='row'>
            <div className='left'>
              <p>Visits:</p>
            </div>
            <div className='right'>
              <p>{res.visits}</p>
            </div>  
          </div>
        </div>

        <div className='row-container'>
          <div className='row'>
            <div className='left'>
              <p>Publications:</p>
            </div>
            <div className='right'>
              <p>{res.publications}</p>
            </div>  
          </div>
        </div>

        <div className='row-container'>
          <div className='row'>
            <div className='left'>
              <p>Films:</p>
            </div>
            <div className='right'>
              <p>{res.films}</p>
            </div>  
          </div>
        </div>

      </div>

    </div>
    
  )
}

export default MonthResultItems
