import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'Flask', icon: '🧪' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-3/5 md:pr-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.p 
              className="text-blue-600 dark:text-blue-400 font-semibold mb-2"
              variants={itemVariants}
            >
              Hello, I'm  Isianioui Doha ,I'm a
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              variants={itemVariants}
            >
              Full-Stack Web <span className="text-blue-600 dark:text-blue-400">&</span> 
              <br />
              Mobile Developer
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
              variants={itemVariants}
            >
              Expert in JavaScript, React, Python, and Databases. I build responsive, 
              user-friendly applications that solve real-world problems.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              variants={itemVariants}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="tech-icon"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.1 * index,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="text-2xl" aria-label={tech.name}>
                    {tech.icon}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.a 
                href="#projects" 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4 mt-8"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/isianioui"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-300 hover:border-blue-500 hover:bg-blue-50 dark:border-gray-700 dark:hover:border-blue-500 dark:hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/doha-isianioui-1b9009302/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-300 hover:border-blue-500 hover:bg-blue-50 dark:border-gray-700 dark:hover:border-blue-500 dark:hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-2/5 mt-12 md:mt-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              type: "spring",
              damping: 12
            }}
          >
            <div className="relative">
              <motion.div 
                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full opacity-10 absolute top-4 left-4"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 3, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              ></motion.div>
              <motion.div 
                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative z-10 rounded-lg overflow-hidden border-4 border-white shadow-xl dark:border-gray-700"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Avatar className="w-full h-full rounded-none">
                  <AvatarImage 
                    src="/dh.jpg" 
                    alt="Developer profile picture" 
                    className="object-cover w-full h-full"
                  />
                  <AvatarFallback className="text-5xl w-full h-full flex items-center justify-center bg-gradient-to-tr from-blue-500 to-purple-600 text-white">
                    DEV
                  </AvatarFallback>
                </Avatar>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
