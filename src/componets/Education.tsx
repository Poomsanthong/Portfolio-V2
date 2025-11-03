import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Award, Calendar, GraduationCap } from "lucide-react";
import { Badge } from "./ui/badge";
// Education history - replace with your actual education
const education = [
  {
    degree: "Web Development / Web Design ",
    institution: "Ice Malta",
    location: "Zebbuge, Malta",
    period: "2023 - 2025",
    description:
      "Comprehensive training in web development, UI/UX design, responsive design principles, database fundamentals, and modern development workflows.",
    achievements: [
      "Built multiple full-stack and front-end projects",
      "Completed hands-on industry-focused coursework",
      "Collaborated on team development projects",
      "Certified in web technologies (HTML, CSS, JavaScript, React)",
    ],
    courses: [
      "HTML, CSS & Responsive Web Design",
      "JavaScript & Modern Front-End Development",
      "React Fundamentals",
      "UI/UX Design Principles",
      "Web Project Workflow & Version Control (Git)",
      "Database Basics & APIs",
      "Deployment & Hosting (Vercel / Netlify)",
    ],
  },
  {
    degree: "Information Technology",
    institution: "Giovanni Curmi Higher Secondary School",
    location: "Naxxar, Malta",
    period: "2020 - 2022",
    description:
      "Studied core IT concepts including networking, software fundamentals, hardware systems, and digital literacy.",
    achievements: [
      "Completed coursework in IT fundamentals",
      "Hands-on experience with system setups and troubleshooting",
      "Collaborated on IT-related group projects",
    ],
    courses: [
      "IT Fundamentals",
      "Networking",
      "Computer Hardware",
      "Basic Programming",
      "Database Basics",
    ],
  },
];

// Certifications - replace with your actual certifications
const certifications = [
  {
    name: "Adobe Professional Certificate",
    issuer: "Ice Malta",
    date: "2025",
  },
  {
    name: " Web Design Certification",
    issuer: "Ice Malta",
    date: "2025",
  },

  {
    name: " Java Coding Participant",
    issuer: "Ice Malta",
    date: "2022",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="education"
      className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
      ref={ref}
    >
      <div className="container mx-auto px-6 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Academic background and continuous learning journey in web
            development and computer science.
          </p>
        </motion.div>

        {/* Education Timeline */}

        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Institution Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-600 dark:to-blue-600">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="dark:text-white mb-2">{edu.degree}</h3>
                  <p className="text-blue-600 dark:text-cyan-400 mb-1">
                    {edu.institution}, {edu.location} ({edu.period})
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {edu.description}
              </p>

              {/* Achievements */}
              <div className="mb-4">
                <h4 className="text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                  Achievements
                </h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-gray-600 dark:text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-blue-600 dark:text-cyan-400 mt-1">
                        •
                      </span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Relevant Courses */}
              <div>
                <h4 className="text-gray-900 dark:text-white mb-3">
                  Key Courses
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <Badge
                      key={course}
                      variant="secondary"
                      className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-cyan-400"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-center mb-8 text-gray-900 dark:text-white">
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-blue-950/50 rounded-xl p-6 border border-blue-100 dark:border-gray-700"
              >
                <div className="mb-3">
                  <Award className="w-8 h-8 text-blue-600 dark:text-cyan-400" />
                </div>
                <h4 className="text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  {cert.issuer}
                </p>
                <p className="text-gray-500 dark:text-gray-400">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
