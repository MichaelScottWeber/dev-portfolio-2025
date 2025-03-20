import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <main className='p-4 sm:p-6 md:p-8 flex min-h-screen bg-white w-screen font-display flex justify-center'>
      <div className='border-0 md:border border-gray-300 flex flex-col md:flex-row rounded w-full max-w-6xl'>
        <Sidebar />
        <MainContent />
      </div>
    </main>
  );
}

export default App;
