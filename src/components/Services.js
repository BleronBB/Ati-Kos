import React, { useState } from "react";
import "../styles/services.css"; // Import CSS file
import Header from "./Header";
import Footer from "./Footer";
import tele from "../Media/tele.png";
import grupi from "../Media/grupi.png";
import data from "../Media/data.png";
import active1 from "../Media/tele2.png";
import active2 from "../Media/data2.png";
import active3 from "../Media/grupi2.png";
import { IoMdPlay } from "react-icons/io";
import {Link, useLocation } from "react-router-dom";


function Services(props) {
  const location = useLocation();
  const [activePhoto, setActivePhoto] = useState(location.state.pageNumber); // State to keep track of active photo

  // Function to handle click on a photo
  const handlePhotoClick = (photoNumber) => {
    setActivePhoto(photoNumber); // Update active photo state
  };

  return (
    <div className="page-container">
      <Header />

      <div className="service-container">
        <div className="service-main">
          <div className="service-image" onClick={() => handlePhotoClick(1)}>
            {activePhoto === 1 ? (
              <img
                src={active1}
                alt="Description of the image"
              />
            ) : (
              <img
                src={tele}
                alt="Description of the image"
              />
            )}
            {activePhoto === 1 && (
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="43"
                  fill="none"
                  viewBox="0 0 93 45"
                >
                  <g fill="#fff">
                    <path d="M89.071 43C55.286 41.157 45.304 13.566 44.536 0v43H89.07z"></path>
                    <path d="M0 43c33.786-1.843 43.768-29.434 44.536-43v43H0z"></path>
                  </g>
                </svg>
              </div>
            )}
          </div>

          <div className="service-image" onClick={() => handlePhotoClick(2)}>
            {activePhoto === 2 ? (
              <img
                src={active2}
                alt="Description of the image"
              />
            ) : (
              <img
                src={data}
                alt="Description of the image"
              />
            )}
            {activePhoto === 2 && (
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="43"
                  fill="none"
                  viewBox="0 0 90 43"
                >
                  <g fill="#fff">
                    <path d="M89.071 43C55.286 41.157 45.304 13.566 44.536 0v43H89.07z"></path>
                    <path d="M0 43c33.786-1.843 43.768-29.434 44.536-43v43H0z"></path>
                  </g>
                </svg>
              </div>
            )}
          </div>

          <div className="service-image" onClick={() => handlePhotoClick(3)}>
            {activePhoto === 3 ? (
              <img
                src={active3}
                alt="Description of the image"
              />
            ) : (
              <img
                src={grupi}
                alt="Description of the image"
              />
            )}
            {activePhoto === 3 && (
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="43"
                  fill="none"
                  viewBox="0 0 90 43"
                >
                  <g fill="#fff">
                    <path d="M89.071 43C55.286 41.157 45.304 13.566 44.536 0v43H89.07z"></path>
                    <path d="M0 43c33.786-1.843 43.768-29.434 44.536-43v43H0z"></path>
                  </g>
                </svg>
              </div>
            )}
          </div>
        </div>

        <div className="white">
          {activePhoto === 1 && (
            <div className="paragpraph">
              <p>
                ATI-KOS solutions for companies in the field of
                telecommunications are offered by a team of specialists for the
                design, implementation and management of telecommunication
                networks.
              </p>
              <p>
                Our staff has experience in various types of telecommunication
                networks including ISPs, LAN and WAN networks, advanced router
                configurations and implementation of complex communication
                systems. All these have been realized for various companies and
                institutions based on technology such as Cisco, Mikrotik,
                Ubiquity, SAF, Radwin, etc.
              </p>
              <p>
                We specialize in the integration of telecommunication services
                as well as in empowering businesses and institutions to advance
                in their field. Our goal for our customers is that our solutions
                increase their efficiency and prepare them to operate in the
                digital age by actively participating in digital transformation.
                Our commitment to having customers satisfied with our services
                is the driving force behind every decision we make.
              </p>
              <div className="p">
                <p>
                In the field of Telecommunications, we offer the following
                services:
                </p>
                <p>
                <IoMdPlay className="icon1" />
                 Design and Implementation of LAN
                and WAN networks
                </p>
                <p>
                <IoMdPlay className="icon1" /> Optimization of telecommunication
                networks
                </p>
                <p>
                <IoMdPlay className="icon1" /> IoT design and implementation
                </p>
                <p>
                <IoMdPlay className="icon1" /> Data security
                </p>
              </div>
            </div>
          )}
          {activePhoto === 2 && (
            <div className="paragpraph">
              <p>
                At ATI-KOS, we are passionate about creating cutting-edge data
                center solutions. Our expertise lies in the design and
                implementation of robust and efficient data center facilities.
              </p>
              <p>
                Data centers are no longer confined to traditional models. Our
                services seamlessly integrate data centers into your overall IT
                strategy. Whether it’s your core data center, edge locations, or
                distributed IT, we ensure flexibility, cost containment, and
                agility.
              </p>
              <p>
                To date, we’ve designed two data centers. Our team of experts
                assesses your unique IT mix and crafts a data center strategy
                focused on innovation and transformation.
              </p>
              <div className="p">
                <p>
                In the field of Data Centers, we provide:
                </p>
                <p>
                <IoMdPlay className="icon1" /> Design and Implementation
                </p>
                <p>
                <IoMdPlay className="icon1" /> Strategic Data Center Planning
                </p>
                <p>
                <IoMdPlay className="icon1" /> Energy-Efficient Design
                </p>
                <p>
                <IoMdPlay className="icon1" /> End-to-End Solutions
                </p>
              </div>
            </div>
          )}
          {activePhoto === 3 && (
            <div className="paragpraph">
              <p>
                ATI-KOS Training Center is a knowledge driven Center for
                Continuing Education. It is committed to playing an active role
                in the ongoing reconstruction and transformation of Kosovo, by
                helping to advance Kosovo society into a competitive society;
                through professional development of individuals, advancement of
                learning methods and contents, business support and
                certification of skills with international recognized standards.
              </p>
              <p>
                Since 2002, the ATI-KOS Training Center offers programs for the
                development of human capacities in the field of Information and
                Communication Technology by providing training for students,
                public servants of Municipalities as well as school professors.
                At the ATI-KOS Training Center, more than 2,000 students of
                various profiles have been trained so far.
              </p>
              
              <div className="p">
                <p>
                ATI-KOS offers:
                </p>
                <p>
                <IoMdPlay className="icon1" /> Training in the field of
                telecommunication networks and Internet technologies based on
                the CISCO academy program;
                </p>
                <p>
                <IoMdPlay className="icon1" /> Trainings for MERN Full Stack
                Development;
                </p>
                <p>
                <IoMdPlay className="icon1" /> Trainings for Cloud technologies;
                </p>
                <p>
                <IoMdPlay className="icon1" /> Trainings for Cyber Security
              </p>
              </div>
            </div>
          )}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Services;
