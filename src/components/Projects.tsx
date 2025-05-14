
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { ProjectType } from './ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects: ProjectType[] = [
    {
      id: 1,
      title: 'Ticket Management System',
      description: 'A comprehensive full-stack application for tracking and managing issue tickets with role-based permissions and real-time updates.',
      image: '',
      tags: ['express.js', 'Node.js', 'Mysql','Chart.js'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com',
    },
    {
      id: 2,
      title: 'School Management System',
      description: 'A centralized platform for educational institutions to manage students, teachers, courses, and events with detailed analytics.',
      image: '',
      tags: ['java', 'javafx', 'PostgreSQL', 'Chart.js'],
      githubUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'Research App for Academics',
      description: 'Mobile and web application designed to help doctoral students and professors manage research papers, citations, and collaborate on findings.',
      image: '',
      tags: ['React ', 'Flask', 'Postgresql'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com',
    },
    {
      id: 4,
      title: 'Prosthetic Fit Detection App',
      description: 'AI-powered mobile application that helps verify and optimize prosthetic fitting using computer vision and machine learning.',
      image: '',
      tags: ['Kotlin', 'react', 'Flask', 'Postgresql'],
      githubUrl: 'https://github.com',
    },
  ];

  const filters = ['All', 'Web', 'Mobile', 'AI/ML'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => {
        if (activeFilter === 'Web') {
          return project.tags.some(tag => ['React', 'Flask', 'Node.js'].includes(tag));
        } else if (activeFilter === 'Mobile') {
          return project.tags.some(tag => ['React Native', 'Flutter'].includes(tag));
        } else if (activeFilter === 'AI/ML') {
          return project.tags.some(tag => ['AI/ML', 'TensorFlow'].includes(tag));
        }
        return false;
      });

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. These showcase my skills
            in full-stack development, mobile app creation, and AI integration.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeFilter === filter
                    ? 'bg-blue-500 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300">
              No projects found with the selected filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
