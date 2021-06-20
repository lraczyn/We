import React from 'react';

const projects = [
  {
    id: 'id0',
    image: 'https://i.ibb.co/Q9D7pf9/Netlify-screenhsot.png',
    title: 'My portfolia website',
    description:
      "My portfolio website is created with JS React and Tailwind CSS. You can find here infomrations about me, my resume as well as projects. I'm also experienced with Electron framework. Find code on Github",
    link: 'https://github.com/lraczyn/WebPage',
    tags: '#HTML  #React  #Tailwind CSS',
  },
  {
    id: 'id1',
    image: 'https://i.ibb.co/8gYJVPy/Orange-screenshot.png',
    title: 'Python analysis',
    description:
      "I'm programing in python, I use it to automate labor-intensive activities as well as to perform analyzes. Find code on Github    ",
    link: 'https://github.com/lraczyn/MyScripts',
    tags: '#Python #Jupyter Notebook #Orange',
  },
  {
    id: 'id2',
    image: 'https://i.ibb.co/ysm0js0/Harry-Potter-screenshot.png',
    title: 'Harry Potter text generator',
    description:
      "It's a small project showing potential of deep learning. Neural network created with the help of GPU. Find code on Github",
    link: 'https://github.com/lraczyn/Tensorflow_Spicy_Harry_Potter_text_generator',
    tags: '#Tensorflow #Keras #Spacy',
  },
];

export default function Projects() {
  return (
    <div id="projects_" className="flex text-black bg-gray-100  lg:h-screen">
      <div class="flex flex-col lg:flex-row m-auto">
        {projects.map((project) => {
          return (
            <div class="max-w-sm rounded overflow-hidden shadow-lg m-8 mt-16 mb-16 text-center">
              <img className="w-full h-56 " src={project.image} alt="WebSite" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{project.title}</div>
                <div class="text-gray-700 text-base">
                  {project.description}
                  <button>
                    <a href={project.link}>
                      <i className="ml-2 fab fa-github"></i>
                    </a>
                  </button>
                </div>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {project.tags}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
