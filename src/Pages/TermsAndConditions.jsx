import React, { useEffect } from 'react';
import  './LegalInfoStyle.scss';

const TermsAndConditions = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container legal-info-style py-10 px-4 max-w-4xl mx-auto text-gray-800">
      <h2 className="text-3xl font-bold mb-4">Terms and Conditions</h2>
      
      <p className="mb-4">Welcome to Revotic AI!</p>

      <p className="mb-4">
        These terms and conditions outline the rules and regulations for the use of Revotic AI Pvt Ltd's website, 
        located at{' '}
        <a href="https://revoticai.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
          https://revoticai.com
        </a>.
      </p>

      <p className="mb-4">
        By accessing this website, we assume you accept these terms and conditions. Do not continue to use 
        Revotic AI if you do not agree with all the terms and conditions stated on this page.
      </p>

      <p className="mb-4">
        The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice, 
        and all Agreements: "Client", "You", and "Your" refer to you, the person accessing this website and compliant 
        with the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us" refer to our Company. 
        "Party", "Parties", or "Us" refer to both the Client and ourselves.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Cookies</h3>
      <p className="mb-4">
        We use cookies. By accessing Revotic AI, you agree to the use of cookies in accordance with 
        Revotic AI Pvt Ltd’s Privacy Policy.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">License</h3>
      <p className="mb-4">
        Unless otherwise stated, Revotic AI Pvt Ltd and/or its licensors own the intellectual property rights 
        for all material on Revotic AI. All intellectual property rights are reserved. You may access this 
        for your own personal use, subject to restrictions set in these terms and conditions.
      </p>

      <p className="mb-2">You must not:</p>
      <ul className="list-disc list-inside ml-4 mb-4">
        <li>Republish material from Revotic AI</li>
        <li>Sell, rent, or sub-license material from Revotic AI</li>
        <li>Reproduce, duplicate, or copy material from Revotic AI</li>
        <li>Redistribute content from Revotic AI</li>
      </ul>

      <p className="mb-4">
        This Agreement shall begin on the date hereof. These Terms and Conditions were generated with the help of the{' '}
        <a href="https://seomagnifier.com/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
          Terms and Conditions Generator
        </a>.
      </p>

      <p className="mb-4">
        Parts of this website may offer users an opportunity to post and exchange opinions and information 
        in certain areas. Revotic AI Pvt Ltd does not filter, edit, publish, or review comments prior to 
        their presence on the website. Comments do not reflect the views and opinions of Revotic AI, its agents, 
        or affiliates. Comments reflect the views and opinions of the person who posted them.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h3>
      <p className="mb-2">If you have any questions about our Terms and Conditions, you can contact us:</p>
      <ul className="list-disc list-inside ml-4 mb-8">
        <li>
          By email:{' '}
          <a style={{color:"#7c6fa7ff",textTransform:"none"}} href="mailto:management.revoticai@gmail.com" className="text-blue-600 underline">
            management.revoticai@gmail.com
          </a>
        </li>
        <li>
          By visiting this page on our website:{' '}
          <a style={{color: "#7c6fa7ff", textDecoration:"none", textTransform:"none"}}
            href="https://www.revoticai.com/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.revoticai.com/contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TermsAndConditions;
