import { HERO_CONTENT } from "../ constants";
import perfil from "../assets/sousou.jpg"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 flex items-center pb-20 lg:mb-35">
        <div className="flex flex-wrap items-center w-full">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start lg:gap-5">
                    <h1 className="pb-20 text-5xl font-thin tracking-tight 
                    lg:mt-16 lg:text-8xl">
                        Leandro Cesar Carvajal
                    </h1>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text 
                    text-4xl tracking-tight text-transparent lg:mt-20 lg:text-4xl">
                        Full Stack Developer
                    </span>
                    <p className="my-2 max-w-xl font-light tracking-tight">
                        {HERO_CONTENT}
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-2">
                <div className="flex justify-center">
                    <img src={perfil} alt="Leandro Cesar CarvajalclassName=" h-64 w-64 rounded-full object-cover shadow-lg lg:h-80 />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero
