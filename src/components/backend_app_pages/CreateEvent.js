import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../../services/AuthService';
import { Link, useParams } from 'react-router-dom'
import { MdDoneAll, MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import '../../styles_css/CreateEvent.css';

const CreateEvent = () => {

    const data = isAuthenticated();
    const [ event, setEvent ] = useState({name: {}});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getEvent()
    }, [])

    const getEvent = async () => {
        const response = await fetch(`/backend/events/${id}/${data.id}/`)
        const resp = await response.json()
        setEvent(resp)
        console.log(resp)
    };

    const create = async() => {

        // e.preventDefault();

        await fetch(`/backend/event/create/${data.id}/`, {
            method: 'POST',
            body: JSON.stringify(event),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log('userId:', data.id)
        navigate("/home")

    }

    const update = async () => {
        await fetch(`/backend/events/${id}/${data.id}/update/`, {
            method: 'PUT',
            body:JSON.stringify(event),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        navigate("/home")
    };

    
    // ################### BUTTON ONCLICK FUNCTION ################### // 


    const handleSubmit = () => {

        if(id !== 'new') {
            update()
        } else if(id === 'new' && event !== null) {
            create()
        };
    } 

    // ################### END OF BUTTON ONCLICK FUNCTION ################### // 


    return (
        <div className='event'>

            <Link  to={'/home'}>
                <button 
                    className="event-btn"
                    id='update-back'
                    >
                    <MdArrowBackIosNew 
                    style={{
                        width: "50px",
                        height: "50px",
                        color: "#F0007F",
                    }}
                />
                </button>
            </Link>

            <div className='event-container'>
                <p>{event.date}</p>
                <textarea 
                    placeholder='Event'
                    className='text-event'
                    type="number" 
                    name="hours" 
                    onChange={(e) => {setEvent({...event, 'event': e.target.value})}}  
                    defaultValue={event.event}>
                </textarea><br></br>
                <input 
                    placeholder='Hours'
                    className='text-event'
                    type="number" 
                    name="hours" 
                    onChange={(e) => {setEvent({...event, 'hours': e.target.value})}} 
                    defaultValue={event.hours}
                /><br></br>
                <input 
                    placeholder='Minutes'
                    className='text-event'
                    type="number" 
                    name="minutes" 
                    onChange={(e) => {setEvent({...event, 'minutes': e.target.value})}}   
                    defaultValue={event.minutes}
                /><br></br>
                <input 
                    placeholder='Visits'
                    className='text-event'
                    type="number" 
                    name="visits" 
                    onChange={(e) => {setEvent({...event, 'visits': e.target.value})}}   
                    defaultValue={event.visits}
                /><br></br>
                <input 
                    placeholder='Publications'
                    className='text-event'
                    type="number" 
                    name="publications" 
                    onChange={(e) => {setEvent({...event, 'publications': e.target.value})}}   
                    defaultValue={event.publications}
                /><br></br>
                <input 
                    placeholder='Films'
                    className='text-event'
                    type="number" 
                    name="films" 
                    onChange={(e) => {setEvent({...event, 'films': e.target.value})}}   
                    defaultValue={event.films}
                /><br></br>
            </div>
            <button className="event-btn-submit" onClick={handleSubmit} type="submit">
                <MdDoneAll 
                    style={{
                            width: "50px",
                            height: "50px",
                            color: "#F0007F",
                        }}
                />
            </button> 
        </div>
        
    )
}

export default CreateEvent
