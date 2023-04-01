import Image from "next/image";
import nstu_logo from "../assets/images/nstu.png";
import sa_logo from "../assets/images/rajbari-govt.jpeg";
import nstu from "../assets/images/fountain_pen.jpg";
import sa from "../assets/images/sa-image.jpg";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";
import { motion } from "framer-motion";
const Education = () => {
  return (
    <motion.div
    id="education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: 1 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 150 },
      }}
      className="sm:w-9/12 mx-auto py-16"
    >
      <div className="flex items-center">
        <h1 className="text-2xl font-bold sm:text-4xl text-title mb-4 mr-3">
          Where I’ve Studied
        </h1>
        <hr className="border border-slate-700 w-1/5" />
      </div>
      <div className="flex flex-col pt-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 md:gap-12 items-center">
          <div className="flex items-center bg-slate-600/20 ring-1 ring-blue-400/20 rounded-lg  backdrop-blur-sm">
            {" "}
            <Image src={nstu_logo} alt="" className="w-20 mr-3" />
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true,}}
                transition={{ duration: 0.6, delay: .4 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 },
                }}>
              <h1 className="text-xl text-title">
                BSc. In Applied Mathematics
              </h1>
              <p className="text-sm text-small_text">
                NSTU | January 2018-March 2023
              </p>
              <Link href="https://nstu.edu.bd/">
                <BiLinkExternal className="text-small_text text-lg mt-2" />
              </Link>
            </motion.div>
          </div>
          <Image src={nstu} alt="" className="w-1/2" />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 md:gap-12 justify-between items-center my-4">
          <div className="flex items-center bg-slate-600/20 ring-1 ring-blue-400/20 rounded-lg  backdrop-blur-sm py-3 pl-2">
            <Image src={sa_logo} alt="" className="w-20 mr-3" />
             <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true,}}
                transition={{ duration: 0.6, delay: .4 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 },
                }}>
              <h1 className="text-xl text-title">
                Higher Secondary School Certificate
              </h1>
              <p className="text-sm text-small_text">
                Rajbari Govt. College | April 2014-June 2016
              </p>
              <Link href="https://rajbarigovtcollege.edu.bd/">
                <BiLinkExternal className="text-small_text text-lg mt-2" />
              </Link>
            </motion.div>
          </div>
          <Image src={sa} alt="" className="w-1/2" />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
