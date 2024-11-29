import { RiReactjsLine } from "react-icons/ri";
import { SiAngular } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiLinux } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaEthereum } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <p className="mt-2 text-center text-sm">React</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAngular className="text-7xl text-red-500" />
          <p className="mt-2 text-center text-sm">Angular</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className="text-7xl text-blue-500" />
          <p className="mt-2 text-center text-sm">Java</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-7xl text-yellow-300" />
          <p className="mt-2 text-center text-sm">Python</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiLinux className="text-7xl text-sky-50" />
          <p className="mt-2 text-center text-sm">Linux</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGitAlt className="text-7xl text-red-600" />
          <p className="mt-2 text-center text-sm">Git</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaEthereum className="text-7xl text-sky-50" />
          <p className="mt-2 text-center text-sm">Cairo</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-blue-600" />
          <p className="mt-2 text-center text-sm">MySQL</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
