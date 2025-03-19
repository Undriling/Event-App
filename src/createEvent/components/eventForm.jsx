import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/components/ui/button"

export default function EventForm({ onEventAdded }) {
  // const [dateTime, setDateTime] = useState("");
  const [formData, setFormData] = useState({
    heading: "",
    gener: "",
    location: "",
    dateTime: "",
    description: "",
    sponsor: "",
    ticketPrice: "",
    img: null,
  });

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
    if (savedEvents.length > 0) {
      setFormData((prev) => ({ ...prev, dateTime: savedEvents[0].dateTime || "" }));
    }
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "dateTime") {
      setFormData((prev) => ({ ...prev, dateTime: value }));
    } else{
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, img: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = { ...formData, id: uuidv4() };

    const existingEvents = JSON.parse(localStorage.getItem("events")) || [];
    const updatedEvents = [...existingEvents, event];
    localStorage.setItem("events", JSON.stringify(updatedEvents));

    
    if (onEventAdded) {
      onEventAdded(event);
    }
    setFormData({
      heading: "",
      gener: "",
      location: "",
      dateTime: "",
      description: "",
      sponsor: "",
      ticketPrice: "",
      img: null,
    });
  };

  

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:gap-10 w-full">
      <input name="heading" placeholder="Heading" className="bg-gray-200 text-black border-[1px] h-10 rounded-2xl p-2 font-serif" value={formData.heading} onChange={handleChange} required />
      <input name="gener" placeholder="Genre" className="bg-gray-200 text-black border-[1px] h-10 rounded-2xl p-2 font-serif my-2" value={formData.gener} onChange={handleChange} required />
      <input name="location" placeholder="Location" className="bg-gray-200 text-black border-[1px] h-10 rounded-2xl p-2 font-serif" value={formData.location} onChange={handleChange} required />
      <input name="dateTime" placeholder="Date - Time" className="bg-gray-200 text-black border-[1px] h-10 rounded-2xl p-2 font-serif my-2" value={formData.dateTime} onChange={handleChange} required/>
      <textarea name="description" placeholder="Description" className="bg-gray-200 text-black h-20 rounded-2xl p-2 font-serif border-[1px]" value={formData.description} onChange={handleChange} required />
      <input name="sponsor" placeholder="Sponsor" className="bg-gray-200 text-black border-[1px] h-10 rounded-2xl p-2 font-serif my-2" value={formData.sponsor} onChange={handleChange} required />
      <input name="ticketPrice" placeholder="Ticket Price" className="bg-gray-200 text-black border-[1px] h-10 rounded-2xl p-2 font-serif" value={formData.ticketPrice} onChange={handleChange} required />
      <input type="file" onChange={handleImageChange} className="bg-gray-300 font-bold cursor-pointer text-[#8046FD] border-[1px] h-10 rounded-2xl p-2 font-serif my-2" accept="image/*" />
      <Button type="submit" className={"bg-[#8046FD] text-white  cursor-pointer hover:bg-[#a082e0] "}>Add Event</Button>
    </form>
  );
}