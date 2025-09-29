'use client'

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScroller = ({ children }) => {
  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // How long the animation lasts
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smoothTouch: true, // Enable smooth scrolling for touch devices
    });

    // 2. Setup the animation loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    // Start the animation loop
    requestAnimationFrame(raf);

    // 3. Cleanup on component unmount
    return () => {
      lenis.destroy();
    };
  }, []); // Empty dependency array ensures this runs only once

  return children;
};

export default SmoothScroller;