import React from "react";
import Swal from 'sweetalert2'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "35d9589c-de2f-442e-ae7b-b38831532117");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 min-h-screen bg-white">
      {/* Left Side: Blank */}
      <div className="h-screen">{/* You can add content here if needed */}</div>

      {/* Right Side: Contact Form */}
      <section
        id="contact"
        className="flex justify-center items-center py-20 bg-white"
      >
        <div className="max-w-md w-full mx-auto p-8 border border-gray-200 rounded-lg shadow-lg">
          <h2 className="text-center text-[#ADD1E9] mb-4">Contact us</h2>
          <h1 className="text-center text-2xl font-bold mb-6">Get in touch</h1>
          <p className="text-center mb-8">
            We'd love to hear from you. Please fill out this form.
          </p>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Subject</label>
              <input
                name="subject"
                type="text"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="What is your concern"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                name="fullname"
                type="text"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                name="email"
                type="email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Your@email.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Message"
                rows="4"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-700">
                  You agree to our friendly{" "}
                  <a href="/" className="text-[#ADD1E9]">
                    privacy policy
                  </a>
                  .
                </span>
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
