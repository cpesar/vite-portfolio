import { useColorTheme } from "../context/DarkModeContext/useColorTheme";
import { LuSun, LuMoon } from "react-icons/lu";
import HeaderDrawer from "./reusable/Drawer";
import { Button } from "antd";

import { RiCodeView } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useBeachTheme } from "@/context/BeachContext/useBeachTheme";

const Header: React.FC = () => {
  // const { isDarkMode, toggleTheme } = useColorTheme();
  const { gradients } = useBeachTheme();

  return (
    <header
      className="w-full"
      style={{
        background: gradients.header,
        boxShadow: "0 1px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="flex justify-between items-center p-4">
        <Link to="/">
          <RiCodeView
            size={24}
            className="text-white cursor-pointer hover:text-gray-200 transition-colors"
          />
        </Link>

        <div>
          <HeaderDrawer />
        </div>
      </div>
    </header>
  );
};

export default Header;
