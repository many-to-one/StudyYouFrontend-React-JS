import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { MdDelete } from 'react-icons/md'
import '../../styles_css/Event.css';



const Event = ({ev}) => {

  const { id } = useParams();

// ################### DELETE EVENT BY ID ###################
const deleteEvent = async () => {

  fetch(`/backend/events/${ev.id}/${ev.user}/delete/`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      },
  })
  window.location.reload(false);

};

  return (
    <Link to={`/create-event/${ev.id}`}>
    <div className='list-item-container'>
      
      <div className='list-item-container-mini'>
        <div className='list-item'>
            <h1>{ev.date.slice(0, 10)}</h1>
        </div>

        <div className='list-item'>
            <p>{ev.event}</p>
        </div>
      </div>
    
      <button className="event-btn" onClick={deleteEvent} type="submit">
        <MdDelete 
            style={{
                width: "50px",
                height: "50px",
                color: "#F0007F",
            }}
        />
      </button>

    </div>
    </Link>
  )
}

export default Event
