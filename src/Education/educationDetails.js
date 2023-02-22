import React from "react"
import Fade from "react-reveal/Fade"

const EducationDetails = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center text-white mt-20 font-poppins">
      <Fade bottom cascade>
        <div className="grid grid-cols-2 gap-6 mt-10">
          <a
            href="#"
            className="m-5 p-5 bg-lightblack rounded-xl border cursor-pointer hover:border-purple text-left"
          >
            <h2 className="text-3xl font-bold">
              Master of Science in Information Systems
            </h2>
            <h2 className="text-xl">Northeastern University, Boston, MA</h2>
            <h2 className="text-xl">September 2021 - May 2023</h2>
            <h2 className="text-xl">GPA: 3.7</h2>
            <p className="mt-10 opacity-50">
              Courses: Application Engineering Development, Web Design/User
              Experience Engineering, Web Development Tools and Methods, Data
              Management and Database Design, Advance User Experience Research,
              Concepts of Object Oriented Design, Advance Big Data Indexing,
              Software Quality Control and Management
            </p>
          </a>
          <a
            href="#"
            className="m-5 p-5 bg-lightblack rounded-xl border cursor-pointer hover:border-purple text-left"
          >
            <h2 className="text-3xl font-bold">Bachelor of Engineering in Computer Science</h2>
            <h2 className="text-xl">Pune University, India</h2> 
            <h2 className="text-xl">June 2014 - June 2018</h2>
            <p className="mt-10 opacity-50">
              Courses: Data Structures and Algorithms, Theoretical Computer
              Science, Low-level Programming, Computer Architecture and
              Operating Systems, Programming Paradigms, Design and Analysis of
              Algorithms, Database Management System, Computer Networks, Systems
              Programming
            </p>
          </a>
        </div>
      </Fade>
    </div>
  )
}

export default EducationDetails