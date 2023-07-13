import React from 'react'
import { useParams } from 'react-router-dom';
import { data } from './Data';

const MeetupDetails = () => {
    const { id } = useParams();
    // const continentId = parseInt(id, 10);

    const meetup = data.meetups.find((meetup) => meetup.id === id);

    console.log(meetup);
    return (
        <div className='details-container'>
            <div className='meetup-container'>
                <h1>Meetup Details</h1>
            </div>
            <div className='venue-container'>
                <h4>Meetup Title</h4>
            </div>
        </div>
    )
}

export default MeetupDetails