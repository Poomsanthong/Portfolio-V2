/**
 * Contact Component
 * Contact form and information section for potential employers/clients
 */

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Form state - tracks input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.error("EmailJS public key not found in environment variables");
    }
  }, []);

  // Handle form submission with EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        throw new Error("EmailJS service ID or template ID not configured");
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current!);

      alert(
        "✅ Message sent successfully! I'll get back to you within 24 hours."
      );

      // Clear form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("❌ Failed to send: " + JSON.stringify(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact information to display
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Thanapoom.santhong10@gmail.com", // email
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+31 658982442 ", // phone
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Apeldoorn, Netherlands", // location
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900"
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
            Contact Information
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm actively seeking new opportunities and would love to discuss how
            I can contribute to your team. Feel free to reach out through any of
            the channels below.
          </p>
        </motion.div>

        {/* Two Column Layout: Contact Info + Form */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} // Slide in from left
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6 dark:text-white">Get In Touch</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm available for full-time positions, freelance work, or
                contract opportunities. Whether you have a question about my
                experience, skills, or just want to say hello, I'd be happy to
                hear from you.
              </p>
            </div>

            {/* Contact Info Items */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1, // Stagger each item
                }}
                className="flex items-start gap-4"
              >
                {/* Icon */}
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-600 dark:to-blue-600">
                  <info.icon className="w-5 h-5 text-white" />
                </div>

                {/* Label and Value */}
                <div>
                  <p className="text-gray-500 dark:text-gray-400 mb-1">
                    {info.label}
                  </p>
                  <p className="text-gray-900 dark:text-gray-100">
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} // Slide in from right
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  className="w-full"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
