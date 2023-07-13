import React from 'react';
import { useParams } from 'react-router-dom';

import { Data } from '../Data/data';
import Header from '../Components/Header';
import "./EventDetails.css";

const EventDetail = () => {
    const { eventId } = useParams();

    const eventDetail = Data.meetups.find((event) => event.id === eventId);
    const { id, title, hostedBy, eventThumbnail, eventDescription
        , eventEndTime, eventStartTime, location
        , price, address
    } = eventDetail;
    console.log(eventDetail);
    return (
        <>
            <Header />
            <hr />
            <div className='event-alldetails'>
                <div className='event-left'>
                <h2>{title}</h2>
                <p>Hosted By</p>
                <p><strong>{hostedBy}</strong></p>
                <img src= {eventThumbnail} alt='event thumbnail' />
                <h3>Details</h3>
                <p>{eventDescription}</p>
                <h3>
                    Additional Information
                </h3>
                </div>
                <div className='event-right'>

                </div>
                
            </div>
        </>

    )
}

export default EventDetail;