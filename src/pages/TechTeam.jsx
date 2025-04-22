import { FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";
import downloadBG from "/assets/t1.mp4";

const team = [
  {
    name: "Krishankant Saraswat",
    title: "Full Stack & App Developer",
    image: "/assets/kk.png",
    description: "Crafting intuitive apps that transform ideas into seamless user experiences.",
    linkedin: "https://www.linkedin.com/in/krishnkantsaraswat830/",
    mail: "krishnkantsaraswat830@gmail.com",
  },
  {
    name: "Anshul Sharma",
    title: "Full Stack & AI/ML Engineer",
    image: "/assets/anshul.png",
    description: "Bridging full-stack development and AI/ML to deliver intelligent, end-to-end solutions.",
    linkedin: "https://www.linkedin.com/in/anshul-sharma-711503214/",
    mail: "panditanshul4444@gmail.com",
  },
  {
    name: "Krish",
    title: "App Developer",
    image: "/assets/krish.png",
    description: "Transforming ideas into scalable applications powered by solid backend architectures.",
    linkedin: "https://www.linkedin.com/in/krishag/",
    mail: "printf.krish@gmail.com",
  },
  {
    name: "Arpit Verma",
    title: "UI/UX Designer",
    image: "/assets/arpit.png",
    description: "Designs user-centric interfaces, enhancing them through design, interaction, and usability.",
    linkedin: "https://www.linkedin.com/in/arpitvermaaa/",
    mail: "arpitverma20202020@gmail.com",
  },
];

function TechTeam() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background video with brightness and contrast adjustments */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        style={{ filter: 'brightness(1.2) contrast(1.2)' }}
      >
        <source src={downloadBG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto text-center py-20 px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-pink-600 mb-4">
          <u>Meet the Tech Team</u>
        </h2>
        <p className="text-2xl sm:text-3xl font-bold text-purple-400 mb-12">
          Binary_Bandits<br />
          ⚔️⚔️Belongs to Bandits⚔️⚔️
        </p>

        {/* Responsive container */}
        <div className="overflow-x-auto lg:overflow-visible">
          <div className="flex lg:grid lg:grid-cols-4 gap-7 snap-x snap-mandatory">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-black bg-opacity-80 backdrop-blur-md shadow-lg rounded-xl overflow-hidden transform transition duration-150 hover:-translate-y-2 hover:shadow-2xl min-w-[250px] snap-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-600">{member.name}</h3>
                  <p className="text-blue-600 text-sm mb-2">{member.title}</p>
                  <p className="text-green-600 text-sm mb-4">{member.description}</p>
                  <div className="flex space-x-4 justify-center">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-blue-700 hover:text-blue-800 text-xl" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-gray-800 hover:text-black text-xl" />
                      </a>
                    )}
                    {member.mail && (
                      <a href={member.mail} target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className="text-sky-500 hover:text-sky-600 text-xl" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechTeam;
