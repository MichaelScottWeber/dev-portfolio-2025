type SearchProps = {
  classNames: string;
};

function Search({ classNames }: SearchProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      className={`feather feather-search ${classNames}`}
    >
      <circle cx='11' cy='11' r='8'></circle>
      <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
    </svg>
  );
}

export default Search;
