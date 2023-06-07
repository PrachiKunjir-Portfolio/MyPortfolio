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
                Developed decoupled and scalable web applications by building micro-frontends with React, Redux, and Single SPA, while also integrating reusable React
components into the Design system using the Storybook UI framework, resulting in cleaner code and a 20% increase in team productivity.

Prepared detailed Unit Test cases and performed unit and regression testing using React Testing Library to maintain code quality that led to decreased
bugs in User Acceptance Testing by 30%.

Delivered engaging applications with user-centered design, utilizing Figma prototypes, responsive components, and a tech stack including HTML5, CSS3,
JavaScript, JQuery, Ajax, JSON, and React, resulting in a 35% increase in user engagement.

Enhanced UI for Commvault's Product Configuration Team, driving a 40% efficiency improvement in tracking and establishing customer subscriptions for
annual and subscription-based products.


Engineered cloud file storage optimization prototype with serverless REST APIs using Node.js, Express, MongoDB, and AWS services (S3 and Lambda)
for enhanced efficiency.

Introduced efficient state management using Redux and Context API, streamlining code development time by 40%.

Optimized micro-frontends performance by 30% (measured by Lighthouse Report) through strategies such as minimizing re-renders, gzip compression,
and implementing cache-policies.

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
                Helped professor for course Web Development for assignment grading, conducting labs & keeping students updated about course requirements of a
class of 180 students. Moved manual grading approach to automated using GitHub Actions bringing efficiency by 80%.
Conducted labs to teach practical assignments of many full stack technologies such as JavaScript, JQuery, React, Angular, Webpack, SCSS, Node, Express, MERN stack, etc. Shown strong communication and verbal skills to assist 80 students in resolving technical issues involving Git, MySQL, MongoDB queries. Helped performing code reviews, troubleshooting, debugging, resolving errors to improve code quality
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
                Built a 95% highly efficient dashboard using Angular concepts of Directives, Services, Promises, Templating, Scope etc. while introducing PWA support for the largest logistics company (FedEx) by consolidating data from different APIs in a single AWS RDS database, leveraging new backend packages,
procedures, and functions to provide real-time status on all service orders in one central location.

Integrated the legacy system with payment gateway utilizing Angular and changed the existing API to display the shipping cost dynamically for every
location, increasing the efficiency of order handling by 30%.

Built highly scalable and available REST APIs in Java, improving production efficiency by 25% and successfully configuring services to handle GraphQL
requests/responses, facilitating rapid development and deployment of new features.

Credited for successfully architecting and developing a cutting-edge system utilizing Java EE components such as Spring MVC, Spring IOC, and Spring
security modules. Contributed to the development of data models using Hibernate POJOs and configuring the Hibernate persistence layer, ensuring
efficient data management.
Implemented robust API security measures, including OAuth2 authentication, JWT token validation, and encryption protocols, resulting in enhanced
data accuracy and utmost protection for customers sensitive information.
Took lead in performance tuning, being the sole contributor in reducing response time from 5 minutes to 30 seconds using SQL query optimization and
table partitioning. Extracted valuable information from log events in the ELK stack (Elasticsearch, Logstash & Kibana) to collect data for capacity
planning and costs per client.
Collaborated and implemented a robust CI/CD pipeline using Jenkins with DevOps team, enabling seamless deployment of minified Angular files to AWS
EC2 servers, showcasing interest in DevOps practices, and increasing production efficiency by 20%.
Led the QA team, developing automated test cases utilizing debugging, UFT, QTP, Selenium Web Driver, and Jira. Created a Requirement Traceability
Matrix and generated comprehensive testing reports, contributing to a 100% increase in production success rate.
Enhanced frontend to support threaded messages and attach files, photos and videos to a task using AWS S3 Bucket.
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