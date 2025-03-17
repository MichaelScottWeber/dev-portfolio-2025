import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <main className='p-8 flex min-h-screen'>
      <div className='border border-gray-400 flex'>
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
