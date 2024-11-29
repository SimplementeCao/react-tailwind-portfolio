import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-8">
      <div></div>
      <div className="flex items-center gap-6">
        <a
          href="CV ES - Leandro Carvajal.pdf"
          download="CV ES Fullstack Developer - Carvajal Leandro.pdf"
          className="rounded bg-blue-500 px-4 py-2 text-white shadow hover:bg-blue-700"
        >
          Descargar CV
        </a>
        <div className="flex items-center justify-end gap-4 text-2xl">
        <a
            href="https://github.com/SimplementeCao"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/leandrocarvajal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
