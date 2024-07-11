import React from "react";
import Laptop from "../assets/img/fishl1.png";

const About = () => {
  return (
    <section id="about">
      <div className="w-full bg-white py-60 px-4 m-10">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
          <div className="flex flex-col justify-center">
            <p className="text-[#00003C] font-bold text-6xl pb-3">about</p>
            <h1 className="md:text-3xl sm:text-2xl text-1xl pb-2 font-medium py-2 text-[#00003C]">
              About FishLens
            </h1>
            <p className="pb-5 text-[#7b9fb8]">
              FishLens is a revolutionary mobile application that utilizes the
              power of computer vision technology to identify diseases in
              freshwater fish. Developed with the goal of supporting the
              sustainability of the freshwater fish industry, FishLens empowers
              fish farmers, consumers, and industry professionals with a
              user-friendly tool for early and accurate disease detection.
            </p>
            <h1 className="md:text-3xl sm:text-2xl text-1xl pb-2 font-medium py-2 text-[#00003C]">
              Our Mission
            </h1>
            <p className="pb-5 text-[#7b9fb8]">
              We are committed to providing innovative solutions that promote
              the health and well-being of freshwater fish populations. By
              equipping stakeholders with the knowledge to identify diseases at
              an early stage, FishLens aims to: Minimize economic losses for
              fish farmers Enhance the quality and safety of fish products for
              consumers Contribute to the sustainable management of freshwater
              resources
            </p>
            <h1 className="md:text-3xl sm:text-2xl text-1xl pb-2 font-medium py-2 text-[#00003C]">
              The Technology Behind FishLens
            </h1>
            <p className="pb-5 text-[#7b9fb8]">
              FishLens leverages the power of machine learning algorithms,
              specifically Convolutional Neural Networks (CNNs), to analyze
              images of freshwater fish and detect the presence of various
              diseases. Our comprehensive image database, meticulously compiled
              in collaboration with fish disease experts, allows FishLens to
              recognize a wide range of illnesses with exceptional accuracy.
            </p>
            <h1 className="md:text-3xl sm:text-2xl text-1xl pb-2 font-medium py-2 text-[#00003C]">
              Benefits of FishLens
            </h1>
            <p className="pb-5 text-[#7b9fb8]">
              Early Disease Detection: FishLens empowers users to identify
              diseases at an early stage, enabling prompt intervention and
              treatment, minimizing disease outbreaks and associated economic
              losses. Improved Fish Health: Early and accurate disease detection
              contributes to improved fish health and overall well-being,
              leading to higher quality fish products for consumers. Enhanced
              Food Safety: By ensuring the health of fish populations, FishLens
              promotes food safety for consumers. Sustainable Practices:
              FishLens supports sustainable aquaculture practices by promoting
              responsible fish health management.
            </p>
            <h1 className="md:text-3xl sm:text-2xl text-1xl pb-2 font-medium py-2 text-[#00003C]">
              Who We Are
            </h1>
            <p className="pb-5 text-[#7b9fb8]">
              The FishLens team is comprised of passionate individuals dedicated
              to the advancement of the freshwater fish industry. We combine
              expertise in computer science, fisheries, and aquaculture to
              develop innovative solutions that address the challenges faced by
              fish farmers and industry stakeholders.
            </p>
            <button className="bg-[#00003C] text-[#ffffff] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
