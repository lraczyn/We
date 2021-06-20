import React from 'react';

const skills = [
  {
    id: 'id1',
    image: 'fab fa-python',
    main_text: 'Python',
    description:
      'Data analysis with Pandas, NumPy, Matplotlib. Creatin applications in Python ',
  },
  {
    id: 'id2',
    image: 'fab fa-react',
    main_text: 'React, Tailwind CSS',
    description: 'Creating responsive web application with React and Tailwind',
  },
  {
    id: 'id3',
    image: 'fas fa-code',
    main_text: 'JavaScript, HTML, CSS',
    description: 'Visually attractive web pages with JavaScript',
  },
  {
    id: 'id4',
    image: 'fab fa-github',
    main_text: 'Git',
    description: 'Version control using git/github',
  },
  {
    id: 'id5',
    image: 'fas fa-database',
    main_text: 'Database, SQL',
    description:
      "A relational database as PostgreSQL. I'm also acuained with Apache Spark",
  },
  {
    id: 'id6',
    image: 'fas fa-filter',
    main_text: 'Machine Learning, Artificial Intelligence',
    description: 'Creating and evaluating NN models with Tensorflow/Keras.',
  },
  {
    id: 'id7',
    image: 'fas fa-user-plus',
    main_text: '',
    description: 'continuously learn more ... ',
  },
];

export default function Skills() {
  return (
    <section id="skills_" className="flex bg-black text-white lg:h-screen">
      <div className="m-auto py-12">
        <h1 className="text-4xl font-extrabold text-yellow-500 text-center pt-2">
          Skills
        </h1>
        <h3 className="text-xl pb-12 text-center">
          Below are some of my skills, and I'm continuously learn more:
        </h3>
        <ul className="lg:flex text-center justify-between px-8">
          {skills.map((skill) => {
            return (
              <li key={skill.id} className="container items-center ">
                <div className="text-white text-9xl">
                  <i className={skill.image}></i>
                </div>
                <div className="font-bold pt-4 pb-6">{skill.main_text}</div>
                <div className="px-12">{skill.description}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
