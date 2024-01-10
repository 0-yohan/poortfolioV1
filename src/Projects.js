// Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import foRms from './assets/projects_images/foRms.png';
import lhospitaL from './assets/projects_images/lhospitaL.png';
import sukhan from './assets/projects_images/sukhan.png';
import Header from './Header';
import { useState, useEffect } from 'react';
import Loading from './Loading';

// Example data, replace it with your actual project data
const projectsData = [
  {
    title: 'Sukhan',
    description: `A refined website to be of service to poets where they can upload their poetry and correspondingly can be read by
                anybody`,
    image: sukhan, // Replace with the actual image URL
    link: 'http://sukhan.art/',
  },
  {
    title: 'foRms',
    description: `forms is a web based form builder tool which is used to create a 
                survey and questionnaires online in order to collect the information and 
                organise them either simple or complex.These google forms are used to plan 
                events,manage event restrictions ,create a opinion poll,collect contact 
                information,create a pop quiz,and much more`,
    image: foRms, // Replace with the actual image URL
    link: 'https://github.com/0-yohan/forms_iwt',
  },
  {
    title: 'lhospitaL',
    description: `lhospitaL is a Hospital management system, a computer system that helps 
                to manage the information related to health care and aids in the job 
                completion of health care providers effectively. They manage the data related to all 
                departments of healthcare such as, clinical, financial, laboratory, In-patient, 
                Out-patient, operation theatre and much more`,
    image: lhospitaL, // Replace with the actual image URL
    link: 'https://github.com/0-yohan/IhospitaL',
  },
  
  // Add more projects as needed
];

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Perform your data fetching logic here

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
                <p className="mt-2">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
