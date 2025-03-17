import Header from './Header';
import Footer from './Footer';

function Sidebar() {
  return (
    <section className='p-5 w-64 border-r border-gray-400 flex flex-col justify-between h-full'>
      <Header />
      <Footer />
    </section>
  );
}

export default Sidebar;
