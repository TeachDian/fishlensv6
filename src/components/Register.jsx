import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const religions = [
  { value: "", label: "Choose religion" },
  { value: "christianity", label: "Christianity" },
  { value: "romancatholic", label: "Roman Chatolic" },
  { value: "protestant", label: "Protestant" },
  { value: "iglesianicristo", label: "Iglecia Ni Cristo" },
  { value: "islam", label: "Islam" },
  { value: "hinduism", label: "Hinduism" },
  { value: "buddhism", label: "Buddhism" },
  { value: "other", label: "Other" },
  // Note: This list is not exhaustive. There are many other religions around the world. add nalang if gusto nyo add yung inyo >_<
];

const data = {
  regions: {
    "Region I – Ilocos Region": {
      provinces: {
        "Province 3": ["Town 5", "Town 6"],
        "Province 4": ["Town 7", "Town 8"],
      },
    },
    "Region II – Cagayan Valley": {
      provinces: {
        "Province 1": ["Town 1", "Town 2"],
        "Province 2": ["Town 3", "Town 4"],
      },
    },
    "Region III – Central Luzon": {
      provinces: {
        "Province 3": ["Town 5", "Town 6"],
        "Province 4": ["Town 7", "Town 8"],
      },
    },
    "Region IV‑A – CALABARZON": {
      provinces: {
        "Batangas Province": [
          "Batangas City",
          "Agoncillo",
          "Alitagtag",
          "Balayan",
          "Balete",
          "Bauan",
          "Calaca",
          "Calatagan",
          "Cuenca",
          "Ibaan",
          "Laurel",
          "Lemery",
          "Lian",
          "Lobo",
          "Mabini",
          "Malvar",
          "Mataasnakahoy",
          "Nasugbu",
          "Padre Garcia",
          "Rosario",
          "San Jose",
          "San Juan",
          "San Luis",
          "San Nicolas",
          "San Pascual",
          "Santa Teresita",
          "Santo Tomas",
          "Taal",
          "Talisay",
          "Tanauan",
          "Taysan",
          "Tingloy",
          "Tuy",
        ],

        "Cavite Province": [
          "Bacoor City",
          "Cavite City",
          "Dasmariñas City",
          "General Trias City",
          "Imus City",
          "Trece Martires City",
          "Alfonso",
          "Amadeo",
          "Carmona",
          "General Emilio Aguinaldo",
          "General Mariano Alvarez",
          "Indang",
          "Kawit",
          "Magallanes",
          "Maragondon",
          "Mendez",
          "Naic",
          "Noveleta",
          "Rosario",
          "Silang",
          "Tagaytay City",
          "Tanza",
          "Ternate",
        ],

        "Laguna Province": [
          "Alaminos",
          "Bay",
          "Biñan City",
          "Cabuyao City",
          "Calamba City",
          "Cavinti",
          "Famy",
          "Kalayaan",
          "Liliw",
          "Los Baños",
          "Luisiana",
          "Lumban",
          "Mabitac",
          "Magdalena",
          "Majayjay",
          "Nagcarlan",
          "Pakil",
          "Pangil",
          "Pagsanjan",
          "Paete",
          "Pila",
          "Rizal",
          "San Pablo City",
          "San Pedro City",
          "Santa Cruz",
          "Santa Maria",
          "Siniloan",
          "Victoria",
        ],
        "Quezon Province": [
          "Lucena City",
          "Agdangan",
          "Alabat",
          "Atimonan",
          "Buenavista",
          "Burdeos",
          "Calauag",
          "Candelaria",
          "Catanauan",
          "Dolores",
          "General Luna",
          "General Nakar",
          "Guinayangan",
          "Gumaca",
          "Infanta",
          "Jomalig",
          "Lopez",
          "Luban",
          "Macalelon",
          "Mauban",
          "Mulanay",
          "Padre Burgos",
          "Pagbilao",
          "Panukulan",
          "Patnanungan",
          "Perez",
          "Pitogo",
          "Pilar",
          "Polillo",
          "Quezon",
          "Real",
          "Sampaloc",
          "San Andres",
          "San Antonio",
          "San Francisco",
          "San Narciso",
          "Sariaya",
          "Tagkawayan",
          "Tayabas City",
          "Tiaong",
          "Unisan",
        ],
        "Rizal Province": [
          "Angono",
          "Antipolo City",
          "Baras",
          "Binangonan",
          "Cainta",
          "Cardona",
          "Jalajala",
          "Morong",
          "Pililla",
          "Rodriguez",
          "San Mateo",
          "Tanay",
          "Taytay",
          "Teresa",
        ],
      },
    },
    "MIMAROPA Region": {
      provinces: {
        "Province 3": ["Town 5", "Town 6"],
        "Province 4": ["Town 7", "Town 8"],
      },
    },
    "Region V – Bicol Region": {
      provinces: {
        "Province 3": ["Town 5", "Town 6"],
        "Province 4": ["Town 7", "Town 8"],
      },
    },
    "Region VI – Western Visayas": {
      provinces: {
        "Province 3": ["Town 5", "Town 6"],
        "Province 4": ["Town 7", "Town 8"],
      },
    },
    "Region VII – Central Visayas": {
      provinces: {
        "Province 3": ["Town 5", "Town 6"],
        "Province 4": ["Town 7", "Town 8"],
      },
    },
    "Region VIII – Eastern Visayas": {
      provinces: {
        "Province 3": ["Town 5", "Town 6"],
        "Province 4": ["Town 7", "Town 8"],
      },
    },
    "Region IX – Zamboanga Peninsula": {
      provinces: {
        "Province 3": ["Town 5", "Town 6"],
        "Province 4": ["Town 7", "Town 8"],
      },
    },
    "Region X – Northern Mindanao": {
      provinces: {
        "Province 3": ["Town 5", "Town 6"],
        "Province 4": ["Town 7", "Town 8"],
      },
    },
    "Region XI – Davao Region": {
      provinces: {
        "Province 3": ["Town 5", "Town 6"],
        "Province 4": ["Town 7", "Town 8"],
      },
    },
    "Region XII – SOCCSKSARGEN": {
      provinces: {
        "Province 3": ["Town 5", "Town 6"],
        "Province 4": ["Town 7", "Town 8"],
      },
    },
    "Region XIII – Caraga": {
      provinces: {
        "Province 3": ["Town 5", "Town 6"],
        "Province 4": ["Town 7", "Town 8"],
      },
    },
    "NCR – National Capital Region": {
      provinces: {
        "Province 3": ["Town 5", "Town 6"],
        "Province 4": ["Town 7", "Town 8"],
      },
    },
    "CAR – Cordillera Administrative Region": {
      provinces: {
        "Province 3": ["Town 5", "Town 6"],
        "Province 4": ["Town 7", "Town 8"],
      },
    },
    "BARMM – Bangsamoro Autonomous Region in Muslim Mindanao": {
      provinces: {
        "Province 3": ["Town 5", "Town 6"],
        "Province 4": ["Town 7", "Town 8"],
      },
    },
    "NIR – Negros Island Region": {
      provinces: {
        "Province 3": ["Town 5", "Town 6"],
        "Province 4": ["Town 7", "Town 8"],
      },
    },
    // Add more regions, provinces, and towns as needed
  },
};

