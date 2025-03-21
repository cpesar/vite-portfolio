import { useState, useEffect, useRef } from "react";
import { APP_NAME } from "../../lib/constants";
import { LuChevronUp, LuChevronDown } from "react-icons/lu";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaSquareGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentYear = new Date().getFullYear();

  const footerbg = "rgb(167, 220, 232)";

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
        <div className="bg-gray-200 bg-opacity-60 dark:bg-gray-800 dark:bg-opacity-60 rounded-t-lg p-1 px-3 flex items-center justify-center backdrop-blur-sm">
          {isVisible ? <LuChevronDown size={18} /> : <LuChevronUp size={18} />}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-2 bg-transparent z-10"></div>

      <footer
        className={`transition-all duration-300 ease-in-out backdrop-blur-sm border-t border-gray-300 dark:border-gray-700 ${
          isVisible ? "h-16" : "h-1"
        }`}
        style={{ backgroundColor: footerbg }}
      >
        {isVisible ? (
          <div className="h-full flex flex-col justify-center items-center opacity-100 transition-opacity duration-200 py-2">
            {/* Social Icons */}
            <div className="flex space-x-4 mb-1">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                <RxLinkedinLogo />
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                <FaSquareGithub />
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                <FaTwitter />
              </div>
            </div>

            <div className="text-xs">
              {currentYear} &copy; {APP_NAME}
            </div>
          </div>
        ) : null}
      </footer>
    </div>
  );
};

export default Footer;
