import MWLogo from './icons/MWLogo';

function Footer() {
  const thisYear = new Date().getFullYear();

  return (
    <footer className='flex flex-col items-center'>
      <MWLogo classNames='w-11 text-black mb-2' />
      <p className='text-[9px] text-gray-700 text-center'>
        Copyright &copy; {thisYear} Michael Weber <br />
        Icons from feathericons.com
      </p>
    </footer>
  );
}

export default Footer;
