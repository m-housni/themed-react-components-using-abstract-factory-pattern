import ButtonProps from "../../interfaces/ButtonProps";

const LightButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    className="bg-white text-black border border-gray-300 px-4 py-2 rounded ml-1"
    onClick={onClick}
  >
    {label}
  </button>
);

export default LightButton;
