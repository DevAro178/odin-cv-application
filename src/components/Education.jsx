import { useState } from "react";
import DetailBlock from "./DetailBlock";

export default function Education() {
  const [edu, setEdu] = useState([
    {
      Title: "Bachelor of Science in Computer Science",
      institution: "Tech University",
      description:
        "Focused on software engineering, algorithms, and data structures. Developed a solid understanding of computer systems and participated in numerous projects involving full-stack development.",
      skills: ["Java", "Python", "Data Structures"],
    },
    {
      Title: "Master of Science in Information Technology",
      institution: "WebWorks Institute",
      description:
        "Specialized in advanced programming concepts, artificial intelligence, and cloud computing. Contributed to research papers and projects focused on machine learning and distributed systems.",
      skills: ["Machine Learning", "Cloud Computing", "C++"],
    },
    {
      Title: "Frontend Development Bootcamp",
      institution: "CodeAcademy",
      description:
        "Intensive bootcamp focused on modern frontend technologies. Built multiple responsive web applications using cutting-edge tools and frameworks.",
      skills: ["React", "CSS", "JavaScript"],
    },
  ]);

  return (
    <>
      <h1 className="text-2xl font-bold uppercase mb-[25px]">Education</h1>
      {edu.length > 0 && edu.map((e, i) => <DetailBlock key={i} item={e} />)}
    </>
  );
}
