import useThemeFactory from "../../hooks/useThemeFactory";


const ThemedButton: React.FC<{ label: string, onClick: () => void }> = ({ label }) => {
  const factory = useThemeFactory();
  return factory.createButton(label, () => alert(`Clicked ${label}`));
};

export default ThemedButton;