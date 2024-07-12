import React, { useMemo } from "react";
import { useTable, useFilters, useSortBy } from "react-table";
import Select from "react-select";

// Sample data (replace with actual data as needed)
const data = [
  {
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

const UserData = () => {
  // Define columns
  const columns = useMemo(
    () => [
      {
        Header: "Personal Data",
        columns: [
          { Header: "Region", accessor: "region" },
          { Header: "Province", accessor: "province" },
          { Header: "City/Town", accessor: "cityTown" },
          { Header: "Address", accessor: "address" },
          { Header: "Username", accessor: "username" },
          { Header: "First Name", accessor: "firstName" },
          { Header: "Middle Name", accessor: "middleName" },
          { Header: "Last Name", accessor: "lastName" },
          { Header: "Telephone", accessor: "telephone" },
          { Header: "Mobile Number", accessor: "mobileNumber" },
          { Header: "Email", accessor: "email" },
          { Header: "Birthdate", accessor: "birthdate" },
          { Header: "Place of Birth", accessor: "placeOfBirth" },
          { Header: "Sex", accessor: "sex" },
          { Header: "Civil Status", accessor: "civilStatus" },
          { Header: "Blood Type", accessor: "bloodType" },
          { Header: "Religion", accessor: "religion" },
          { Header: "Nationality", accessor: "nationality" },
          {
            Header: "Highest Educational Attainment",
            accessor: "highestEducationalAttainment",
          },
        ],
      },
      {
        Header: "Emergency Contact",
        columns: [
          { Header: "Emergency Contact", accessor: "emergencyContact" },
          {
            Header: "Emergency Contact Number",
            accessor: "emergencyContactNumber",
          },
          { Header: "Relationship", accessor: "emergrncyRelationship" },
          { Header: "Address", accessor: "emergrncyAddress" },
        ],
      },
      {
        Header: "Livelihood",
        columns: [
          { Header: "Main Source of Income", accessor: "mainSourceofIncome" },
          {
            Header: "Main Source of Income Amount",
            accessor: "mainSourceofIncomeAmount",
          },
          { Header: "Other Source of Income", accessor: "otherSourceofIncome" },
          {
            Header: "Other Source of Income Amount",
            accessor: "otherSourceofIncomeAmount",
          },
        ],
      },
      {
        Header: "Organization",
        columns: [
          { Header: "Name of Organization", accessor: "nameofOrganization" },
          { Header: "Member Since", accessor: "memberSince" },
          { Header: "Position in Organization", accessor: "positioninOrganization" },
        ],
      },
      {
        Header: "Family Data",
        columns: [
          { Header: "Name of Spouse", accessor: "nameofSpouse" },
          { Header: "Number of Children", accessor: "numberofchildren" },
          { Header: "Spouse Contact Number", accessor: "spouseContactnum" },
          {
            Header: "Number of Children in School",
            accessor: "numberofchildreninSchool",
          },
          {
            Header: "Number of Children out of School",
            accessor: "numberofchildrenoutSchool",
          },
          {
            Header: "Number of Employed Family Members",
            accessor: "numberofEmployedfammem",
          },
          {
            Header: "Number of Unemployed Family Members",
            accessor: "numberofUnemployedfammem",
          },
        ],
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data }, useFilters, useSortBy);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = tableInstance;

  const handleFilterChange = (columnId, value) => {
    setFilter(columnId, value || undefined);
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Data</h2>
      <div className="mb-4">
        {columns.map((column) =>
          column.columns.map((subColumn) => (
            <div key={subColumn.accessor} className="inline-block mr-4">
              <label className="block text-sm font-medium text-gray-700">
                {subColumn.Header}
              </label>
              <Select
                options={[
                  ...Array.from(new Set(data.map((item) => item[subColumn.accessor]))).map(
                    (value) => ({
                      value,
                      label: value,
                    })
                  ),
                ]}
                onChange={(option) =>
                  handleFilterChange(subColumn.accessor, option?.value)
                }
                isClearable
                placeholder={`Filter by ${subColumn.Header}`}
              />
            </div>
          ))
        )}
      </div>
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
              <tr {...row.getRowProps()} className="border-b">
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-4 py-2 text-sm text-gray-700"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
