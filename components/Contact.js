import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div
    id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true ,amount:.1}}
      transition={{ duration: 0.6, delay: 0.4 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      className="sm:w-4/5 lg:w-9/12 mx-auto py-12">
      <div className=" px-6 py-10 bg-slate-600/20 ring-1 ring-blue-400/20 rounded-lg  backdrop-blur-sm">
        <h1 className="text-title text-2xl">Let’s Start a Project Together</h1>
        <div className="text-small_text my-2 text-lg">
          I’d Love to meet up with you to discuss any project and Potential
          collaboration
        </div>
        <div className="text-small_text">Send me an Email at</div>
        <div className="flex items-center text-small_text">
          <MdEmail className="text-2xl mr-2 text-primary" />
          <div>tusar.imrnan.dev@gmail.com</div>
        </div>
        <div className="text-small_text mt-2">Have a Good Day!</div>
      </div>
    </motion.div>
  );
};

export default Contact;
