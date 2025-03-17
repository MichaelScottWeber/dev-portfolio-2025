import ProfilePic from '../assets/img/profilepic-400.png';
import Mail from './icons/Mail';
import LinkedIn from './icons/LinkedIn';
import GitHub from './icons/GitHub';

function Header() {
  return (
    <header className='text-center'>
      <div className='rounded-full border-2 border-blue-500 inline-block p-1 mb-3'>
        <img className='rounded-full w-24' src={ProfilePic} alt='headshot' />
      </div>
      <h1 className='text-2xl font-bold'>Michael Weber</h1>
      <p className='text-base mb-3'>Front End Developer</p>
      <p className='text-base border-b border-gray-400 mb-4 pb-3'>
        Bridging the <strong>creative</strong> and the{' '}
        <strong>technical</strong> to bring ideas to life
      </p>
      <div className='flex justify-center gap-4'>
        <a
          href='mailto:mscottweber@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col items-center'
        >
          <Mail classNames='w-5' />
          <span className='text-xs'>Email</span>
        </a>
        <a
          href='https://www.linkedin.com/in/michaelscottweber/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col items-center'
        >
          <LinkedIn classNames='w-5' />
          <span className='text-xs'>LinkedIn</span>
        </a>
        <a
          href='https://github.com/MichaelScottWeber'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col items-center'
        >
          <GitHub classNames='w-5' />
          <span className='text-xs'>GitHub</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
