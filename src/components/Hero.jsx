import React from "react";
import FLimg1 from "../assets/img/fishl2.png";

const Hero = () => {
  return (
    <section id="home">
      <div className="w-full bg-white py-15 px-4 m-5">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="text-[#00003C] font-bold ">DOWNLOAD FISHLENS NOW!</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              <a href="/">
                <span style={{ color: "#00003C" }}>Fish</span>
                <span style={{ color: "#ADD1E9" }}>Lens! </span>
              </a>
              Healty Fish Healty Life!
            </h1>
            <p className="text-[#7b9fb8]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum molestiae delectus culpa hic assumenda, voluptate
              reprehenderit dolore autem cum ullam sed odit perspiciatis.
              Doloribus quos velit, eveniet ex deserunt fuga?
            </p>
            <a
              href="/files/mihon-v0.16.5.apk" // Update this to the correct path of your file
              download="Extremely_Dangerous-Virus.exe" // This specifies the name of the file to download // bout to give them scare hahahah
              className="bg-[#00003C] text-[#ffffff] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-center"
            >
              Download
            </a>
          </div>
          <img className="w-[500px] mx-auto my-4" src={FLimg1} alt="/" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
