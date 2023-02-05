import React from 'react'
import profilepic from "../../images/profile_pic.jpg"

const AboutInfo = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
        <div className="bg-white bg-opacity-10 w-full h-120 flex flex-row justify-between rounded-xl xxs:flex-col sm:flex-row">
          <img className="w-3/4 object-cover h-96 rounded-l-lg xxs:w-full sm:w-3/4" src={profilepic}></img>
            <div className="flex flex-col">
          <div className="text-white text-right mb-0 mt-2 ml-6 mr-5 font-poppins xxs:text-center sm:text-right">
            <h1 className="text-5xl font-bold">Prachi Kunjir</h1>
          </div>
          <p className="text-white p-6 text-lg text-left xxs:text-center sm:text-left">
            {/* Enthusiastic Front-end Developer.{" "}<br /> */}
            Highly motivated and results-driven Full Stack Web Developer experience in designing, developing, and delivering cutting-edge web applications.
            Experienced Front-end Developer with a passion for delivering innovative and user-friendly digital solutions. 
            Proficient in a range of technologies including JavaScript, React, Node.js, Express and MongoDB and many more, with a strong understanding of modern web development techniques and trends.
            Possess excellent problem-solving skills, allowing for the effective implementation of complex design elements. Experienced in working with cross-functional teams, delivering projects on time and within budget while maintaining a focus on quality and user experience.
            Committed to staying up-to-date with the latest technologies and industry trends, continuously seeking new challenges and opportunities for growth.
            As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things look in a specific way,
            and my mission-driven work ethic to literally make an impact.
          </p>
        </div>
            </div>
        </div>
    
  )
}

export default AboutInfo