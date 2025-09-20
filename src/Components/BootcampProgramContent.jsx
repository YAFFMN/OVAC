import React from "react";
import HeadWord from "./ui/HeadWord";
import Underline from "./ui/Underline";
import Card from "./ui/ProgramContentCard";

const programData = [
  {
    title: "Photo Manipulation",
    sessions: "2 Sessions",
    workshops: "1 Workshop",
    description:
      " In-depth exploration of Adobe Photoshop tools to create manipulated photographs.Participants will work different Photoshop tasks under the guidance of their mentors",
    align: "left",
    borderColor: "var(--main-color)",
  },
  {
    title: "Adobe Photoshop Basics",
    sessions: "2 Sessions",
    workshops: "1 Workshop",
    description:
      "Get hands-on experience with Photoshop's essential tools for photo editing, manipulation, and digital painting.",
    align: "right",
    borderColor: "var(--main-color-2)",
  },
  {
    title: "Vector Art with Adobe Illustrator",
    sessions: "2 Sessions",
    workshops: "1 Workshop",
    description:
      "Master the pen tool and create scalable vector graphics, logos, and illustrations in Illustrator.",
    align: "left",
    borderColor: "var(--main-color-3)",
  },
  {
    title: "Advanced Photoshop Techniques",
    sessions: "2 Sessions",
    workshops: "1 Workshop",
    description:
      "Dive deeper into Photoshop with advanced selection, masking, and compositing techniques.",
    align: "right",
    borderColor: "var(--main-color)",
  },
  {
    title: "Typography and Layout",
    sessions: "2 Sessions",
    workshops: "1 Workshop",
    description:
      "Explore the art of typography and create compelling layouts for web and print.",
    align: "left",
    borderColor: "var(--main-color-2)",
  },
  {
    title: "Intro to UI/UX Design",
    sessions: "2 Sessions",
    workshops: "1 Workshop",
    description:
      "Understand the principles of User Interface and User Experience design to create user-friendly digital products.",
    align: "right",
    borderColor: "var(--main-color-3)",
  },
  {
    title: "Branding and Identity",
    sessions: "2 Sessions",
    workshops: "1 Workshop",
    description:
      "Learn how to create a strong brand identity, from logo design to a complete brand style guide.",
    align: "left",
    borderColor: "var(--main-color)",
  },
  {
    title: "Final Project & Portfolio Building",
    sessions: "2 Sessions",
    workshops: "1 Workshop",
    description:
      "Apply your skills to a comprehensive final project and learn how to build a professional portfolio to showcase your work.",
    align: "right",
    borderColor: "var(--main-color-2)",
  },
];

const BootcampProgramContent = () => {
  return (
    <div className="bg-black p-4">
      <div className="flex flex-col justify-center items-center text-center mg-3 p-5">
        <HeadWord HeadWord="Bootcamp Program" color="#ec1a63" />
        <Underline color="#ec1a63" />
      </div>
      <div className="relative container mx-auto px-6 flex flex-col space-y-8">
        <div className="absolute z-0 w-2 h-full bg-white/10 shadow-md inset-0 left-1/2 -translate-x-1/2"></div>
        {programData.map((item, index) => (
          <div key={index} className="relative flex items-center">
            <div
              className={`w-1/2 ${
                item.align === "left" ? "pr-8" : "pl-8 ml-auto"
              }`}
            >
              <Card {...item} />
            </div>
            <div
              className="absolute w-5 h-5 rounded-full bg-yellow-400 z-10 left-1/2 -translate-x-1/2 shadow-lg"
              style={{ boxShadow: "0 0 12px 3px var(--main-color-3)" }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BootcampProgramContent;
