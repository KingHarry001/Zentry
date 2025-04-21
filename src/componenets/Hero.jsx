import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import ThreeDotLoader from "./ThreeDotLoader";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVideoPlayerClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  useGSAP(() => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });

        gsap.fromTo("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
          border: '0px solid transparent',
        }, {
          width: '15rem',
          height: '15rem',
          scale: 1,
        }
      );
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(16% 12%, 64% 11%, 78% 76%, 10% 66%)",
      duration: 10,
      ease: 'back.inOut'
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inout",
      duration: 1,
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: '+=900 center',
        scrub: true,
      },
    });

    ScrollTrigger.refresh();
  });

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  

  return (
    <div className="relative block h-dvh w-screen overflow-x-hidden">
      {isLoading && <ThreeDotLoader />}
      <div
        id="video-frame"
        className="relative overflow-hidden z-10 h-dvh w-screen rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVideoPlayerClick}
              className="origin-center scale-50 transition-all duration-500 ease-in hover:scale-100 opacity-100 blur-fade"
            >
              {/* the small video on hover */}
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                id="current-video"
                className="size-60 pointer-events-none origin-center object-cover object-center"
                onLoadedData={handleVideoLoad}
                style={{
                  borderRadius: "1rem",
                  border: '2px solid black'
                }}
              />
            </div>
          </div>

          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            autoPlay
            id="next-video"
            className="absolute-center pointer-events-none invisible z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />

          {/* bg video */}
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute pointer-events-none left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>a</b>ming
        </h1>
        <div className="absolute left-5 top-5 z-40 size-full">
          <div className="mt-[65px] md:px-5 sm:px-1">
            <h1 className="special-font hero-heading text-blue-100">
              Redefi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br />
              Unleash the Play Economy
            </p>

            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Hero;
