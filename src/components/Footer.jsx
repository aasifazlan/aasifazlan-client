import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaHackerrank, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="bg-[#151515] text-gray-300 text-center py-4 ">
      {/* <p>&copy; {new Date().getFullYear()} Built by Aasif Azlan.</p> */}
    
      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
        className="flex justify-center items-center space-x-6 mt-2 text-2xl"
      >   <p className="text-md">Connect:</p>
        <a href="https://linkedin.com/in/aasifazlan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaLinkedin />
        </a>
        <a href="https://github.com/aasifazlan" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FaGithub />
        </a>
        <a href="https://www.hackerrank.com/aasifazlaan" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
          <FaHackerrank />
        </a>
        <a href="https://leetcode.com/aasifazlan" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
          <SiLeetcode />
        </a>
        <a href="https://linkedin.com/in/aasifazlan" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
       <FaLinkedin />
       </a>
       <a href="mailto:aasifazlaan@gmail.com" aria-label="Email" className="hover:text-red-500" target="_blank" 
       rel="noopener noreferrer" title="Email me">
        <SiGmail />
       </a>

       <a href="https://wa.me/918076585930" target="_blank" rel="noopener noreferrer" className="hover:text-green-500" title="Chat on WhatsApp">
       <FaWhatsapp />
       </a>


        
      </motion.div>
    </footer>
  )
}

export default Footer
