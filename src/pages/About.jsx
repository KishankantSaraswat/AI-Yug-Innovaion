import doc1 from "/assets/doc.jpg";
import doc0 from "/assets/doc1.jpg";
import sir from "/assets/sir.jpg";
import mam from "/assets/mam.jpg";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";





const mainteam = [
  {
    name: "Vinayak Chaudhary",
    post: "Director, Chairperson, CTO",
    img: sir, // Replace with actual image URL
  },
  
  {
    name: "Sataxi Chaudhary",
    post: "Director, CEO",
    img: mam, // Replace with actual image URL
  },
];


const About = () => {
  const navigate = useNavigate();
  return (
    
    <div className="container mx-auto text-center justify-between px-8 lg:px-20 py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-lg font-semibold">
          About Diassence
        </button>
        <h2 className="text-3xl mt-6 sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Transforming Dialysis Care <br />
          <span className="text-blue-500">For Your Health</span>
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 ">
        
Diassence Healthcare Pvt. Ltd., established in 2020, is a proactive kidney care and dialysis services provider based in Mathura, Uttar Pradesh, India. The company specializes in offering comprehensive resources-including medical professionals, staff, consumables, and equipment—to operate in-hospital dialysis centers.  The company has developed dialysis centers in Agra , Mathura , Bharatpur , Noida , Delhi-NCR  offering services to 500+ clients and over 2000+ services. 
<br/>Our operational focus suggests a commitment to enhancing kidney care services and improving patient outcomes through dedicated support to healthcare facilities through our compassionate support to kidney care journey and patient-centric approach of services.   
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        
        <div>
        <h3 className="text-3xl font-bold text-blue-500">Our Vision</h3>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 ">
          To become first proactive kidney care and dialysis chain network in India with focused patient-centric technology.
          </p>
          <h4 className="text-3xl mt-5 font-bold text-blue-500">Our Mission</h4>
          <ul className="mt-5 grid grid-cols-2 gap-4">
  <li className="flex flex-col items-center justify-center bg-white p-6 rounded-md shadow hover:bg-blue-100 transition text-center">
    <span className="text-blue-500 font-bold text-xl">Convenience and flexibility in kidney care services. </span>
    {/* <p className="text-gray-700 text-lg mt-2">in kidney care services. </p> */}
  </li>
  <li className="flex flex-col items-center justify-center bg-white p-6 rounded-md shadow hover:bg-blue-100 transition text-center">
    <span className="text-blue-500 font-bold text-xl"> Effective tracking & monitoring system.</span>
    {/* <p className="text-gray-700 text-lg mt-2">Successful Dialysis Sessions</p> */}
  </li>
  <li className="flex flex-col items-center justify-center bg-white p-6 rounded-md shadow hover:bg-blue-100 transition text-center">
    <span className="text-blue-500 font-bold text-xl">Better patient awareness and quality services. </span>
    {/* <p className="text-gray-700 text-lg mt-2">Happy Clients</p> */}
  </li>
  <li className="flex flex-col items-center justify-center bg-white p-6 rounded-md shadow hover:bg-blue-100 transition text-center">
    <span className="text-blue-500 font-bold text-xl">Better work- flows of the dialysis units in hospitals.</span>
    {/* <p className="text-gray-700 text-lg mt-2">Support</p> */}
  </li>
</ul>

        </div>
        <div>
          <img
            src="https://as2.ftcdn.net/v2/jpg/09/10/25/55/1000_F_910255539_CH1xnYcZAK1gl1tSHWlhyZOr0VAr2VGW.jpg"
            className="w-full mt-17  rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="text-center mt-12">
        <button onClick={() => navigate("/download")} className="bg-blue-500 text-white px-6 py-3 text-lg rounded-md shadow-md hover:bg-blue-600">
          Book Your Dialysis
        </button>
      </div>

{/* ✅ Corporate Team Section */}
{/* ✅ Corporate Team Section with Swiper */}
<div className="max-w-7xl mx-auto mt-14 text-center">
  <h2 className="text-4xl mt-6 sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
    Meet Our Corporate <br /> Team
  </h2>
  <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 ">
    Our corporate leaders drive innovation and excellence in kidney care services.
  </p>
</div>

<div className="mt-10 max-w-3xl mx-auto">
  <Swiper
    modules={[Navigation, Pagination,Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    pagination={{ clickable: true }}
    navigation
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    breakpoints={{
      768: { slidesPerView: 2 },
    }}
  >
    {mainteam.map((member, index) => (
      <SwiperSlide key={index}>
        <div className="p-4 bg-white rounded-lg shadow text-center hover:bg-blue-100 transition max-w-sm mx-auto group">
          <img src={member.img} className="w-full h-76 object-cover rounded-md" alt={member.name} />
          <h3 className="text-2xl font-semibold mt-4">{member.name}</h3>
          <p className="text-gray-600"><b>{member.post}</b></p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

<div className="max-w-7xl mx-auto mt-16 text-center">
  <h2 className="text-4xl mt-6 sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
    Meet Our Expert <br /> Doctors
  </h2>
  <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 ">
    Our team of highly skilled professionals is dedicated to providing you with the
    best dialysis care possible.
  </p>
</div>

<div className="mt-12 max-w-5xl mx-auto">
  <Swiper
    modules={[Navigation, Pagination,Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    pagination={{ clickable: true }}
    navigation
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    breakpoints={{
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
  >
    {[{
      name: "Mr. PANKAJ RAJPUT",
      desc: "Head of dialysis services\nDelhi - NCR region.",
      img: doc1,
    },
    {
      name: "Dr. RAJESH GOEL",
      desc: "Nephrologist",
      img: doc0,
    },
    {
      name: "Mr. BANKE LAL BAGHEL",
      desc: "Head of dialysis services\nMathura- Agra region",
      img: doc1,
    }].map((doc, i) => (
      <SwiperSlide key={i}>
        <div className="p-6 bg-white rounded-lg shadow text-center hover:bg-blue-100 transition max-w-sm mx-auto group">
          <img src={doc.img} className="w-full h-76 object-cover rounded-md" />
          <h3 className="text-2xl font-semibold mt-4">{doc.name}</h3>
          <p className="text-gray-600 whitespace-pre-line">{doc.desc}</p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </div>
  );
};

export default About;
