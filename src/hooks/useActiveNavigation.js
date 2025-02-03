import { useState, useEffect } from 'react';

const useActiveNavigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'project', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (
            scrollPosition >= elementTop - 200 && 
            scrollPosition < elementBottom - 200
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Tambahkan event listener
    window.addEventListener('scroll', handleScroll);
    
    // Panggil sekali untuk set initial state
    handleScroll();

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeSection;
};

export default useActiveNavigation;