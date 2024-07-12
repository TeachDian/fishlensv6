import React, { useMemo, useState, useEffect } from "react";
import { useTable, useFilters, useSortBy, useGlobalFilter } from "react-table";
import Modal from "react-modal";
import { data, initializeData } from "./data"; // Import data and initialization function
import GeoMapping from "./GeoMapping"; // Import GeoMapping component

// Set the app element for accessibility
Modal.setAppElement("#root");

const RefreshButton = ({ onClick }) => (
  <button
     className="px-8 ml-5 bg-[#00003C] text-white py-2 rounded-md"
    onClick={onClick}
    style={{ padding: "8px", borderRadius: "4px", cursor: "pointer" }}
  >
    Refresh
  </button>
);

const Reports = () => {
  const [filterInput, setFilterInput] = useState("");
  const [expandedRow, setExpandedRow] = useState(null);

  useEffect(() => {
    initializeData(data); // Initialize data if needed
  }, []);

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setGlobalFilter(value);
    setFilterInput(value);
  };

  const handleExpandRow = (row) => {
    setExpandedRow(expandedRow === row ? null : row);
  };

  const mainColumns = useMemo(
    () => [
      { Header: "Status", accessor: "reportStatus" },
      { Header: "Date", accessor: "reportDate" },
      { Header: "Report ID", accessor: "reportIdNumber" },
      { Header: "User ID", accessor: "userIdNumber" },
      { Header: "First Name", accessor: "firstName" },
      { Header: "Coordinates", accessor: "coordinates" },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ row }) => (
          <div>
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={() => handleExpandRow(row.original)}
            >
              {expandedRow === row.original ? "Show Less" : "Show More"}
            </button>
          </div>
        ),
      },
    ],
    [expandedRow]
  );

  const detailedColumns = useMemo(
    () => [
      // Define detailed columns for expanded view if needed
    ],
    []
  );

  const tableInstance = useTable(
    { columns: mainColumns, data, globalFilter: filterInput },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = tableInstance;

  const handleRefresh = () => {
    // Handle refresh logic here, e.g., re-initialize data
    initializeData(data);
    setFilterInput(""); // Clear filter input
    setExpandedRow(null); // Collapse all expanded rows
  };

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
      <div className="">
        <table
          {...getTableProps()}
          className="min-w-full bg-white border border-gray-200"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="border-b">
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="px-4 py-2 text-left text-sm font-medium text-gray-500"
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
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