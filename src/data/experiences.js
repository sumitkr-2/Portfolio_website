// src/data/experiences.js

import internImg from "../assets/experience/intern.jpeg";
import upvisionImg from "../assets/experience/upvision.jpeg";
import writerImg from "../assets/experience/sumit.png";
import freelanceImg from "../assets/experience/freelancer.png";

export const experiences = [
  {
    title: "Software Development Intern",
    org: "SkillCraft Technology",
    img: internImg,
    duration: "Sep 2024 – Present",
    location: "New Delhi, India",
    desc:
      "Built internal tools using Python & REST APIs. Improved automation by 35% and reduced UI bugs by 25%.",
    tech: ["Python", "REST APIs", "HTML", "CSS"],
    links: [
      {
        text: "📜 Certificate",
        url: "https://drive.google.com/file/d/1okfZalqxQQhZjd8uLlffhvEGbFT9E5_x/view",
      },
      {
        text: "📄 LOR",
        url: "https://drive.google.com/file/d/1NfGj2RDTFFlyvkq_gcKW9PhH3onWcd2j/view",
      },
    ],
  },

  {
    title: "Executive Member – Content Head",
    org: "UPVISION Technical Club",
    img: upvisionImg,
    duration: "2023 – Present",
    location: "NIT Delhi",
    desc:
      "Managed website, led 12 writers, mentored juniors, and increased club reach by 40%.",
    tech: ["Leadership", "Teamwork", "Docs", "Writing"],
    links: [
      {
        text: "📜 Profile",
        url: "https://www.linkedin.com/in/sumit-kumar2004/",
      },
    ],
  },

  {
    title: "Story Writer",
    org: "Medium & Blogs",
    img: writerImg,
    duration: "2022 – Present",
    location: "Online",
    desc:
      "Wrote 10+ technical blogs and stories focused on clarity and real-world problem solving.",
    tech: ["Writing", "Blogs", "Creativity"],
    links: [
      {
        text: "📜 Blogs",
        url: "https://medium.com/@sumit.kumar120664",
      },
    ],
  },

  {
    title: "Freelance Developer",
    org: "Remote Projects",
    img: freelanceImg,
    duration: "2023 – Present",
    location: "Remote",
    desc:
      "Built responsive web apps using React and Tailwind with a focus on UX and performance.",
    tech: ["React", "Tailwind", "Node.js"],
    links: [
      {
        text: "🌐 GitHub",
        url: "https://github.com/sumitkr-2",
      },
    ],
  },
  
];
