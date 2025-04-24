import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const page = () => {
  const items = portfolioConfig.about.hobbies.map((hobby) => ({ hobby }));

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-3 px-4 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 max-sm:text-sm">
        <User2 className="h-4 w-4" />
        About me
      </Badge>
      <div className="h-full w-full relative flex flex-col items-start gap-7 overflow-hidden">
        <div className="flex flex-col gap-5">
          <Heading>
            {portfolioConfig.title}, Based In{" "}
            {portfolioConfig.about.personalInfo.nationality}.
          </Heading>

          <FramerWrapper y={0} x={100}>
            <p className="font-poppins text-xl w-full text-primary max-sm:text-base">
              {portfolioConfig.about.bio}
            </p>
          </FramerWrapper>
        </div>
        <FramerWrapper
          className="w-full flex flex-row justify-between max-lg:flex-col max-sm:gap-4"
          y={100}
          delay={0.3}
        >
          <Aboutfooter />
        </FramerWrapper>
        <FramerWrapper className="flex flex-col gap-5" y={100} delay={0.31}>
          <h1 className="text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl gap-3">
            <Heart className="h-8 w-8 max-sm:h-6 max-sm:w-6" /> Hobbies
          </h1>
          <div className="w-full h-fit flex flex-row justify-between gap-5 max-lg:flex-col max-sm:gap-3">
            {items.map((val, indx) => {
              return (
                <div
                  key={indx}
                  className="flex gap-2 justify-center items-center flex-row text-xl text-primary max-lg:justify-start max-sm:text-base"
                >
                  <Circle className="h-3 w-3 max-sm:h-2 max-sm:w-2" />{" "}
                  {val.hobby}
                </div>
              );
            })}
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default page;
