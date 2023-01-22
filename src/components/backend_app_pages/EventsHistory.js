import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../../services/AuthService';
import EventsHistoryItem from './EventsHistoryItem';
import '../../styles_css/EventsHistory.css';

const EventsHistory = () => {

const [eventsHistory, setEventsHistory] = useState([]);
const {id} = isAuthenticated();

useEffect (() => {
    getEventsHistory()
}, [])

const getEventsHistory = async () => {
    const resp = await fetch(`/backend/events_history/${id}/`)
    const data = await resp.json()
    setEventsHistory(data)
}

  return (

    <div className='history-cont'>

        {eventsHistory.map((ev, index) =>(
            <EventsHistoryItem key={index} ev={ev}/>
        ))}
        
    </div>
    
  )
}

export default EventsHistory