const Register = () => {
  const [formData, setFormData] = useState({
    //

    // personal data
    region: "",
    province: "",
    cityTown: "",
    address: "",
    password: "",
    firstName: "",
    middleName: "",
    lastName: "",
    telephone: "",
    mobileNumber: "",
    email: "",
    birthdate: "",
    placeOfBirth: "",
    sex: "",
    civilStatus: "",
    bloodType: "",
    religion: "",
    nationality: "",
    highestEducationalAttainment: "",

    // emergency contact
    emergencyContact: "",
    emergencyContactNumber: "",
    emergrncyRelationship: "",
    emergrncyAddress: "",

    // livelihood
    mainSourceofIncome: "", // income source like farming, fishing, etc.
    mainSourceofIncomeAmount: "",
    otherSourceofIncome: "", // income source like other basta non-agriculture
    otherSourceofIncomeAmount: "",

    // organization
    nameofOrganization: "",
    memberSince: "",
    positioninOrganization: "",

    // family data
    nameofSpouse: "",
    numberofchildren: "",
    spouseContactnum: "",
    numberofchildreninSchool: "",
    numberofchildrenoutSchool: "",
    numberofEmployedfammem: "",
    numberofUnemployedfammem: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRegionChange = (e) => {
    setFormData({
      ...formData,
      region: e.target.value,
      province: "",
      cityTown: "",
    });
  };

  const handleProvinceChange = (e) => {
    setFormData({
      ...formData,
      province: e.target.value,
      cityTown: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, then redirect to the admin dashboard
    console.log(formData);
    navigate("/login");
  };

  const regions = Object.keys(data.regions);
  const provinces = formData.region
    ? Object.keys(data.regions[formData.region].provinces)
    : [];
  const citiesTowns = formData.province
    ? data.regions[formData.region].provinces[formData.province]
    : [];

  return (
    <section
      id="register"
      className="flex justify-center items-center min-h-screen py-20 bg-white"
    >
      <div className="max-w-2xl w-full mx-auto p-8 border border-gray-200 rounded-lg shadow-lg">
        <h2 className="text-center text-[#ADD1E9] mb-4">Register</h2>
        <h1 className="text-center text-2xl font-bold mb-6">
          Create an Account
        </h1>
        <p className="text-center mb-8">
          Please fill out this form to create an account.
        </p>
        <form onSubmit={handleSubmit}>
          {/* Region, Province, City/Town */}
          <div className="mb-4">
            <label className="block text-gray-700">Region *</label>
            <select
              name="region"
              value={formData.region}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              onChange={handleRegionChange}
              required
            >
              <option value="">Select Region</option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Province *</label>
            <select
              name="province"
              value={formData.province}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              onChange={handleProvinceChange}
              disabled={!formData.region}
              required
            >
              <option value="">Select Province</option>
              {provinces.map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">City/Town *</label>
            <select
              name="cityTown"
              value={formData.cityTown}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              onChange={handleChange}
              disabled={!formData.province}
              required
            >
              <option value="">Select City/Town</option>
              {citiesTowns.map((cityTown) => (
                <option key={cityTown} value={cityTown}>
                  {cityTown}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address *</label>
            <input
              type="text"
              name="address"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Address"
              onChange={handleChange}
              required
            />
          </div>

          {/* Authentications and password */}
          <div className="mb-4">
            <label className="block text-gray-700">Password *</label>
            <input
              type="password"
              name="password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Repeat Password *</label>
            <input
              type="password"
              name="password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Password"
              onChange={handleChange}
              required
            />
          </div>

          {/* First Name, Middle Name, Last Name */}
          <div className="mb-4">
            <label className="block text-gray-700">First Name *</label>
            <input
              type="text"
              name="firstName"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter First Name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Middle Name</label>
            <input
              type="text"
              name="middleName"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Middle Name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name *</label>
            <input
              type="text"
              name="lastName"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Last Name"
              onChange={handleChange}
              required
            />
          </div>

          {/* Telephone, Mobile Number */}
          <div className="mb-4">
            <label className="block text-gray-700">Telephone</label>
            <input
              type="tel"
              name="telephone"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Telephone"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mobile Number *</label>
            <input
              type="tel"
              name="mobileNumber"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Ex. +639412345678"
              onChange={handleChange}
              required
            />
          </div>

          {/* Email, Birthdate, Place of Birth */}
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Email Address"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Birthdate *</label>
            <input
              type="date"
              name="birthdate"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Place of Birth *</label>
            <input
              type="text"
              name="placeOfBirth"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Place of Birth"
              onChange={handleChange}
              required
            />
          </div>

          {/* Sex, Civil Status */}
          <div className="mb-4">
            <label className="block text-gray-700">Sex *</label>
            <select
              name="sex"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              onChange={handleChange}
              required
            >
              <option value="">Choose option</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Civil Status *</label>
            <select
              name="civilStatus"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              onChange={handleChange}
              required
            >
              <option value="">Choose option</option>
              <option value="married">Married</option>
              <option value="single">Single</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>

          {/* Blood Type, Religion */}
          <div className="mb-4">
            <label className="block text-gray-700">Blood Type *</label>
            <select
              name="bloodType"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              onChange={handleChange}
              required
            >
              <option value="">Choose option</option>
              <option value="A+">A Positive (A+)</option>
              <option value="A-">A Negative (A-)</option>
              <option value="B+">B Positive (B+)</option>
              <option value="B-">B Negative (B-)</option>
              <option value="AB+">AB Positive (AB+)</option>
              <option value="AB-">AB Negative (AB-)</option>
              <option value="O+">O Positive (O+)</option>
              <option value="O-">O Negative (O-)</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Religion *</label>
            <select
              name="religion"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              onChange={handleChange}
              required
            >
              {religions.map((religion) => (
                <option key={religion.value} value={religion.value}>
                  {religion.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Nationality *</label>
            <input
              type="text"
              name="nationality"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Your Nationality"
              onChange={handleChange}
              required
            />
          </div>

          {/* Highest Educational Attainment */}
          <div className="mb-4">
            <label className="block text-gray-700">
              Highest Educational Attainment
            </label>
            <select
              name="highestEducationalAttainment"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              onChange={handleChange}
            >
              <option value="">Choose option</option>
              <option value="Elementary">Elementary</option>
              <option value="High School">High School</option>
              <option value="College">College</option>
              <option value="Vocational">Vocational</option>
              <option value="Masters Degree">Master's Degree</option>
              <option value="Doctoral">Doctoral</option>
            </select>
          </div>

          {/* Emergency Contact */}
          <div className="mb-4">
            <label className="block text-gray-700">
              In Case Of Emergency *
            </label>
            <input
              type="text"
              name="emergencyContact"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Emergency Contact Name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Contact *</label>
            <input
              type="text"
              name="emergencyContactNumber"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Emergency Contact Number"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Relationship</label>
            <input
              type="text"
              name="emergrncyRelationship"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Emergency Contact Relationship"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="emergrncyAddress"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Emergency Contact Address"
              onChange={handleChange}
            />
          </div>

          {/* Lively Hood */}
          <div className="mb-4">
            <label className="block text-gray-700">
              Main Source Of Income *
            </label>
            <input
              type="text"
              name="mainSourceofIncome"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Please Specify Your Main Source Of Income"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Amount *</label>
            <input
              type="text"
              name="mainSourceofIncomeAmount"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Please Specify The Amount"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Other Source Of Income *
            </label>
            <input
              type="text"
              name="otherSourceofIncome"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Please Specify Your Other Source Of Income"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Amount *</label>
            <input
              type="text"
              name="otherSourceofIncomeAmount"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Please Specify The Amount"
              onChange={handleChange}
              required
            />
          </div>

          {/* Organization */}
          <div className="mb-4">
            <label className="block text-gray-700">Name of Organization</label>
            <input
              type="text"
              name="nameofOrganization"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Please Enter The Name Of The Organization You Are Currently Active"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Member since</label>
            <input
              type="date"
              name="memberSince"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Position/Official Desination
            </label>
            <input
              type="text"
              name="positioninOrganization"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Your Position"
              onChange={handleChange}
            />
          </div>

          {/* Family data */}
          <div className="mb-4">
            <label className="block text-gray-700">Name of spouse</label>
            <input
              type="text"
              name="nameofSpouse"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Spouse Name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Number Of Children</label>
            <input
              type="number"
              name="numberofchildren"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Number Of Your Children"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Spouse Contact Number</label>
            <input
              type="tel"
              name="spouseContactnum"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Spouse Contact Number"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Children In School</label>
            <input
              type="number"
              name="numberofchildreninSchool"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Number Children In School"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Children Not In School
            </label>
            <input
              type="number"
              name="numberofchildrenoutSchool"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Number Children Not In School"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Employed Family Member
            </label>
            <input
              type="number"
              name="numberofEmployedfammem"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Number Of Employed Family Member"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Unemployed Family Member
            </label>
            <input
              type="number"
              name="numberofUnemployedfammem"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Number Of Unemployed Family Member"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="agree"
                className="mr-2"
                onChange={handleChange}
                required
              />
              <span className="text-gray-700">
                I Agree to the{" "}
                <a href="/termsncondition" className="text-[#ADD1E9]">
                  Terms & Conditions
                </a>
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#00003C] text-white py-2 rounded-md"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
