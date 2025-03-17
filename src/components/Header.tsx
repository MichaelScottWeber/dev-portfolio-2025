import ProfilePic from '../assets/img/profilepic-400.png';
import ContactLinks from './ContactLinks';

function Header() {
  return (
    <header className='md:text-center'>
      <div className='md:block flex justify-between'>
        <div className='rounded-full border-2 border-primary-500 inline-block p-1 mb-3'>
          <img
            className='rounded-full w-19 md:w-24'
            src={ProfilePic}
            alt='headshot'
          />
        </div>
        <div className='md:hidden'>
          <ContactLinks />
        </div>
      </div>
      <h1 className='text-xl md:text-2xl font-bold text-black'>
        Michael Weber
      </h1>
      <p className='text-sm md:text-base mb-1 md:mb-3 text-black'>
        Front End Developer
      </p>
      <p className='text-sm md:text-base border-0 md:border-b border-gray-300 mb-4 pb-3 text-black'>
        Bridging the <strong className='text-primary-500'>creative</strong> and
        the <strong className='text-primary-500'>technical</strong> to bring
        ideas to life
      </p>
      <div className='hidden md:block'>
        <ContactLinks />
      </div>
    </header>
  );
}

export default Header;
