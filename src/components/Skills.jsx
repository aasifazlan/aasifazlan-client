const skills = [
  "JavaScript (ES6+)",
  "C++",
  "Data Structures & Algorithms",
  "React.js",
  "Redux",
  "Zustand",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT Authentication",
  "Stripe Payment Integration",
  "Cloudinary",
  "Redis",
  "Tailwind CSS",
  "Git & GitHub",
  "Postman",
  "OpenCV",
  "VS Code"
];

export default function Skills() {
  return (
    <section className="bg-[#151515] py-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto bg-[#343434] rounded-xl p-8 shadow-lg relative">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 flex items-center">
          <span className="mr-2">🧠</span> Skills
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Leverage practical skills to build dynamic, modern web applications using industry-standard technologies.
        </p>

        {/* Scrolling container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll space-x-6 min-w-max">
            {[...skills, ...skills].map((skill, i) => (
              <span
                key={i}
                className="bg-[#151515] text-white text-sm md:text-base px-4 py-2 rounded-md shadow hover:bg-gray-700 transition whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          {/* <a href="#more" className="text-blue-400 hover:underline text-base inline-flex items-center">
            Dive Deeper →
          </a> */}
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
