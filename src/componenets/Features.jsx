import React from "react";
import BentoCard from "./BentoCard";
import { TiLocationArrow } from "react-icons/ti";
import BentoTilt from "./BentoTilt";

const Features = () => {
  return (
    <section className="bg-black pb-52 max-w-full px-5">
      <div className="px-3 md:px-10">
        <div className="pt-32 pb-10">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="text-gray-400 max-w-md font-circular-web text-lg opacity-50">
            Immerse yourself in an IP-rich product universe where players,
            agentic AI and blockchain lead the new economic paradigm.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <b>
                radia<b>n</b>t
              </b>
            }
            description="The game of games app transformming moments across Web2 & Web3 titles into rewards"
            isComingSoon={true}
          />
        </BentoTilt>

        <div className="grid h-[300vh] max-sm:h-[250vh] md:h-[250vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 ms-10 md:ms-0 md:col-span-1 md:row-span-2">
            <BentoCard
              src="/videos/feature-2.mp4"
              title={
                <b>
                  Zigma
                </b>
              }
              description="The NFT collection merging Zentry's IP, AI, and gaming--pushing the boundaries of NFT innovation"
              isComingSoon={true}
            />
          </BentoTilt>

          <BentoTilt
           className="bento-tilt_1 row-span-1 me-10 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/feature-3.mp4"
              title={
                <b>
                  radi<b>n</b>t
                </b>
              }
              description="The game of games app transformming moments across Web2 & Web3 titles into rewards"
              isComingSoon={true}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-10 md:col-span-1 md:ms-0">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={
                <b>
                  Nexus
                </b>
              }
              description="The metagame portal uniting humans & AI to play, compete and earn."
              isComingSoon={true}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex w-full h-full flex-col justify-between bg-violet-300 p-5">
                <b className="bento-title special-font max-w-64 text-black">More <br />Coming <br />Soon!</b>
                <TiLocationArrow className="m-5 scale-[5] self-end"/>
            </div>
          </BentoTilt>

          <BentoTilt className="bento-title_3">
            <video 
                src="videos/feature-5.mp4" 
                loop
                muted
                autoPlay
                playsInline
                className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
