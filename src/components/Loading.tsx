import MWLogo from './icons/MWLogo';
import * as motion from 'motion/react-client';

function Loading() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <motion.div
        animate={{ rotate: 540 }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 0.25,
        }}
      >
        <MWLogo classNames='w-20 text-black dark:text-white' />
      </motion.div>
      <div className='text-xl text-black dark:text-white font-medium mt-4'>
        <span className='px-1'>Loading</span>
        <motion.span
          animate={{
            opacity: [0, 1, 1, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <span className='px-1'>.</span>
        </motion.span>
        <motion.span
          animate={{
            opacity: [0, 0, 1, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <span className='px-1'>.</span>
        </motion.span>
        <motion.span
          animate={{
            opacity: [0, 0, 0, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <span className='px-1'>.</span>
        </motion.span>
      </div>
    </div>
  );
}

export default Loading;
