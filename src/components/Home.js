import React from 'react'
import '../styles/home.css'
import Header from './Header';
import {Typography} from '@mui/material'
import MyPhoto from '../Media/gjermania.jpg'
import MyPhoto1 from '../Media/mern.jpg'
import MyPhoto2 from '../Media/duart.jpg'
import MyPhoto3 from '../Media/tele.jpg'


function Home() {
  return (
    <>
    <div className='divi'>
    
        <Header/>

       
        
        <div className='paragraf'>
            <h4>YOUR TECHNOLOGY PARTNER <br />
              FOR SMART AND INNOVATIVE SOLUTIONS</h4>
            <p className='paragrafi1'>Revolutionizing IT in Kosovo since 2001</p>
        </div>
      
      
    
         <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 1440 87" fill="none" className="svg-container">
            <path d="M649 90.5C348 -0.5 130.667 86.3333 -14 150.5L12 317L1507.5 298.5L1440 0C1409.5 81.5 1002.5 150.5 975 150.5C947.5 150.5 950 181.5 649 90.5Z" fill="url(#paint0_linear_17_18)"/>
            <defs>
              <linearGradient id="paint0_linear_17_18" x1="909" y1="31.5" x2="908" y2="197.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E9922B"/>
                <stop offset="0.945" stopColor="white" stopOpacity="0"/>
              </linearGradient>
            </defs>
         </svg>
         <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="3033" viewBox="1 1  1440 3150" fill="none" className='svg-container1'>
              <path d="M348 44.6167C128.5 11.7334 3.33334 -33.8833 -101.5 57.1167L-55 3033H1485.5L1570.5 753.116L1526.5 29.6167C1517.17 42.9501 1464 70.4167 1326 73.6167C1153.5 77.6167 1083 0.616684 924 0.616699C765 0.616714 567.5 77.5 348 44.6167Z" fill="white"/>
          </svg>

    </div>
    
  
     <div className='info'>
          Elevate Your Tech Experience with ATI-KOS: Pioneering Solutions in
          Information Communication and Technology since 2001. As a private limited
          liability company, we've been at the forefront of Kosovo's Information and
          Communication Technologies sector. From our roots as an Internet service
          provider to shaping the landscape of e-Government systems, including
          designing Municipalities' Intranets and leading innovations in Smart City
          projects and various ICT initiatives.
    </div>

        <h2>NEWS AND UPDATES</h2>

    {/* <div className='cartat'>

        <img className='gjermania' src={MyPhoto} alt="Description of the image" />
        <p className='carta1'>Atikos goes to Germany!</p>

        <img className='mern' src={MyPhoto1} alt="Description of the image" />
        <p className='carta1'>New MERN Training ahead!</p>

        <img className='mern' src={MyPhoto2} alt="Description of the image" />
        <p className='carta1'>New Partnership in sight!</p>

    </div> */}
    <div className='cartat'>
        <div className='card'>
          <img className='gjermania' src={MyPhoto} alt="Description of the image" />
          <p className='carta1'>Atikos goes to Germany!</p>
        </div>

        <div className='card'>
          <img className='mern' src={MyPhoto1} alt="Description of the image" />
          <p className='carta1'>New MERN Training ahead!</p>
        </div>

        <div className='card'>
          <img className='mern' src={MyPhoto2} alt="Description of the image" />
          <p className='carta1'>New Partnership in sight!</p>
        </div>
    </div>


        <button className='butoni'>Learn more</button>

        <h2>SERVICES</h2>

    <div>
    <img className='tele' src={MyPhoto3} alt="Description of the image" />
    <p className='services'>Telecommunication</p>
    </div>

    
    </>
  )
}

export default Home
