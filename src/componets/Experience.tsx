import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { Badge } from "./ui/badge";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Work experience
  const experiences = [
    {
      title: "Waiter",
      company: "BaiYok Thai Restaurant",
      location: "Zwolle, Netherlands",
      period: "2024 - Present",
      description:
        "Providing high-quality guest service in a fast-paced restaurant environment while maintaining professional communication and teamwork.",
      responsibilities: [
        "Delivered excellent customer service and dining experience",
        "Handled table orders and coordinated with kitchen staff",
        "Processed payments and managed POS system",
        "Maintained cleanliness and organization of dining area",
        "Assisted with managing reservations and customer requests",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "ICE Malta",
      location: "Zebbug, Malta",
      period: "2023 - 2024",
      description:
        "Supported web development projects and assisted in building responsive websites using modern front-end tools.",
      responsibilities: [
        "Developed front-end components using HTML, CSS, JavaScript, and React",
        "Designed and implemented responsive UI layouts",
        "Assisted in debugging and improving website performance",
        "Collaborated with instructors and peers on real-world projects",
        "Used Git for version control and project collaboration",
      ],
    },
    {
      title: "Engineering Intern",
      company: "Solid Base",
      location: "Malta",
      period: "2019 - 2020",
      description:
        "Worked alongside engineers assisting with technical tasks, digital tools, and project coordination.",
      responsibilities: [
        "Supported engineering staff with daily technical tasks",
        "Helped with equipment setup and basic troubleshooting",
        "Used computer-based tools for documentation and planning",
        "Assisted in project coordination and team support",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 md:py-32 bg-white dark:bg-gray-900"
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
            Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional journey building modern web applications and
            contributing to impactful projects.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Vertical Timeline Line (hidden on mobile) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-200 to-cyan-200 dark:from-blue-900 dark:to-cyan-900"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot (hidden on mobile) */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-blue-500 border-4 border-white dark:border-gray-900"></div>
                </div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-blue-950/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-600 dark:to-blue-600 flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="dark:text-white">{exp.title}</h3>
                      </div>
                      <p className="text-blue-600 dark:text-cyan-400 mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>

                  {/* Key Responsibilities */}
                  <div className="mb-4">
                    <h4 className="text-gray-900 dark:text-white mb-3">
                      Key Responsibilities & Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, i) => (
                        <li
                          key={i}
                          className="text-gray-600 dark:text-gray-300 flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
