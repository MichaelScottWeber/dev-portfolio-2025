type TabButtonProps = {
  children: string;
  selected: boolean;
  onClick: () => void;
};

function TabButton({ children, selected, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`text-base text-black m-3 transition-all ${
        selected
          ? 'font-bold border-b-2'
          : 'font-medium cursor-pointer hover:text-primary-500'
      }`}
    >
      {children}
    </button>
  );
}

export default TabButton;
