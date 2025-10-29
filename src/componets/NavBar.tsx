import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../componets/ThemeProvider";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  // Get current theme and toggle function from ThemeProvider
  const { theme, toggleTheme } = useTheme();

  // Track if the page is scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener to detect when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track if mobile menu is open or closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * Smooth scroll to a section by ID
   * Also closes mobile menu after clicking
   */
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  // NavBar items can be added here
  const navItems = [
    {
      label: "Home",
      id: "hero",
    },
    {
      label: "About",
      id: "about",
    },
    {
      label: "Projects",
      id: "projects",
    },
    {
      label: "Contact",
      id: "contact",
    },
  ];

  return (
    // Animated navigation bar - slides down on page load

    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        // Change background when scrolled: add blur and shadow
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Section  fade in effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Poom Santhong
            </span>{" "}
          </motion.div>

          {/* Desktop Navigation - hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {/* Map through nav items and create animated buttons */}
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }} // Start invisible and above
                animate={{ opacity: 1, y: 0 }} // Fade in and drop down
                transition={{ delay: 0.1 * index }} // Stagger animation
                onClick={() => scrollToSection(item.id)}
                className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </motion.button>
            ))}

            {/* Dark Mode Toggle Button - Desktop */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={toggleTheme} // Switch between light/dark mode
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {/* Show Moon icon in light mode, Sun icon in dark mode */}
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Controls - shown only on mobile */}
          <div className="md:hidden flex items-center gap-2">
            {/* Dark Mode Toggle Button - Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>

            {/* Hamburger Menu Button */}
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {/* Show X when open, hamburger menu when closed */}
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - AnimatePresence handles enter/exit animations */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} // Start invisible and collapsed
            animate={{ opacity: 1, height: "auto" }} // Expand and fade in
            exit={{ opacity: 0, height: 0 }} // Collapse and fade out when closing
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              {/* Create a button for each nav item */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} // Scroll and close menu
                  className="block w-full text-left py-3 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavBar;
