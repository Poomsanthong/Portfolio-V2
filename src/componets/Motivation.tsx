import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Motivation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="motivation"
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
            Motivation Letter
          </h2>
        </motion.div>

        {/* Main Motivation Letter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-blue-950/50 rounded-2xl p-8 md:p-12">
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Dear Hiring Manager,
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I am writing to express my strong interest in the Front-End
              Developer position. With a solid foundation in modern web
              technologies including React, JavaScript , HTML , CSS , and
              Tailwind CSS, I am confident in my ability to contribute
              effectively to your team.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Throughout my journey as a developer, I have developed a passion
              for creating intuitive, responsive , and visually appealing web
              applications. My expertise includes building mobile-first designs,
              implementing complex UI components , and ensuring cross-browser
              compatibility. I am experienced with version control using GitHub
              and deployment through Vercel, enabling smooth collaboration and
              efficient delivery.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Alongside my current skills, I am actively expanding my knowledge
              by learning Next.js and gradually building backend fundamentals,
              allowing me to better understand full-stack workflows and
              contribute more efficiently in modern development environments.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              What sets me apart is my commitment to writing clean, maintainable
              code and staying up-to-date with industry trends. I believe in
              user-centered design and strive to build experiences that are not
              only visually refined but also meaningful and impactful for end
              users.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I am excited about the opportunity to bring my technical skills,
              creativity, and motivation to your organization. I look forward to
              contributing to innovative projects and growing alongside a
              talented team.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Thank you for considering my application.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-6">
              Sincerely,
              <br />
              <span className="text-blue-600 dark:text-cyan-400">
                Thanapoom Santhong
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Motivation;
