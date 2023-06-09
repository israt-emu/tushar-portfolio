import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import { Roboto_Mono } from "@next/font/google";
import myImage from "../assets/images/banner.svg";
import { Typewriter } from "react-simple-typewriter";

const roboto_Mono = Roboto_Mono({ subsets: ["latin"] });

console.log(roboto_Mono);
const Banner = () => {
  const banner = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div className="container flex flex-col-reverse justify-center md:p-6 mx-auto sm:py-4 lg:flex-row lg:justify-between lg:ml-8 items-center h-screen">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className="flex flex-col justify-center md:p-6 rounded-sm lg:max-w-md xl:max-w-lg lg:text-left mt-8 lg:mt-0"
      >
        <h1
          // style={roboto_Mono.style}
          className="text-2xl leading-2 font-semibold  sm:text-5xl text-title "
        >
          <span className="text-secondary "> ⟹</span>{" "}
          <span className="text-5xl leading-">Hey, This is Tushar</span> <br />
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.5,
          }}
          className="mt-6 mb-2 text-lg text-small_text flex justify-center"
        >
          Particularly I’m interested in learning and staying{" "}
          <br className="hidden lg:flex" /> current about programming and
          technological advancements. Also, I enjoy creating things
          <br className="hidden lg:flex" /> that live on the internet.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.6,
          }}
          className="flex items-center"
        >
          <div className="mb-3 text-small_text">
            <span className="text-xl text-secondary">1.5 </span> years of
            Experience
          </div>
          <div className="mb-3 text-small_text ml-3">
            <span className="text-xl text-reddis">10 </span> projects
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -180 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.7,
          }}
          className="flex items-center mb-4 text-small_text "
        >
          <Link
            target="_blank"
            href="https://www.facebook.com/tushar.imran.357"
          >
            <BsFacebook className="w-8 mr-2" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/tusar-imran-680149227/"
          >
            <BsLinkedin className="w-8 mr-2" />
          </Link>
          <Link target="_blank" href="https://github.com/tushar8640">
            <BsGithub className="w-8 mr-3" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.5,
          }}
          className="items-center flex-shrink-0 lg:flex"
        >
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1xuZ76ws-5brlsAQahSzAO17MTX8heJXz/view?usp=share_link"
          >
            <button className="ml-2 px-4 py-2 rounded bg-primary border-2 border-primary text-white ">
              Resume
            </button>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.5,
        }}
        className="flex items-center justify-center md:p-6 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 sm:mb-6 lg:mb-0"
      >
        <Image
          width={300}
          src={myImage}
          alt=""
          className="object-contain lg:w-3/5 sm:w-4/5"
        />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
