// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import "../styles/header.css";
// import logo from "../Media/logo.jpg";
// import { IoIosArrowDown } from "react-icons/io";
// import img1 from "../Media/backgroundwhite1.png";
// import img2 from "../Media/backgroundwhite2.png";
// import img3 from "../Media/backgroundwhite3.png";

// const Header = () => {
//   const location = useLocation(); 
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [activeImage, setActiveImage] = useState(null);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleMouseEnter = () => {
//     setShowDropdown(true);
//   };

//   const handleMouseLeave = () => {
//     setShowDropdown(false);
//   };

//   const handleTelecomClick = () => {
//     setActiveImage(img1);
//   };

//   const handleDataClick = () => {
//     setActiveImage(img2);
//   };

//   const handleTrainingsClick = () => {
//     setActiveImage(img3);
//   };

//   return (
//     <>
//       <header className="header">
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
//         ></link>
//         <img src={logo} alt="Logo" />

//         <Link
//           to="/"
//           className={`button home ${location.pathname === '/' && 'active'}`}
//         >
//           Home
//         </Link>

//         <div
//           className="dropdown"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <Link className="button services" onClick={toggleDropdown}>
//             Services <IoIosArrowDown className="icon" />
//           </Link>
//           {showDropdown && (
//             <div className="dropdown-content">
//               <Link
//                 to="/Services"
//                 state={{ pageNumber: 1 }}
//                 className="dropdown-link"
//                 onClick={handleTelecomClick}
//               >
//                 Telecommunications <IoIosArrowDown className="icon2" />
//               </Link>
//               <Link
//                 to="/Services"
//                 state={{ pageNumber: 2 }}
//                 className="dropdown-link"
//                 onClick={handleDataClick}
//               >
//                 Data Centers <IoIosArrowDown className="icon2" />
//               </Link>
//               <Link
//                 to="/Services"
//                 state={{ pageNumber: 3 }}
//                 className="dropdown-link"
//                 onClick={handleTrainingsClick}
//               >
//                 Professional Trainings <IoIosArrowDown className="icon2" />
//               </Link>
//             </div>
//           )}
//         </div>

//         <Link
//           to="/Products"
//           className={`button products ${location.pathname === '/Products' && 'active'}`}
//         >
//           Products
//         </Link>
//         <Link
//           to="/About"
//           className={`button about ${location.pathname === '/About' && 'active'}`}
//         >
//           About Us
//         </Link>
//         <Link
//           to="/News"
//           className={`button news ${location.pathname === '/News' && 'active'}`}
//         >
//           News
//         </Link>
//         <Link
//           to="/Contact"
//           className='contact'
//         >
//           Contact Us
//         </Link>
//         <span className="toggle">
//           <i className="fa fa-bars"></i>
//           </span>
//       </header>
//     </>
//   );
// };

// export default Header;









import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/header.css";
import logo from "../Media/logo.jpg";
import { IoIosArrowDown } from "react-icons/io";
import img1 from "../Media/backgroundwhite1.png";
import img2 from "../Media/backgroundwhite2.png";
import img3 from "../Media/backgroundwhite3.png";

const Header = () => {
  const location = useLocation(); 
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false); 
  const [activeImage, setActiveImage] = useState(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleTelecomClick = () => {
    setActiveImage(img1);
  };

  const handleDataClick = () => {
    setActiveImage(img2);
  };

  const handleTrainingsClick = () => {
    setActiveImage(img3);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className={`header ${showMenu ? 'show-menu' : ''}`}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <img src={logo} alt="Logo" className={`${showMenu ? 'logo' : ''}`} />

        <Link
          to="/"
          className={`button home ${location.pathname === '/' && 'active'}`}
        >
          Home
        </Link>

        <div
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link className="button services" onClick={toggleDropdown}>
            Services <IoIosArrowDown className="icon" />
          </Link>
          {showDropdown && (
            <div className="dropdown-content">
              <Link
                to="/Services"
                state={{ pageNumber: 1 }}
                className="dropdown-link"
                onClick={handleTelecomClick}
              >
                Telecommunications <IoIosArrowDown className="icon2" />
              </Link>
              <Link
                to="/Services"
                state={{ pageNumber: 2 }}
                className="dropdown-link"
                onClick={handleDataClick}
              >
                Data Centers <IoIosArrowDown className="icon2" />
              </Link>
              <Link
                to="/Services"
                state={{ pageNumber: 3 }}
                className="dropdown-link"
                onClick={handleTrainingsClick}
              >
                Professional Trainings <IoIosArrowDown className="icon2" />
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/Products"
          className={`button products ${location.pathname === '/Products' && 'active'}`}
        >
          Products
        </Link>
        <Link
          to="/About"
          className={`button about ${location.pathname === '/About' && 'active'}`}
        >
          About Us
        </Link>
        <Link
          to="/News"
          className={`button news ${location.pathname === '/News' && 'active'}`}
        >
          News
        </Link>
        <Link
          to="/Contact"
          className='contact'
        >
          Contact Us
        </Link>
        <span className="toggle" onClick={toggleMenu}> 
          <i className="fa fa-bars"></i>
        </span>
      </header>
    </>
  );
};

export default Header;


