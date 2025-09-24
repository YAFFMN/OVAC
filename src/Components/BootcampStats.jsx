import React, { useEffect, useRef, useState } from "react";
import HeadWord from "./ui/HeadWord.jsx";
import Underline from "./ui/Underline.jsx";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    label: "Participants",
    value: 150,
    colors: "from-[#ec1a63] to-[#ffb6d5]",
    border: "border-[#ec1a63]",
    gradient:
      "linear-gradient(135deg, rgba(236,26,99,0.25) 0%, rgba(255,182,213,0.25) 100%)",
  },
  {
    label: "WorkshopsProjects",
    value: 50,
    colors: "from-[#ffd600] to-[#ffb700]",
    border: "border-[#ffd600]",
    gradient:
      "linear-gradient(135deg, rgba(255,214,0,0.25) 0%, rgba(255,183,0,0.25) 100%)",
  },
  {
    label: "Workshops",
    value: 30,
    colors: "from-[#53be97] to-[#2caa7c]",
    border: "border-[#53be97]",  
    gradient:
      "linear-gradient(135deg, rgba(83,190,151,0.25) 0%, rgba(44,170,124,0.25) 100%)",
  },
];

const StatBox = ({ label, value, colors, delay, border, gradient }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    if (!inView) {
      setDisplayValue(0);
      return;
    }
    let start = 0;
    const duration = 1200;
    const increment = value / (duration / 16);
    let raf;
    function animate() {
      start += increment;
      if (start < value) {
        setDisplayValue(Math.floor(start));
        raf = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    }
    raf = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(raf);
    };
  }, [value, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: false, amount: 0.5 }}
      className={`flex flex-col items-center justify-center rounded-2xl px-10 py-8 shadow-xl mx-4 min-w-[220px] min-h-[180px] md:w-[240px] md:h-[200px] border-4 ${border}`}
      style={{
        background: gradient,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <span className="text-5xl font-extrabold text-white drop-shadow mb-2">
        {displayValue}+
      </span>
      <span className="text-xl font-bold text-white/90">{label}</span>
    </motion.div>
  );
};

const BootcampStats = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 px-4 relative z-1 overflow-hidden">
      <HeadWord HeadWord={"Last Year's Numbers"} />
      <Underline />
      <div className="flex flex-col md:flex-row items-center justify-center mt-16">
        {stats.map((stat, idx) => (
          <StatBox
            key={stat.label}
            label={stat.label}
            value={stat.value}
            colors={stat.colors}
            delay={idx * 0.4}
            border={stat.border}
            gradient={stat.gradient}
          />
        ))}
      </div>
    </div>
  );
};

export default BootcampStats;
