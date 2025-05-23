import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Updated Code Content to reflect your MERN expertise
const codeContent = `
import express from "express";
import mongoose from "mongoose";
import stripe from "stripe";

const app = express();
mongoose.connect("mongodb://localhost/ecommerce");

app.post("/checkout", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: req.body.items,
    mode: "payment",
    success_url: "/success",
    cancel_url: "/cancel",
  });
  res.json({ id: session.id });
});

export default app;
`;

// Cards based on your resume and real projects
const cards = [
  { id: 1, text: "E-Commerce Platform (MERN + Stripe)" },
  { id: 2, text: "LinkedIn Clone with Real-Time Chat" },
  { id: 3, text: "Unscripted India – History Portal" },
  { id: 4, text: "Face Recognition in C++ & OpenCV" },
  { id: 5, text: "Cloudinary & MongoDB Integration" },
  { id: 6, text: "JWT Auth + Zustand State Manager" },
];

const ShowcaseSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#151515] text-white py-16 px-6">
      {/* Code Editor Styled Section */}
      <div
        ref={containerRef}
        className="relative resize-y overflow-auto min-h-[200px] max-h-[80vh] border border-gray-600 rounded-lg bg-[#1e1e1e] shadow-lg p-4 font-mono"
      >
        <pre className="whitespace-pre-wrap text-white text-sm leading-relaxed">
          {codeContent}
        </pre>

        {/* Floating Cards */}
        <AnimatePresence>
          {cards.map((card, index) =>
            index === activeCard ? (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 1 }}
                className="absolute top-4 right-4 bg-white text-black px-4 py-3 rounded-lg shadow-xl w-[220px] text-sm"
              >
                {card.text}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ShowcaseSection;
