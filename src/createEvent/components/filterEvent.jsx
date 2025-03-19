import React, { useState, useEffect } from "react";
import { GENRES, EVENTLIST } from "../../utils/eventDatabase";

const FilteredEventList = () => {
  const [filterEvent, setFilterEvent] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    const combinedEvents = [...EVENTLIST, ...storedEvents]; 
    setFilterEvent(combinedEvents);
  }, []);

  const filteredEvents = selectedGenre === "All"
    ? filterEvent : filterEvent.filter(event => event.gener === selectedGenre);

  return (
    <div className="p-2">
      <h2 className="text-xl md:text-2xl text-[#8046FD] font-bold mb-3">Events</h2>

      <select
        className="p-3 border rounded mb-7"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="All" className="text-[#8046FD] mb-3">Category</option>
        {GENRES.map((genre) => (
          <option key={genre} value={genre} className="text-[#8046FD]">{genre}</option>
        ))}
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
              <div className="w-full md:max-w-[400px] md:mx-7 shadow-2xl rounded-2xl p-2 hover:scale-110 transition-all cursor-pointer" key={event.id}>
                {event.img ? <img src={event.img} alt={event.heading} className="rounded-md w-full h-40 object-cover" />
                    :
                  <img src='/vite.svg' alt="Event" className="rounded-md w-full h-40 object-cover" />
                }
                <h2 className="text-2xl font-bold mt-2 text-[#8046FD]">{event.heading}</h2>
                <p className="text-gray-700 text-lg">{event.gener}</p>
                <p className="text-gray-500 text-lg">{event.location}</p>
                <p className="text-gray-500">{event.dateTime}</p>
                <p className="mt-2 text-gray-700">{event.description}</p>
                <p className="mt-2 text-gray-700">{event.sponsor}</p>
                <p className="mt-2 text-gray-700">{event.ticketPrice}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-700 text-lg">No events found for this category...</p>
        )}
      </div>
    </div>
  );
};

export default FilteredEventList;
