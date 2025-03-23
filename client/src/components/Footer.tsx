import React from "react";
import { useState, useEffect, useRef } from "react";
import { APP_NAME } from "../lib/constants";
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaSquareGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { useColorTheme } from "../context/DarkModeContext/useColorTheme";
import { useBeachTheme } from "../context/BeachContext/useBeachTheme";

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentYear = new Date().getFullYear();

  const { isDarkMode } = useColorTheme();
  const { gradients } = useBeachTheme();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={footerRef}
    >
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-5 z-20">
        <div className=" flex items-center justify-center">
          {isVisible ? (
            <MdOutlineArrowDropDown
              size={20}
              className={isDarkMode ? "text-white" : "text-gray-800"}
            />
          ) : (
            <MdOutlineArrowDropUp
              size={20}
              className={isDarkMode ? "text-white" : "text-gray-800"}
            />
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-2 bg-transparent z-10"></div>
      <footer
        className={`transition-all duration-300 ease-in-out backdrop-blur-sm  border-gray-300 dark:border-gray-700 ${
          isVisible ? "h-20" : "h-1"
        }`}
        style={{ background: gradients.footer }}
      >
        {isVisible ? (
          <div className="h-full flex flex-col justify-center items-center opacity-100 transition-opacity duration-200 py-2">
            {/* Social Icons */}
            <div className="flex space-x-4 mb-1 mt-1">
              <div
                className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/chris-pesar")
                }
              >
                <RxLinkedinLogo />
              </div>
              <div
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer"
                onClick={() => window.open("https://github.com/cpesar")}
              >
                <FaSquareGithub />
              </div>
              <div
                className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer"
                onClick={() => window.open("https://twitter.com/_pesar_")}
              >
                <FaTwitter />
              </div>
            </div>

            <div
              className={`text-xs mt-2 mb-2 ${
                isDarkMode ? "text-white" : "text-gray-800"
              } font-original-surfer`}
            >
              {currentYear} &copy; {APP_NAME}
            </div>
          </div>
        ) : null}
      </footer>
    </div>
  );
};

export default Footer;
