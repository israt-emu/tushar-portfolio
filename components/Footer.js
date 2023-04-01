import Link from "next/link";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-9/12 mx-auto pb-8 pt-24">
      <h1 className="text-small_text text-sm text-center">
        Built & Designed By --- Tusar Imran
      </h1>
      <div className="flex items-center mt-3 mb-4 text-primary justify-center">
        <Link
          target="_blank"
          href="https://www.facebook.com/tushar.imran.357"
        >
          <BsFacebook className="w-8 mr-1" />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/tusar-imran-680149227/"
        >
          <BsLinkedin className="w-8 mr-1" />
        </Link>
        <Link target="_blank" href="https://github.com/tushar8640">
          <BsGithub className="w-8" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
