
import React from 'react';
import { motion } from 'framer-motion';
import SkillBar from './SkillBar';

const About = () => {
  const frontendSkills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'React', level: 88 },
    { name: 'UI/UX Design', level: 85 },
  ];

  const backendSkills = [
    { name: 'Python', level: 92 },
    { name: 'Flask', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MongoDB', level: 78 },
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <motion.div 
            className="w-20 h-1 bg-blue-500 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-6 gradient-heading"
              variants={itemVariants}
            >
              My Story
            </motion.h3>
            <motion.p 
              className="text-gray-700 dark:text-gray-300 mb-4"
              variants={itemVariants}
            >
              I'm a passionate full-stack developer specializing in creating robust web and mobile applications. 
              With expertise in both frontend and backend technologies, I bring a comprehensive approach to software development.
            </motion.p>
            <motion.p 
              className="text-gray-700 dark:text-gray-300 mb-4"
              variants={itemVariants}
            >
              My experience includes developing sophisticated ticket management systems, school/event management platforms, 
              research applications for academics, and AI-powered mobile apps.
            </motion.p>
            <motion.p 
              className="text-gray-700 dark:text-gray-300 mb-4"
              variants={itemVariants}
            >
              I believe in writing clean, maintainable code and creating intuitive user experiences that solve real-world problems.
            </motion.p>
            <motion.div 
              className="mt-8"
              variants={itemVariants}
            >
              <h4 className="text-lg font-semibold mb-2">Areas of Expertise:</h4>
              <div className="flex flex-wrap gap-2">
                <motion.span 
                  className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Frontend Development
                </motion.span>
                <motion.span 
                  className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-sm rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Backend Systems
                </motion.span>
                <motion.span 
                  className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-sm rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Database Design
                </motion.span>
                <motion.span 
                  className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-sm rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Mobile Development
                </motion.span>
                <motion.span 
                  className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 text-sm rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  AI Integration
                </motion.span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-semibold mb-6 gradient-heading">Skills</h3>
            <div className="grid grid-cols-1 gap-12">
              <div>
                <h4 className="text-lg font-semibold mb-4">Frontend</h4>
                {frontendSkills.map((skill) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                    color="blue"
                  />
                ))}
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Backend</h4>
                {backendSkills.map((skill) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                    color="blue" 
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;