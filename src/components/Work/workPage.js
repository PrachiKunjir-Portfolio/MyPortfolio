import React from 'react';
import Fade from "react-reveal/Fade";
import neu from "../../images/neu.jpg";
import AtosSyntel from "../../images/AtosSyntel.jpg";
import SnellLibrary from "../../images/SnellLibrary.jpg";
import Commvault from "../../images/Commvault.jpg";

const WorkPage = () => {
//     return (
//         <div>
//         <Fade bottom>
//           <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
//             <div className="h-full w-full object-none overflow-hidden rounded-xl">
//               <img src={neu}></img>
//             </div>
//             <div className="m-5">
//               <h2 className="text-sm opacity-50">October 2021 - Currently Working</h2>
//               <h1 className="text-md font-bold font-poppins xxs:text-lg sm:text-4xl">
//                 Northeastern University
//               </h1>
//               <h1 className="text-sm font-poppins xxs:text-sm sm:text-3xl">
//                 Access Proctor Lead
//               </h1>
//               <p className="text-lg mt-4 opacity-50 xxs:text-sm sm:text-lg">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy text
//                 ever since the 1500s, when an unknown printer took a galley of type
//                 and scrambled it to make a type specimen book.
//               </p>
              
//             </div>
//           </div>
//         </Fade>
//         <Fade bottom>
//           <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
//             <div className="h-full w-full object-none overflow-hidden rounded-xl">
//               <img src={neu}></img>
//             </div>
//             <div className="m-5">
//               <h2 className="text-sm opacity-50">January 2022 - May 2022</h2>
//               <h1 className="text-md font-bold font-poppins xxs:text-lg sm:text-4xl">
//                 Northeastern University
//               </h1>
//               <h1 className="text-sm font-poppins xxs:text-sm sm:text-3xl">
//               Graduate Teaching Assistant
//               </h1>
//               <p className="text-lg mt-4 opacity-50 xxs:text-sm sm:text-lg">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy text
//                 ever since the 1500s, when an unknown printer took a galley of type
//                 and scrambled it to make a type specimen book.
//               </p>
              
//             </div>
//           </div>
//         </Fade>
//         <Fade bottom>
//           <div className="mx-auto mt-5 flex text-white xxs:flex-col sm:flex-row">
//             <div className="h-full w-full object-none overflow-hidden rounded-xl">
//               <img src={syntel}></img>
//             </div>
//             <div className="m-5">
//               <h2 className="text-sm opacity-50">November 2018 - September 2021</h2>
//               <h1 className="text-md font-bold font-poppins xxs:text-lg sm:text-4xl">
//                 Atos|Syntel
//               </h1>
//               <h1 className="text-sm font-poppins xxs:text-sm sm:text-3xl">
//               Software Developer
//               </h1>
//               <p className="text-lg mt-4 opacity-50 xxs:text-sm sm:text-lg">Led the off-shore Tech-connect team to design, develop user test cases in accordance with user stories for FedEx Reverse Logix application. Also, estimated and delivered over 200 User Stories in Jira (Agile Project Management tool)
// Increased the efficiency of the production deliveries by implementing automation using Python-Selenium Web Driver.Reduced production costs and defects for the project by leading the QA activities in delivering weekly sprints. Proactively suggested improvements to the management team to reduce redundant work. Built websites using React and NodeJS following REST standard and Worked with Databases using MongoDB and implemented CRUD operations 
// Engineered a cronjob that will automatically deploy the latest build to the Kubernetes cluster using Jenkins reducing the manual build and deploy time by about 60%. Collaborated with Business teams and designed, implemented strategic use cases to deliver successful production deliveries
// Won SPOT award by CEO ,Rakesh Khanna. Won 3 SPOT and one value award with many clients’s appreciations
//               </p>
//               </div>
//           </div>
//         </Fade>
        
//       </div>
//     )
// }

// export default WorkPage

// const Project = ({Title,Info1,Info2,Img1,Title2,Info3,Info4,Img2}) => {
    return (
        <div className="max-w-7xl mx-auto mt-10">
          <Fade bottom cascade>
            <div className="flex">
              <div className="w-3/4 m-2 text-white bg-lightblack p-8 rounded-xl">
                {/* <h2 className="text-sm opacity-50 font-semibold">Careers</h2> */}
                <h1 className="text-4xl font-bold">
                  Northeastern University - Snell Library </h1>
                  <h1 className="text-2xl">
                  Backup Supervisor</h1>
                  <h1 className="text-1xl">Oct 2021 - Present</h1>
                <p className="mt-5 opacity-70">
                Provide student employees at Snell Library with the orientation, training, and mentoring they need to perform required tasks and to succeed in their job. Establish expectations and standards of behavior for student employees. Keep lines of communication open, clear, and constructive. Look after access proctors, circulation assistants and access leads to help and monitor their responsibilities. Manage customer tickets received via the customer support portal. </p>
              </div>
              <div className="w-2/4 rounded-xl overflow-hidden m-2">
                <img src={SnellLibrary}></img>
              </div>
            </div>
          </Fade>
          <Fade bottom cascade>
            <div className="flex flex-row-reverse mt-10">
              <div className="w-3/4 m-2 text-white bg-lightblack p-8 rounded-xl">
                {/* <h2 className="text-sm opacity-50 font-semibold">Careers</h2> */}
                <h1 className="text-4xl font-bold">
                  Commvault </h1>
                  <h1 className="text-2xl">
                  Front-end Developer</h1>
                  <h1 className="text-1xl">May 2022 - Dec 2022</h1>
                <p className="mt-5 opacity-70">
                Improved user experience of Commvault’s internal design site through 30+ user interviews and research. Built 53 web pages using react components reducing code by 30%. Developed REST API leveraging Node.js and Express to persist the data in Mongo DB to streamline the components which increases the efficiency and decreases the turnaround time by 15%. Also, containerized the application using Docker. Created an internal application with React, closures, asynchronous programming for Commvault’s employees which serves as a shared component repository which reduced the development time by 40% and helps maintaining the product consistency. Experience in Redux, Context API to manage the application state. Made responsive web pages with media queries, CSS Grid, Css animation, Material UI and Flexbox. Also, made many Figma prototypes for Commvault’s design system site

                </p>
              </div>
              <div className="w-2/4 rounded-xl overflow-hidden m-2">
                <img src={Commvault}></img>
              </div>
            </div>
          </Fade>
          <Fade bottom cascade>
            <div className="flex ">
              <div className="w-3/4 m-2 text-white bg-lightblack p-8 rounded-xl">
                {/* <h2 className="text-sm opacity-50 font-semibold">Careers</h2> */}
                <h1 className="text-4xl font-bold">
                  Northeastern University </h1>
                  <h1 className="text-2xl">
                  Teaching Assistant</h1>
                  <h1 className="text-1xl">Jan 2022 - May 2022</h1>
                <p className="mt-5 opacity-70">
                Moved traditional approach of grading assignments manually which required multiple hours to automated grading using GitHub Actions and moving to GitHub Classroom which brought efficiency by 80%
Helped professor for the course Design Patterns for assignment grading, conducting labs and keeping students updated about upcoming course requirements of a class of approximately 30 students
                </p>
              </div>
              <div className="w-2/4 rounded-xl overflow-hidden m-2">
                <img src={neu}></img>
              </div>
            </div>
          </Fade>
          <Fade bottom cascade>
            <div className="flex flex-row-reverse mt-10">
              <div className="w-3/4 m-2 text-white bg-lightblack p-8 rounded-xl">
                {/* <h2 className="text-sm opacity-50 font-semibold">Careers</h2> */}
                <h1 className="text-4xl font-bold">
                  Atos|Syntel 
                  </h1>
                  <h1 className="text-2xl">
                  Software Deveoper</h1>
                  <h1 className="text-1xl">Nov 2018 - May 2022</h1>
                <p className="mt-5 opacity-70">
                Led the off-shore Tech-connect team to design, develop user test cases in accordance with user stories for FedEx Reverse Logix application. Also, estimated and delivered over 200 User Stories in Jira (Agile Project Management tool)  
Increased the efficiency of the production deliveries by implementing automation using Python-Selenium Web Driver

Reduced production costs and defects for the project by leading the QA activities in delivering weekly sprints

Proactively suggested improvements to the management team to reduce redundant work. Built websites using React and NodeJS following REST standard and Worked with Databases using MongoDB and implemented CRUD operations  
Engineered a cronjob that will automatically deploy the latest build to the Kubernetes cluster using Jenkins reducing the manual build and deploy time by about 60% 

Collaborated with Business teams and designed, implemented strategic use cases to deliver successful production deliveries  
Won SPOT award by CEO ,Rakesh Khanna. Won 3 SPOT and one value award with many clients’s appreciations
                </p>
              </div>
              <div className="w-2/4 rounded-xl overflow-hidden m-2">
                <img src={AtosSyntel}></img>
              </div>
            </div>
          </Fade>
        </div>
      )
}

export default WorkPage;