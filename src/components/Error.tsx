type ErrorProps = {
  error: string | null;
};

function Error({ error }: ErrorProps) {
  return (
    <div className='rounded p-3 border-2 border-red-500'>
      <p className='text-black dark:text-white'>
        An error has occurred. Please wait a bit and try again.
      </p>
      <p className='text-gray-800 dark:text-red-100 text-xs'>{error}</p>
    </div>
  );
}

export default Error;
