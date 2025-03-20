type ShareProps = {
  classNames?: string;
};

function Share({ classNames }: ShareProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`feather feather-share-2 ${classNames}`}
    >
      <circle cx='18' cy='5' r='3'></circle>
      <circle cx='6' cy='12' r='3'></circle>
      <circle cx='18' cy='19' r='3'></circle>
      <line x1='8.59' y1='13.51' x2='15.42' y2='17.49'></line>
      <line x1='15.41' y1='6.51' x2='8.59' y2='10.49'></line>
    </svg>
  );
}

export default Share;
