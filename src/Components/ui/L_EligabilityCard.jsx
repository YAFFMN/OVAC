import React from "react";
import { LuLanguages } from "react-icons/lu";

const EligabilityCard = ({
  gradient = "linear-gradient(90deg, rgba(34,197,94,0.12) 0%, rgba(236,26,99,0.12) 100%)",
  borderColor = "var(--main-color)",
  Solid = "var(--main-color)",
  Icon = <LuLanguages className="text-6xl text-center text-white" />,
}) => {
  return (
    <div
      className="flex justify-between items-center border-4 rounded-full pl-4 max-w-2xl w-full text-center mt-24 text-white"
      style={{
        background: gradient,
        borderColor: borderColor,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div
        className="flex flex-col items-start justify-center py-10"
        style={{
          background: "transparent",
        }}
      >
        <h2 className="text-xl font-bold ml-6"> Arabic Language Proficiency</h2>
        <p className="text-md font-medium ml-6 mt-2">
          {" "}
          All the content will be explained in Egyptain Arabic
        </p>
      </div>
      <div
        className="rounded-full p-10 flex items-center"
        style={{
          background: Solid,
        }}
      >
        {Icon}
      </div>
    </div>
  );
};

export default EligabilityCard;
