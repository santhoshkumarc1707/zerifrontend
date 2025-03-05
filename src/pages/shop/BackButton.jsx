

const BackButton = ({ onClick }) => (
  <button className="absolute top-4 left-4 bg-gray-300 p-2 rounded-lg text-sm hover:bg-gray-400 transition" onClick={onClick}>
    ← Back
  </button>
);

export default BackButton;
