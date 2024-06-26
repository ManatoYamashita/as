import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const GifPlayer = ({ gif, poster, time, repeat }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [playGif, setPlayGif] = useState(false);
  const hasPlayedOnce = useRef(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        if (!hasPlayedOnce.current || repeat) {
          setIsVisible(true);
          setPlayGif(true);
          hasPlayedOnce.current = true;

          setTimeout(() => {
            setPlayGif(false);
          }, time);
        }
      }
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [time, repeat]);

  const handleContextMenu = event => {
    event.preventDefault();
  };

  return (
    <div
      ref={elementRef}
      onContextMenu={handleContextMenu}
      style={{
        userSelect: 'none',
        pointerEvents: 'none',
        position: 'absolute',
        display: 'flex',   
        justifyContent: 'center',
        alignItems: 'center',   
        zIndex: -2,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        width: '100vw',
        height: '100vh',
      }}
    >
      {playGif ? (
        <Image priority loading='eager' src={gif} alt="GIF image" style={{
          height: 'auto',
          minHeight: '100vh',
        }} />
      ) : (
        <Image priority loading='eager' src={poster} alt="Static image" style={{
          height: 'auto',
          minHeight: '100vh',
          zIndex: -2,
          transform: 'z-index .5s forwards',
        }} />
      )}
    </div>
  );
};

export default GifPlayer;
