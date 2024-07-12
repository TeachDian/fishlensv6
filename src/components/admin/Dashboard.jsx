import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 p-8">
      {/* Statistic Cards */}
      <div className="grid grid-cols-2 gap-4">
        {/* Card 1 */}
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-600 font-semibold">Number of Users</p>
          <p className="text-2xl font-bold">99</p>
        </div>
        {/* Card 2 (Repeat similar cards for other statistics) */}
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-600 font-semibold">Number of Reports</p>
          <p className="text-2xl font-bold">21</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-600 font-semibold">Verified Reports</p>
          <p className="text-2xl font-bold">15</p>
        </div>
        {/* Card 4 */}
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-600 font-semibold">Pending Reports</p>
          <p className="text-2xl font-bold">6</p>
        </div>
      </div>

      {/* Line Graph */}
      <div className="mt-8">
        {/* Your line graph component here */}
        {/* Example: <LineGraph data={yourData} /> */}
      </div>

      {/* Calendar */}
      <div className="mt-8">
        {/* Your calendar component here */}
        {/* Example: <Calendar month="July" year={2022} highlightedDates={[12]} /> */}
      </div>
    </div>
  );
};

export default Dashboard;
