import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Fullstack Web Developer",
        1500,
        "Front-end Developer",
        1500,
        "Back-end Developer",
        1500,
      ]}
      speed={50}
      className="text-[1rem] md:text-[2rem] text-white font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
