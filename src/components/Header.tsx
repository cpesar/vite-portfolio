// import { Link } from "react-router-dom";
// import HeaderLogo from "../assets/images/HeaderLogo";
// import { APP_NAME } from "../lib/constants";
import { useTheme } from "../context/useTheme";
import { LuSun, LuMoon } from "react-icons/lu";

interface HeaderProps {
  colors: {
    deepSea: string;
    shallowWater: string;
    seafoam: string;
    sand: string;
  };
}

const Header: React.FC<HeaderProps> = ({ colors }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header
      className="w-full"
      style={{
        background: `linear-gradient(to bottom, ${colors.deepSea} 0%, ${colors.shallowWater} 100%)`,
        boxShadow: "0 1px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="wrapper flex justify-between items-center">
        <div className="flex-start">
          {/* <Link to="/" className="flex items-center">
            <HeaderLogo />
          </Link> */}
        </div>

        <div className="flex items-center justify-end pr-10">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-opacity-20 hover:bg-white transition-colors mt-5"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? (
              <LuSun size={20} className="text-yellow-400" />
            ) : (
              <LuMoon size={20} className="text-white" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
