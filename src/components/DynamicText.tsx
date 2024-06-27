import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const roles = [
  "Cyberpsycho",
  "Edgerunner",
  "Sandesvistan"
];

const DynamicText = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const timeout = setTimeout(() => {
      setDisplayText((prev) => 
        isDeleting ? prev.slice(0, -1) : roles[index].slice(0, prev.length + 1)
      );

      if (!isDeleting && displayText === roles[index]) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 80 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
       {displayText}
    </motion.div>
  );
};

export default DynamicText;
