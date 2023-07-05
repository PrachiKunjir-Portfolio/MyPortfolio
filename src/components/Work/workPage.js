import React from 'react';
import Fade from "react-reveal/Fade";
import neu from "../../images/neu.jpg";
import AtosSyntel from "../../images/AtosSyntel.jpg";
import SnellLibrary from "../../images/SnellLibrary.jpg";
import Commvault from "../../images/Commvault.jpg";

const WorkPage = () => {

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
                JavaScript, TypeScript, React, Redux, Java, Node, Docker, Jest, Aws, Cypress, Katalon, Storybook, Figma, Material UI)
                Developed responsive SPA, collaborated with cross-functional team to integrate app components into Design System using Storybook UI. Transformed UI designs into functional reusable web components and engineered CICD pipelines using Gitlab Runners.
                Created design system site using React, leveraging react Forms, Events, Keys, Router, Redux, Animations and Flux concepts.
                Pioneered the implementation of GraphQL for data storage and dynamic population of web content based on user inputs, ensuring
                efficient data management and seamless user experience.
                Collaborated with UX designers to facilitate user testing sessions, leveraging feedbacks to iteratively refine frontend designs.
                Implemented intuitive interfaces based on user insights, resulting in a significant 25% improvement in user engagement.
                Achieved a 30% performance improvement (measured by Lighthouse) in micro-frontends by implementing optimization techniques,
                such as reducing re-renders, implementing lazy loading, and employing effective cache policies.
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
                Conducted labs and Provided guidance to students during regular office hours to address queries and clarify doubts in web development, Automated the Grading using GitHub classrooms, increased the efficiency and accuracy in grading.
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
                  FedEx (Atos|Syntel) 
                  </h1>
                  <h1 className="text-2xl">
                  Software Deveoper</h1>
                  <h1 className="text-1xl">Nov 2018 - May 2022</h1>
                <p className="mt-5 opacity-70">
                HTML, CSS, React, React Native, JavaScript, Java 8, REST, AWS, Jest, Selenium, Spring boot, MySQL, GraphQL, Webpack, Agile)
Developed language agnostic web apps, integrated seamless communication between them, built Rest APIs and conducted A/B testing. Demonstrated ability to architect scalable and modular applications. Optimized user experiences and drove business growth.
Designed a highly efficient dashboard utilizing React concepts such as HOC, redux, hooks, props. Improved order handling efficiency
by 30% by integrating the legacy system with a payment gateway using React and modifying the existing API to dynamically display
shipping costs based on the location.
Implemented end-to-end order tracking functionality using React Native, enabling real-time updates, and enhancing user
experience. Utilized React Native's component-based architecture, Redux for state management, and React Navigation for seamless
navigation within the application
Optimized front-end testing processes by incorporating cutting-edge tools such as Jest and Selenium, resulting in 30% improvement
in test coverage and accuracy.
Delivered a compelling PoC to the customer, highlighting the implementation of robust and high-performing solution leveraging
Node.js, Express, and MongoDB, effectively showcased significant improvements in data management performance and efficiency.
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