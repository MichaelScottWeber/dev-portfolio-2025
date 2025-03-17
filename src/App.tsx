import './App.css';
import CheckSquare from './components/icons/CheckSquare';

function App() {
  return (
    <main>
      <div>
        <section>
          <header>
            <img src='' alt='headshot' />
            <h1>Michael Weber</h1>
            <p>Front End Developer</p>
            <p>
              Bridging the creative and the technical to bring ideas to life
            </p>
            <div>
              <span>
                <CheckSquare classNames='w-10 text-red-500' />
              </span>
              <span>LinkedIn</span>
              <span>GitHub</span>
            </div>
          </header>
          <footer>
            <img src='' alt='logo' />
            <p>
              Copyright &copy; 2025 Michael Weber <br />
              Icons from feathericons.com
            </p>
          </footer>
        </section>
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
