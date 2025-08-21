import React, { useState } from "react";
import HeadWord from "./ui/HeadWord";
import Underline from "./ui/Underline";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  { id: 1, src: "/gallary/Img1.jpg", alt: "Artwork 1" },
  { id: 2, src: "/gallary/Img2.jpg", alt: "Artwork 2" },
  { id: 3, src: "/gallary/Img3.jpg", alt: "Artwork 3" },
  { id: 4, src: "/gallary/Img4.jpg", alt: "Artwork 4" },
  { id: 5, src: "/gallary/Img5.jpg", alt: "Artwork 5" },
  { id: 6, src: "/gallary/Img6.jpg", alt: "Artwork 6" },
  { id: 7, src: "/gallary/Img7.jpg", alt: "Artwork 7" },
  { id: 8, src: "/gallary/Img8.jpg", alt: "Artwork 8" },
  { id: 9, src: "/gallary/Img9.jpg", alt: "Artwork 9" },
  { id: 10, src: "/gallary/Img10.jpg", alt: "Artwork 10" },
  { id: 11, src: "/gallary/Img11.jpg", alt: "Artwork 11" },
  { id: 12, src: "/gallary/Img12.jpg", alt: "Artwork 12" },
];

const GallaryHero = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <div className="flex justify-center flex-col items-center mb-12">
        <HeadWord HeadWord="Our Gallery" />
        <Underline />
      </div>
      <p className="mx-auto mt-4 mb-12 max-w-2xl text-gray-400">
        A collection of our finest work. Click on any image to view it in full
        screen.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((image) => (
          <motion.div
            key={image.id}
            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => openModal(image)}
            layoutId={`card-${image.id}`}
            whileHover={{ y: -5 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="font-bold text-white drop-shadow-lg">View</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              layoutId={`card-${selectedImage.id}`}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-full max-w-full rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on the image
            />
            <motion.button
              className="absolute top-4 right-4 text-3xl text-white"
              onClick={closeModal}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              &times;
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GallaryHero;
