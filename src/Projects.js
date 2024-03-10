// Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import foRms from './assets/projects_images/foRms.png';
import lhospitaL from './assets/projects_images/lhospitaL.png';
import sukhan from './assets/projects_images/sukhan.png';
import lms from './assets/projects_images/lms.png';
import zoom_joiner from './assets/projects_images/auto_zoom.png';
import Header from './Header';
import { useState, useEffect } from 'react';
import Loading from './Loading';


const projectsData = [
  {
    title: 'Sukhan',
    description: `A refined website to be of service to poets where they can upload their poetry and correspondingly can be read by
                anybody. It not only allows poets to effortlessly upload their poetry but also fosters a vibrant community where enthusiasts 
                can explore, appreciate, and engage with diverse poetic works.`,
    image: sukhan, // image
    link: 'http://sukhan.art/',
  },
  {
    title: 'Auto Zoom meet joiner',
    description: `An intutive Python script that attends a zoom meeting on desired join time behalf 
                  of you provided link and join time. It runs through CLI.`,
    image: zoom_joiner, 
    link: 'https://github.com/0-yohan/auto-zoom-join',
  },
  {
    title: 'foRms',
    description: `foRms is a web based form builder tool which is used to create a 
                survey and questionnaires online in order to collect the information and 
                organise them either simple or complex.These google forms are used to plan 
                events,manage event restrictions ,create a opinion poll,collect contact 
                information,create a pop quiz,and much more.`,
    image: foRms, // image
    link: 'https://github.com/0-yohan/forms_iwt',
  },
  {
    title: 'LMS: Library Management System',
    description: `An interactive library management system using python as a base programming language, Tkinter 
                  library for graphical user interface and files for data management. It stimulates the role of a librarian in a library. The features of this project 
                  are it can keep track of all the books available in the library.`,
    image: lms, 
    link: 'https://github.com/0-yohan/library-management-system-EE-Project',
  },
  {
    title: 'lhospitaL',
    description: `lhospitaL is a Hospital management system, a computer system that helps 
                to manage the information related to health care and aids in the job 
                completion of health care providers effectively. They manage the data related to all 
                departments of healthcare such as, clinical, financial, laboratory, In-patient, 
                Out-patient, operation theatre and much more.`,
    image: lhospitaL, // image
    link: 'https://github.com/0-yohan/IhospitaL',
  },

  // Add more projects 
];

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Perform data fetching logic here

      // Set loading to false once data is fetched
      setIsLoading(false);
    };

    fetchData();
  }, []);

  // Render the loading component if still loading
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="bg-black text-white">
      <Header />
      {/* Project List */}
      <div className="max-w-screen-xl mx-auto p-8 mt-24">
        {projectsData.map((project, index) => (
          <Link key={index} to={project.link} target="_blank" rel="noopener noreferrer" className="block mb-8">
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
              {/* Project Image */}
              <img src={project.image} alt={project.title} className="w-full md:w-1/3 rounded-lg cursor-pointer" />

              {/* Project Description */}
              <div className="md:w-2/3 md:mt-0">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="mt-2 text-justify">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
