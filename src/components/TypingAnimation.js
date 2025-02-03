import React, { useState, useEffect } from 'react';  
import './TypingAnimation.css';  

const TypingAnimation = ({   
  text,   
  speed = 100,  // Kecepatan mengetik  
  deleteSpeed = 50,  // Kecepatan menghapus  
  pauseDuration = 5000, // Durasi jeda setelah mengetik  
  loop = true // Opsi untuk mengulang atau tidak  
}) => {  
  const [displayedText, setDisplayedText] = useState('');  
  const [isDeleting, setIsDeleting] = useState(false);  
  const [index, setIndex] = useState(0);  
  const [phase, setPhase] = useState('typing'); // 'typing', 'pausing', 'deleting'  

  useEffect(() => {  
    let timer;  

    switch(phase) {  
      case 'typing':  
        if (index < text.length) {  
          timer = setTimeout(() => {  
            setDisplayedText(prev => prev + text[index]);  
            setIndex(prev => prev + 1);  
          }, speed);  
        } else {  
          // Setelah selesai mengetik, mulai jeda  
          setPhase('pausing');  
        }  
        break;  

      case 'pausing':  
        timer = setTimeout(() => {  
          // Mulai menghapus setelah jeda  
          if (loop) {  
            setPhase('deleting');  
            setIsDeleting(true);  
          }  
        }, pauseDuration);  
        break;  

      case 'deleting':  
        if (displayedText.length > 0) {  
          timer = setTimeout(() => {  
            setDisplayedText(prev => prev.slice(0, -1));  
          }, deleteSpeed);  
        } else {  
          // Setelah dihapus habis, kembali ke mengetik  
          setIsDeleting(false);  
          setIndex(0);  
          setPhase('typing');  
        }  
        break;  

      default:  
        break;  
    }  

    return () => clearTimeout(timer);  
  }, [displayedText, index, phase, text, speed, deleteSpeed, pauseDuration, loop]);  

  return (  
    <span className="typing-text">  
      {displayedText}  
      <span className={`cursor ${isDeleting ? 'deleting' : ''}`}></span>  
    </span>  
  );  
};  

export default TypingAnimation;