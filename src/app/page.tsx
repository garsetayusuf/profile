import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-8 w-full">
      {/* LEFT SIDE  */}
      <FramerWrapper
        className="text-center md:text-left w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4"
        y={0}
        x={-100}
      >
        <HeroTexts />
        <div className="flex gap-4 justify-center items-center">
          <SocialLinks />
          <DownLoadResumeBtn />
        </div>
      </FramerWrapper>
      {/* RIGHT SIDE image  */}
      <FramerWrapper
        className="w-full md:w-[47%] relative flex justify-center"
        y={0}
        x={100}
      >
        <HeroImage />
      </FramerWrapper>
    </div>
  );
}
