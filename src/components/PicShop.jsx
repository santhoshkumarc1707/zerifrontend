import { useNavigate } from "react-router-dom";
import { useItemContext } from "../components/ItemContext"; // Import context
import paavadai from "@/assets/paavadai.svg";
import Saree from "@/assets/saree.svg";
import tissues from "@/assets/tissues.svg";
import top from "@/assets/top.svg";
import veshti from "@/assets/veshti.svg";
import zari from "@/assets/Zari-big.svg";

const allItems = [
  { name: "Paavadai", image: paavadai },
  { name: "Saree", image: Saree },
  { name: "Tissues", image: tissues },
  { name: "Top", image: top },
  { name: "Vashti", image: veshti },
  { name: "Zari-Big", image: zari },
];

const ClothingDisplay = () => {
  const navigate = useNavigate();
  const { addItem } = useItemContext();

  const handleItemClick = (item) => {
    addItem(item);
    navigate("/orders"); // Redirect to /orders after adding item
  };

  return (
    <div className="container mx-auto px-6 py-12 mt-10 bg-gray-100 rounded-xl shadow-lg border-2 m-5 border-gray-200">
      <h3 className="text-xl font-semibold text-center mb-6 text-gray-700 pb-3">What would you like to sell?</h3>

      {/* Responsive Grid Layout for Item Selection */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {allItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg bg-white shadow-md p-5 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => handleItemClick(item)} // Add item and navigate to /orders
          >
            <img src={item.image} alt={item.name} className="w-28 h-28 object-contain mb-3" />
            <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
          </div>
        ))}
      </div>

      {/* Button to Proceed */}
      <div className="mt-8 flex justify-center">
        <button
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
          onClick={() => navigate("/orders")}
        >
          Proceed to Order
        </button>
      </div>
    </div>
  );
};

export default ClothingDisplay;
