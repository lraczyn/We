import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import './App.css';

function App() {
  return (
    <div className="bg-black">
      <div className="bg-hero-pattern bg-fixed h-screen pt-64">
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

      <div className="">
        <div className="py-32 bg-red-200">
          <div className="px-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero dicta
            cum exercitationem ut nulla maiores, ipsam voluptatem rerum, iusto
            magnam asperiores soluta nemo atque natus mollitia. Consequuntur
            quis laudantium eveniet.
          </div>
        </div>
        <div className="py-32 bg-blue-200">
          <div className="px-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero dicta
            cum exercitationem ut nulla maiores, ipsam voluptatem rerum, iusto
            magnam asperiores soluta nemo atque natus mollitia. Consequuntur
            quis laudantium eveniet.
          </div>
        </div>

        <div className="py-32 bg-yellow-200">
          <div className="px-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            delectus excepturi voluptatibus aliquid dicta eligendi, quis
            nesciunt officiis optio quae et velit nobis, laboriosam qui
            assumenda fugit, quaerat perferendis molestias.
          </div>
        </div>
        <div className="py-32 bg-green-200">
          <div className="px-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            fugit repudiandae iure? Accusamus, sequi praesentium. Ad inventore
            aliquid atque voluptatem, totam libero deserunt dolorum esse culpa
            amet itaque nesciunt necessitatibus.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
