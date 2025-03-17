import MWLogo from './icons/MWLogo';

function Footer() {
  const thisYear = new Date().getFullYear();

  return (
    <footer className='flex items-center'>
      <MWLogo classNames='w-12 text-black' />
      <p className='text-[10px] text-gray-700'>
        Copyright &copy; {thisYear} Michael Weber <br />
        Icons from feathericons.com
      </p>
    </footer>
  );
}

export default Footer;
