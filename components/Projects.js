import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import library from "../assets/images/library.png";
import travel from "../assets/images/2.png";
import watch from "../assets/images/1.png";
import happyMom from "../assets/images/hapy-mom-main.png";
import projects from "../assets/images/projects.png";
import { motion } from "framer-motion";
const Projects = () => {
  const projectVariants = {
    offscreen: {
      y: 200,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "linear",
        duration: 0.5,
      },
    },
  };
  return (
    <div id="project" className="md:w-9/12 mx-auto py-8">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={projectVariants}
        className="flex items-center justify-center"
      >
        <h1 className="text-2xl font-bold sm:text-4xl text-title mb-4">
          Some Projects I’ve Built
        </h1>
      </motion.div>
      {/* library shop  */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={projectVariants}
        className=" grid grid-cols-5 my-8 md:my-16  items-center"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 }}
          variants={{
            visible: { opacity: 1, scale: 1, x: 0, y: 0 },
            hidden: { opacity: 0, scale: 0, x: 50, y: 50 },
          }}
          className="flex justify-center items-center bg-gray-600/25 ring-1 ring-gray-700 rounded-2xl  backdrop-blur-lg p-5 col-span-5 md:col-span-3"
        >
          <Image
            src={library}
            alt=""
            className=" mb-4 lg:mb-0 border border-gray-700 rounded-xl"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.6 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="ml-4 col-span-5 md:col-span-2 my-3"
        >
          <h1 className="text-title text-2xl  font-semibold">
            Library Management Website
          </h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.7 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="  text-small_text  mt-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            distinctio harum perspiciatis libero facilis dolorum quisquam sed
            omnis, atque obcaecati animi qui sint sunt ipsam est eius doloremque
            expedita quas.
          </motion.div>
          <div className="flex flex-col  py-4 ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.8 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 50 },
              }}
              className="flex flex-wrap items-center text-primary text-sm font-semibold  "
            >
              <span className="mr-3">React</span>
              <span className="mr-3">JWT</span>
              <span className="mr-3">Redux</span>
              <span className="mr-3">Socket io</span>
              <span className="mr-3">Node</span>
              <span className="mr-3">Express</span>
              <span>MongoDB</span>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.9 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 50 },
              }}
              className="flex items-center  text-small_text mt-3"
            >
              <Link href="https://github.com/israt-emu/Library-management-frontend">
                <BsGithub className="text-lg mr-3" title="Frontend Code" />
              </Link>
              <Link href="https://github.com/israt-emu/Library-management-backend">
                <BsGithub className="text-lg mr-3" title="Backend Code" />
              </Link>
              <Link href="https://amathlib.netlify.app/">
                <BiLinkExternal className="text-lg" title="Live Site" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      {/* //watch shop  */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={projectVariants}
        className=" grid grid-cols-5 my-8 md:my-16  items-center"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 }}
          variants={{
            visible: { opacity: 1, scale: 1, x: 0, y: 0 },
            hidden: { opacity: 0, scale: 0, x: 50, y: 50 },
          }}
          className="flex justify-center items-center bg-gray-600/25 ring-1 ring-gray-700 rounded-2xl  backdrop-blur-lg p-5 col-span-5 md:col-span-3"
        >
          <Image
            src={watch}
            alt=""
            className=" mb-4 lg:mb-0 border border-gray-700 rounded-xl"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.6 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="ml-4 col-span-5 md:col-span-2 my-3"
        >
          <h1 className="text-title text-2xl  font-semibold">
            Watch Shop Website
          </h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.7 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="  text-small_text  mt-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            distinctio harum perspiciatis libero facilis dolorum quisquam sed
            omnis, atque obcaecati animi qui sint sunt ipsam est eius doloremque
            expedita quas.
          </motion.div>
          <div className="flex flex-col  py-4 ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.8 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 50 },
              }}
              className="flex flex-wrap items-center text-primary text-sm font-semibold  "
            >
              <span className="mr-3">React</span>
              <span className="mr-3">JWT</span>
              <span className="mr-3">Redux</span>
              <span className="mr-3">Socket io</span>
              <span className="mr-3">Node</span>
              <span className="mr-3">Express</span>
              <span>MongoDB</span>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.9 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 50 },
              }}
              className="flex items-center  text-small_text mt-3"
            >
              <Link target="_blank" href="https://github.com/Tushar8640/watchshopClient">
                <BsGithub className="text-lg mr-3" title="Frontend Code" />
              </Link>
              <Link target="_blank"  href="https://github.com/Tushar8640/watchshopupdated">
                <BsGithub className="text-lg mr-3" title="Backend Code" />
              </Link>
              <Link target="_blank" href="https://smart-watch-shop.web.app/">
                <BiLinkExternal className="text-lg" title="Live Site" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      {/* //travel go   */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={projectVariants}
        className=" grid grid-cols-5 my-8 md:my-16  items-center"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 }}
          variants={{
            visible: { opacity: 1, scale: 1, x: 0, y: 0 },
            hidden: { opacity: 0, scale: 0, x: 50, y: 50 },
          }}
          className="flex justify-center items-center bg-gray-600/25 ring-1 ring-gray-700 rounded-2xl  backdrop-blur-lg p-5 col-span-5 md:col-span-3"
        >
          <Image
            src={travel}
            alt=""
            className=" mb-4 lg:mb-0 border border-gray-700 rounded-xl"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.6 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="ml-4 col-span-5 md:col-span-2 my-3"
        >
          <h1 className="text-title text-2xl  font-semibold">
            Travel Agency Website
          </h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.7 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            className="  text-small_text  mt-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            distinctio harum perspiciatis libero facilis dolorum quisquam sed
            omnis, atque obcaecati animi qui sint sunt ipsam est eius doloremque
            expedita quas.
          </motion.div>
          <div className="flex flex-col  py-4 ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.8 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 50 },
              }}
              className="flex flex-wrap items-center text-primary text-sm font-semibold  "
            >
              <span className="mr-3">React</span>
              <span className="mr-3">JWT</span>
              <span className="mr-3">Redux</span>
              <span className="mr-3">Socket io</span>
              <span className="mr-3">Node</span>
              <span className="mr-3">Express</span>
              <span>MongoDB</span>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.9 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 50 },
              }}
              className="flex items-center  text-small_text mt-3"
            >
              <Link target="_blank" href="https://github.com/Tushar8640/travel-go_client">
                <BsGithub className="text-lg mr-3" title="Frontend Code" />
              </Link>
              <Link target="_blank"  href="https://github.com/Tushar8640/tralvego-server">
                <BsGithub className="text-lg mr-3" title="Backend Code" />
              </Link>
              <Link target="_blank" href="https://tourism-event-management.web.app/myorders">
                <BiLinkExternal className="text-lg" title="Live Site" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      
    </div>
  );
};

export default Projects;
