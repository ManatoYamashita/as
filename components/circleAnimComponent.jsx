import React, { useRef, useState, useEffect } from "react";

export function CircleAnim({ size, top, right, bottom, left}) {
  const circleRef = useRef(null); // Reference to the circle element
  const [scale, setScale] = useState(0); // Control the scale of the circle

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if the element is intersecting
          if (entry.isIntersecting) {
            setScale(1); // Animate scale to 1 when the element is visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (circleRef.current) {
      observer.observe(circleRef.current); // Observe the circle element
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current); // Clean up the observer on component unmount
      }
    };
  }, []);

  const wrapStyle = {
    position: "relative",
    top: top,
    right: right,
    bottom: bottom,
    left: left,
  };

  const circleStyle = {
    position: "absolute",
    right: "-15vw",
    width: `${size}vw`,
    height: `${size}vw`,
    borderRadius: `${size}rem`,
    backgroundColor: "var(--primary)",
    zIndex: -2,
    transform: `scale(${scale})`, // Apply dynamic scale
    transition: "transform 1s cubic-bezier(0.19, 1, 0.22, 1)",
  };

  return (
    <div style={wrapStyle}>
      <span ref={circleRef} style={circleStyle}></span>
    </div>
  );
}

export default CircleAnim;
