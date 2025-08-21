import React from "react";
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
  },
  {
    name: "Jane Smith",
    role: "Vice President",
    imageUrl: "https://placehold.co/400x400/53be97/white?text=JS",
  },
  {
    name: "Peter Jones",
    role: "Lead Designer",
    imageUrl: "https://placehold.co/400x400/eeeb76/black?text=PJ",
  },
  {
    name: "Sarah Miller",
    role: "Developer",
    imageUrl: "https://placehold.co/400x400/ec1a63/white?text=SM",
  },
  {
    name: "Mike Brown",
    role: "Marketing Head",
    imageUrl: "https://placehold.co/400x400/53be97/white?text=MB",
  },
  {
    name: "Emily White",
    role: "Content Creator",
    imageUrl: "https://placehold.co/400x400/eeeb76/black?text=EW",
  },
  {
    name: "Chris Green",
    role: "UX Researcher",
    imageUrl: "https://placehold.co/400x400/ec1a63/white?text=CG",
  },
  {
    name: "Alice Johnson",
    role: "Data Analyst",
    imageUrl: "https://placehold.co/400x400/53be97/white?text=AJ",
  },
  {
    name: "David Brown",
    role: "Project Manager",
    imageUrl: "https://placehold.co/400x400/53be97/white?text=DB",
  },
  {
    name: "Emma Wilson",
    role: "Quality Assurance",
    imageUrl: "https://placehold.co/400x400/ec1a63/white?text=EW",
  },
];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", damping: 15, stiffness: 100 },
  },
};

const WorkerCard = ({ name, role, imageUrl, className = "" }) => {
  return (
    <motion.div
      variants={cardVariants}
      className={`flex flex-col items-center p-6 text-center transition-transform duration-300 transform bg-gray-900 border border-gray-700 rounded-lg shadow-lg hover:scale-105 hover:shadow-pink-500/30 ${className}`}
    >
      <img
        src={imageUrl}
        alt={`Photo of ${name}`}
        className="object-cover w-32 h-32 mb-4 rounded-full border-4 border-[#ec1a63]"
      />
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-gray-400">{role}</p>
    </motion.div>
  );
};

const Workers = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 text-center bg-black overflow-x-hidden">
      <HeadWord HeadWord="Meet Our Team" />
      <Underline />
      <motion.div
        className="grid w-full max-w-6xl grid-cols-1 gap-10 mt-12 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {workers.map((worker, index) => {
          // Center the last item if it's the only one in the last row on large screens
          const isLastItem = index === workers.length - 1;
          const isOrphanIn3ColGrid = workers.length % 3 === 1;
          const centeringClass =
            isLastItem && isOrphanIn3ColGrid ? "lg:col-start-2" : "";

          return (
            <WorkerCard key={index} {...worker} className={centeringClass} />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Workers;
