
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { motion, useAnimation } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const controls = useAnimation();
  const { toast } = useToast();
  
  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 0.5 }
    });
    
    // Show welcome toast when the page loads
    setTimeout(() => {
      toast({
        title: "Welcome to my portfolio!",
        description: "Thanks for visiting. Feel free to explore my projects and get in touch.",
      });
    }, 1500);
  }, [controls, toast]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={controls} 
      className="min-h-screen bg-background text-foreground"
    >
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Index;
