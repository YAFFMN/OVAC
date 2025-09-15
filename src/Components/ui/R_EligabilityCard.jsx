import React from 'react'
import { LuLanguages } from 'react-icons/lu'
const R_EligabilityCard = ({
    // If provided, overrides computed gradient
    gradient,
    borderColor = "var(--main-color)",
    Icon = <LuLanguages className="text-6xl text-center text-white" />,
    title = "Arabic Language Proficiency",
    description = "All the content will be explained in Egyptain Arabic",
}) => {
    return (
        <div
          className="flex justify-between items-center border-4 rounded-full pr-4 max-w-2xl w-full text-center mt-24 text-white h-32"
          style={{
            // Tie gradient to borderColor via a CSS variable and color-mix
            // Positioned toward the left (icon side)
            backgroundImage: gradient ?? `radial-gradient(120% 140% at 15% 50%, color-mix(in srgb, ${borderColor} 35%, transparent) 0%, color-mix(in srgb, ${borderColor} 15%, transparent) 40%, transparent 70%)`,
            backgroundColor: `color-mix(in srgb, ${borderColor} 10%, transparent)`,
            backgroundRepeat: 'no-repeat',
            borderColor: borderColor,
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
            <div
              className="rounded-full p-10 flex items-center justify-end"
              style={{
                background: borderColor,
              }}
            >
              {Icon}
            </div>
          <div
            className="flex flex-col items-end justify-end py-6"
            style={{
              background: "transparent",
            }}
          >
            <h2 className="text-xl font-bold ml-6"> 
                {title}</h2>
            <p className="text-md font-medium ml-6 mt-2">
              {" "}
              {description}
            </p>
          </div>
        </div>
    )
}

export default R_EligabilityCard