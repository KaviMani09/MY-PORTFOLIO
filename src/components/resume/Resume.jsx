import React, { useState } from "react";
import { RiLink } from "react-icons/ri";
import { Link } from "react-router-dom";

const Resume = () => {
  const [currentEducationSlide, setCurrentEducationSlide] = useState(0);
  const [currentExperienceSlide, setCurrentExperienceSlide] = useState(0);

  const experience = [
    {
      title: "Fullstack Developer",
      company: "Kaashiv Infotech",
      link: "",
      date: "June 2023",
      description: `Gained Hands-On-depth Experience Web Development
                    Experience || Html, Css, Javascript
                    Php, Bootstrap, React Js, Tailwindcss
                    Good Knowledge of end to end experience with
                    Font-end and Back-end technologies
                    Achieving proficiency in a Variety
                    of Programming Languages and Frameworks. I’m gained
                    knowledge through coursework Successfully complete a Projects Showcasing
                    Personal website implementing design and
                    interactivity encourages cotinuous learning and Growth.`,
    },
    {
      title: "Technologies Skills",
      company: "Kaashiv Infotech",
      link: "",
      date: "Frontend & Backend",
      description: `➢ Programming Languages == JAVASCRIPT, PHP, MySQL
                ➢ Web Technologies == HTML, CSS, PHP, JAVASCRIPT
                ➢ Frameworks == BOOTSTRAP, REACT JS, TAILWINDCSS
                ➢ Digital Marketing == SEO & SMM, EMAIL MARKETING
                ➢ Database Technologies == BASIC OF MY SQL
                ➢ Tools Technologies == VISUAL STUDIO CODE, NOTEPAD            
                ➢ PackageS == MS-EXCEL, MS-WORD, MS-OFFICE`,
    },
    {
      title: "Certificate",
      company: "Kaashiv Infotech",
      link: "",
      date: "Microsoft & Oracle Full Stack php Developer & Didital Marketing Professional Certificate Offline Course Chennai",
      description: ``,
      image: "https://i.postimg.cc/mkHW21y0/Picsart-24-06-14-20-12-51-737.jpg",
    },
  ];

  const education = [
    {
      title: "B.sc, Computer Science",
      head: "Tirukovilur College Art's & Science",
      date: "Year 2020 - Year 2023",
      description: `I Have Completed My Bachelor Of Computer Science in 2020 - 2023 Tirukovilur
       College of Art's & Science Tirukovilur. Thiruvallur University in Vellore. Graduate Persentage of 80% Good Knowledge & experience with
        FRONT-END technologies Successfully complete a Projects in College professional environment that encourages cotinuous learning and Growth.`,
    },
    {
      title: "Tenth & Twelth ( cs )",
      head: "Kabilar Goverment Boy's Higher Secondary School Tirukovilur",
      date: "Year 2018 - Year 2020",
      description: `I Have Completed My Tenth and Twelth( COMPUTER SCIENCE ) 2018 - 2020
       Kabilar Goverment Boy's Higher Secondary School Tirukovilur State Board  Percentage of Tenth-[ 80% ], Twelth-[ 75% ]`,
    },
  ];



  const handleExperienceDotClick = (index) => {
    setCurrentExperienceSlide(index);
  };

  const handleEducationDotClick = (index) => {
    setCurrentEducationSlide(index);
  };
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[100%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-black">
            EXPERIENCES
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className="card-wrapper w-[100%] sm:w-full mt-5 flex flex-col items-center mx-auto">
                <div className="relative w-full flex items-center justify-center overflow-hidden">
                  <div className="carousel-container w-full sm:w-full overflow-hidden">
                    <div
                      className="carousel-inner flex transition-transform duration-500"
                      style={{
                        transform: `translateX(-${currentExperienceSlide * 100}%)`,
                      }}
                    >
                      {experience.map((experience, index) => (
                        <div
                          className="carousel-item w-full flex-shrink-0"
                          key={index}
                        >
                          <div className="flex flex-col gap-1 sm:gap-1 border-2 hover:border-yellow-400 hover:shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg bg-white">
                            <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                              {experience.title}
                            </h1>
                            <Link
                            to={experience.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="text-[1rem] font-semibold text-gray-500 sm:text-base flex items-center gap-1">
                                <RiLink />{experience.company}
                              </span>
                            </Link>
                            <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                            {experience.date}
                            </span>
                            <p className="text-[.9rem] text-justify break-words text-gray-500">
                            {experience.description}
                            </p>
                            {experience.image && (
                         <img
                            src={experience.image}
                            alt={`${experience.title} image`}
                            className="mt-2 w-full h-auto rounded-lg"
                           />
                           )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Dots */}
                <div className="dots mt-4 flex justify-center gap-2">
                {experience.map((_, index) => (
                <div
                  key={index}
                   onClick={() => handleExperienceDotClick(index)}
                    className={`cursor-pointer w-2 h-2 rounded-full ${
                      currentExperienceSlide === index ? "bg-yellow-500" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      {/* Education Section */}
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-black">
             EDUCATION
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className="card-wrapper w-[100%] sm:w-full mt-5 flex flex-col items-center mx-auto">
                <div className="relative w-full flex items-center justify-center overflow-hidden">
                  <div className="carousel-container w-full sm:w-full overflow-hidden">
                    <div
                      className="carousel-inner flex transition-transform duration-500"
                      style={{
                        transform: `translateX(-${currentEducationSlide * 100}%)`,
                      }}
                    >
                      {education.map((education, index) => (
                        <div
                          className="carousel-item w-full flex-shrink-0"
                          key={index}
                        >
                          <div className="flex flex-col gap-1 sm:gap-1 border-2 hover:border-yellow-400 hover:shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg bg-white">
                            <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                            {education.title}
                            </h1>
                            <h1 className="text-[1.4rem] font-semibold text-gray-500 sm:text-xl">
                            {education.head}
                            </h1>
                            <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                            {education.date}
                            </span>
                            <p className="text-[.9rem] text-justify break-words text-gray-500">
                            {education.description}
                            </p>
                            {education.image && (
                              <img
                                src={education.image}
                                alt={`${education.title} image`}
                                className="mt-2 w-full h-auto rounded-lg"
                              />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Dots */}
                <div className="dots mt-4 flex justify-center gap-2">
                  {education.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => handleEducationDotClick(index)}
                      className={`cursor-pointer w-2 h-2 rounded-full ${
                        currentEducationSlide === index ? "bg-yellow-500" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </fieldset>
        </div>

      </div>
    </div>
  );
};

export default Resume;
