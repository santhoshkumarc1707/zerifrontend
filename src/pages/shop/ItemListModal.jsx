
import Modal from "react-modal";


import { allItems } from "../../utils/utils";


Modal.setAppElement("#root");

const ItemListModal = ({ modalOpen, setModalOpen, addItem }) => {
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      className="bg-white p-6 rounded-xl shadow-xl w-3/4 md:w-1/2 mx-auto mt-20"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Select More Items</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {allItems.map((item, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg flex flex-col items-center bg-gray-100 cursor-pointer hover:bg-gray-200 transition shadow-lg"
            onClick={() => {
              addItem(item);
              setModalOpen(false);
            }}
          >
            <img src={item.image} alt={item.name} className="w-16 h-16 object-contain mb-2" />
            <span className="text-sm font-medium text-gray-800">{item.name}</span>
          </div>
        ))}
      </div>
      <button className="mt-4 bg-red-500 text-white p-3 rounded-lg w-full hover:bg-red-400 transition" onClick={() => setModalOpen(false)}>
        Close
      </button>
    </Modal>
  );
};

export default ItemListModal;
