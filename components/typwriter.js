import React, { useEffect, useState } from "react";

const TypewriterText = ({ strings, delay, pauseFor }) => {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let typingTimeout;

    const startTypewriter = () => {
      const currentString = strings[currentIndex];
      setCurrentText(currentString);

      currentIndex = (currentIndex + 1) % strings.length;

      typingTimeout = setTimeout(() => {
        startTypewriter();
      }, delay + currentString.length + pauseFor);
    };

    startTypewriter();

    return () => clearTimeout(typingTimeout);
  }, [strings, delay, pauseFor]);

  return <div className="text-white text-2xl">{currentText}</div>;
};

export default TypewriterText;
