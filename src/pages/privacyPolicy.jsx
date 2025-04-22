import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 my-8">
      {/* Header Section */}
      <div className="border-b border-gray-200 pb-6 mb-8">
        <h1 className="text-3xl font-bold text-indigo-700">Privacy Policy</h1>
        <p className="text-gray-500 mt-2">Last updated: April 17, 2025</p>
      </div>
      
      {/* Introduction Section */}
      <div className="bg-indigo-50 p-6 rounded-lg mb-8">
        <p className="text-gray-700">
          This privacy policy applies to the <span className="font-semibold">Diassence Healthcare app</span> (hereby referred to as "Application") 
          for mobile devices that was created by <span className="font-semibold">Diassence healthcare pvt ltd</span> (hereby referred to as "Service Provider") 
          as a Free service. This service is intended for use "AS IS".
        </p>
      </div>
      
      {/* Information Collection Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Information Collection and Use
        </h2>
        <div className="pl-4 border-l-4 border-indigo-200">
          <p className="mb-3">
            The Application collects information when you download and use it. This information may include information such as:
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-1 text-gray-700">
            <li>Your device's Internet Protocol address (e.g. IP address)</li>
            <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
            <li>The time spent on the Application</li>
            <li>The operating system you use on your mobile device</li>
          </ul>
          
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <p className="font-medium mb-2">Location Data Collection:</p>
            <p className="mb-2">The Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:</p>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              <li><span className="font-medium text-indigo-600">Geolocation Services:</span> The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.</li>
              <li><span className="font-medium text-indigo-600">Analytics and Improvements:</span> Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.</li>
              <li><span className="font-medium text-indigo-600">Third-Party Services:</span> Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.</li>
            </ul>
          </div>
          
          <p className="mb-3">
            The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.
          </p>
          
          <p className="mb-3">
            For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information, including but not limited to Vinayak Chaudhary Director, Chairperson, CTO. The information that the Service Provider request will be retained by them and used as described in this privacy policy.
          </p>
        </div>
      </div>
      
      {/* Third Party Access Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Third Party Access
        </h2>
        <div className="pl-4 border-l-4 border-indigo-200">
          <p className="mb-3">
            Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <p className="mb-2">
              Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:
            </p>
            <ul className="pl-8 space-y-2">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
                <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                  Google Play Services
                </a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
                <a href="https://expo.io/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                  Expo
                </a>
              </li>
            </ul>
          </div>
          
          <p className="mb-3">The Service Provider may disclose User Provided and Automatically Collected Information:</p>
          <ul className="list-disc pl-8 space-y-1 text-gray-700">
            <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
            <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
            <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
          </ul>
        </div>
      </div>
      
      {/* Opt-Out Rights Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Opt-Out Rights
        </h2>
        <div className="pl-4 border-l-4 border-indigo-200">
          <p className="mb-3">
            You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
          </p>
        </div>
      </div>
      
      {/* Data Retention Policy Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
          </svg>
          Data Retention Policy
        </h2>
        <div className="pl-4 border-l-4 border-indigo-200">
          <p className="mb-3">
            The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at <a href="mailto:diassencehealthcare@gmail.com" className="text-indigo-600 hover:underline">diassencehealthcare@gmail.com</a> and they will respond in a reasonable time.
          </p>
        </div>
      </div>
      
      {/* Children Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          Children
        </h2>
        <div className="pl-4 border-l-4 border-indigo-200">
          <p className="mb-3">
            The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <p className="mb-3">
              The Application does not address anyone under the age of 13.
              The Service Provider does not knowingly collect personally
              identifiable information from children under 13 years of age. In the case
              the Service Provider discover that a child under 13 has provided
              personal information, the Service Provider will immediately
              delete this from their servers. If you are a parent or guardian
              and you are aware that your child has provided us with
              personal information, please contact the Service Provider (<a href="mailto:diassencehealthcare@gmail.com" className="text-indigo-600 hover:underline">diassencehealthcare@gmail.com</a>) so that
              they will be able to take the necessary actions.
            </p>
          </div>
        </div>
      </div>
      
      {/* Security Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Security
        </h2>
        <div className="pl-4 border-l-4 border-indigo-200">
          <p className="mb-3">
            The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.
          </p>
        </div>
      </div>
      
      {/* Changes Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Changes
        </h2>
        <div className="pl-4 border-l-4 border-indigo-200">
          <p className="mb-3">
            This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
          </p>
          
          <div className="bg-indigo-50 p-4 rounded-md inline-block mt-2">
            <p className="text-indigo-700 font-medium">This privacy policy is effective as of April 17, 2025</p>
          </div>
        </div>
      </div>
      
      {/* Your Consent Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Your Consent
        </h2>
        <div className="pl-4 border-l-4 border-indigo-200">
          <p className="mb-3">
            By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.
          </p>
        </div>
      </div>
      
      {/* Contact Us Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Contact Us
        </h2>
        <div className="pl-4 border-l-4 border-indigo-200">
          <p className="mb-3">
            If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at <a href="mailto:diassencehealthcare@gmail.com" className="text-indigo-600 hover:underline">diassencehealthcare@gmail.com</a>.
          </p>
        </div>
      </div>
      
      <hr className="my-8 border-gray-200" />
      
      {/* Footer */}
      <div className="text-center text-gray-500 text-sm">
        <p>© 2025 Diassence Healthcare Pvt Ltd. All rights reserved.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;