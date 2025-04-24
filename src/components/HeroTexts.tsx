import TextRotator from "./TextRotator";
import { portfolioConfig } from "@/config/portfolio.config";

const HeroTexts = () => {
  // Get the name parts
  const nameParts = portfolioConfig.name.split(" ");
  const firstName = nameParts[0];
  const middleName = nameParts.length > 2 ? nameParts[1] : "";
  const lastName1 = nameParts[2];
  const lastName2 = nameParts[3];
  // const lastName = nameParts.length > 2 ? nameParts[2] : nameParts[1];

  return (
    <>
      <h3 className="font-poppins text-2xl max-sm:text-xl">My Name is</h3>
      <h1 className="font-rubik text-6xl name_underline_home md:name_underline text-primary max-sm:text-4xl">
        {firstName} {middleName} <br /> {lastName1} {lastName2}
      </h1>
      <TextRotator />
    </>
  );
};
export default HeroTexts;
