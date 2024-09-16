import { React, useEffect } from "react";

const servicesData = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Building responsive and dynamic user interfaces using React, HTML, CSS, and JavaScript.",
    icon: "🖥️", // You can replace this with icons from a library like FontAwesome or HeroIcons
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Developing RESTful APIs, databases, and server-side logic using Node.js, PHP, and Laravel.",
    icon: "⚙️",
  },
  {
    id: 3,
    title: "Full-Stack Integration",
    description:
      "Integrating frontend and backend seamlessly with technologies like MERN and LAMP stack.",
    icon: "🌐",
  },
  {
    id: 4,
    title: "Database Management",
    description:
      "Designing and managing databases with SQL, MySQL, MongoDB for optimized data storage.",
    icon: "💾",
  },
  {
    id: 5,
    title: "Version Control",
    description:
      "Maintaining project history and collaboration through Git and GitHub version control systems.",
    icon: "📂",
  },
  {
    id: 6,
    title: "Deployment & Maintenance",
    description:
      "Deploying and maintaining web applications on cloud services like AWS, Heroku, or DigitalOcean.",
    icon: "🚀",
  },
];

const Services = () => {
  useEffect(() => {
    document.title = "Services"; // Change the page title
  }, []);
  return (
    <section className="py-12   mt-[100px]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-myFont text-center mb-8 text-gray-800">
          Full Stack Developer Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 ">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-lg p-6 m-3 hover:shadow-xl transition-shadow duration-300 ease-in-out "
            >
              <div className="text-4xl text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
