import { ABOUT_TEXT } from "../ constants";
import aboutImg from "../assets/sousou1.png";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
        <h2 className="my-12 text-center text-4xl ">
          About 
          <span className="text-neutral-500"> Me</span>
        </h2>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex item-center justify-center">
              <div>
                <img className="rounded-2xl" src={aboutImg} alt="about"/>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default About;