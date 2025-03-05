import { useState } from "react";
import ItemSection from "./ItemSelection";
import PickupSection from "./PikupSelection";
import PaymentSection from "./PaymentSection";

const QuotePage = () => {
  const [items, setItems] = useState([{ id: 1, name: "Zari Silk Saree", quantity: 1 }]);
  const [pickupDetails, setPickupDetails] = useState({ address: "", pincode: "", contact: "" });
  const [paymentMethod, setPaymentMethod] = useState("Google Pay");
  const [bankDetails, setBankDetails] = useState("");
  const [step, setStep] = useState(1);
{pickupDetails}
  const addItem = () => {
    setItems([...items, { id: items.length + 1, name: "Zari Silk Saree", quantity: 1 }]);
  };

  return (
    <div className="container mx-auto my-10 p-10 flex flex-col items-center gap-10 w-full max-w-screen-lg relative">
      {step === 1 && <ItemSection items={items} addItem={addItem} onComplete={() => setStep(2)} />}
      {step === 2 && <PickupSection setPickupDetails={setPickupDetails} onComplete={() => setStep(3)} onBack={() => setStep(1)} />}
      {step === 3 && <PaymentSection paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} bankDetails={bankDetails} setBankDetails={setBankDetails} onBack={() => setStep(2)} />}
    </div>
  );
};

export default QuotePage;
