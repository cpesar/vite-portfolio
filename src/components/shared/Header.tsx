import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/images/HeaderLogo";
import { APP_NAME } from "../../lib/constants";

const Header = () => {
  return (
    <header className="w-full  h-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <div className="flex-start pl-1 h-full flex items-center ">
            {/* {APP_NAME} */}
            {/* <Link to="/" className="text-2xl font-bold text-white">
              <HeaderLogo />
            </Link> */}
            <HeaderLogo />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
