import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#151515] text-gray-300 text-center py-4 mt-10">
      <p>&copy; {new Date().getFullYear()} Aasif Azlan. All rights reserved.</p>
      <p className="text-sm">Connect: aasifazlaan@gmail.com | GitHub: github.com/aasifazlan</p>
    </footer>
  )
}

export default Footer
