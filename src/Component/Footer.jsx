import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font bg-gradient-to-b from-rose-100">
        <div className="container px-5 py-16 mx-auto ">
          <div className="flex flex-wrap md:text-left  order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Treatment</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Preventive Screenings</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fertility Treatments</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Hormonal disorder</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Pregnancy & child birth</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Important Links</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600  hover:text-gray-800">Home</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">About</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Achievements</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Contacts</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-1">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Contact Info</h2>
              <nav className="list-none mb-10">
                <li>
                  <div className='flex m-auto w-fit'>
                    <a href="https://www.instagram.com/drvandanabansal_gynaecologist/" target='_blank'>
                      <FaInstagram className='mx-2 text-rose-600 text-xl' />
                    </a>
                    <a href="https://www.facebook.com/vandana.bansal.33" target='_blank'>
                      <FaFacebook className='mx-2 text-rose-600 text-xl' />
                    </a>
                    <a href="https://www.youtube.com/@DrVandanaBansal" target='_blank'>
                      <FaYoutube className='mx-2 text-rose-600 text-xl' />
                    </a>
                    <a href="https://www.linkedin.com/in/dr-vandana-bansal-5916279b/" target='_blank'>
                      <FaLinkedinIn className='mx-2 text-rose-600 text-xl' />
                    </a>
                  </div>
                </li>
              </nav>
            </div>
            <div className='align-middle py-12 m-auto'>
              <a href='bookappointment'>
                <button className='bg-rose-700  text-white py-2 px-6 rounded-3xl'>
                  Book Appointment
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-slate-100">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="text-rose-700 flex title-font font-medium items-center md:justify-start justify-center">
              <span className="ml-3 text-xl">Best IVF Expert in Prayagraj</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0">© 2024 All rights reserved by Dr. Vandana Bansal
            </p>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer