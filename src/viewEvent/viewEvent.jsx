import React, { useEffect, useState } from 'react'
import { EVENTLIST } from '../utils/eventDatabase';
import EventList from '../createEvent/components/eventList';
import { EventBrite_Link } from '../constants/constants';
import FilteredEventList from '../createEvent/components/filterEvent';


function ViewEvent() {
    const [eventsI, setEventsI] = useState([]);
    const [eventsII, setEventsII] = useState([]);


  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEventsI(EVENTLIST);
    setEventsII(storedEvents);
  }, []);



  return (
    <div className='flex flex-wrap gap-10 px-6 md:px-30 mt-10 font-serif'>

        <FilteredEventList/>

        <a href={EventBrite_Link} target='_blank'>
            <EventList events={eventsII} />
        </a>

        {eventsI.map((event,index) => (
        <a href={event?.link} target='_blank' key={event.id}>
            <div className="w-full md:max-w-[400px] md:mx-7 shadow-2xl rounded-2xl p-2 hover:scale-110 transition-all" key={index}>
                <img src={event.img} alt={event.heading} className="rounded-md w-full h-40 object-cover" />
                <h2 className="text-2xl font-bold mt-2 text-[#8046FD]">{event.heading}</h2>
                <p className="text-gray-500 text-lg">{event.date.month}, {event.date.year} - {event.location}</p>
                <p className="mt-2 text-gray-700">{event.gener}</p>
                <p className="mt-2 text-gray-700">{event.description}</p>
            </div>
        </a>
        ))}
    </div>
  )
}

export default ViewEvent;