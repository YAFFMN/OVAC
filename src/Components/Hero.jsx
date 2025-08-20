import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] h-screen px-4 py-8 text-center">
      <img
        className="w-40 sm:w-56 md:w-72 lg:w-80 xl:w-96 h-auto mb-6"
        src="src/assets/logo-OVAC-1.png"
        alt="Hero"
      />
      <p className="text-[#53be97] text-xl sm:text-2xl md:text-3xl font-bold max-w-xl">
        Here where all the creativity happens
      </p>
    </div>
  );
};

export default Hero;
