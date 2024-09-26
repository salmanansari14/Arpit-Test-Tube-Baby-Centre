import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "../Style/Style.css";
import ATTBClogo1 from "../assets/ATTBClogo1.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function NavigationB() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex flex-wrap text-center justify-between py-1 px-3 bg-red-500">
        <div>
          <span className="pr-8 text-xs">
            Phone: 6390103002 | Email: arpitivf@gmail.com
          </span>
          {/* <span className='text-xs'>Email: arpitivf@gmail.com</span> */}
        </div>
        <div className="flex ">
          <a
            href="https://www.instagram.com/drvandanabansal_gynaecologist/"
            target="_blank"
          >
            <FaInstagram className="mx-2 text-white text-md" />
          </a>
          <a href="https://www.facebook.com/vandana.bansal.33" target="_blank">
            <FaFacebook className="mx-2 text-white text-md" />
          </a>
          <a href="https://www.youtube.com/@DrVandanaBansal" target="_blank">
            <FaYoutube className="mx-2 text-white text-md" />
          </a>
          <a
            href="https://www.linkedin.com/in/dr-vandana-bansal-5916279b/"
            target="_blank"
          >
            <FaLinkedinIn className="mx-2 text-white text-md" />
          </a>
        </div>
      </div>


      <nav
        className={`themess bg-lack z-50 md:text-white text-black fixd shadow-md w-full flex items-center justify-between flex-wrap p-1 md:p-2 md:bg-white bg-opacity-70 md:bg-opacity50 ${isOpen ? " shadow-xl" : ""
          }`}
      >
        <div className="flex items-center flex-shrink-0 ml-6 lg:ml-10 lg:mr-32">
          <span className=" font-bol flex md:font-thin text-roe-400 
          ">
            {/* md:[text-shadow:_0_2px_0_rgb(0_0_0_/_30%)] */}
            <img
              src={ATTBClogo1}
              class="d-block w-14"
              alt="..."
            />
            <span className="text-red-600 font-semibold ml-2">ARPIT TEST TUBE<br />BABY CENTRE</span>
          </span>
        </div>
        <div
          className={`block lg:hidden bg-opacity-30 text-xl`}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block text-center h-screen p-2 flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block h-screen bg-rose-50" : "hidden"
            }`}
        >
          <div className="text-sm lg:flex-grow p-1">
            <Link
              to="/"
              className={`block mt-0 lg:inline-block lg:mt-0 hover:text-red-600 text-black md:text-white mr-4 ${isOpen ? "py-2" : ""
                }`}
            >
              Home
            </Link>
            <Link
              to="about"
              className={`block mt-0 lg:inline-block text-black md:text-white lg:mt-0 mr-4 ${isOpen ? "py-2" : ""
                }`}
            >
              <div class="dropdown">

                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Link to="/about">
                    About
                  </Link>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/about">
                      Our Profile
                    </Link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Our Founders
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Somet
                    </a>
                  </li>
                </ul>
              </div>
            </Link>
            <a
              href="achievements"
              className={`block mt-0 lg:inline-block text-black md:text-white lg:mt-0  mr-4 ${isOpen ? "py-2" : ""
                }`}
            >
              
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="dropdown">
                        <button
                          class="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Treatments
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Test Evaluation
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Other Services
                    </a>
                  </li>
                </ul>
              </div>
            </a>
            <a

              className={`block mt-0 lg:inline-block text-black md:text-white lg:mt-0  mr-4 ${isOpen ? "py-2" : ""
                }`}
            >
              <Link to='/facilities'>
                Facilities
              </Link>
            </a>
            <Link
              to='achievements'
              className={`block mt-0 lg:inline-block text-black md:text-white lg:mt-0  mr-4 ${isOpen ? "py-2" : ""
                }`}
            >
              Our Success Rate
            </Link>
            <Link
              to="ivfteam"
              className={`block mt-0 lg:inline-block text-black md:text-white lg:mt-0  mr-4 ${isOpen ? "py-2" : ""
                }`}
            >
              Our IVF Team
            </Link>
            <Link
              to="gallery"
              className={`block mt-0 lg:inline-block text-black md:text-white lg:mt-0  mr-4 ${isOpen ? "py-2" : ""
                }`}
            >
              Gallery
            </Link>
            {/* <Link
              to="contact"
              className={`block mt-0 lg:inline-block text-black md:text-white lg:mt-0  mr-4 ${isOpen ? "py-2" : ""
                }`}
            >
              Contact
            </Link> */}
          </div>

          <button className="rounded-3xl inline-flex text-xs items-center bg-red-600 border-0 py-2 px-4 text-white">
            <Link to="bookappointment">Contact US</Link>
          </button>
        </div>
      </nav>
    </>
  );
}
export default NavigationB;
