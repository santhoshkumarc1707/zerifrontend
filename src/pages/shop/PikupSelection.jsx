import { motion } from "framer-motion";
import BackButton from "./BackButton";

const transitionVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.3 } },
};

const PickupSection = ({ setPickupDetails, onComplete, onBack }) => (
  <motion.div
    className="relative border-4 border-green-100 p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto bg-white"
    variants={transitionVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {/* Back Button */}
    <div className="flex items-center mb-4">
      <BackButton onClick={onBack} className="w-10 h-10 sm:w-12 sm:h-12" />
    </div>

    {/* Heading */}
    <h2 className="text-3xl font-bold text-center  mb-6">
      Step 2: Pickup Address
    </h2>

    {/* Form Fields */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {[
        { label: "Flat No.", name: "flatNo", type: "text" },
        { label: "Landmark", name: "landmark", type: "text" },
        { label: "Pincode", name: "pincode", type: "text" },
        { label: "Contact Number", name: "contact", type: "text" },
        { label: "District", name: "district", type: "text" },
        { label: "State", name: "state", type: "text" },
      ].map(({ label, name, type }) => (
        <div key={name} className="flex flex-col">
          <label className="text-sm font-medium  mb-1">
            {label}
          </label>
          <input
            type={type}
            placeholder={label}
           className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            onChange={(e) =>
              setPickupDetails((prev) => ({ ...prev, [name]: e.target.value }))
            }
          />
        </div>
      ))}
    </div>

    {/* Submit Button */}
    <div className="flex justify-end gap-4 my-3">
 

  <button
    className="bg-[#a7e8af] text-white px-6 py-3 text-sm sm:text-base rounded-lg hover:bg-[#8cc990] transition"
    onClick={onComplete}
  >
    Next
  </button>
</div>

  </motion.div>
);

export default PickupSection;
