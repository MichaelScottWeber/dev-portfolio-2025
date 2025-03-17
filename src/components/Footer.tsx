import MWLogo from './icons/MWLogo';

function Footer() {
  return (
    <footer className='flex items-center'>
      <MWLogo classNames='w-12' />
      <p className='text-[10px]'>
        Copyright &copy; 2025 Michael Weber <br />
        Icons from feathericons.com
      </p>
    </footer>
  );
}

export default Footer;
