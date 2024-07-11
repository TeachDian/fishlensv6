import React from "react";

const Contact = () => {
  return (
    <div className="grid grid-cols-2 gap-4 min-h-screen bg-white">
      {/* Left Side: Blank */}
      <div className="h-screen">
        {/* You can add content here if needed */}
      </div>

      {/* Right Side: Contact Form */}
      <section id="contact" className="flex justify-center items-center py-20 bg-white">
        <div className="max-w-md w-full mx-auto p-8 border border-gray-200 rounded-lg shadow-lg">
          <h2 className="text-center text-[#ADD1E9] mb-4">Contact us</h2>
          <h1 className="text-center text-2xl font-bold mb-6">Get in touch</h1>
          <p className="text-center mb-8">We'd love to hear from you. Please fill out this form.</p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">First name</label>
              <input
                type="text"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="First name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last name</label>
              <input
                type="text"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Last name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="you@company.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Message"
                rows="4"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-700">You agree to our friendly <a href="#" className="text-[#ADD1E9]">privacy policy</a>.</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#00003C] text-white py-2 rounded-md"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
