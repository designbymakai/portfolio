import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Layers } from "lucide-react";

// Combine all projects into one category
const allProjects = [
  // Butterfly
  
  {
    id: "Butterfly-1",
    title: "Butterfly Productivity",
    role: "Butterfly · UI/UX · Dev",
    featured: true,
    blurb: "Butterfly is a productivity dashboard designed for clarity and focus. Organize tasks, track your week, and manage your calendar—all in one place.",
    cover: "src/assets/butterfly/butterfly-hero.png",
    alt: "Butterfly app dashboard",
    tags: ["App Design", "UI/UX", "React"],
    links: [
      { label: "GitHub", href: "https://github.com/designbymakai/Butterfly" },
    ],
  },
  {
    id: "Butterfly-2",
    title: "Butterfly Research Proposal",
    role: "Butterfly · Researcher",
    featured: false,
    blurb: "Comprehensive research proposal providing data on pain points and market opportunities.",
    cover: "src/assets/showcase/ux/researchPropCover.jpg",
    alt: "Digital character illustration",
    tags: ["Editorial Design", "Adobe Illustrator", "Design Research"],
    links: [{ label: "View PDF", href: "https://drive.google.com/file/d/1RvZkL-dD_Dg_25okltwl3S7A-gLCmkFU/preview?usp=embed_googleplus" }],
  },
  {
    id: "Butterfly-3",
    title: "Butterfly Final Visual Summary",
    role: "Butterfly · UI/UX",
    featured: false,
    blurb: "Comprehensive visual summary providing insights on user experience and design impact.",
    cover: "src/assets/butterfly/capstone-cover.jpg",
    alt: "Digital character illustration",
    tags: ["Editorial Design", "Adobe Illustrator", "UI/UX"],
    links: [{ label: "View PDF", href: "https://drive.google.com/file/d/1vyg0IgxEdlJp1xuwhThMEB3xhHx31aBZ/preview?usp=embed_googleplus" }],
  },
  {
    id: "Butterfly-4",
    title: "Butterfly Final Presentation",
    role: "Butterfly · UI/UX",
    featured: false,
    blurb: "Comprehensive visual summary providing insights on user experience and design impact.",
    cover: "src/assets/butterfly/butterfly-pres.png",
    alt: "Digital character illustration",
    tags: ["Editorial Design", "Presentation"],
    links: [{ label: "View PDF", href: "https://drive.google.com/file/d/1ce4vp14moKcDBY6Mp1lY-IDRd1JVDmSU/preview?usp=embed_googleplus" }],
  },
  {
    id: "hourglass-1",
    title: "Hourglass Recycling",
    role: "UI/UX · Dev",
    featured: true,
    blurb: "A recycling app that helps users recycle more effectively and gamifies the experience allowing for them to earn rewards.",
    cover: "src/assets/showcase/thumbnails/hourglass-thumbnail.png",
    alt: "Hourglass app dashboard",
    tags: ["App Design", "Figma", "UI/UX"],
    links: [{ label: "Live Demo", href: "https://www.figma.com/proto/JOkThCJMBslgNakh9TuZt3/DES200-A2-Draft_1?embed_host=share&kind=proto&node-id=123-138&scaling=scale-down&starting-point-node-id=0%3A3&t=Obfuj4jIp8km9rY3-1" },
    ],
  },
  {
    id: "hourglass-2",
    title: "Hourglass Showcase",
    role: "Artist",
    featured: false,
    blurb: "Presentation showcasing the design process and user research for the Hourglass app.",
    cover: "/src/assets/showcase/thumbnails/hourglass-pres.png",
    alt: "Digital character illustration",
    tags: ["Editorial Design", "Adobe Illustrator"],
    links: [{ label: "View Presentation", href: "https://www.canva.com/design/DAFkRKPQ9eE/view?embed" }],
  },
  {
    id: "hourglass-3",
    title: "Hourglass Documentation",
    role: "Artist",
    featured: false,
    blurb: "Whitepaper documenting the design process and user research for the Hourglass app.",
    cover: "/src/assets/showcase/ux/hourglass.png",
    alt: "Digital character illustration",
    tags: ["Editorial Design", "Adobe Illustrator"],
    links: [{ label: "View PDF", href: "https://drive.google.com/file/d/1Q-3M_jQA0FN78oFWa6306491OT7EwfKu/preview?usp=embed_googleplus" }],
  },
  {
    id: "relax-1",
    title: "Relax Medical Aesthetics Website",
    role: "UI/UX · Dev",
    featured: true,
    blurb: "A website redesign for Relax Medical Aesthetics, focusing on user experience and modern design.",
    cover: "src/assets/showcase/ux/relax-capture.png",
    alt: "Relax Medical Aesthetics website",
    tags: ["Web Design", "Branding", "UI/UX"],
    links: [{ label: "View Website", href: "https://www.relaxmedicalaesthetics.com" }],
  },
  {
    id: "ripe-1",
    title: "Ripe Showcase",
    role: "Ripe · Product Development",
    featured: true,
    blurb: "Ripe is a showcase of innovative design solutions that blend creativity with functionality.",
    cover: "src/assets/showcase/thumbnails/ripe.png",
    alt: "Ripe app dashboard",
    tags: ["Product Design", "3D Modeling", "Branding"],
    links: [
      { label: "View Showcase", href: "https://www.canva.com/design/DAFONtTFE3s/view?embed" },
    ],
  },
  {
    id: "Whitepapers-1",
    title: "Systemsnet Whitepaper",
    role: "Artist",
    featured: true,
    blurb: "Whitepaper designed for Systemsnet under their design guidelines.",
    cover: "/src/assets/showcase/ux/systemsnet.png",
    alt: "Digital character illustration",
    tags: ["Editorial Design", "Adobe Illustrator"],
    links: [{ label: "View PDF", href: "https://drive.google.com/file/d/18STesp1LlfQIudu_hhUcdvZ5fCokDy4w/preview?usp=embed_googleplus" }],
  },
  {
    id: "Whitepapers-2",
    title: "NetatWork MSP Whitepaper",
    role: "Artist",
    featured: false,
    blurb: "Whitepaper designed for NetatWork under their design guidelines.",
    cover: "/src/assets/showcase/ux/whitepaperCover.jpg",
    alt: "Digital character illustration",
    tags: ["Editorial Design", "Adobe Illustrator"],
    links: [{ label: "View PDF", href: "https://drive.google.com/file/d/1f0hpY8ORIESaGMIC28cEAfrZTHUmNRWl/preview?usp=embed_googleplus" }],
  },
  // Illuvison
  {
    id: "Illuvison-1",
    title: "Illuvison Teaser",
    role: "Editor",
    featured: false,
    blurb: "Short-form video edit for a university project on flood awareness during the New Zealand floods in 2022.",
    cover: "src/assets/showcase/thumbnails/illuvion-thumbnail.png",
    alt: "YouTube video thumbnail",
    tags: ["Adobe Premiere", "Blender"],
    links: [{ label: "Watch", href: "https://www.youtube.com/embed/_7hXxqemQ8A" }],
  },
  {
    id: "Illuvison-2",
    title: "Illuvison Documentation",
    role: "Editor",
    featured: false,
    blurb: "Short-form video edit for a university project on flood awareness during the New Zealand floods in 2022.",
    cover: "src/assets/showcase/ux/illuvison-doc.png",
    alt: "YouTube video thumbnail",
    tags: ["Adobe Premiere", "Blender"],
    links: [{ label: "View PDF", href: "https://drive.google.com/file/d/1Gq3EWdwgGvqZD6sOa2r1Anztp0rhj_iU/preview?usp=embed_googleplus" }],
  },
  // Flood Check
  {
    id: "Flood Check-1",
    title: "Flood Mock News Segment",
    role: "Editor",
    featured: false,
    blurb: "Short-form video edit for a university project on flood awareness during the New Zealand floods in 2022.",
    cover: "src/assets/showcase/thumbnails/floodcheck-thumbnail.png",
    alt: "YouTube video thumbnail",
    tags: ["Adobe Premiere"],
    links: [{ label: "Watch", href: "https://www.youtube.com/embed/bEyUUaTIy4k" }],
  },
  {
    id: "Flood Check-2",
    title: "Flood Check PDF",
    role: "Artist",
    featured: false,
    blurb: "Original digital character art.",
    cover: "/src/assets/showcase/ux/floodCheckCover.jpg",
    alt: "Digital character illustration",
    tags: ["Editorial Design", "Adobe Illustrator"],
    links: [{ label: "View PDF", href: "https://drive.google.com/file/d/1T1aR9H7OO_HBoithFjBW9UmPeIPcfILK/preview?usp=embed_googleplus" }],
  },
  // Jymbot
  {
    id: "Jymbot-1",
    title: "Jymbot Showcase v1",
    role: "Editor",
    featured: false,
    blurb: "Short-form video edit for a university project on flood awareness during the New Zealand floods in 2022.",
    cover: "src/assets/showcase/thumbnails/jymbot-thumbnail.png",
    alt: "YouTube video thumbnail",
    tags: ["Adobe Premiere", "Blender"],
    links: [{ label: "Watch", href: "https://www.youtube.com/embed/bSCUjIK-hk0" }],
  },
  {
    id: "Jymbot-2",
    title: "Jymbot Showcase v2",
    role: "Editor",
    featured: false,
    blurb: "Short-form video edit for a university project on flood awareness during the New Zealand floods in 2022.",
    cover: "src/assets/showcase/thumbnails/jymbot-thumbnail2.png",
    alt: "YouTube video thumbnail",
    tags: ["Adobe Premiere", "Blender"],
    links: [{ label: "Watch", href: "https://www.youtube.com/embed/xUQRgtwwl7A" }],
  },
  
  
  {
    id: "moss3-1",
    title: "Moss³ Documentation",
    role: "UI/UX · Dev",
    featured: false,
    blurb: "A 3D modeling tool that simplifies the process of creating and editing 3D assets.",
    cover: "src/assets/showcase/ux/moss3.png",
    alt: "Moss Cubed app dashboard",
    tags: ["App Design", "Figma", "UI/UX"],
    links: [{ label: "View PDF", href: "https://drive.google.com/file/d/14wsFAJ5D3quvue3FP72QP3nUGQEBj8Zp/preview?usp=embed_googleplus" }],
  },
  {
    id: "moss3-2",
    title: "Moss³ Infographic",
    role: "UI/UX · Dev",
    featured: false,
    blurb: "A 3D modeling tool that simplifies the process of creating and editing 3D assets.",
    cover: "src/assets/showcase/ux/moss3-info.png",
    alt: "Moss  app dashboard",
    tags: ["App Design", "Figma", "UI/UX"],
    links: [{ label: "View Image", href: "src/assets/showcase/ux/moss3-info.png" }],
  },
  
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};
const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

