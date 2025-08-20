import React from "react";
import { motion } from "framer-motion";
// red to yellow or green to yellow
const Card = ({ title, description, style,icon }) => {
  return (
    <motion.div
      style={style}
      className="w-100 min-h-auto p-4 border rounded-lg shadow-md grid grid-cols-2 content-start justify-center gap-4 text-black bg-gradient-to-r from-[#ec1a63] via-[#eeeb76] to-[#ec1a63] bg-[length:200%_auto] animate-gradient transition-transform ease-in-out"
    >
      <div className="flex justify-center align-middle  col-span-2 text-3xl font-bold capitalize">
        {title} <span className="text-[#53be97] ">{icon}</span></div>
      <div className="col-span-2 text-lg font-medium">{description}</div>
    </motion.div>
  );
};

export default Card;
