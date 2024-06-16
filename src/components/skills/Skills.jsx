import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiBootstrap, SiGithub, SiMysql, SiPhp, SiVisualstudiocode } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
              <h3 className=" text-3xl font-black text-black-400 sm:text-2xl">
              FRONTEND
              </h3>
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={95} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={95} />
                <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={90}
                />
                <ProgressBar
                  logo={<FaReact />}
                  name={"React Js"}
                  value={70}
                />
                <ProgressBar logo={<SiBootstrap />} name={"Bootstrap"} value={85} />
                <ProgressBar
                  logo={<SiTailwindcss />}
                  name={"Tailwindcss"}
                  value={82}
                />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5  gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10 ">
            <h3 className=" text-3xl font-black text-black-400 sm:text-2xl">
              BACKEND
              </h3>
              <SkillBox
                logo={<div className=" p-2 bg-white rounded-full"><SiPhp className="text-black p-[2px]" /></div>}
                black={"white"}
                white={"black"}
                skill={"PHP"}
              />
              <SkillBox
                logo={<SiJavascript />}
                black={"black"}
                white={"white"}
                skill={"JAVASCRIPT"}
              />
            </div>
            <div className="last2 flex flex-col gap-10 mt-10">
              <SkillBox
                logo={<SiMysql />}
                black={"black"}
                white={"white"}
                skill={"MY SQL"}
              />
              {/* <SkillBox
                className=""
                logo={
                  <SiNextdotjs className=" text-white bg-black rounded-full h-fit border-white overflow-hidden" />
                }
                black={"black"}
                white={"white"}
                skill={"Next Js"}
              /> */}
            </div>
          </div>
        </div>

        {/* icons */}
        { <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className=" container m-auto flex items-center justify-center mt-24 gap-10 md:gap-5"
        >
          <h3 className=" text-3xl font-black text-black-400 sm:text-2xl">
           TOOLS
              </h3> 
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
           
            src="https://cdn.icon-icons.com/icons2/3053/PNG/512/microsoft_visual_studio_code_macos_bigsur_icon_189957.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src=" https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png"
            />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://cdn2.iconfinder.com/data/icons/pack1-baco-flurry-icons-style/512/XAMPP.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/git.png"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/canva-icon.png"
            />
        </div> }
      </div>
    </div>
  );
};

export default Skills;
