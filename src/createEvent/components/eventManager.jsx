import React, { useState, useEffect } from "react";
import EventForm from "./eventForm";
import EventList from "./eventList";
import { EventBrite_Link } from "../../constants/constants";


export default function EventManager() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  const handleEventAdded = (newEvent) => {
    setEvents((prev) => [...prev, newEvent]);
  };

  return (
    <div className="md:px-20 mt-10">
        <div className="md:px-32 mt-10 px-6">
            <h1 className="font-serif text-3xl font-bold mb-5 text-[#8046FD]">Create Events</h1>
            <hr className="my-5"/>
            <EventForm onEventAdded={handleEventAdded} />
        </div>
        <hr className="my-7"/>
        <div className="sm:px-20 md:px-15 mt-10 px-6 gap-10">
            <a href={EventBrite_Link} target='_blank'>
                <EventList events={events}/>
            </a>
        </div>
    </div>
  );
}