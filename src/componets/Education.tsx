"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

import { Badge } from "./ui/badge";
import { EDUCATION, CERTIFICATIONS } from "@/constants";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Academic background and continuous learning journey in web
            development and computer science.
          </p>
        </motion.div>
        `` {/* Education Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-blue-950/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-3">
                <div className="p-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 dark:text-white font-semibold">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600 dark:text-cyan-400 text-sm">
                    {edu.institution}, {edu.location} ({edu.period})
                  </p>
                  <div className="flex gap-4 text-gray-600 dark:text-gray-400 text-sm mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {edu.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                {edu.description}
              </p>

              {/* Achievements */}
              <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm mb-3">
                {edu.achievements.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-600 dark:text-gray-300 flex items-start gap-2"
                  >
                    <span className="text-blue-600 dark:text-cyan-400 mt-1">
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Courses */}
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
            </motion.div>
          ))}
        </div>
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <h3 className="text-center mb-8 text-gray-900 dark:text-white">
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-blue-950/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mb-3">
                  <Award className="w-8 h-8 text-blue-600 dark:text-cyan-400" />
                </div>
                <h4 className="text-gray-900 dark:text-white mb-1">
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
