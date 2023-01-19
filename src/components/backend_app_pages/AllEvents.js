import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../../services/AuthService'
import AddButton from '../buttons/AddButton';
import { RiDeleteBack2Fill } from 'react-icons/ri'
import Event from "./Event";


const AllEvents = () => {

    const data = isAuthenticated();
    const [events, setEvents] = useState([])

    useEffect(() => {
        allEvents()
    }, [])
        

    const allEvents = async() => {
        const response = await fetch(`/backend/events/${data.id}/`)
        const resp = await response.json();
        setEvents(resp)
        console.log(events)
    }

    return (

        <div className="event-list">
  
          <div className="event-list-cont">
  
              <div className="y">
                  {events.map((ev, index) => (
                      <Event key={index} ev={ev}/>
                  ))}
              </div>
  
              <div className="btn-container">
  
              <button className="event-btn" onClick={allEvents} type="submit">
                  <RiDeleteBack2Fill
                      style={{
                          width: "50px",
                          height: "50px",
                          color: "#F0007F",
                      }}
                  />
              </button>
  
              <AddButton />
  
          </div>
  
          </div>
          
        </div>  
  
        
      )
}

export default AllEvents
