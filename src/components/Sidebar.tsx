import Header from './Header';
import Footer from './Footer';

function Sidebar() {
  return (
    <section className='p-0 md:p-5 w-full md:w-64 md:min-w-64 border-0 md:border-r border-gray-300 dark:border-gray-800 flex flex-col justify-between h-auto md:h-full'>
      <Header />
      <div className='hidden md:block'>
        <Footer />
      </div>
    </section>
  );
}

export default Sidebar;
