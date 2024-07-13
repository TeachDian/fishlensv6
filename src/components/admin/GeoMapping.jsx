import React, { useState } from "react";

const GeoMapping = () => {
  const [location, setLocation] = useState("Laguna, Philippines");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setLocation(searchTerm);
    setSearchTerm("");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Geo Mapping</h1>
      <form onSubmit={handleSearchSubmit} className="mb-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            style={{ backgroundColor: "#00003C" }}
          >
            Search
          </button>
        </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">{location}</h2>
          {/* Map component with the selected location */}
          <iframe
            title="Map"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12500296.453431794!2d120.9352773186491!3d14.580350117995736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0a02b7d9ef9f5%3A0xd0b46835376d96c0!2sLaguna%2C%20Philippines!5e0!3m2!1sen!2sus!4v1701895999780!5m2!1sen!2sus`}
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        </div>
    </div>
  );
};

export default GeoMapping;