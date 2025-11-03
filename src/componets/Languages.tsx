import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Languages as LanguagesIcon, Globe } from "lucide-react";
import { Badge } from "./ui/badge";
import { LANGUAGES_PROFICIENCY, PROFICIENCY_GUIDE } from "@/constants";

const Languages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Centralized language data
  const languages = LANGUAGES_PROFICIENCY;

  // Proficiency level colors for badges
  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "native":
        return "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400";
      case "fluent":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400";
      case "professional":
        return "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-400";
      case "intermediate":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-400";
      case "basic":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/50 dark:text-gray-400";
    }
  };

  return (
    <section
      id="languages"
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe className="w-8 h-8 text-blue-600 dark:text-cyan-400" />
            <h2 className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              Languages
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Multilingual capabilities enabling effective communication in
            diverse environments.
          </p>
        </motion.div>

        {/* Languages Grid */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-blue-100 dark:border-gray-700"
            >
              {/* Language Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-600 dark:to-blue-600">
                    <LanguagesIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="dark:text-white mb-1">{language.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {language.description}
                    </p>
                  </div>
                </div>

                {/* Proficiency Badge */}
                <Badge className={getLevelColor(language.level)}>
                  {language.level}
                </Badge>
              </div>

              {/* Proficiency Bar */}
              <div className="mb-2">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300">
                    Proficiency
                  </span>
                  <span className="text-blue-600 dark:text-cyan-400">
                    {language.proficiency}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  {/* Animated Progress Fill */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={
                      isInView ? { width: `${language.proficiency}%` } : {}
                    }
                    transition={{
                      duration: 1,
                      delay: index * 0.1 + 0.3,
                      ease: "easeOut",
                    }}
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-blue-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Language Proficiency Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-12 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-blue-950/50 rounded-xl p-6"
        >
          <h4 className="text-gray-900 dark:text-white mb-4">
            Proficiency Levels
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {PROFICIENCY_GUIDE.map((item, idx) => (
              <motion.div
                key={item.level}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + idx * 0.05 }}
                className="text-center"
              >
                <Badge className={`${getLevelColor(item.level)} mb-2`}>
                  {item.level}
                </Badge>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Languages;
