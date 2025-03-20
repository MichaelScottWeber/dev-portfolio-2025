import Search from './icons/Search';

type SearchPillProps = {
  name: string;
  selected: boolean;
  onClick: (name: string) => void;
};

function SearchPill({ name, selected, onClick }: SearchPillProps) {
  const handleOnClick = () => {
    if (selected) {
      onClick('');
    } else {
      onClick(name);
    }
  };
  return (
    <button
      className={`border flex rounded-full py-1 px-3 text-xs text-black dark:text-gray-200 transition-all cursor-pointer hover:border-primary-500 hover:text-primary-500 ${
        selected
          ? 'bg-gray-200 dark:bg-gray-800 border-secondary-500 text-primary-800'
          : 'border-gray-300'
      }`}
      onClick={handleOnClick}
    >
      <Search classNames='w-3 mr-1' />
      {name}
    </button>
  );
}

export default SearchPill;
