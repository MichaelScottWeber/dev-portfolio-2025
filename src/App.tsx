import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <main className='p-4 sm:p-6 md:p-8 flex min-h-screen bg-white w-screen'>
      <div className='border-0 md:border border-gray-300 flex flex-col md:flex-row rounded w-full'>
        <Sidebar />
        <section>
          <div>
            <button>Projects</button>
            <button>Skills & Tech</button>
            <button>About</button>
          </div>
          <div>
            <span>PROJECTS</span>
            <span>SKILLS & TECH</span>
            <span>ABOUT</span>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
