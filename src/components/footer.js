import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="flex justify-center items-center text-md space-x-1">
      <span className=" text-gray-500">Powered by</span>
      <Link
        className="underline"
        to="https://www.facebook.com/teddievux/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Teddie
      </Link>
    </div>
  );
}

export default Footer;
