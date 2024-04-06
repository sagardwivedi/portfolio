'use client';

import { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  className,
  delay = 50,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayText((prevText) => prevText + text[currentIndex]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, delay);

    if (currentIndex === text.length) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, text, delay]);

  return (
    <p className={className}>
      {displayText}
      <span className="animate-cursor-animation text-primary">_</span>
    </p>
  );
};

export default Typewriter;
