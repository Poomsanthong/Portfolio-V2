import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-cyan-900 dark:from-gray-950 dark:to-blue-950 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content - Flexbox layout */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright and Credits */}
          <div className="text-center md:text-left">
            {/* Built with message */}
            <p className="flex items-center justify-center md:justify-start gap-2">
              Built with{" "}
              <Heart className="w-4 h-4 text-cyan-300 fill-current" /> React &
              Tailwind CSS
            </p>

            {/* Copyright notice */}
            <p className="text-cyan-200 mt-2">
              © {currentYear} Poom Santhong. All rights reserved.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6">
            {/* GitHub Link */}
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }} // Grow and rotate on hover
              whileTap={{ scale: 0.9 }} // Shrink when clicked
              href="https://github.com/Poomsanthong?tab=repositories" // GitHub URL
              className="hover:text-cyan-300 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>

            {/* LinkedIn Link */}
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/thanapoom-santhong/" //  LinkedIn URL
              className="hover:text-cyan-300 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>

            {/* Email Link */}
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-cyan-300 transition-colors"
              aria-label="Send email"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
