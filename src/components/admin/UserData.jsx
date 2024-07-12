import React, { useMemo, useState, useEffect } from "react";
import { useTable, useFilters, useSortBy, useGlobalFilter } from "react-table";
import Modal from "react-modal";
import { v4 as uuidv4 } from "uuid";

// Sample data (replace with actual data as needed)
const data = [
  {
    userIdNumber: uuidv4(),
    region: "Region 1",
    province: "Province 1",
    cityTown: "City 1",
    address: "Address 1",
    username: "user1",
    firstName: "John",
    middleName: "Doe",
    lastName: "Smith",
    telephone: "1234567890",
    mobileNumber: "0987654321",
    email: "john@example.com",
    birthdate: "1990-01-01",
    placeOfBirth: "Place 1",
    sex: "Male",
    civilStatus: "Single",
    bloodType: "A",
    religion: "Religion 1",
    nationality: "Nationality 1",
    highestEducationalAttainment: "Bachelor's Degree",
    emergencyContact: "Jane Doe",
    emergencyContactNumber: "1234567890",
    emergrncyRelationship: "Sister",
    emergrncyAddress: "Address 2",
    mainSourceofIncome: "Job 1",
    mainSourceofIncomeAmount: 50000,
    otherSourceofIncome: "Job 2",
    otherSourceofIncomeAmount: 20000,
    nameofOrganization: "Org 1",
    memberSince: "2020-01-01",
    positioninOrganization: "Member",
    nameofSpouse: "Spouse 1",
    numberofchildren: 2,
    spouseContactnum: "1234567890",
    numberofchildreninSchool: 1,
    numberofchildrenoutSchool: 1,
    numberofEmployedfammem: 2,
    numberofUnemployedfammem: 1,
  },
  // Add more data as needed
];

// Set the app element for accessibility
Modal.setAppElement("#root");

const UserData = () => {
  const [filterInput, setFilterInput] = useState("");
  const [expandedRow, setExpandedRow] = useState(null);

  useEffect(() => {
    // Generate unique IDs for existing data without a userIdNumber
    data.forEach((item) => {
      if (!item.userIdNumber) {
        item.userIdNumber = uuidv4();
      }
    });
  }, []);

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setGlobalFilter(value);
    setFilterInput(value);
  };

  const handleExpandRow = (row) => {
    setExpandedRow(expandedRow === row ? null : row);
  };

  const handleEdit = (user) => {
    // Logic for editing user data
    console.log("Editing user:", user);
  };

  const handleDelete = (user) => {
    // Logic for deleting user data
    console.log("Deleting user:", user);
  };

  const mainColumns = useMemo(
    () => [
      { Header: "Username", accessor: "username" },
      { Header: "First Name", accessor: "firstName" },
      { Header: "Last Name", accessor: "lastName" },
      { Header: "Email", accessor: "email" },
      { Header: "User ID", accessor: "userIdNumber" },
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
      { Header: "Region", accessor: "region" },
      { Header: "Province", accessor: "province" },
      { Header: "City/Town", accessor: "cityTown" },
      { Header: "Address", accessor: "address" },
      { Header: "Telephone", accessor: "telephone" },
      { Header: "Mobile Number", accessor: "mobileNumber" },
      { Header: "Birthdate", accessor: "birthdate" },
      { Header: "Place of Birth", accessor: "placeOfBirth" },
      { Header: "Sex", accessor: "sex" },
      { Header: "Civil Status", accessor: "civilStatus" },
      { Header: "Blood Type", accessor: "bloodType" },
      { Header: "Religion", accessor: "religion" },
      { Header: "Nationality", accessor: "nationality" },
      { Header: "Highest Educational Attainment", accessor: "highestEducationalAttainment" },
      { Header: "Emergency Contact", accessor: "emergencyContact" },
      { Header: "Emergency Contact Number", accessor: "emergencyContactNumber" },
      { Header: "Relationship", accessor: "emergrncyRelationship" },
      { Header: "Address", accessor: "emergrncyAddress" },
      { Header: "Main Source of Income", accessor: "mainSourceofIncome" },
      { Header: "Main Source of Income Amount", accessor: "mainSourceofIncomeAmount" },
      { Header: "Other Source of Income", accessor: "otherSourceofIncome" },
      { Header: "Other Source of Income Amount", accessor: "otherSourceofIncomeAmount" },
      { Header: "Name of Organization", accessor: "nameofOrganization" },
      { Header: "Member Since", accessor: "memberSince" },
      { Header: "Position in Organization", accessor: "positioninOrganization" },
      { Header: "Name of Spouse", accessor: "nameofSpouse" },
      { Header: "Number of Children", accessor: "numberofchildren" },
      { Header: "Spouse Contact Number", accessor: "spouseContactnum" },
      { Header: "Number of Children in School", accessor: "numberofchildreninSchool" },
      { Header: "Number of Children out of School", accessor: "numberofchildrenoutSchool" },
      { Header: "Number of Employed Family Members", accessor: "numberofEmployedfammem" },
      { Header: "Number of Unemployed Family Members", accessor: "numberofUnemployedfammem" },
      {
        Header: "Actions",
        accessor: "detailedActions",
        Cell: ({ row }) => (
          <div>
            <button
              className="text-blue-500 hover:text-blue-700 mr-4"
              onClick={() => handleEdit(row.original)}
            >
              Edit
            </button>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => handleDelete(row.original)}
            >
              Delete
            </button>
          </div>
        ),
      },
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

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Data</h2>
      <div className="mb-4">
        <input
          value={filterInput}
          onChange={handleFilterChange}
          placeholder={"Search all columns"}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <table {...getTableProps()} className="min-w-full bg-white border border-gray-200">
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
                        <table className="min-w-full bg-white border border-gray-200">
                          <thead>
                            <tr>
                              {detailedColumns.map((column) => (
                                <th
                                  key={column.accessor}
                                  className="px-4 py-2 text-left text-sm font-medium text-gray-500"
                                >
                                  {column.Header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              {detailedColumns.map((column) => (
                                <td
                                  key={column.accessor}
                                  className="px-4 py-2 text-sm text-gray-700"
                                >
                                  {row.original[column.accessor]}
                                </td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
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
  );
};

export default UserData;
