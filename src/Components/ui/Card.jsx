import React from "react";
import { motion } from "framer-motion";
// red to yellow or green to yellow
const Card = ({ title, description, style, icon }) => {
  return (
    <motion.div
      style={style}
      className="flex w-full flex-col gap-4 rounded-lg border bg-gradient-to-r from-[#ec1a63] via-[#eeeb76] to-[#ec1a63] bg-[length:200%_auto] p-4 text-black shadow-md transition-all ease-in-out content-start justify-center animate-gradient"
    >
      <div className="flex items-center justify-center text-3xl font-bold capitalize">
        {title} <span className="text-[#53be97] ">{icon}</span>
      </div>
      <div className="text-lg font-medium">{description}</div>
    </motion.div>
  );
};

export default Card;
