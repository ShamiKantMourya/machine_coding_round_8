import React from 'react'
import { Link } from 'react-router-dom';

const EventCard = ({ id, title, eventType, eventThumbnail, eventStartTime }) => {
    return (
        <div className='meetup-event-detail' key={id}>
            <div className='img-eventType-box'>
            <Link to={`/${id}`}>
                <img src={eventThumbnail} alt='event' />
                <p className='event-type'>{eventType}</p>
                </Link>
            </div>
            <div className='event-timing'>
                <p className='event-start-time'>{eventStartTime}</p>
            </div>
            <div className='title'>
                <h2 className='event-title'>{title}</h2>
            </div>
        </div>
    )
}

export default EventCard;