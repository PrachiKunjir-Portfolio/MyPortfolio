import React from 'react'
import Project from './project'
import aed1 from '../../images/aed1.png'
import Library from '../../images/Library.jpg'
import piNNit from '../../images/piNNit.png' 
import website from '../../images/website.png'
import Elearning from '../../images/Elearning.png'
import Cloud from '../../images/Cloud.jpeg'
import UIUX from '../../images/UIUX.png'

const ProjectData = () => {
  return (
      <div>
        <Project 
        Title="pNNit - Mern Stack Application"
        Info1="A google keep clone. "
        Info2="Developed a Notes application from scratch using MERN Stack. NodeJS backend and the frontend is developed in React with RESTful web services.
        Used an integrated database model using MongoDB to leverage the React architecture, with minimalistic UI using HTML, CSS, SASS. Extensively used Git for controlling the various versions of code and maintained git branches
        "
        link1="https://github.com/prachikunjir26/Pinnit-Application--React-Project"
        Img1={piNNit}
        Title2="E-Farming"
        Info3="Developedauser-friendlye-farming java applicationusing OOPS conceptswith advanced interfacebuild using Java Swing library."
        Info4="Application provided farmersonline systemfor better crop managementand help earn good profitsTechZane(MERN stack)."
        link2="https://github.com/prachikunjir26/E-farming---Java-Swing/tree/main/AED_Final_Project_eFarming"
        Img2={aed1}
        ></Project>

        <Project 
        Title="Library Management System"
        Info1="Built a REST API leveraging Node.js (Express.js) with endpoints to Add/remove/update posts and used MongoDB Atlas. Developed a minimalistic UI using React App and used async Axios calls to consume the REST API. Implemented JWT, BCRYPT, and AWS S3 bucket for file upload"
        link1="https://github.com/prachikunjir26/Library_Management_System"
        Img1={Library}
        Title2="E-learning Management System"
        Info3="Used MySql, PHP to design and develop a database system."
        Info4="Database of courses that can be accessed by the user under one place, here users will be able to enroll for one or more course and complete certifications. Providing data to determine the popularity for the course depending upon how many users have taken that course. Providing data insights from the dataset that will help the platform owners to make an informed decision based on analyzed data."
        link2="https://github.com/prachikunjir26/-DMDD-E-Learning-Management-Systems"
        Img2={Elearning}
        ></Project>
        <Project 
        Title="Serverless REST API Application"
        Info1="Developed a serverless framework based application using Node.js to build and deploy it to AWS Lambda and AWS API Gateway. Backed up application with an Amazon RDS for PostgreSQL, using pgAdmin to create database & table with required columns"
        link1="https://github.com/prachikunjir26/Serverless_Rest_API_with-aws-lambda"
        Img1={Cloud}
        Title2="Travel Care"
        Info3="This solution can integrated with the airline's existing app or as a separate business."
        Info4="When a flight gets delayed, rescheduled, or canceled then the app will give you an alert and reschedule options. To avoid standing in long lines to talk with an airport agent, you can simply use this app to get better and quicker assistance. This offers below options:

        1. Hotel stay
        2. Cab booking integrated with uber
        3. lounge stay (max 8 hrs)
        4. Book flights of the same or different airlines
        5. Need some other option if you have any emergency
        6. In the 5th option, you can connect with flight support services and get a solution to your problem. In this way, if you have any emergency, you can avoid standing in lines and get immediate help from airlines. This is offered because, at the airport, airlines can't increase staff suddenly for all flight attendees.
        This offered solution will help make travelers' experience very smooth in the case of such emergencies and you can choose what you want to do without any physical effort.
       View prototype by using this link: https://www.figma.com/file/pc7iLNvU23kaKwQQ7Mfl6h/Assignment-8?node-id=0%3A1&t=YIrUk1wgekB1kLbD-1 "
       link2="https://github.com/prachikunjir26/TravelCare" 
       Img2={UIUX}
        ></Project>
    </div>
  )
}

export default ProjectData