import logo from "../../public/portfolioLogo.jpeg";
import Image from "next/image";

const HeroImage = () => {
  return (
    <>
      <Image
        src={logo}
        alt="logo"
        loading="eager"
        className="h-full w-full max-md:h-[45%] max-md:w-[45%] object-cover object-center rounded-2xl"
        priority
        height={750}
        width={750}
      />
    </>
  );
};
export default HeroImage;
