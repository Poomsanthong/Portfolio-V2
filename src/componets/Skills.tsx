import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Palette, Rocket } from "lucide-react";
import { SKILL_CATEGORIES, ADDITIONAL_SKILLS } from "@/constants";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Map constant icon ids to components
  const iconMap = {
    code: Code2,
    palette: Palette,
    rocket: Rocket,
  } as const;

  // Use centralized data
  const skillCategories = SKILL_CATEGORIES.map((c) => ({
    ...c,
    icon: iconMap[c.iconId as keyof typeof iconMap] ?? Code2,
  }));

  // Additional skills shown as tags (no progress bars)
  const additionalSkills = ADDITIONAL_SKILLS;

  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-white dark:bg-gray-900"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - animates when in view */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} // Start invisible and below
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Fade in and move up when visible
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Section Title with gradient */}
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise{" "}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Proficient in modern front-end technologies with a focus on creating
            performant, accessible, and scalable web applications.
          </p>
        </motion.div>

        {/* Skill Categories grid - 3 Columns */}

        <div className="grid  md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-blue-950/50 border border-blue-100 dark:border-gray-700"
            >
              {/* Category Header with Icon */}
              <div className="flex items-center mb-6 gap-3">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-600 dark:to-blue-600">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-blue-600 dark:text-cyan-400">
                {category.category}
              </h3>
              {/* Skills List with Progress Bars */}
              <div className="mt-6 space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    {/* Skill Name and Percentage */}

                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      {/* Animated Progress Fill */}
                      <motion.div
                        initial={{ width: 0 }} // Start at 0 width
                        animate={isInView ? { width: `${skill.level}%` } : {}} // Animate to skill level
                        transition={{
                          duration: 1,
                          // Delay based on category and skill position for wave effect
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center "
        >
          <h3 className="mb-6 text-gray-900 dark:text-white">
            Additional Expertise
          </h3>

          {/* Skill Tags Container */}
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }} // Start small and invisible
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.8 }} // Stagger each tag with tiny delay
                whileHover={{ scale: 1.05 }} // Scale up on hover
                className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 text-blue-700 dark:text-cyan-400 border border-blue-200 dark:border-blue-800"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;