function uniq(input) {
  return Array.from(new Set(input));
}

function ProjectCard({ project, onSelect, isSelected }) {
  return (
    <motion.div variants={item}>
      <Card
        className={`border-none group overflow-hidden rounded-lg cursor-pointer bg-dbm-db-100 ${isSelected ? "" : ""}`}
        onClick={() => onSelect(project.id.split("-")[0])}
      >
        <CardHeader className="p-0">
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <img
              src={project.cover}
              alt={project.alt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] border-b-2 border-dbm-db-400"
              loading="lazy"
            />
            {project.role && (
              <div className="absolute left-3 top-3">
                
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-xl leading-tight text-dbm-w-100">{project.title}</CardTitle>
          <p className="mt-2 text-md text-dbm-w-100">{project.blurb}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Badge key={t} variant="secondary" className="rounded-lg bg-dbm-pr-200 border-dbm-b-100 text-dbm-w-100 hover:bg-dbm-pr-300 hover:border-dbm-pr-200 border-none" aria-label={`tag ${t}`}>
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
        {(project.links?.length ?? 0) > 0 && (
          <CardFooter className="flex gap-2 p-4 pt-0">
            {project.links.map((l) => (
              <Button key={l.href} asChild size="sm" variant="outline" className="rounded-lg bg-dbm-pr-100 border-dbm-b-100 text-dbm-b-100 hover:bg-dbm-pr-200 hover:text-dbm-w-100 hover:border-dbm-pr-200 border-none">
                <a href={l.href} target="_blank" rel="noreferrer noopener" aria-label={`${project.title} – ${l.label}`}>
                  <ExternalLink className="mr-2 h-4 w-4" /> {l.label}
                </a>
              </Button>
            ))}
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
}

function ImageModal({ open, onClose, imgSrc, imgAlt }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dbm-db-100/80">
      <div className="bg-white rounded-lg p-4 max-w-lg w-full relative">
        <button
          className="absolute top-2 right-2 text-black"
          onClick={onClose}
        >
          Close
        </button>
        <img src={imgSrc} alt={imgAlt} className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
}

export default function Skills() {
  const [query, setQuery] = useState("");
  const [activeProjectGroup, setActiveProjectGroup] = useState("Featured");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState({ src: "", alt: "" });

  const allProjectGroups = uniq([
    "Featured",
    ...allProjects.map((p) => p.id.split("-")[0]),
  ]);

  // Filtering logic
  const visibleProjects = useMemo(() => {
  if (activeProjectGroup === "Featured") {
    return allProjects.filter((p) => p.featured); // Only show featured projects
  }
  return allProjects.filter((p) => p.id.startsWith(activeProjectGroup + "-"));
}, [activeProjectGroup]);

  // Show extra description for the first project in the selected group
  const selectedProjectObj =
    activeProjectGroup !== "Featured"
      ? allProjects.find((p) => p.id.startsWith(activeProjectGroup + "-"))
      : null;

  // Custom descriptions for each project group
  const projectDescriptions = {
    Featured: "A curated selection of my most representative and recent work across design, development, and research.",
    Butterfly: "Butterfly is an AI driven productivity app focused on clarity, neurodiversity, and workflow.",
    Jymbot: "Jymbot is a video editing project for flood awareness, showcasing motion graphics and storytelling.",
    Illuvison: "Illuvison explores video editing and documentation for university flood awareness projects.",
    "Flood Check": "Flood Check includes video and editorial work for flood awareness and character art.",
    Whitepaper: "Whitepaper projects demonstrate editorial design and research for tech clients.",
    hourglass: "Hourglass is a gamified recycling app and documentation project.",
    moss3: "Moss³ is a 3D modeling tool with supporting documentation and infographics.",
    relax: "Relax Medical Aesthetics is a web redesign project focused on user experience and modern design.",
  };

  return (
    <div className="border-dbm-gr-300 py-6 bg-dbm-db-200 border-y-8 pb-16 mx-auto md:pl-0" id="skills">
      <section aria-label="Skills Showcase" className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8  rounded-lg py-5">
        <h1 className="text-3xl md:text-5xl font-bold text-dbm-pr-100 my-4">Skills & Gallery</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {allProjectGroups.map((group) => (
            <Button
              key={group}
              size="sm"
              variant={activeProjectGroup === group ? "default" : "outline"}
              className="text-lg rounded-lg bg-dbm-pr-100 border-dbm-b-100 text-dbm-db-100 hover:bg-dbm-pr-200 hover:text-dbm-w-100 hover:border-dbm-pr-200"
              onClick={() => setActiveProjectGroup(group)}
              aria-pressed={activeProjectGroup === group}
            >
              {group === "Featured"
                ? "Featured"
                : group.charAt(0).toUpperCase() + group.slice(1)}
            </Button>
          ))}
        </div>
        {/* Project Description Section */}
        <div className="mb-8 rounded-lg bg-card p-6 bg-dbm-db-100 text-dbm-w-100">
          <h2 className="text-lg font-bold mb-2">
            {activeProjectGroup === "Featured"
              ? "Featured Projects"
              : selectedProjectObj?.title || activeProjectGroup}
          </h2>
          <p className="mb-2 text-dbm-w-100">
            {projectDescriptions[activeProjectGroup] ||
              selectedProjectObj?.blurb ||
              "Explore this project group."}
          </p>
        </div>
        <Separator className="my-4" />
        <AnimatePresence mode="sync">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visibleProjects.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                onSelect={setActiveProjectGroup}
                isSelected={activeProjectGroup === p.id.split("-")[0]}
              />
            ))}
          </motion.div>
        </AnimatePresence>
        {visibleProjects.length === 0 && (
          <div className="rounded-lg border p-8 text-center text-muted-foreground">
            No projects match your filters.
          </div>
        )}
        {/* Extra description for selected project group links */}
        {selectedProjectObj && (
          <div className="mt-8 rounded-lg bg-card p-6 bg-dbm-db-100 text-dbm-w-100">
            <h2 className="text-xl font-bold mb-2">{selectedProjectObj.title}</h2>
            <p className="mb-2">{selectedProjectObj.blurb}</p>
            {selectedProjectObj.links && (
              <div className="flex flex-wrap gap-2">
                {selectedProjectObj.links.map((l) =>
                  l.label === "View Image" ? (
                    <Button
                      key={l.href}
                      size="sm"
                      variant="outline"
                      className="rounded-lg"
                      onClick={() => {
                        setModalImg({
                          src: selectedProjectObj.cover,
                          alt: selectedProjectObj.alt,
                        });
                        setModalOpen(true);
                      }}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> {l.label}
                    </Button>
                  ) : (
                    <Button key={l.href} asChild size="sm" variant="outline" className="rounded-lg bg-dbm-w-100 text-dbm-db-100 hover:bg-dbm-pr-200 hover:text-dbm-w-100 hover:border-dbm-pr-200">
                      <a href={l.href} target="_blank" rel="noreferrer noopener">
                        <ExternalLink className="mr-2 h-4 w-4" /> {l.label}
                      </a>
                    </Button>
                  )
                )}
              </div>
            )}
            <ImageModal
              open={modalOpen}
              onClose={() => setModalOpen(false)}
              imgSrc={modalImg.src}
              imgAlt={modalImg.alt}
            />
          </div>
        )}
      </section>
    </div>
  );
}