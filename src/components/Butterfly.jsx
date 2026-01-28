import React from "react";
import FeatureTimeline from "./FeatureTimeline";
import { FaGithub, FaLink } from "react-icons/fa";
import butterflyMachero from "@/assets/butterfly/butterfly-machero.png";

// Eagerly load feature images and collect by prefix (ai, task, proj)
const featureImageMap = import.meta.glob(
  "@/assets/butterfly/features/*.png",
  { eager: true, import: "default" }
);

const collectImages = (prefix) => {
  return Object.entries(featureImageMap)
    .map(([path, src]) => {
      const match = path.match(new RegExp(`/${prefix}(\\d+)\\.png$`));
      if (!match) return null;
      return { idx: Number(match[1]), src };
    })
    .filter(Boolean)
    .sort((a, b) => a.idx - b.idx)
    .map(({ src }) => src);
};

export default function Butterfly() {
  const features = [
    {
      title: "AI and Prioritisation Assistance",
      text: "The AI Assistant takes center stage, offering quick interactions to add, update, or prioritize tasks. You can check upcoming tasks and get advice on what to focus on, helping you kickstart your day with clarity and confidence.",
      images: collectImages("ai"),
      features: [
        "Quick interactions to manage tasks",
        "Check upcoming tasks",
        "Get advice on what to focus on",
        "Intelligent task prioritization"
      ],
    },
    {
      title: "Task and Event Management",
      text: "All of your tasks and events in one place for easy management. Drag and drop functionality with color-coded clarity makes organizing your workload intuitive and efficient.",
      images: collectImages("task"),
      features: [
        "Create, edit, and delete tasks",
        "Set due dates and reminders",
        "Drag and drop events",
        "Color-coded for clarity",
        "Organize by project, tag, or priority"
      ],
    },
    {
      title: "Project Organisation and Notes",
      text: "Get a high-level view of your projects and their progress. Create rich-text notes, link them to projects and tasks, and keep everything searchable and organized in one centralized location.",
      images: collectImages("proj"),
      features: [
        "Visualize project timelines",
        "Track milestones and deadlines",
        "Rich text formatting",
        "Link notes to tasks and projects",
        "Searchable and organized"
      ],
    },
  ];
  return (
    <section id="spotlight">
      <div className="flex flex-col md:flex-row items-center justify-center py-12 px-12 md:px-12 bg-dbm-db-200">
        {/* Left: Title and Intro */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-between mb-8 md:mb-0 md:pr-8 space-y-6">
          <div className="">
            <h1 className="text-3xl md:text-5xl font-bold text-dbm-pr-100 mb-4">Butterfly Productivity</h1>
            <p className="text-lg md:text-2xl text-dbm-w-200 mb-2">
              Butterfly is a human-centered productivity dashboard created to support neurodivergent users.

            </p>
            <p className="text-base md:text-xlf text-dbm-w-400">
              Designed to minimize cognitive overload and task paralysis, it combines task organization, weekly visibility, and calendar management into one accessible system.
            </p>
          </div>
          <div className="mt-4">
            <p className="text-dbm-w-100">Learn more:</p>
              <div className="flex flex-col md:flex-row gap-4">
                <a href="https://github.com/designbymakai/Butterfly" target="_blank" rel="noopener noreferrer">
                <button className="mt-2 bg-dbm-pr-100 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-dbm-pr-200 transition">
                  <p className="flex items-center gap-2">
                    <FaGithub className="text-2xl text-dbm-db-200" />
                    Github
                  </p>
                </button>
                </a>
                <a href="https://designassembly.org.nz/2025/08/01/2025-hot-new-things-makai-ingalls-university-of-auckland/" target="_blank" rel="noopener noreferrer">
                <button className="mt-2 bg-dbm-pr-100 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-dbm-pr-200 transition">
                  <p className="flex items-center gap-2">
                    <FaLink className="text-2xl text-dbm-db-200" />
                    Design Assembly Interview
                  </p>
                </button>
                </a>
                <a href="https://redesign.ac.nz/projects/butterfly-productivity" target="_blank" rel="noopener noreferrer">
                <button className="mt-2 bg-dbm-pr-100 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-dbm-pr-200 transition">
                  <p className="flex items-center gap-2">
                    <FaLink className="text-2xl text-dbm-db-200" />
                    Redesign Project Page
                  </p>
                </button>
                </a>
              </div>
          </div>
        </div>
        {/* Right: Centered and Scaled Screenshot */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={butterflyMachero}
            alt="Butterfly App Screenshot in MacBook Mockup"
            className="rounded-xl w-full h-auto max-w-[900px] md:max-w-[1100px] mx-auto object-contain"
          />
        </div>
      </div>
      <FeatureTimeline features={features} />
    </section>
  );
}