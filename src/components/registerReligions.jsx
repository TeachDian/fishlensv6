// registerReligions.jsx
import React from 'react';
import { registerReligionsData } from './registerReligionsData';

const registerReligions = ({ value, onChange }) => {
  return (
    <select
      name="religion"
      value={value}
      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
      onChange={onChange}
      required
    >
      {registerReligionsData.map((religion) => (
        <option key={religion.value} value={religion.value}>
          {religion.label}
        </option>
      ))}
    </select>
  );
};

export default registerReligions;
