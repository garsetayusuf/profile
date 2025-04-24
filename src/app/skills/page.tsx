import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { LightbulbIcon } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const skillPage = () => {
  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-3 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <LightbulbIcon className="w-4 h-4" />
        My Skills
      </Badge>
      <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
        <div className="flex flex-col gap-6">
          <Heading>My Technical Experience/Skills.</Heading>
          <FramerWrapper y={0} x={200}>
            <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
              Currently i am a fresher and i have a solid understand of HTML5,
              CSS3, JS, TS and React, including responsive design principles. I
              specialize in building web applications and sites using
              Javascript, Typescript, React, Nextjs & Node.
            </p>
          </FramerWrapper>
          <FramerWrapper y={100} delay={0.3} className="block w-full">
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
              Programming Languages
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter
                items={portfolioConfig.skills.programmingLanguages}
              />
            </div>
          </FramerWrapper>
          <FramerWrapper className="block w-full" y={100} delay={0.32}>
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
              Framework/Libraries
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter items={portfolioConfig.skills.frameworks} />
            </div>
          </FramerWrapper>
          <FramerWrapper className="block w-full" y={100} delay={0.34}>
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
              Tools & Technologies
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter items={portfolioConfig.skills.tools} />
            </div>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default skillPage;
