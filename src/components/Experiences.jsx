import { useState } from "react";
import DetailBlock from "./DetailBlock";

export default function Experiences() {
  const [exp, setExp] = useState([
    {
      Title: "Full Stack Developer",
      institution: "Tekception",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque porro expedita inventore ullam corporis rerum harum cupiditate distinctio libero, fugiat suscipit, aut odit at dolores repellat minima dolorum officia culpa.",
      skills: ["MySQL", "JAVA", "Flutter"],
    },
    {
      Title: "Frontend Developer",
      institution: "WebWorks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      skills: ["React", "CSS", "JavaScript"],
    },
    {
      Title: "Backend Developer",
      institution: "DataSolutions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
      skills: ["Node.js", "MongoDB", "Express"],
    },
  ]);
  return (
    <>
      <h1 className="text-2xl font-bold uppercase mb-[25px]">Experiences</h1>
      {exp.length > 0 && exp.map((e, i) => <DetailBlock key={i} item={e} />)}
    </>
  );
}
