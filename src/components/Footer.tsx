import MWLogo from './icons/MWLogo';

function Footer() {
  const thisYear = new Date().getFullYear();

  return (
    <footer className='flex flex-col items-center'>
      <MWLogo classNames='w-11 text-black dark:text-white mb-2' />
      <p className='text-[10px] text-gray-700 dark:text-gray-200/60 text-center'>
        Copyright &copy; {thisYear} Michael Weber <br />
      </p>
    </footer>
  );
}

export default Footer;
