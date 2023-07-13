import React from 'react';
import { Link } from 'react-router-dom';
import { Data } from "../Data/data";

import Header from '../Components/Header';
import "./Homepage.css";
import EventCard from '../Components/EventCard';

const HomePage = () => {
    // console.log(Data.meetups);
    return (
        <div>
            <Header />
            <hr />
            <div className='meetup-event'>
                <div className='text-h1'>
                    <h2 className='text'>MeetUp Events</h2>
                </div>
                <div className='select'>
                <select>
                    <option value="offline">Offline</option>
                    <option value='online'>Online</option>
                </select>
                    
                </div>
            </div>
            <div className='events'>
                {
                    Data.meetups?.map(({ id, title, eventType, eventThumbnail, eventStartTime }) =>
                        <>
                        <EventCard
                            id = {id}
                            title = {title}
                            eventType = {eventType}
                            eventThumbnail = {eventThumbnail}
                            eventStartTime = {eventStartTime}
                        />
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default HomePage;