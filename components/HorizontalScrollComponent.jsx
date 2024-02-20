import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { About } from './AboutComponent.jsx';
import { Songs } from './SongsComponent.jsx';

gsap.registerPlugin(ScrollTrigger);

export function HorizontalScrollComponent() {
  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        scrub: 1.23,
        end: () => "+=" + document.querySelector(".container").offsetWidth
      }
    });
  }, []);
  
  return (
    <div className="container">
      <section className="panel s-1">
        <About />
      </section>

      <section className="panel s-2">
        <Songs />
      </section>

      <section className="panel s-3">
      </section>

      <section className="panel s-4">
      </section>

      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow-x: hidden;
          overflow-scrolling: touch;
        }
        html {
          height: 100%;
          overflow-y: scroll;
        }
        body {
          position: relative;
          height: unset;
          overflow-x: hidden;
          overflow-y: visible;
        }
        .container {
          display: flex;
          flex-wrap: nowrap;
          width: 400%;
          height: 100vh;
        }
        .panel {
          display: flex;
          position: relative;
          width: 100vw;
          height: 100vh;
        }

        .s-1 {
          padding: 10vh 2rem;
          z-index: 0;
        }
        .s-2 {
          padding: 10vh 2rem;
          z-index: 0;
          background-color: var(--blue);       
        }
        .s-3 {
          padding: 10vh 2rem;
          z-index: 0;
          background-color: var(--yellow);
        }
        .s-4 {
          padding: 10vh 2rem;
          z-index: 0;
          background-color: var(--primary);
        }
      `}</style>
    </div>

    
  );
}
