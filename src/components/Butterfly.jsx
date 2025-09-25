import React from "react";
import FeatureTimeline from "./FeatureTimeline";
import { FaGithub, FaLink } from "react-icons/fa";
import butterflyHome from "@/assets/butterfly/features/butterfly-home.png";
import butterflyAI from "@/assets/butterfly/features/ai-assistant.png";
import butterflyCalendar from "@/assets/butterfly/features/calendar.png";
import butterflyTasks from "@/assets/butterfly/features/tasks.png";
import butterflyProjects from "@/assets/butterfly/features/projects.png";
import butterflyProjectsNote from "@/assets/butterfly/features/projectsnote.png";
import butterflyMachero from "@/assets/butterfly/butterfly-machero.png";

export default function Butterfly() {
  const features = [
  { 
      title: "Smart Dashboard",
      text: "The Butterfly homepage offers a clear and concise overview of your day, allowing you to hit the ground running. It displays a thumbnail of your calendar events, a daily agenda highlighting tasks and events, and a summary of active tasks, including those due that day.",
      img: butterflyHome,
      features: [
        "Overview of your day",
        "Thumbnail of calendar events",
        "Daily agenda highlighting tasks",
        "Summary of active tasks"
      ],
    },
    {
      title: "AI Assistant",
      text: "The AI Assistant takes center stage on this page, offering quick interactions to add, update, or prioritize tasks. You can also check upcoming tasks and get advice on what to focus on. The homepage is designed to give you all the essential information at a glance, helping you kickstart your day efficiently.",
        img: butterflyAI,
        features: [
          "Quick interactions to manage tasks",
          "Check upcoming tasks",
          "Get advice on what to focus on"
        ],
      },
  {
    title: "Calendar Integration",
    text: "Drag and drop events, color-coded for clarity.",
    img: butterflyCalendar,
    features: [
          "Drag and drop events and tasks",
          "Color-coded for clarity",
          "Customizable views"
        ],
  },
  {
    title: "Task Management",
    text: "All of your tasks in one place for easy management.",
    img: butterflyTasks,
    features: [
      "Create, edit, and delete tasks",
      "Set due dates and reminders",
      "Organize tasks by project, tag, or priority"
    ],
  },
  {
    title: "Project Overviews",
        text: "Get a high-level view of your projects and their progress.",
        img: butterflyProjects,
        features: [
          "Visualize project timelines",
          "Track milestones and deadlines",
          "Identify bottlenecks and issues"
        ],
  },
  {
    title: "Project Notes",
        text: "Create notes and link them to projects for easy reference.",
        img: butterflyProjectsNote,
        features: [
          "Rich text formatting",
          "Link notes to tasks and projects",
          "Searchable and organized",
          "View tasks and link them to notes"
    ],
  },
];
  return (
    <section>
      <div className="flex flex-col md:flex-row items-center justify-center py-12 px-12 md:px-12 bg-dbm-db-200" id="spotlight">
        {/* Left: Title and Intro */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-between mb-8 md:mb-0 md:pr-8 space-y-6">
          <div className="">
            <h1 className="text-3xl md:text-5xl font-bold text-dbm-pr-100 mb-4">Butterfly Productivity</h1>
            <p className="text-lg md:text-2xl text-dbm-w-200 mb-2">
              Butterfly is a productivity dashboard designed for clarity and focus. 
              Organize tasks, track your week, and manage your calendar—all in one place.
            </p>
            <p className="text-base md:text-lg text-dbm-w-400">
              Built for neurodivergent users and anyone who wants a smarter, simpler workflow.
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