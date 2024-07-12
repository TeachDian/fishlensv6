import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import axios from 'axios';

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reportData, setReportData] = useState([]);
  const [users, setUsers] = useState(0);
  const [reports, setReports] = useState(0);
  const [verifiedReports, setVerifiedReports] = useState(0);
  const [pendingReports, setPendingReports] = useState(0);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await axios.get('/api/dashboard');
      const data = response.data;
      setUsers(data.users);
      setReports(data.reports);
      setVerifiedReports(data.verifiedReports);
      setPendingReports(data.pendingReports);
      setReportData(data.reportAnalytics);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
<<<<<<< HEAD
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-md shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Number of Users</h2>
          <p className="text-4xl font-bold">{users}</p>
        </div>
        <div className="bg-white rounded-md shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Number of Reports</h2>
          <p className="text-4xl font-bold">{reports}</p>
        </div>
        <div className="bg-green-100 rounded-md shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Verified Reports</h2>
          <p className="text-4xl font-bold">{verifiedReports}</p>
        </div>
        <div className="bg-yellow-100 rounded-md shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Pending Reports</h2>
          <p className="text-4xl font-bold">{pendingReports}</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="bg-white rounded-md shadow-md p-4">
          <h2 className="text-lg font-bold mb-4">Reports Analytics</h2>
          <LineChart width={400} height={200} data={reportData}>
            <Line type="monotone" dataKey="reports" stroke="#8884d8" />
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Tooltip />
          </LineChart>
        </div>
      </div>

      <div className="mt-4">
        <div className="bg-white rounded-md shadow-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold mb-4">Calendar</h2>
            <button
              onClick={() => handleDateChange(new Date())}
              className="px-2 py-1 bg-gray-200 rounded-md"
            >
              Today
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1">
            <div className="text-gray-500 text-xs font-bold">MON</div>
            <div className="text-gray-500 text-xs font-bold">TUE</div>
            <div className="text-gray-500 text-xs font-bold">WED</div>
            <div className="text-gray-500 text-xs font-bold">THU</div>
            <div className="text-gray-500 text-xs font-bold">FRI</div>
            <div className="text-gray-500 text-xs font-bold">SAT</div>
            <div className="text-gray-500 text-xs font-bold">SUN</div>
            {Array.from({ length: 6 }, (_, i) => {
              const date = new Date(selectedDate);
              date.setDate(selectedDate.getDate() - selectedDate.getDay() + i * 7);
              const days = [];
              for (let j = 0; j < 7; j++) {
                const day = new Date(date);
                day.setDate(date.getDate() + j);
                days.push(day);
              }
              return days.map((day) => (
                <div
                  key={day.getDate()}
                  className="text-center py-2 rounded-md border border-gray-200 cursor-pointer hover:bg-gray-100"
                  onClick={() => setSelectedDate(day)}
                >
                  {day.getDate()}
                </div>
              ));
            })}
=======
    <div className="p-6 bg-white rounded shadow-md">
      <div id="dashboard">
        <div className="text-2xl font-bold mb-4">Dashboard</div>
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
>>>>>>> b52722c40a8d675306344a3cbad0eb7253abc678
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;