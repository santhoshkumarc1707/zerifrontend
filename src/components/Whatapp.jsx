import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = import.meta.env.VITE_MOBILE_NO; // Ensure the env variable is correctly named
  const message = encodeURIComponent("Hi, I would like to sell some old pure zari silk sarees.");

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`} // Corrected template literal syntax
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 top-[75%] transform -translate-y-1/2 
                 bg-green-500 w-16 h-16 flex items-center justify-center 
                 rounded-full shadow-lg hover:bg-green-600"
      initial={{ y: 0 }}
      animate={{ y: [0, -5, 0] }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-white text-3xl" />
    </motion.a>
  );
};

export default WhatsAppButton;
