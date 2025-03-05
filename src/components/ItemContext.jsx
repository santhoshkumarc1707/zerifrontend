import { createContext, useContext, useState } from "react";

// Create Context
const ItemContext = createContext();

// Provider Component
export const ItemProvider = ({ children }) => {
  // Initialize selectedItems as an empty array
  const [selectedItems, setSelectedItems] = useState([]);

  const addItem = (item) => {
    setSelectedItems((prev) => {
      const existingItem = prev.find((i) => i.name === item.name);
      if (existingItem) {
        return prev.map((i) =>
          i.name === item.name
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [
        ...prev,
        { name: item.name, quantity: 1, image: item.image }, 
      ];
    });
  };

  const updateQuantity = (item, action) => {
    setSelectedItems((prev) => {
      return prev.map((i) => {
        if (i.name === item.name) {
          if (action === "increase") {
            return { ...i, quantity: i.quantity + 1 };
          } else if (action === "decrease" && i.quantity > 1) {
            return { ...i, quantity: i.quantity - 1 };
          }
        }
        return i;
      });
    });
  };

  const removeItem = (item) => {
    setSelectedItems((prev) => prev.filter((i) => i.name !== item.name));
  };

  return (
    <ItemContext.Provider value={{ selectedItems, addItem, updateQuantity, removeItem }}>
      {children}
    </ItemContext.Provider>
  );
};

// Custom Hook to use the ItemContext
export const useItemContext = () => useContext(ItemContext);
