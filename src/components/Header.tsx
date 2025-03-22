import { useTheme } from "../context/useTheme";
import { LuSun, LuMoon } from "react-icons/lu";
import HeaderDrawer from "./reusable/Drawer";
import { Button } from "antd";

import { RiCodeView } from "react-icons/ri";

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
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <RiCodeView size={24} className="text-white" />
        </div>

        <div>
          <HeaderDrawer colors={colors} />
        </div>
      </div>
    </header>
  );
};

export default Header;
