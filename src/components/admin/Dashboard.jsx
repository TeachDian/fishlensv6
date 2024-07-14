import { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ReactApexChart from 'react-apexcharts';

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reportData, setReportData] = useState([]);
  const [users, setUsers] = useState(0);
  const [reports, setReports] = useState(0);
  const [verifiedReports, setVerifiedReports] = useState(0);
  const [pendingReports, setPendingReports] = useState(0);
  const [chartOptions, setChartOptions] = useState({});
  const [chartData, setChartData] = useState([]);
  const [selectedReportType, setSelectedReportType] = useState('all'); // New state for report type

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await axios.get('/api/dashboard-data');
      const data = response.data;
      setReportData(data.reports);
      setUsers(data.users);
      setReports(data.totalReports);
      setVerifiedReports(data.verifiedReports);
      setPendingReports(data.pendingReports);
      // Update chart data based on selected report type
      updateChartData(data.reports);
    } catch (error) {
      console.error(error);
    }
  };

  const updateChartData = (data) => {
    let chartData = [];
    switch (selectedReportType) {
      case 'all':
        chartData = [
          {
            name: 'Reports',
            data: data.map((item) => item.count),
          },
        ];
        break;
      case 'verified':
        chartData = [
          {
            name: 'Verified Reports',
            data: data.filter((item) => item.verified).map((item) => item.count),
          },
        ];
        break;
      case 'pending':
        chartData = [
          {
            name: 'Pending Reports',
            data: data.filter((item) => !item.verified).map((item) => item.count),
          },
        ];
        break;
      default:
        chartData = [];
    }
    setChartData(chartData);
    setChartOptions({
      xaxis: {
        categories: data.map((item) => item.month),
      },
    });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // You can implement logic to filter reports by date here (if applicable)
  };

  const handleReportTypeChange = (type) => {
    setSelectedReportType(type);
    updateChartData(reportData); // Update chart based on selected type
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-md shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Number of Users</h2>
          <p className="text-6xl font-bold text-end">{users}</p>
        </div>
        <div className="bg-white rounded-md shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Number of Reports</h2>
          <p className="text-6xl font-bold text-end">{reports}</p>
        </div>
        <div className="bg-green-100 rounded-md shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Verified Reports</h2>
          <p className="text-6xl font-bold text-end">{verifiedReports}</p>
        </div>
        <div className="bg-yellow-100 rounded-md shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Pending Reports</h2>
          <p className="text-6xl font-bold text-end">{pendingReports}</p>
        </div>
      </div>
      return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-md shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Number of Users</h2>
          <p className="text-6xl font-bold text-end">{users}</p>
        </div>
        <div className="bg-white rounded-md shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Number of Reports</h2>
          <p className="text-6xl font-bold text-end">{reports}</p>
        </div>
        <div className="bg-green-100 rounded-md shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Verified Reports</h2>
          <p className="text-6xl font-bold text-end">{verifiedReports}</p>
        </div>
        <div className="bg-yellow-100 rounded-md shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Pending Reports</h2>
          <p className="text-6xl font-bold text-end">{pendingReports}</p>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <h2>Report Type</h2>
        <div className="flex items-center">
          <button
            className={`px-2 py-1 rounded-md mr-2 text-gray-700 font-medium ${
              selectedReportType === 'all' ? 'bg-gray-200' : ''
            }`}
            onClick={() => handleReportTypeChange('all')}
          >
            All Reports
          </button>
          <button
            className={`px-2 py-1 rounded-md mr-2 text-gray-700 font-medium ${
              selectedReportType === 'verified' ? 'bg-gray-200' : ''
            }`}
            onClick={() => handleReportTypeChange('verified')}
          >
            Verified
          </button>
          <button
            className={`px-2 py-1 rounded-md text-gray-700 font-medium ${
              selectedReportType === 'pending' ? 'bg-gray-200' : ''
            }`}
            onClick={() => handleReportTypeChange('pending')}
          >
            Pending
          </button>
        </div>
      </div>

      <div className="mt-4">
        <div className="bg-white rounded-md shadow-md p-4">
          <h2 className="text-lg font-bold mb-4">Reports Analytics</h2>
          <ReactApexChart
            options={chartOptions}
            series={chartData}
            type="line"
            width="100%"
            height="400"
          />
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
          <Calendar onChange={handleDateChange} value={selectedDate} className="mx-auto" />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Dashboard;