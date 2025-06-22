import { useEffect, useState } from 'react';

const useIntersectionObserver = (ref, options) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Créer une variable locale pour ref.current
    const currentElement = ref.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true); // L'élément est visible
        } else {
          setIsVisible(false); // L'élément n'est pas visible
        }
      });
    }, options);

    if (currentElement) {
      observer.observe(currentElement);
    }

    // Fonction de nettoyage
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [ref, options]);

  return isVisible;
};

export default useIntersectionObserver;
