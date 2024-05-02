import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/home.css";
import Header from "./Header";
import Footer from "./Footer";
import MyPhoto from "../Media/gjermania.jpg";
import MyPhoto1 from "../Media/mern.jpg";
import MyPhoto2 from "../Media/duart.jpg";
import MyPhoto3 from "../Media/tele.jpg";
import MyPhoto4 from "../Media/grupi.jpg";
import MyPhoto6 from "../Media/data.jpg";
import MyPhoto5 from "../Media/smart.jpg";
import Vektorimadh from "../Media/vektorimadh.jpg";
import antena from "../Media/antena.jpg";
import bench from "../Media/karrika.jpg";
import box from "../Media/box.jpg";
import phone from "../Media/teli.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Make sure to import Leaflet's CSS

function Home() {
  const handleClick = () => {
    // Change the URL to the desired page
    window.location.href = "/services"; // Replace '/another-page' with the URL of the destination page
  };

  return (
    <>
      <div className="home-container">
        <Header />

        <div className="home-paragraph">
          <h4 className="home-paragraph1">
            YOUR TECHNOLOGY PARTNER
            <br /> FOR SMART AND INNOVATIVE SOLUTIONS
          </h4>
          <p className="home-paragraph2">
            Revolutionizing IT in Kosovo since 2001
          </p>
        </div>
      </div>

      <div className="home-info">
        <p>
          Elevate Your Tech Experience with ATI-KOS: Pioneering Solutions in
          Information Communication and Technology since 2001. As a private
          limited liability company, we've been at the forefront of Kosovo's
          Information and Communication Technologies sector. From our roots as
          an Internet service provider to shaping the landscape of e-Government
          systems, including designing Municipalities' Intranets and leading
          innovations in Smart City projects and various ICT initiatives.
        </p>
      </div>

      <h2>NEWS AND UPDATES</h2>

      <div className="home-cards">
        <div className="card">
          <img
            className="mern"
            src={MyPhoto}
            alt="Description of the image"
          />
          <p className="carta1">Atikos goes to Germany!</p>
        </div>

        <div className="card">
          <img className="mern" src={MyPhoto1} alt="Description of the image" />
          <p className="carta1">New MERN Training ahead!</p>
        </div>

        <div className="card">
          <img className="mern" src={MyPhoto2} alt="Description of the image" />
          <p className="carta1">New Partnership in sight!</p>
        </div>
      </div>

      <Link to="/news">
        {" "}
        <button className="home-btn">Learn More</button>
      </Link>

      <h2>SERVICES</h2>

      <div className="home-services">
        <div className="photo-services">
          <img src={MyPhoto3} alt="Description of the image" />
          <p className="services">Telecommunication</p>
        </div>

        <div className="photo-services">
          <img className="data" src={MyPhoto6} alt="Description of the image" />
          <p className="services">Data Centers</p>
        </div>

        <div className="photo-services">
          <img src={MyPhoto4} alt="Description of the image" />
          <p className="services">Professional Trainings </p>
        </div>
      </div>

      <Link to="/Services" state={{ pageNumber: 1 }}>
        <button className="home-btn">Learn More </button>
      </Link>

      <h2>PRODUCTS</h2>

      <div className="div-products">
        ATI-KOS stands as Kosovo's pioneering company, leading the way in
        designing and implementing
        <br></br>Smart City solutions rooted in IoT (Internet of Things).
        Embracing the future, we envision Smart
        <br></br>Cities that intertwine data and innovation, shaping sustainable
        and efficient urban spaces.
      </div>

      <div className="vector-products">
        <div className="smart-photo">
          <img src={MyPhoto5} alt="Description of the image" />
        </div>
        <div className="smartcity">
          <img className="fotosmart" src={Vektorimadh}></img>
          <h5 className="centereds">Smart City</h5>
        </div>

        <div className="fototesmart">
          <img className="antena" src={antena}></img>
          <img className="bench" src={bench}></img>
          <img className="box" src={box}></img>
          <img className="phone" src={phone}></img>
        </div>
        <div className="btnsmart">
          <button className="btn">Multifunctional Poles</button>
          <button className="btn">Smart bench</button>
          <button className="btn">Smart box</button>
          <button className="btn">IoT platform</button>
        </div>
      </div>

      <Link to="/products">
        {" "}
        <button className="home-btn">Learn More</button>
      </Link>

      <h2>CONTACT US</h2>

      <div class="home-contact">
        <form
          action="https://formsubmit.co/bleron.buza@gmail.com"
          method="POST"
          class="label-form"
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />

          <label htmlFor="message">Message:</label>
          <input
            type="text"
            id="message"
            name="message"
            placeholder="Message..."
            required
          />

          <button type="submit">Send</button>
        </form>
        <div class="additional-text">
          <p>
            We value your feedback and inquiries. Reach out to our dedicated
            team for assistance, collaboration, or any questions you may have.
            Your satisfaction is our priority, and we look forward to connecting
            with you.
          </p>
          <p>
            {" "}
            <AiOutlineMail /> ati-kos@gmail.com
          </p>
          <p>
            {" "}
            <BsTelephone /> 044 129 086
          </p>
          <p>
            {" "}
            <CiLinkedin /> Atikos Kosovo
          </p>
        </div>
      </div>

      <div className="map">
        <iframe
          class="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.9664197938564!2d20.43493507563084!3d42.38586183347169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353b1fccfba2a21%3A0x97e26f1bcd15891!2sATI-KOS!5e0!3m2!1sen!2s!4v1711049194102!5m2!1sen!2s"
          width="1000px"
          height="500"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </>
  );
}

export default Home;
