import ScrollIntoView from 'react-scroll-into-view';
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
          <div className="lg:flex items-center text-gray-200 text-center ">
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
              <h3 className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae, velit, omnis itaque molestias et quaerat rerum saepe
                veniam reprehenderit ipsam recusandae exercitationem consequatur
                fugit, aperiam corporis laborum reiciendis! In libero tenetur
                odio adipisci corrupti sapiente obcaecati praesentium cupiditate
                eius voluptates labore, perspiciatis dolor error ut, id nostrum
                earum recusandae fuga nobis deserunt incidunt eos. Excepturi
                distinctio, deleniti ex iusto eligendi qui nisi ab dicta, vero
                possimus laudantium ad illum blanditiis, beatae minima!
                Reprehenderit repudiandae et tempore unde architecto! Deserunt
                saepe ullam doloremque error suscipit odio reiciendis,
                exercitationem, commodi, ipsum ea officiis fugiat fuga eaque
                consectetur molestiae! Voluptatum maxime officiis rem!
              </h3>
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
