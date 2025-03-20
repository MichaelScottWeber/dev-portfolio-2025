type TabButtonProps = {
  children: string;
  selected: boolean;
  onClick: () => void;
};

function TabButton({ children, selected, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`text-base text-black dark:text-gray-200 m-3 transition-all border-b-2 ${
        selected
          ? 'font-bold border-secondary-500'
          : 'border-transparent font-medium cursor-pointer hover:text-primary-500'
      }`}
    >
      {children}
    </button>
  );
}

export default TabButton;
