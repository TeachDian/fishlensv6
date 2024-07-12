import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests

const PublishArticles = () => {
  const [formData, setFormData] = useState({
    newsTitle: "",
    author: "",
    newsDetails: "",
    newsImage: null // Assuming you will handle file upload separately
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, newsImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data for submission
    const data = new FormData();
    data.append("newsTitle", formData.newsTitle);
    data.append("author", formData.author);
    data.append("newsDetails", formData.newsDetails);
    data.append("newsImage", formData.newsImage);

    try {
      const response = await axios.post("/api/news", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("News published successfully:", response.data);
      // Optionally, reset form state after successful submission
      setFormData({
        newsTitle: "",
        author: "",
        newsDetails: "",
        newsImage: null
      });
    } catch (error) {
      console.error("Error publishing news:", error);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Publish News</h2>
      <div id="publishArticles">
        <div className="text-2xl font-bold mb-4">Dashboard</div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">Card 1</div>
          <div className="bg-white p-4 rounded-lg shadow-md">Card 2</div>
          <div className="bg-white p-4 rounded-lg shadow-md">Card 3</div>
          <div className="bg-white p-4 rounded-lg shadow-md col-span-2">
            Card 4
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">Card 5</div>
          <div className="bg-white p-4 rounded-lg shadow-md">Card 6</div>
        </div>

        {/* Publish Button Section */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-10 py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            style={{ backgroundColor: "#00003C" }}
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default PublishArticles;
