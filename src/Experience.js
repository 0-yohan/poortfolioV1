// Experience.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import accenture from '../src/assets/company_logos/accenture.png';
import panace from '../src/assets/company_logos/panacea.png';
import hackveda from '../src/assets/company_logos/hackveda.png';
import swecha from '../src/assets/company_logos/swecha.png';
import { useState, useEffect } from 'react';
import Loading from './Loading';


// Experience data
const experienceData = [
  {
    company: 'Accenture',
    role: 'ASE Summer Intern',
    period: 'June 2023 - August 2023',
    description: [
      'Assisted the ASE (Associate Software Engineering) team with planning, organising, and developing new products and projects',
      'Co-ordinated with cross-functional teams to identify process gaps and develop solutions',
    ],
    image: accenture, // image
  },
  {
    company: 'Panace.ai',
    role: 'Software Development Intern',
    period: 'October 2022 - December 2022',
    description: [
      `Collaborated on the development of DDx to Diagnosis Project, utilising AWS Textract, AWS Medical Comprehend,
        Machine Learning and Flask for Disease Identification and Medical report analysis along with a user-friendly chatbot`,
      'Utilised version control systems (GIT) for maintaining and updating code',
      
    ],
    image: panace, 
  },
  {
    company: 'Hackveda',
    role: 'Machine Learning Intern',
    period: 'August 2022 - October 2022',
    description: [
      'Analysed results of machine learning models and tuned hyperparameters for improved accuracy',
      'Performed exploratory data analysis to identify trends and patterns in data',
    ],
    image: hackveda, // image url 
  },
  {
    company: 'Swecha',
    role: 'Front-End Development Intern',
    period: 'October 2021 - November 2021',
    description: [
      `Built websites and web pages using HTML, CSS, and JavaScript`,
      `Built a web-based gaming arcade that holds a collection of games that can be played on a browser without any
      installations required`,
    ],
    image: swecha, // image
  },
  // Add more experiences as needed
];

const Experience = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Perform  data fetching logic here

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
      {/* Experience List */}
      <div className="max-w-screen-xl mx-auto p-8 mt-24 pl-12">
        {experienceData.map((experience, index) => (
          // <Link key={index} to="/" className="block mb-8">
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
              {/* Experience Image */}
              <img src={experience.image} alt={experience.company} className="w-full md:w-1/4 rounded-lg cursor-pointer" />

              {/* Experience Description */}
              <div className="md:w-3/4 mt-4 md:mt-0 pl-8 md:pl-32">
                <h2 className="text-2xl font-bold">{experience.company}</h2>
                <p className="text-lg font-bold">{experience.role}</p>
                <p className="text-sm">{experience.period}</p>
                <ul className="list-disc mt-2 text-justify">
                  {experience.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default Experience;
