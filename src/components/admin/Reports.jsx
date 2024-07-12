import React from 'react';
import { Link } from 'react-router-dom';

const Reports = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center pb-8">
        <h2 className="text-xl font-bold">Reports</h2>
        <nav aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1">
            <li className="text-sm font-medium">
            </li>
          </ol>
        </nav>
        <div className="flex items-center space-x-2">
          <input
            type="search"
            placeholder="Search all columns"
            className="px-4 py-2 w-64 text-sm text-gray-700"
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            style={{ backgroundColor: "#00003C", color: "#FFFFFF" }}
          >
            Refresh
          </button>
        </div>
      </div>
      <div className="overflow-x-auto rounded-md shadow-md">
        <table className="w-full text-sm text-left table-auto">
          <thead className="text-xs font-semibold text-gray-700 bg-gray-100 uppercase sticky top-0">
            <tr>
              <th scope="col" className="px-4 py-2">
                Status
              </th>
              <th scope="col" className="px-4 py-2">
                Date
              </th>
              <th scope="col" className="px-4 py-2">
                User ID
              </th>
              <th scope="col" className="px-4 py-2">
                Name
              </th>
              <th scope="col" className="px-4 py-2">
                Fish Disease
              </th>
              <th scope="col" className="px-4 py-2">
                Coordinates
              </th>
              <th scope="col" className="px-4 py-2">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="px-4 py-4" style={{ color: 'red' }}>
                Pending
              </td>
              <td className="px-4 py-4">
                2024-07-01 14:01
              </td>
              <td className="px-4 py-4">
                00001
              </td>
              <td className="px-4 py-4">
                John Doe
              </td>
              <td className="px-4 py-4">
                Aeromonas Septicemia
              </td>
              <td className="px-4 py-4">
                41°24'12.2"N 2°10/26.5 E
              </td>
              <td className="px-4 py-4">
                <button className="px-2 py-1 bg-blue-500 text-white rounded-md"
                style={{ backgroundColor: "#00003C", color: "#FFFFFF" }}
                >
                  View
                </button>
              </td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="px-4 py-4" style={{ color: 'green' }}>
                Verified
              </td>
              <td className="px-4 py-4">
                2024-07-01 14:01
              </td>
              <td className="px-4 py-4">
                00001
              </td>
              <td className="px-4 py-4">
                John Doe
              </td>
              <td className="px-4 py-4">
                Aeromonas Septicemia
              </td>
              <td className="px-4 py-4">
                41°24'12.2"N 2°10/26.5 E
              </td>
              <td className="px-4 py-4">
                <button className="px-2 py-1 bg-blue-500 text-white rounded-md"
                style={{ backgroundColor: "#00003C", color: "#FFFFFF" }}
                >
                  View
                </button>
              </td>
            </tr>
            {/* Add more table rows here for other reports */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;