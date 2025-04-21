import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { animateWithGsap } from "../utils/animation";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

const About = () => {
  useGSAP(() => {
    gsap.set("#clip", {
      clipPath: "polygon(25% 13%, 63% 16%, 78% 63%, 34% 61%)",
      duration: 10,
      ease: "back.inOut",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });

    tl.to("#clip", {
      borderColor: "black",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power2.out",
    })
  });

  useGSAP(() => {
    animateWithGsap("#text", {
      opacity: 1,
      y: 0,
      duration: 3,
      ease: "power2.inout",
      scale: 1,
      stagger: 0.1,
    });
  });
  return (
    <section id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 id="text" className="font-general text-sm uppercase mb:text-[10px]">
          Welcome to Zentry
        </h2>

        <AnimatedTitle
          title="Discover the world's largest shared adventure"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>
            The Games Of Games Begins-your life, now an epic MMORPG. Zentry
            unites every player from countless games and platforms
          </p>
        </div>
      </div>

      <div
        id="clip"
        className="h-dvh w-screen overflow-hidden relative border-solid border-black border-2"
      >
        <img
          src="img/about.webp"
          alt="background"
          className="absolute left-0 top-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default About;
