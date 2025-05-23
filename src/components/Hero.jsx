// src/components/Hero.jsx
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center h-screen text-center px-4 bg-[#151515] text-white overflow-hidden"
    >
      {/* Avatar (optional) */}
      {/* <img
        src="/me.jpg"
        alt="Aasif Azlan"
        className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-lg mb-6"
      /> */}

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-7xl font-bold"
      >
        Hi, I'm Aasif Azlan
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="mt-4 text-xl md:text-2xl text-gray-400"
      >
        <TypeAnimation
          sequence={[
            'MERN Stack Developer', 2000,
            'Creative Coder', 2000,
            'Open Source Contributor', 2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
      >
        View My Work
      </motion.a>
    </section>
  );
}
