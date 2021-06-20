import React from 'react';

export default function About() {
  return (
    <div id="about_" className="text-black bg-gray-100 h-screen">
      <div class="flex h-screen ">
        <div class="m-auto">
          <div className="lg:flex lg:flex-row p-16">
            <img
              className="rounded-full border-8 border-black h-80 "
              src="https://media-exp3.licdn.com/dms/image/C4D03AQHtizseucp0mw/profile-displayphoto-shrink_200_200/0/1597159341693?e=1629331200&v=beta&t=ZphKotPdPLnnG9YgU30xpOlePrFztiirPkuCB6WqAr8"
              alt=""
            />
            <div className="p-16">
              I am currently working as a specialist at Proton Therapy Centre
              located in Institute of Nuclear Physics PAN. Last year I completed
              postgraduate studies Data Analysis - Data Science. In my thesis I
              used data from the Center to find relationship between ion chamber
              errors and proton beam parameters. I am fascinated by the Python
              programming language and I would like to develop myself as a AI
              Developer in it as well. Currently I am looking new opportunities,
              where I can expand the boundaries of my knowledge.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
