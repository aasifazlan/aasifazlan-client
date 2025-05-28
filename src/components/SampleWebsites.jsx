// src/components/SampleWebsites.jsx
import { motion } from "framer-motion";

const websites = [
  {
    name: "Medium Article",
    url: "https://aasifazlaan.medium.com/", // replace with full article if you prefer
    description: "Explore my personal essays and thought pieces on Medium.",
  },
  {
    name: "The Good Men Project",
    url: "https://goodmenproject.com/author/aasif-azlan/", // replace with article link if available
    description: "Read my published article on The Good Men Project, a platform dedicated to conversations around modern manhood and social change.",
  },
  {
    name: "Unscripted India",
    url: "https://unscriptedindia.in",
    description: "Unscripted India is my MERN stack startup that uncovers untold stories, history, and cultural truths from across India.",
  },
];

export default function SampleWebsites() {
  return (
    <section className="py-16 bg-[#1b1b1b] text-white px-4" id="sample-websites">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Articles and Startup</h2>
        <p className="text-gray-400 mb-12">
          Explore some of my articles and project.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {websites.map((site, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-[#252525] rounded-xl shadow-lg border border-gray-700 overflow-hidden"
            >
              <div className="aspect-video">
                <iframe
                  src={site.url}
                  title={site.name}
                  className="w-full h-full border-none"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{site.name}</h3>
                <p className="text-gray-400 text-sm">{site.description}</p>
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
