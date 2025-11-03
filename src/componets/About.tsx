import { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Trigger animations when section is visible
import { Smartphone, Zap, Code2, Heart, Target } from "lucide-react";

const About = () => {
  // Create a ref to track when this section is in viewport
  const ref = useRef(null);

  // isInView becomes true when 30% of the section is visible
  // once: true means animation only happens once (not every time you scroll)
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Three main selling points/features
  const features = [
    {
      icon: Code2,
      title: "Modern Tech Stack",
      description:
        "Expert in React, JavaScript, Tailwind CSS, and the latest front-end technologies.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Building mobile-first, fully responsive websites that work flawlessly on any device.",
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description:
        "Optimizing for speed, accessibility, and SEO to deliver exceptional user experiences.",
    },

    {
      icon: Target,
      title: "Passion for Excellence",
      description:
        "Dedicated to delivering high-quality code and exceptional user experiences.",
    },
    {
      icon: Zap,
      title: "Continuous Learning",
      description:
        "Always staying updated with the latest technologies and best practices.",
    },
    {
      icon: Heart,
      title: "Team Collaboration",
      description:
        "Thriving in collaborative environments and contributing to team success.",
    },
  ];

  return (
    <>
      <section
        id="about"
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
              Why Hire Me
            </h2>

            {/* Section Description */}
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              As a dedicated front-end developer, I bring a perfect blend of
              technical expertise and creative problem-solving. I'm committed to
              writing clean, maintainable code and staying current with industry
              best practices.
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Map through features array to create cards */}
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2, // Stagger: each card appears 0.2s after previous
                }}
                whileHover={{ y: -10 }} // Float up 10px on hover
                className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-blue-950/50 hover:shadow-xl transition-shadow"
              >
                {/* Icon Container - rotates 360° on hover */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block p-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-600 dark:to-blue-600 mb-6"
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Card Title */}
                <h3 className="mb-4 dark:text-white">{feature.title}</h3>

                {/* Card Description */}
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
