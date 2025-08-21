import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeadWord from "./ui/HeadWord";
import Underline from "./ui/Underline";
import Card from "./ui/Card";

const images = [
  {
    src: "https://placehold.co/400x400/ec1a63/ffffff",
    alt: "Team collaboration",
  },
  {
    src: "https://placehold.co/400x400/53be97/ffffff",
    alt: "Creative process",
  },
  {
    src: "https://placehold.co/400x400/eeeb76/000000",
    alt: "Digital art creation",
  },
];

const WhoweAre = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500); // Cycle every 3.5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const imageVariants = {
    center: { x: "0%", y: "0%", scale: 1.1, zIndex: 3, rotate: 0 },
    right: { x: "50%", y: "-10%", scale: 1, zIndex: 2, rotate: 15 },
    left: { x: "-50%", y: "10%", scale: 0.9, zIndex: 1, rotate: -15 },
    hidden: { opacity: 0, scale: 0.5, zIndex: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const fromLeftVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  const fromRightVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-32 text-center overflow-x-hidden">
      <HeadWord HeadWord="Who We Are" />
      <Underline />
      <motion.div
        className="grid w-full max-w-6xl grid-cols-1 items-center gap-16 mx-auto mt-12 md:grid-cols-2 md:gap-8 lg:gap-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fromLeftVariant}>
          <Card
            description={
              <div className="text-left">
              <p className="mb-4">
                October Visual Arts Club (OVAC) is a student organization
                affiliated with STEM High School for Boys - 6th of October. We
                grow the artistic talent by providing student-to-student Visual
                Arts courses.
              </p>
              <p className="mb-4">
                We are a group of high school students brought together by our
                shared passion for art in its visual or digital form. Due to
                being equipped with the necessary skills besides the inspiring
                passion, in 2024, we founded this club for the purpose of
                promoting the artistic community not only in our school but in
                our whole country, Egypt.
              </p>
              <p>
                October Visual Arts Club is a community devoted to providing a
                welcoming environment for those who hold an interest in various
                forms of visual expression, including graphic design, video
                production, and 3D design. The club is committed to nurturing
                the growth of its members as artists by hosting regular
                lectures, in addition to monitoring this growth through weekly
                assignments.
              </p>
            </div>
            }
          />
        </motion.div>
        <motion.div
          variants={fromRightVariant}
          className="relative flex items-center justify-center w-full min-h-[20rem] sm:min-h-[24rem]"
        >
          {images.map((image, i) => {
            let variant;
            const position = (i - activeIndex + images.length) % images.length;

            if (position === 0) {
              variant = "center";
            } else if (position === 1) {
              variant = "right";
            } else if (position === images.length - 1) {
              variant = "left";
            } else {
              variant = "hidden";
            }

            return (
              <motion.img
                key={image.src}
                src={image.src}
                alt={image.alt}
                variants={imageVariants}
                initial={false}
                animate={variant}
                whileHover={{ scale: 2, zIndex: 4 }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                className="absolute object-cover w-40 h-40 border-4 border-white shadow-lg sm:w-48 sm:h-48 md:w-56 md:h-56"
              />
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhoweAre;
