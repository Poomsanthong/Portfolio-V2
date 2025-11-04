import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { PERSONAL_INFO, SOCIALS } from "@/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const iconFor = (id: string) => {
    switch (id) {
      case "github":
        return Github;
      case "linkedin":
        return Linkedin;
      case "email":
        return Mail;
      default:
        return undefined;
    }
  };

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-cyan-900 dark:from-gray-950 dark:to-blue-950 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start gap-2">
              Built with{" "}
              <Heart className="w-4 h-4 text-cyan-300 fill-current" /> React &
              Tailwind CSS
            </p>
            <p className="text-cyan-200 mt-2">
              © {currentYear} {PERSONAL_INFO?.name ?? "Poom Santhong"}. All
              rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            {SOCIALS.map((social) => {
              const Icon = iconFor(social.id);
              if (!Icon) return null;

              // Handle internal anchor links with smooth scroll
              const isInternalAnchor = social.url.startsWith("#");
              const handleClick = isInternalAnchor
                ? (e: React.MouseEvent) => {
                    e.preventDefault();
                    const targetId = social.url.substring(1);
                    document
                      .getElementById(targetId)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                : undefined;

              return (
                <motion.a
                  key={social.id}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.url}
                  onClick={handleClick}
                  className="hover:text-cyan-300 transition-colors"
                  aria-label={social.ariaLabel}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
