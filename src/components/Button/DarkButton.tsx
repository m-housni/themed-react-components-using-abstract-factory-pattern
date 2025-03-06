import ButtonProps from "../../interfaces/ButtonProps";

const DarkButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button className="bg-black text-white px-4 py-2 rounded" onClick={onClick}>
    {label}
  </button>
);

export default DarkButton;
