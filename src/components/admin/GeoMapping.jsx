import React, { useState, useEffect } from "react";
import axios from "axios";

const GeoMapping = () => {
  const [location, setLocation] = useState("Laguna, Philippines");
  const [searchTerm, setSearchTerm] = useState("");
  const [mapData, setMapData] = useState({});
  const [reportedCases, setReportedCases] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    axios.get(`/api/search?q=${searchTerm}`)
     .then(response => {
        const newLocation = response.data.location;
        setLocation(newLocation);
        setSearchTerm("");
        axios.get(`/api/map-data?location=${newLocation}`)
         .then(response => {
            setMapData(response.data);
            axios.get(`/api/reported-cases?location=${newLocation}`)
             .then(response => {
                setReportedCases(response.data);
              })
             .catch(error => {
                console.error(error);
              });
          })
         .catch(error => {
            console.error(error);
          });
      })
     .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    axios.get(`/api/reported-cases?location=${location}`)
     .then(response => {
        setReportedCases(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, [location]);

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
          >
            Search
          </button>
        </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">{location}</h2>
          {/* Map component with the selected location */}
          {mapData && (
            <iframe
              title="Map"
              src={mapData.mapUrl}
              width="100%"
              height="400"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
          {/* Reported cases list */}
          <ul>
            {reportedCases.map((caseData, index) => (
              <li key={index}>
                <span>{caseData.date}</span>
                <span>{caseData.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GeoMapping;