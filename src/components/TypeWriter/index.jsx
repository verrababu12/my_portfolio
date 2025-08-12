import React, { useEffect, useState } from "react";
import "./index.css";

const TypeWriter = ({
  words = [],
  loop = true,
  typingSpeed = 100,
  deleteSpeed = 50,
  delayBetween = 1500,
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index >= words.length) {
      if (loop) setIndex(0);
      else return;
    }

    const current = words[index];
    let timeout;
    if (!isDeleting && subIndex <= current.length) {
      timeout = setTimeout(() => setSubIndex(subIndex + 1), typingSpeed);
    } else if (isDeleting && subIndex > 0) {
      timeout = setTimeout(() => setSubIndex(subIndex - 1), deleteSpeed);
    } else {
      if (!isDeleting) {
        timeout = setTimeout(() => setIsDeleting(true), delayBetween);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    subIndex,
    index,
    isDeleting,
    words,
    typingSpeed,
    deleteSpeed,
    delayBetween,
    loop,
  ]);

  useEffect(() => {
    const iv = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(iv);
  }, []);

  return (
    <span className="typewriter">
      {words[index].substring(0, subIndex)}
      <span className={`cursor ${blink ? "blink" : ""}`}>|</span>
    </span>
  );
};

export default TypeWriter;
