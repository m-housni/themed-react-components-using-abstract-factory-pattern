export default interface ButtonFactory {
  createButton: (label: string, onClick: () => void) => React.ReactNode;
}
