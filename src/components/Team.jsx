import React, { useState } from "react";
import FishImage1 from "../assets/img/fish1.jpg"; // replace with actual image paths
import FishImage2 from "../assets/img/fish2.jpg"; // replace with actual image paths
import FishImage3 from "../assets/img/fish3.jpg"; // replace with actual image paths

const Team = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const members = [
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
    <section id="team">
      <div className="w-full bg-white py-20 px-4 m-10">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          {members.map((article, index) => (
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
        {/* Modal Overlay */}
        {selectedArticle !== null && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 max-w-md mx-auto rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">
                {members[selectedArticle].title}
              </h2>
              <img
                className="w-full h-48 object-cover rounded-lg mb-4"
                src={members[selectedArticle].image}
                alt={members[selectedArticle].title}
              />
              <p className="text-gray-700">
                {members[selectedArticle].description}
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

export default Team;
