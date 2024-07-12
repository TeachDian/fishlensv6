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
      { Header: "Name", accessor: "firstName" },
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
              {expandedRow === row.original ? "View Less" : "View More"}
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
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold  mb-4">Reports</h2>
      <div className="mb-4">
        <input
          value={filterInput}
          onChange={handleFilterChange}
          placeholder={"Search all columns"}
          className="p-2 border border-gray-300 rounded"
        />
        <RefreshButton onClick={handleRefresh} />
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
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <React.Fragment key={row.original.userIdNumber}>
                  <tr {...row.getRowProps()} className="border-b">
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="px-4 py-2 text-sm text-gray-700 truncate max-w-xs"
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                  {expandedRow === row.original && (
                    <tr>
                      <td colSpan={mainColumns.length}>
                        <div className="p-4 bg-gray-100 border border-gray-300 rounded mt-2">
                          <GeoMapping coordinates={row.original.coordinates} />
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
