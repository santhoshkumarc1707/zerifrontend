import { motion } from "framer-motion";
import { useState } from "react";
import BackButton from "./BackButton";

const transitionVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } }
};

const PaymentSection = ({ paymentMethod, setPaymentMethod, onBack, onSubmit }) => {
  const [bankFormVisible, setBankFormVisible] = useState(false);

  const handleSubmit = () => {
    onSubmit(paymentMethod);
  };

  return (
    <motion.div
      className="relative border-4 border-green-100 p-6 md:p-10 rounded-lg shadow-lg w-full md:w-3/5 bg-white space-y-6"
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="my-3 flex items-center">
        <BackButton onClick={onBack} className="w-10 h-10 sm:w-12 sm:h-12" />
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center flex-1">
        Step 3: Payment Details
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {["Google Pay", "Paytm", "Bank Transfer", "UPI"].map((method) => (
          <button
            key={method}
            className={`px-2 py-2 border rounded-lg text-sm font-medium transition-all duration-300 text-center 
              ${paymentMethod === method ? "bg-green-500 text-white shadow-md scale-105" : "bg-gray-100 hover:bg-gray-200"}`}
            onClick={() => setPaymentMethod(method)}
          >
            {method}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {paymentMethod === "Google Pay" && (
          <input type="text" placeholder="Google Pay Number" className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
        )}
        {paymentMethod === "Paytm" && (
          <input type="text" placeholder="Paytm Number" className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
        )}
        {paymentMethod === "UPI" && (
          <input type="text" placeholder="UPI ID" className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
        )}
        {paymentMethod === "Bank Transfer" && (
          <>
            <button
              className="bg-gray-700 text-white py-2 rounded-lg w-full font-semibold hover:bg-gray-800 transition-all"
              onClick={() => setBankFormVisible(!bankFormVisible)}
            >
              {bankFormVisible ? "- Hide Bank Details" : "+ Fill Bank Details"}
            </button>

            {bankFormVisible && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <input type="text" placeholder="Account Number" className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
                <input type="text" placeholder="Confirm Account Number" className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
                <input type="text" placeholder="Account Holder's Name" className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
                <input type="text" placeholder="Branch Name" className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
                <input type="text" placeholder="IFSC Code" className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-green-500 outline-none col-span-2" />
              </div>
            )}
          </>
        )}
      </div>
      <div className="flex justify-center gap-4 my-3">
      <button
    className="bg-[#a7e8af] text-white px-6 py-3 text-sm sm:text-base rounded-lg hover:bg-[#8cc990] transition"
    onClick={handleSubmit}
      >
        Complete Order
      </button>
      </div>
    </motion.div>
  );
};

export default PaymentSection;
