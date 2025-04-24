import { Circle, Dna, Globe2, Languages } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const Aboutfooter = () => {
  const items = [
    {
      name: "Language",
      answer: portfolioConfig.about.personalInfo.language,
      icon: <Languages className="h-8 w-8 text-primary" />,
    },
    {
      name: "Nationality",
      answer: portfolioConfig.about.personalInfo.nationality,
      icon: <Globe2 className="h-8 w-8 text-primary" />,
    },
    {
      name: "Gender",
      answer: portfolioConfig.about.personalInfo.gender,
      icon: <Dna className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {items.map((val, indx) => (
        <div
          className="w-full flex flex-col items-center text-center gap-4 sm:items-start sm:text-left"
          key={indx}
        >
          <div className="flex items-center gap-3">
            {val.icon}
            <h1 className="text-xl font-poppins text-primary font-semibold sm:text-2xl">
              {val.name}
            </h1>
          </div>
          <div className="flex items-center gap-2 text-base text-primary sm:text-lg">
            <Circle className="h-3 w-3" />
            <span>{val.answer}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Aboutfooter;
