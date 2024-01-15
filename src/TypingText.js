import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingText = ({ strings, typeSpeed }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings,
      typeSpeed,
      loop: true, // Set to true if you want the typing to loop
    };

    const typedInstance = new Typed(typedRef.current, options);

    return () => {
      // Destroy the Typed instance when the component is unmounted
      typedInstance.destroy();
    };
  }, [strings, typeSpeed]);

  return <span ref={typedRef} />;
};

export default TypingText;
