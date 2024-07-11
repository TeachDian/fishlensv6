import React, { useState } from "react";
import FishImage1 from "../assets/img/fish1.jpg"; // replace with actual image paths
import FishImage2 from "../assets/img/fish2.jpg"; // replace with actual image paths
import FishImage3 from "../assets/img/fish3.jpg"; // replace with actual image paths

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      image: FishImage1,
      title: "Fish Disease 1",
      description:
        "Description of fish disease 1. Symptoms, causes, and treatment options.",
    },
    {
      image: FishImage2,
      title: "Fish Disease 2",
      description:
        "Description of fish disease 2. Symptoms, causes, and treatment options.",
    },
    {
      image: FishImage3,
      title: "Fish Disease 3",
      description:
        "Description of fish disease 3. Symptoms, causes, and treatment options.",
    },
    {
      image: FishImage1,
      title: "Fish Disease 1",
      description:
        "Description of fish disease 1. Symptoms, causes, and treatment options.",
    },
    {
      image: FishImage2,
      title: "Fish Disease 2",
      description:
        "Description of fish disease 2. Symptoms, causes, and treatment options.",
    },
    {
      image: FishImage3,
      title: "Fish Disease 3",
      description:
        "Description of fish disease 3. Symptoms, causes, and treatment options.",
    },
  ];

  const openModal = (index) => {
    setSelectedArticle(index);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <section id="blog">
      <div className="w-full bg-white py-20 px-4 m-10">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
            >
              <img
                className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
                src={article.image}
                alt={article.title}
                onClick={() => openModal(index)}
              />
              <h2 className="text-2xl font-bold text-center py-4">
                {article.title}
              </h2>
              <p className="text-center text-gray-600 px-4">
                {article.description}
              </p>
            </div>
          ))}
        </div>

        {/* Newsletter Signup Section */}
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 mt-16">
          <div className="lg:col-span-2 my-4">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Want tips & tricks to keep your fish healthy?
            </h1>
            <p>Sign up to our newsletter and stay up to date.</p>
          </div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <input
                className="p-3 flex w-full border border-gray-300 rounded-md text-black"
                type="email"
                placeholder="Enter Email"
              />
              <button className="bg-[#00003C] text-[#ffffff] rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
                Notify Me
              </button>
            </div>
            <p>
              We care about the protection of your data. Read our{" "}
              <span className="text-[#00003C]">Privacy Policy.</span>
            </p>
          </div>
        </div>
        {/* Modal Overlay */}
        {selectedArticle !== null && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 max-w-md mx-auto rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">
                {articles[selectedArticle].title}
              </h2>
              <img
                className="w-full h-48 object-cover rounded-lg mb-4"
                src={articles[selectedArticle].image}
                alt={articles[selectedArticle].title}
              />
              <p className="text-gray-700">
                {articles[selectedArticle].description}
              </p>
              <button
                className="mt-4 bg-[#00003C] text-white py-2 px-4 rounded-md"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
