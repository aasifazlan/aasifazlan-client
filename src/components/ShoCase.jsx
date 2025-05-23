import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sampleCards = [
  { id: 1, content: "MERN Stack E-Commerce Platform" },
  { id: 2, content: "Secure Stripe Payment Integration System" },
  { id: 3, content: "LinkedIn Clone with Real-Time Messaging" },
  { id: 4, content: "Netflix Clone with Media Streaming & Auth" },
  { id: 5, content: "Unscripted India – Cultural History CMS" },
  { id: 6, content: "C++ OpenCV Face Recognition Tool" },
  { id: 7, content: "AI Chatbot with OpenAI & HuggingFace APIs" },
  { id: 8, content: "Custom Chat App Using Gemini Pro API" },
  { id: 9, content: "React + Tailwind Admin Dashboard Builder" },
  { id: 10, content: "JWT + Zustand Based Auth System" },
  { id: 11, content: "Voice-Enabled AI Assistant (Web App)" },
  { id: 12, content: "AI-Powered Blog Generator (OpenAI + Express)" },
  { id: 13, content: "Image Captioning Tool using Hugging Face" },
  { id: 14, content: "MERN Stack Job Portal with Resume Parser" },
  { id: 15, content: "Real-Time Code Collaboration App (WebRTC)" },
  { id: 16, content: "AI-Powered FAQ Chatbot for Any Website" },
  { id: 17, content: "MongoDB + Cloudinary Media CMS" },
  { id: 18, content: "Project Management App with Chat AI Integration" },
  { id: 19, content: "Education Quiz App using LLM for Auto-Grading" },
  { id: 20, content: "Portfolio Site with AI Voice + Resume Parser" },
];



export default function ShoCase() {
  const [visibleCard, setVisibleCard] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCard = sampleCards[Math.floor(Math.random() * sampleCards.length)];
      setVisibleCard({ ...randomCard, key: Date.now() });

      setTimeout(() => {
        setVisibleCard(null);
      }, 4000); // visible for 4 seconds
    }, 5000); // new card every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Random position helper (inside 80% area to avoid overflow)
  const getRandomPosition = () => {
    const top = Math.floor(Math.random() * 80);
    const left = Math.floor(Math.random() * 80);
    return { top: `${top}%`, left: `${left}%` };
  };

  const cardStyle = (position) => ({
    position: "absolute",
    top: position.top,
    left: position.left,
    width: `${Math.random() * 80 + 160}px`,
    height: `${Math.random() * 40 + 80}px`,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    border: "1px solid white",
    borderRadius: "14px",
    padding: "14px",
    color: "#ffffff",
    fontSize: "0.95rem",
    fontWeight: "bold",
    backdropFilter: "blur(8px)",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  });

  const position = getRandomPosition();

  return (
    <section className="relative bg-[#151515] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto border border-gray-700 rounded-lg overflow-hidden shadow-2xl relative bg-[#1e1e1e]">
        {/* VS Code style top bar */}
        <div className="flex items-center bg-[#2d2d2d] px-4 py-2 text-sm text-gray-400">
          <div className="flex space-x-2 mr-4">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <span>brain-visual.js</span>
        </div>

        {/* Fake code lines */}
        <div className="font-mono text-sm p-6 space-y-2 text-white relative overflow-hidden w-full h-full">
          <div><span className="text-green-400">const</span> neural = <span className="text-yellow-300">"000101010011"</span>;</div>
          <div><span className="text-green-400">function</span> activate() {'{'}</div>
          <div className="pl-4 text-blue-300">return brain.fire(neural)</div>
          <div>{'}'}</div>
          <div><span className="text-green-400">export default</span> neural;</div>

          {/* Animated popup card */}
          <div className="absolute inset-0 pointer-events-none">
            <AnimatePresence>
              {visibleCard && (
                <motion.div
                  key={visibleCard.key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  style={cardStyle(position)}
                >
                  {visibleCard.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
