import Mail from './icons/Mail';
import LinkedIn from './icons/LinkedIn';
import GitHub from './icons/GitHub';

function ContactLinks() {
  return (
    <div className='flex justify-center gap-4 text-black dark:text-white'>
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
        className='flex flex-col items-center text-black dark:text-white hover:text-primary-500 transition-all'
      >
        <LinkedIn classNames='w-5' />
        <span className='text-xs'>LinkedIn</span>
      </a>
      <a
        href='https://github.com/MichaelScottWeber'
        target='_blank'
        rel='noopener noreferrer'
        className='flex flex-col items-center text-black dark:text-white hover:text-primary-500 transition-all'
      >
        <GitHub classNames='w-5' />
        <span className='text-xs'>GitHub</span>
      </a>
    </div>
  );
}

export default ContactLinks;
