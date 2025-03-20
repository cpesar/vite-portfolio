import { APP_NAME } from "../../lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="p-5 flex justify-center items-center">
        {currentYear} &copy; {APP_NAME}
      </div>
    </footer>
  );
};

export default Footer;
