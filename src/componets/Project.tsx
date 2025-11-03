import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { Badge } from "./ui/badge";

const Projects = () => {
  // Track when section enters viewport
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Track which project card is currently being hovered
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Project data array
  const projects = [
    {
      title: "Movie Finder App",
      description:
        "A web application that allows users to search for movies, view details, and save their favorite films. Built with React and the OMDB API.",
      image: "/assets/movie-finder.jpg",
      tags: [
        "React",
        "JavaScript",
        "CSS",
        "Responsive",
        "API",
        "OMDB",
        "CMA - React",
      ],
      github: "https://github.com/Poomsanthong/React-Movie-CMA", //  GitHub repo URL
      live: "https://react-movie-1392evspw-poom-s-projects-177e0ca6.vercel.app", //  live demo URL
    },
    {
      title: "Thai Restaurant Website - Landing Page",
      description:
        "A visually appealing and user-friendly landing page for a Thai restaurant, showcasing the menu, ambiance, and AOS animations.",
      image: "/assets/Thai-site.png",
      tags: ["Dark Mode", "AOS", "Responsive", "CSS", "Grid", "Flexbox"],
      github: "https://github.com/Poomsanthong/Restaurant_Website",
      live: "https://restaurant-website-landing-page.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "Clean, modern portfolio site with smooth animations and transitions. Mobile-first approach with perfect Lighthouse scores.",
      image:
        "https://images.unsplash.com/photo-1750056393326-8feed2a1c34f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1c2VyJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MTcyMzQ5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["HTML", "CSS", "JavaScript", "GitHub"],
      github: "#",
      live: "#",
    },
    {
      title: "Real-Time Stock Market (In Progress)",
      description:
        "Real-Time Stock App Live prices, smart alerts, AI insights, charts, news, and custom watchlists powered by Next.js.",
      image: "/assets/stock-market.jpg",
      tags: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Responsive",
        "GitHub",
        "App routing",
        "API",
        "Real-Time Data",
      ],
      github: "#",
      live: "#",
      status: "In Progress",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work demonstrating front-end development
            skills, responsive design, and modern web technologies.
          </p>
        </motion.div>

        {/* Projects Grid - 2 columns on medium screens and up */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Map through projects to create cards */}
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.1, // Stagger animations
              }}
              // Track hover state for this card
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Project Image Container */}
              <div className="relative h-56 sm:h-64 md:h-48 lg:h-56 overflow-hidden bg-gray-100 dark:bg-gray-700">
                {/* Image zooms in on hover */}
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.05 : 1, // Slightly less zoom for better readability
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300"
                  />
                </motion.div>

                {/* Subtle gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                {!project.status && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0, // Fade in when hovered
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-6 gap-4 backdrop-blur-sm"
                  >
                    {/* GitHub Repository Link */}
                    <motion.a
                      whileHover={{ scale: 1.1 }} // Grow on hover
                      whileTap={{ scale: 0.9 }} // Shrink when clicked
                      href={project.github}
                      className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </motion.a>

                    {/* Live Demo Link */}
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.live}
                      className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.a>
                  </motion.div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-6">
                {/* Project Title */}
                <h3 className="mb-3 dark:text-white">{project.title}</h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-cyan-400 hover:bg-blue-200 dark:hover:bg-blue-900"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
