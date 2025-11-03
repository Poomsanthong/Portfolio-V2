/**
 * Hero Component
 * Landing section with animated background, introduction text, and call-to-action buttons
 */
import { ArrowDown, Github, Linkedin, Mail, Code2 } from "lucide-react";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Hero = () => {
  /**
   * Scroll to the projects section when "View My Work" is clicked
   */
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    // Full screen hero section with gradient background
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* First blob - rotates and scales continuously */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1], // Pulse effect
            rotate: [0, 90, 0], // Rotate 90 degrees and back
          }}
          transition={{
            duration: 20, // 20 seconds per cycle
            repeat: Infinity, // Loop forever
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />

        {/* Second blob - opposite animation pattern */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15, // Slightly faster for variety
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-18">
        <div className="text-center">
          {/* Introduction Text with fade-up animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.1,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-300 bg-clip-text text-transparent drop-shadow-lg cursor-default select-none relative py-4"
              style={{
                textShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
              }}
            >
              Thanapoom Santhong
            </motion.h1>
            {/* Badge showing role/title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} // Start small and invisible
              animate={{ opacity: 1, scale: 1 }} // Grow to full size
              transition={{ delay: 0.3 }} // Wait 0.3s before animating
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-cyan-400 mb-6"
            >
              <Code2 className="w-5 h-5" />
              <span>Front-End Developer</span>
            </motion.div>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }} // Appears after main heading
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 pb-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-300 bg-clip-text text-transparent"
            >
              Building Modern Web Experiences
            </motion.h2>

            {/* Description Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }} // Appears after heading
              className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8"
            >
              I transform ideas into pixel-perfect, responsive websites using
              React, JavaScript, and modern CSS. Passionate about creating fast,
              accessible, and user-friendly interfaces that make an impact.
            </motion.p>

            {/* Call-to-Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 justify-center mb-12"
            >
              {/* Primary CTA - View Projects */}
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
              >
                View My Work
              </Button>

              {/* Secondary CTA - Contact */}
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex gap-6 justify-center"
            >
              {/* GitHub Link */}
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }} // Grow and rotate on hover
                whileTap={{ scale: 0.9 }} // Shrink when clicked
                href="https://github.com/Poomsanthong" // GitHub URL
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </motion.a>

              {/* LinkedIn Link */}
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="#" // LinkedIn URL
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </motion.a>

              {/* Email Link */}
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:thanapoom.santhong10@gmail.com"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator - Bounces up and down */}
      <motion.div
        animate={{ y: [0, 10, 0] }} // Move down 10px and back
        transition={{ duration: 2, repeat: Infinity }} // Loop every 2 seconds
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
