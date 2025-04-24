import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";

export default function Home() {
  return (
    <>
      {/* LEFT SIDE  */}
      <FramerWrapper
        className="text-center md:text-left h-full w-auto flex flex-col justify-center max-sm:justify-start gap-4"
        y={0}
        x={-100}
      >
        <HeroTexts />
        <div className="flex gap-4 justify-center self-center md:self-auto items-center">
          <SocialLinks />
          <DownLoadResumeBtn />
        </div>
      </FramerWrapper>
      {/* RIGHT SIDE image  */}
      <FramerWrapper
        className="h-full w-[47%] relative block max-lg:hidden"
        y={0}
        x={100}
      >
        <HeroImage />
      </FramerWrapper>
    </>
  );
}
