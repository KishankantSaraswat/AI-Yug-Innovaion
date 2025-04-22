// import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import { useRef } from "react";

// Import assets

import bed1 from "/assets/bed1.jpg";
import bed2 from "/assets/bed2.jpg";
import p1 from "/assets/p1.jpg";
import p2 from "/assets/p2.jpg";
import unit from "/assets/unit.png";
import unit1 from "/assets/unit1.png";
import vid1 from "/assets/vid1.mp4";
import vid2 from "/assets/vid2.mp4";
import vid3 from "/assets/vid3.mp4";

const Gallery = () => {
  // const navigate = useNavigate();
  const swiperRef = useRef(null);

  const images = [
    { src: bed1, category: "Dialysis Center" },
    { src: bed2, category: "Dialysis Center" },
    { src: unit, category: "Nephrology Unit" },
    { src: unit1, category: "Nephrology Unit" },
    { src: p1, category: "Patient Care" },
    { src: p2, category: "Patient Care" },
  ];

  const videos = [
    { src: vid1, category: "Patient Feedback" },
    { src: vid2, category: "Patient Feedback" },
    { src: vid3, category: "Patient Feedback" },
    { src: vid1, category: "Patient Feedback" },
  ];

  // Pause slider when a video is playing
  const handlePlay = () => {
    if (swiperRef.current) swiperRef.current.autoplay.stop();
  };

  // Resume slider when video is paused or ends
  const handlePause = () => {
    if (swiperRef.current) swiperRef.current.autoplay.start();
  };

  return (
    
    <section className="container mx-auto text-center px-8 lg:px-20 py-16 bg-white dark:bg-gray-900">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
        Advanced <span className="text-blue-500">Kidney Disease Care</span>
      </h2>
      <p className="mt-3 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
        Explore our specialized nephrology facilities, cutting-edge dialysis centers, 
        and expert-led patient care units designed for comprehensive kidney treatment.
      </p>


       {/* ✅ Achievements Section */}
<section className="mt-12 px-4">
  <h3 className="text-3xl font-bold text-blue-500 mb-6 text-center">Our Achievements</h3>

  <Swiper
    spaceBetween={20}
    slidesPerView={1}
    breakpoints={{
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop={true}
    modules={[Autoplay]}
    className="pb-8"
  >
    {[
      { src: "/assets/msme.jpg", title: "INDIA 5000 Best MSME" },
      { src: "/assets/startinup.png", title: "Certificate of Registration" },
      { src: "/assets/startup.png", title: "Startup India" },
      { src: "/assets/msme.jpg", title: "Listed Top Dialysis Center 2024" },
    ].map((achievement, index) => (
      <SwiperSlide key={index}>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4">
          <img
            src={achievement.src}
            className="w-full h-60 object-cover rounded-lg transition-transform duration-500 transform group-hover:scale-110"
            alt={achievement.title}
          />
          <h3 className="text-lg font-semibold mt-4 text-gray-800 dark:text-white text-center">
            {achievement.title}
          </h3>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

      {/* ✅ Photo Gallery */}
      <section className="mt-10">
        <h3 className="text-3xl font-bold text-blue-500 mb-4">Photo Gallery</h3>
        <Swiper
  spaceBetween={10}  // Reduce spacing to remove unwanted gaps
  slidesPerView={1}  // Ensure only one slide is visible
  breakpoints={{
    640: { slidesPerView: 1.2 },
    1024: { slidesPerView: 3 },
  }}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  loop={true}
  modules={[Autoplay, Pagination]}
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  className="pb-8 overflow-hidden" // Ensure no extra content is visible
>
          {images.map(({ src, category }, index) => (
            <SwiperSlide key={index} className="rounded-lg shadow-lg overflow-hidden">
              <div className="relative group">
                <img 
                  src={src} 
                  className="w-full h-60 object-cover rounded-lg transition-transform duration-500 transform group-hover:scale-110" 
                />
                <span className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
                  {category}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ✅ Video Gallery */}
      <section className="mt-12 px-4">
        <h3 className="text-3xl font-bold text-blue-500 mb-6 text-center">Video Gallery</h3>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
          className="pb-8"
        >
          {videos.map(({ src, category }, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg p-4">
                <div className="relative rounded-xl overflow-hidden">
                  <video
                    controls
                    className="w-full h-64 object-cover rounded-xl shadow-md"
                    onPlay={handlePlay}
                    onPause={handlePause}
                    onEnded={handlePause}
                  >
                    <source src={src} type="video/mp4" />
                  </video>
                </div>
                <h3 className="text-lg font-semibold mt-4 text-white text-center">{category}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ✅ Consultation Button */}
      {/* <button 
        onClick={() => navigate("/contact")} 
        className="mt-10 bg-blue-500 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300"
      >
        Book a Consultation
      </button> */}
    </section>
  );
};

export default Gallery;
