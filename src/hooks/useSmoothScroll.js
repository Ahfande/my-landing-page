import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      // Pastikan ini adalah link dengan href yang dimulai dengan #
      const target = e.target.closest('a');
      if (target && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const targetId = target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Tambahkan event listener ke dokumen
    document.addEventListener('click', handleSmoothScroll);

    // Atur scroll behavior global
    document.documentElement.style.scrollBehavior = 'smooth';

    // Cleanup
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
};

export default useSmoothScroll;