import { useNavigate } from "react-router-dom";
import downloadBG from "/assets/downloadBG.jpg";

function DialysisMobileApp() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${downloadBG})`,
      }}
    >
      {/* Injecting CSS animation */}
      <style>
        {`
          @keyframes slideUpSlow {
            0% {
              transform: translateY(100%);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>

      <div
        className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-8 text-center relative"
        style={{
          animation: "slideUpSlow 1.5s ease-out",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">
            DialysisBuddy Connect
          </h1>
          <p className="text-gray-600 mb-6">
            Manage your dialysis treatment with ease, right from your smartphone.
          </p>
        </div>

        {/* App Features Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-sm text-gray-600 mt-2">Health Tracking</span>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <span className="text-sm text-gray-600 mt-2">Medical Records</span>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="text-sm text-gray-600 mt-2">Secure Data</span>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => window.open("https://play.google.com", "_blank")}
            className="w-full flex items-center justify-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Download on Google Play
          </button>

          <button
            onClick={() => window.open("https://www.apple.com/app-store", "_blank")}
            className="w-full flex items-center justify-center bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Download on App Store
          </button>
        </div>
      </div>
    </div>
  );
}

export default DialysisMobileApp;
