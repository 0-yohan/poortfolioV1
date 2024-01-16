import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingText = ({ strings, typeSpeed }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings,
      typeSpeed,
      loop: true, //typing will be in a loop
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
