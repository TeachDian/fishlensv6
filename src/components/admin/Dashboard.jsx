import React from "react";

const Dashboard = () => {
  return (
    <div id="dashboard" className="p-4">
      <div className="text-2xl font-bold mb-4">Dashboard</div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">Card 1</div>
        <div className="bg-white p-4 rounded-lg shadow-md">Card 2</div>
        <div className="bg-white p-4 rounded-lg shadow-md">Card 3</div>
        <div className="bg-white p-4 rounded-lg shadow-md col-span-2">Card 4</div>
        <div className="bg-white p-4 rounded-lg shadow-md">Card 5</div>
        <div className="bg-white p-4 rounded-lg shadow-md">Card 6</div>
      </div>
    </div>
  );
};

export default Dashboard;
