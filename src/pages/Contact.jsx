  import { useState } from "react";
  
  // import axios from "axios";
  import { Mail, MapPin, Phone, Clock } from "lucide-react";

  export default function Contact() {
    

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      setSuccess(false);
    
      const url =
        "https://script.google.com/macros/s/AKfycbzsQ3h_8_-X6gMncwuwohrLm-z-KdWeMykv_QT0kRLGphxLPErCo1hGyXmz1lcCL1y1/exec";
    
      const formData = new URLSearchParams();
      formData.append("Name", e.target.name.value.trim());
      formData.append("Email", e.target.email.value.trim());
      formData.append("Phone", e.target.phone?.value.trim() || "");
      formData.append("Subject", e.target.subject?.value.trim() || "");
      formData.append("Message", e.target.message?.value.trim() || "");
      formData.append("Feedback", e.target.feedback?.value.trim() || "");
    
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      })
        .then((res) => res.json()) // 👈 Convert to JSON
        .then((data) => {
          if (data.status === "success") {
            alert(data.message);
            setSuccess(true);
            e.target.reset(); // Clear the form
          } else {
            alert(`Error: ${data.message}`);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Something went wrong! Please try again.");
        })
        .finally(() => setLoading(false));
    };
    
    

    // const [selectedClinic, setSelectedClinic] = useState("Renal Care Center");

    return (
      <div className="bg-gray-100 dark:bg-gray-900 py-12 px-6">
        <div className="container mx-auto text-center max-w-6xl">

          
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Get in Touch with <span className="text-blue-500">Diassence</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We specialize in kidney disease treatment and dialysis support. Reach out for consultations or inquiries.
          </p>
          <div className="mt-16 text-center">
        <h2 className="text-2xl mt-6 sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
          Our Services are Available in 
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xl font-semibold text-gray-800 dark:text-white">
          <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-xl">Mathura</div>
          <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-xl">Delhi-NCR</div>
        </div>
      </div>
          {/* Clinic Selector */}
          {/* <div className="mt-6 flex justify-center flex-wrap gap-3">
            {[ "Dialysis Unit"].map((clinic) => (
              <button
                key={clinic}
                className={`px-4 py-2 rounded-full border transition-all duration-300 ease-in-out ${
                  selectedClinic === clinic
                    ? "bg-black text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => setSelectedClinic(clinic)}
              >
                {clinic}
              </button>
            ))}
          </div> */}

          {/* Contact Info */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Phone size={20} />,
                title: "Phone",
                info: "+91 7017815684 ",
                desc: "Mon-Sat from 9am to 8pm",
              },
              {
                icon: <Mail size={20} />,
                title: "Email",
                info: "diassencehealthcare@gmail.com",
                desc: "24/7 support",
              },
              {
                icon: <MapPin size={20} />,
                title: "Address",
                info: "51, Manas Nagar Maholi Road ,  Mathura -281001   ",
                desc: "Visit us in person",
              },
              {
                icon: <Clock size={20} />,
                title: "Working Hours",
                info: " 24/7 hrs open ",
                desc: "Sunday dialysis available on request",
              },
            ].map((item, index) => (
          <div
    key={index}
    className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center border border-gray-200 dark:border-gray-700"
  >
    {/* Title and Icon in the Same Line */}
    <div className="flex items-center space-x-3">
      <div className="text-blue-500">{item.icon}</div>
      <p className="font-bold text-black dark:text-white text-lg">{item.title}</p>
    </div>

    {/* Info and Description */}
    <div className="mt-2">
      <p className="text-blue-600 text-lg font-medium">{item.info}</p>
      <p className="text-gray-500 text-sm">{item.desc}</p>
    </div>
  </div>


            
            ))}
          </div>

          {/* Contact Form */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <form onSubmit={handleSubmit} className="bg-blue-500 text-white rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-center">Request a Consultation</h3>

          {success && <p className="text-green-200 text-center mt-4">Submitted Successfully! ✅</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="bg-white text-black mt-4 p-3 w-full border rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-white text-black mt-4 p-3 w-full border rounded-md"
              required
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="bg-white text-black mt-4 p-3 w-full border rounded-md"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="bg-white text-black mt-4 p-3 w-full border rounded-md"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            className="bg-white text-black mt-4 p-3 w-full border rounded-md"
            rows="4"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-4 w-full bg-gradient-to-r from-blue-500 to-indigo-100 text-white text-xl font-bold p-3 rounded-lg"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message ✈️"}
          </button>
        </form>
            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-md w-full">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4607.158338799913!2d77.65856749714311!3d27.480430079484393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973719b82e87e5f%3A0x3781eef4a758a2ae!2sDiassence%20Dialysis%20Center%20at%20Jai%20Gurudev%20Multispeciality%20Hospital!5e0!3m2!1sen!2sin!4v1739358006312!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="border-none"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              </div>
            
          </div>
          
        </div>
        
      </div>
    );
  }







