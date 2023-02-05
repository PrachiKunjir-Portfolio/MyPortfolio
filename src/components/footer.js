import React from 'react'
import { Link } from 'gatsby'
import Input from '../Atoms/input'
import Button from '../Atoms/button'

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto p-20 mt-10 bg-lightblack rounded-xl sm:grid-flow-row">
        <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="text-white text-4xl text-bold">Open for Work: Contact Me Today</h1>
          <p className="text-white text-sm mt-5 opacity-50">
          Thank you for visiting my portfolio. I am actively seeking fulltime opportunities starting may 2023, I would love to hear from you and answer any questions you may have. Whether you're looking to collaborate on a project, need more information about my work, or simply want to say hello, I welcome all inquiries. You can reach me via email at <h1 className="text-xl text-bold">kunjir.p@northeastern.edu</h1>or text/call me at <h1 className="text-xl text-bold">6178773133,</h1> or use the form to send me a message. I look forward to connecting with you!
          </p>
          {/* <h1 className="text-white text-lg mt-20 ">
            © copyright{" "}
            <a>Prachi Kunjir</a>
          </h1> */}
        </div>
        <div className="px-20">
            <form action="https://formsubmit.co/kunjir.p@northeastern.edu" method="POST">
            <Input placeholder="FullName" type="text" name="fullname"></Input><br />
            <Input placeholder="Email" type="email" name="email"></Input><br />
            <Input placeholder="Subject" type="text" name="subject"></Input><br />
            <input className="h-24 w-full px-2 py-2 mt-2 bg-white bg-opacity-20 border-transparent flex-3 appearance-none text-white font-poppins focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent sm:width-full md:width-full xxs:text-sm" placeholder="Message" type="text" name="msg"></input><br />
            <Button
            colorClass="bg-gradient-to-r from-pink-300 to-purple-400 "
            title="Send Message"
            textColor="text-white"
            type="submit"
            marginClass="ml-1"
          ></Button>
          </form>
        </div>
        </div>
        
    </div>

  )
}

export default Footer