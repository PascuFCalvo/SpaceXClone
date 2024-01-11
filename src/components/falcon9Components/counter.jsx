"use client";

import React, { useEffect, useState, useRef } from "react";

export default function Counter({ number }) {
  const [current, setCurrent] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const isRunningRef = useRef(isRunning);
  const target = number;
  const time = 1000;
  const counterRef = useRef(null);

  useEffect(() => {
    isRunningRef.current = isRunning;
  }, [isRunning]);

  useEffect(() => {
    let handle;

    const updateCounter = () => {
      const start = current;
      const startTime = Date.now();
      const endTime = startTime + time;

      handle = setInterval(() => {
        const now = Date.now();
        const elapsed = now - startTime;

        if (elapsed < time) {
          const progress = elapsed / time;
          const newValue = start + progress * (target - start);
          setCurrent(newValue);
        } else {
          clearInterval(handle);
          setCurrent(target);
          setIsRunning(false); // Stop the counter when it reaches the target
        }
      }, 16); // Using a lower interval for smoother animation
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isRunningRef.current) {
          setCurrent(0);
          setIsRunning(true);
          updateCounter();
        } else if (!entry.isIntersecting && isRunningRef.current) {
          setCurrent(0);
          setIsRunning(false);
          clearInterval(handle);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      clearInterval(handle);
      observer.disconnect();
    };
  }, [target, time]);

  return (
    <div
      ref={counterRef}
      className="text-9xl text-white text-center font-light ml-10 mr-10 p-2 bg-black w-42 mt-20"
    >
      {Math.round(current)}
    </div>
  );
}
