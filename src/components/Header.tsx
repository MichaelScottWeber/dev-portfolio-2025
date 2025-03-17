import ProfilePic from '../assets/img/profilepic-400.png';
import Mail from './icons/Mail';
import LinkedIn from './icons/LinkedIn';
import GitHub from './icons/GitHub';

function Header() {
  return (
    <header className='text-center'>
      <div className='rounded-full border-2 border-primary-500 inline-block p-1 mb-3'>
        <img className='rounded-full w-24' src={ProfilePic} alt='headshot' />
      </div>
      <h1 className='text-2xl font-bold text-black'>Michael Weber</h1>
      <p className='text-base mb-3 text-black'>Front End Developer</p>
      <p className='text-base border-b border-gray-300 mb-4 pb-3 text-black'>
        Bridging the <strong className='text-primary-500'>creative</strong> and
        the <strong className='text-primary-500'>technical</strong> to bring
        ideas to life
      </p>
      <div className='flex justify-center gap-4 text-black'>
        <a
          href='mailto:mscottweber@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col items-center hover:text-primary-500 transition-all'
        >
          <Mail classNames='w-5' />
          <span className='text-xs'>Email</span>
        </a>
        <a
          href='https://www.linkedin.com/in/michaelscottweber/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col items-center text-black hover:text-primary-500 transition-all'
        >
          <LinkedIn classNames='w-5' />
          <span className='text-xs'>LinkedIn</span>
        </a>
        <a
          href='https://github.com/MichaelScottWeber'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col items-center text-black hover:text-primary-500 transition-all'
        >
          <GitHub classNames='w-5' />
          <span className='text-xs'>GitHub</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
