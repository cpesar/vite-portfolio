import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/images/HeaderLogo";
import { APP_NAME } from "../../lib/constants";
import { useTheme } from "../../context/useTheme";
import { LuSun, LuMoon } from "react-icons/lu";

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="w-full h-full border-b">
      <div className="wrapper flex justify-between items-center">
        <div className="flex-start">
          <Link to="/" className="flex items-center">
            <HeaderLogo />
          </Link>
        </div>

        <div className="flex items-center justify-end pr-10">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? (
              <LuSun size={20} className="text-yellow-400" />
            ) : (
              <LuMoon size={20} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
