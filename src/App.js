import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import About from './components/About.js';
import './App.css';

function App() {
  return (
    <div className="bg-black">
      <div className="bg-hero-pattern bg-fixed h-screen pt-64" id="hero_">
        <div className="lg:w-3/5">
          <div className="lg:flex items-center text-gray-200 text-center  sm:flex-row px-8">
            <img
              className="rounded-full border-8 border-yellow-gray-200 h-64 mr-12 ml-12 "
              src="https://media-exp3.licdn.com/dms/image/C4D03AQHtizseucp0mw/profile-displayphoto-shrink_200_200/0/1597159341693?e=1629331200&v=beta&t=ZphKotPdPLnnG9YgU30xpOlePrFztiirPkuCB6WqAr8"
            ></img>
            <div>
              <h2
                className="
              text-4xl font-extrabold	 pl-3 pb-3"
              >
                {' '}
                Łukasz Raczyński
              </h2>
              <h3 className=" mb-2 font-semibold">
                Currently a specialist at the Institute of Nuclear Physics,
                Polish Academy of Sciences
              </h3>
              <ul className="list-disc text-left">
                <li>
                  Creating tensorflow, keras model in order that improving
                  proton therapy site reliability{' '}
                </li>
                <li>
                  Analyzing beam parameters using data from Cyclotrone Centre
                  with Python, Jupyter Notebook
                </li>
                <li>
                  Data analysis of beam energy loss between cyclotrone and
                  therapy room
                </li>
                <li>Data analysis visualisation and reports</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5"></div>
      </div>
      <Navbar />
      <About id="about_component" />
      <Skills />
      <Projects />

      <Footer />
    </div>
  );
}

export default App;
