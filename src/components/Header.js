import React from "react";
import "../styles/header.css";
import logo from '../Media/logo.jpg'
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Header = () => {
  return (
    <>
    <header className="header">
    
          
        
            <img src={logo} alt="Logo" /> {/* Use the imported logo */}
          
              <a className="button home">Home</a>
              <a className="button services">Services <IoIosArrowDown className="icon" /></a>
              <a className="button products">Products</a>
              <a className="button about">About Us</a>
              <a className="button news">News</a>
              <a className="contact">Contact Us</a>
          
           

    </header>
    </>
  );
};

export default Header;
