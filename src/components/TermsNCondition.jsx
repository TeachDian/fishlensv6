import React from "react";
import { useNavigate } from "react-router-dom";

const TermsNCondition = () => {
  const navigate = useNavigate();

  const handleBackToRegister = () => {
    navigate('/register');
  };

  return (
    <section className="flex justify-center items-center min-h-screen py-20 bg-white">
      <div className="max-w-md w-full mx-auto p-8 border border-gray-200 rounded-lg shadow-lg">
        <h2 className="text-center text-[#ADD1E9] mb-4">Terms and Conditions</h2>
        <h1 className="text-center text-2xl font-bold mb-6">Please Read Carefully</h1>
        <p className="mb-4">
          Welcome to our application. If you continue to browse and use this application, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern [Your Company]'s relationship with you in relation to this application. If you disagree with any part of these terms and conditions, please do not use our application.
        </p>
        <p className="mb-4">
          The term '[Your Company]' or 'us' or 'we' refers to the owner of the application. The term 'you' refers to the user or viewer of our application.
        </p>
        <h2 className="font-bold mb-2">Use of the Application</h2>
        <p className="mb-4">
          This application uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties.
        </p>
        <h2 className="font-bold mb-2">License</h2>
        <p className="mb-4">
          Unless otherwise stated, [Your Company] and/or its licensors own the intellectual property rights for all material on [Your Company]. All intellectual property rights are reserved. You may access this from [Your Company] for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        <h2 className="font-bold mb-2">User Comments</h2>
        <p className="mb-4">
          Parts of this application offer an opportunity for users to post and exchange opinions and information in certain areas of the application. [Your Company] does not filter, edit, publish or review Comments prior to their presence on the application.
        </p>
        <button
          onClick={handleBackToRegister}
          className="w-full bg-[#00003C] text-white py-2 rounded-md mt-6"
        >
          Back to Register
        </button>
      </div>
    </section>
  );
};

export default TermsNCondition;
