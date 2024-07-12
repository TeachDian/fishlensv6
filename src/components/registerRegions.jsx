// registerRegions.jsx
import React from 'react';
import { registerRegionsData } from './registerRegionsData';

const registerRegions = ({ formData, handleChange }) => {
  const regions = Object.keys(registerRegionsData);

  const handleRegionChange = (e) => {
    handleChange(e);
    // Additional logic if needed when region changes
  };

  return (
    <div>
      <label className="block text-gray-700"></label>
      <select
        name="region"
        value={formData.region}
        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
        onChange={handleRegionChange}
        required
      >
        <option value="">Select Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default registerRegions;
