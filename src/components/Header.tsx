import { useTheme } from "../context/useTheme";
import { LuSun, LuMoon } from "react-icons/lu";
import HeaderDrawer from "./reusable/Drawer";
import { Button } from "antd";

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
      <div className="wrapper flex justify-between items-center mt-2">
        <div className="flex-start">
          <HeaderDrawer colors={colors} />
        </div>

        <div className="flex items-center justify-end pr-10">
          <Button
            onClick={toggleTheme}
            style={{
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            ghost
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? (
              <LuSun size={20} className="text-yellow-400" />
            ) : (
              <LuMoon size={20} />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
