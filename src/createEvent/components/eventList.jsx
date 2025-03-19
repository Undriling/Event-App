import React from "react";

export default function EventList({ events }) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
      {events.map((event) => (
        <div key={event.id} className="w-full mb-5 md:max-w-[400px] md:mx-7 shadow-2xl rounded-2xl p-2 hover:scale-110 transition-all cursor-pointer">

            { event.image ? <img src={event.image} alt="Event" className="rounded-md w-full h-40 object-cover" />
                :
              <img src='/vite.svg' alt="Event" className="rounded-md w-full h-40 object-cover" />
            }

            <h2 className="text-2xl font-bold mt-2 text-[#8046FD]">{event.heading}</h2>
            <p className="py-2 text-gray-700"><strong>Genre:</strong> {event.gener}</p>
            <p className="text-gray-500"><strong>Location:</strong> {event.location}</p>
            <p className="text-gray-500">{event.dateTime}</p>
            <p className="py-2 text-gray-500"><strong>Description:</strong> {event.description}</p>
            <p className="text-gray-500"><strong>Sponsor:</strong> {event.sponsor}</p>
            <p className="py-2 text-gray-500"><strong>Ticket Price:</strong> ${event.ticketPrice}</p>
          
        </div>
      ))}
    </div>
  );
}
