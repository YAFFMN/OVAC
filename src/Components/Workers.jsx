import React, { useState } from "react";
import HeadWord from "./ui/HeadWord";
import Underline from "./ui/Underline";
import { motion } from "framer-motion";
// import image1 from "../assets/FCK.jpg"
// Placeholder data for workers
const workers = [
  {
    name: "John Doe",
    role: "President",
    imageUrl: "https://placehold.co/400x400/53be97/white?text=JD",
    year: 2024,
  },
  {
    name: "Jane Smith",
    role: "Vice President",
    imageUrl: "https://placehold.co/400x400/53be97/white?text=JS",
    year: 2024,
  },
  {
    name: "Peter Jones",
    role: "Lead Designer",
    imageUrl: "https://placehold.co/400x400/eeeb76/black?text=PJ",
    year: 2024,
  },
  {
    name: "Sarah Miller",
    role: "Developer",
    imageUrl: "https://placehold.co/400x400/ec1a63/white?text=SM",
    year: 2024,
  },
  {
    name: "Mike Brown",
    role: "Marketing Head",
    imageUrl: "https://placehold.co/400x400/53be97/white?text=MB",
    year: 2024,
  },
  {
    name: "Emily White",
    role: "Content Creator",
    imageUrl: "https://placehold.co/400x400/eeeb76/black?text=EW",
    year: 2024,
  },
  {
    name: "Chris Green",
    role: "UX Researcher",
    imageUrl: "https://placehold.co/400x400/ec1a63/white?text=CG",
    year: 2023,
  },
  {
    name: "Alice Johnson",
    role: "Data Analyst",
    imageUrl: "https://placehold.co/400x400/53be97/white?text=AJ",
    year: 2023,
  },
  {
    name: "David Brown",
    role: "Project Manager",
    imageUrl: "https://placehold.co/400x400/53be97/white?text=DB",
    year: 2023,
  },
  {
    name: "Emma Wilson",
    role: "Quality Assurance",
    imageUrl: "https://placehold.co/400x400/ec1a63/white?text=EW",
    year: 2023,
  },
];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { 
    y: -100, 
    opacity: 0,
    rotate: 5
  },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: { 
      type: "spring", 
      damping: 20, 
      stiffness: 100,
      duration: 0.8 
    },
  },
};

const WorkerCard = ({ name, role, imageUrl, className = "" }) => {
  return (
    <motion.div
      variants={cardVariants}
      className={`flex flex-col items-center p-8 text-center transition-all duration-300 transform bg-gray-900 border border-gray-700 rounded-2xl shadow-lg hover:scale-105 hover:shadow-pink-500/30 ${className}`}
    >
      <img
        src={imageUrl}
        alt={`Photo of ${name}`}
        className="object-cover w-36 h-36 mb-6 rounded-full border-4 border-[#ec1a63] shadow-lg"
      />
      
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-white">
          {name}
        </h3>
        <p className="text-gray-300 font-medium text-sm tracking-wide">
          {role}
        </p>
      </div>
    </motion.div>
  );
};

const Workers = () => {
  const allYears = [...new Set(workers.map((w) => w.year))].sort(
    (a, b) => b - a
  );
  const [selectedYear, setSelectedYear] = useState(allYears[0]);

  const filteredWorkers = workers.filter(
    (worker) => worker.year === selectedYear
  );

  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 text-center bg-black overflow-x-hidden">
      <HeadWord HeadWord="Meet Our Team" color="var(--main-color-2)" />
      <Underline color="var(--main-color-2)" />
      <div className="flex justify-center gap-4 my-8">
        {allYears.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`transform px-6 py-2 font-semibold rounded-full transition-all duration-300 ease-in-out hover:scale-105 ${
              selectedYear === year
                ? "bg-[var(--main-color-2)] text-black shadow-lg shadow-[var(--main-color-2)]/30"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            {year}
          </button>
        ))}
      </div>
      <motion.div
        className="grid w-full max-w-screen-xl grid-cols-1 gap-8 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        key={selectedYear} // Add this key to force re-render when year changes
      >
        {filteredWorkers.map((worker, index) => {
          // Center remaining cards when there are fewer than 5 in the last row
          const isLastRowWithFewer = index >= filteredWorkers.length - (filteredWorkers.length % 5);
          const remainingCards = filteredWorkers.length % 5;
          const shouldCenter = remainingCards > 0 && remainingCards < 5 && isLastRowWithFewer;
          
          let centeringClass = "";
          if (shouldCenter) {
            if (remainingCards === 1) {
              centeringClass = "lg:col-start-3"; // Center single card in middle column
            } else if (remainingCards === 2) {
              centeringClass = index === filteredWorkers.length - 2 ? "lg:col-start-2" : ""; // Start from column 2
            } else if (remainingCards === 3) {
              centeringClass = index === filteredWorkers.length - 3 ? "lg:col-start-2" : ""; // Start from column 2
            } else if (remainingCards === 4) {
              centeringClass = index === filteredWorkers.length - 4 ? "lg:col-start-1" : ""; // Start from column 1
            }
          }

          return (
            <WorkerCard 
              key={`${worker.name}-${selectedYear}`} // IMPROVED: Better key for re-renders
              {...worker} 
              className={centeringClass} 
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Workers;