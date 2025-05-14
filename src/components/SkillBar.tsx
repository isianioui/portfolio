import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from './ui/progress';
import { cn } from "@/lib/utils";

type SkillBarProps = {
  name: string;
  level: number; // 0-100
  color?: string;
};

const SkillBar = ({ name, level, color = 'blue' }: SkillBarProps) => {
  // Create a mapping of color names to Tailwind classes for the text labels
  const colorClasses = {
    blue: "text-blue-600 dark:text-blue-400",
    purple: "text-purple-600 dark:text-purple-400",
    green: "text-green-600 dark:text-green-400",
    red: "text-red-600 dark:text-red-400",
    yellow: "text-yellow-600 dark:text-yellow-400"
  };
  
  // Class for the progress bar color
  const progressClass = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    green: "bg-green-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500"
  };

  return (
    <motion.div 
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex justify-between items-center mb-1">
        <motion.span 
          className={cn("text-sm font-medium text-gray-700 dark:text-gray-300", colorClasses[color as keyof typeof colorClasses])}
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {name}
        </motion.span>
        <motion.span 
          className="text-xs font-medium text-gray-500 dark:text-gray-400"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {level}%
        </motion.span>
      </div>
      <Progress 
        value={level} 
        className="h-2.5" 
        indicatorClassName={progressClass[color as keyof typeof progressClass]}
      />
    </motion.div>
  );
};

export default SkillBar;