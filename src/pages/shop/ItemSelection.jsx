import { useState } from "react";
import { motion } from "framer-motion";
import { useItemContext } from "../../components/ItemContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ItemListModal from "./ItemListModal.jsx";

const transitionVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.3 } }
};

const ItemSection = ({ onComplete }) => {
  const { selectedItems, addItem, removeItem, updateQuantity } = useItemContext();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <motion.div
      className="relative border-4 border-green-100 p-6 sm:p-8 md:p-10 rounded-xl shadow-xl w-full max-w-4xl bg-white mx-auto"
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-gray-800 text-center">Step 1: Add Items</h2>
      <div className="flex flex-col gap-4 sm:gap-6">
        {selectedItems.map((item, index) => (
          <div key={index} className="flex flex-wrap sm:flex-nowrap justify-between items-center p-4 border-b hover:shadow-lg transition">
            <div className="flex items-center gap-3 sm:gap-4 flex-1">
              <img src={item.image} alt={item.name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg shadow-sm" />
              <span className="text-lg sm:text-xl text-gray-700">{item.name}</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                className="text-black text-xl sm:text-2xl p-2 rounded-full hover:text-blue-500 transition-all duration-300"
                onClick={() => updateQuantity(item, "increase")}
              >
                +
              </button>
              <input
                type="number"
                value={item.quantity}
                min="1"
                className="border border-gray-300 p-1 sm:p-2 w-12 sm:w-16 text-center rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                readOnly
              />
              <button
                className="text-black text-xl sm:text-2xl p-2 rounded-full hover:text-red-500 transition-all duration-300"
                onClick={() => updateQuantity(item, "decrease")}
              >
                -
              </button>
              <button
                className="text-gray-600 hover:text-red-500 transition-colors duration-300"
                onClick={() => removeItem(item)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
  <button
    className="bg-yellow-500 text-white px-5 py-3 text-sm sm:text-base rounded-full shadow-lg hover:bg-yellow-400 transition"
    onClick={() => setModalOpen(true)}
  >
    + More Items
  </button>
  
  <button
    className="bg-[#a7e8af] text-white px-6 py-3 text-sm sm:text-base rounded-lg w-full sm:w-auto hover:bg-[#8cc990] transition"
    onClick={onComplete}
  >
    Next
  </button>
</div>

        </div>
      <ItemListModal modalOpen={modalOpen} setModalOpen={setModalOpen} addItem={addItem} />
    </motion.div>
  );
};

export default ItemSection;
