import React from 'react';
import { useParams } from 'react-router-dom';

import { Data } from '../Data/data';
const EventDetails = () => {
   const {eventId} =  useParams();

   const eventDetail =  Data.meetups.find((event) => event.id === eventId);

   console.log(eventDetail);
  return (
    <div className='event-details-card'>
        
    </div>
  )
}

export default EventDetails;