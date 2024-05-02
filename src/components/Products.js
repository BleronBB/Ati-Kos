import React from "react";
import "../styles/products.css";
import Header from "./Header";
import Footer from "./Footer";
import { IoMdPlay } from "react-icons/io";
import slide1 from "../Media/slide1.jpg";
import slide2 from "../Media/slide2.jpg";
import slide3 from "../Media/slide3.jpg";
import slide4 from "../Media/slide4.jpg";
import slide5 from "../Media/slide5.jpg";
import slide6 from "../Media/slide6.jpg";
import slide7 from "../Media/slide7.jpg";
import bench1 from "../Media/smartbench1.jpg";
import bench2 from "../Media/smartbench2.jpg";
import bench3 from "../Media/smartbench3.jpg";
import bench4 from "../Media/smartbench4.jpg";
import smartbox1 from "../Media/smartbox1.jpg";
import smartbox2 from "../Media/smartbox2.jpg";
import diagrami from "../Media/diagrami.png";
import laptop from "../Media/laptop.mp4";

function Products() {
  return (
    <div className="products-container">
      <Header />
      <div className="h1">
        <h1>SMART CITY</h1>
      </div>

      <div className="main">
        <div className="p">
          <p>
            ATI-KOS is the first company in Kosovo that has designed and
            implemented solutions for Smart Cities based on IoT (Internet of
            Things). The future is in Smart Cities, where data and innovation
            connect to build sustainable and efficient urban spaces. The smart
            city system designed by ATI-KOS is an innovative solution to provide
            the various services, based on IoT and Multifunctional Poles. We
            have built the concept of the Smart City by connecting Sensors,
            Communication Network, IoT Platform and Applications.
          </p>
        </div>
        <div className="p">
          <p>Using this built system, municipalities can:</p>
          <p>
            <IoMdPlay className="icon1" />
            Provide municipal services faster and in each place
          </p>
          <p>
            <IoMdPlay className="icon1" /> Compose new services by connecting
            applications, data and sensors
          </p>
          <p>
            <IoMdPlay className="icon1" /> Create certain policies for access to
            installed services
          </p>
        </div>
        <div className="multi-poles">
          <h1>MULTIFUNCTIONAL POLES</h1>
        </div>
        <div className="multi-p">
          <p>
            The ATI-KOS Smart City system is unique, because its based
            completely on IP (Internet Protocol) and is Integrated system for
            provision of the different services through Multifunctional Poles.
            Fiber Optic is installed at each tower, providing unlimited
            bandwidth for all services installed at Multifunctional towers. This
            is n-Way communication system between the Municipality and Citizen,
            which is upgradable and scalable.
          </p>
          <p>
            The logical and physical design of the Smart City system and of the
            Multifunctional Tower is dynamic and provides possibilities for
            adding more services in the future. The new systems being built by
            ATI-KOS are based on LoraWan technology, enabling remote
            communication with installed sensors.
          </p>
          <p>
            The modular design of the Multifunctional Pole is dynamic and offers
            opportunities to add more services in the future. Using the
            Multifunctional Poles, ATI-KOS has implemented projects for Smart
            Cities and Smart Villages where various information is provided for
            farmers.
          </p>
        </div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img className="img-slide" src={slide1} />
            </div>
            <div className="slide">
              <img className="img-slide" src={slide2} />
            </div>
            <div className="slide">
              <img className="img-slide" src={slide3} />
            </div>
            <div className="slide">
              <img className="img-slide" src={slide4} />
            </div>
            <div className="slide">
              <img className="img-slide" src={slide5} />
            </div>
            <div className="slide">
              <img className="img-slide" src={slide6} />
            </div>
            <div className="slide">
              <img className="img-slide" src={slide7} />
            </div>
            
            <div className="slide">
              <img className="img-slide" src={slide1} />
            </div>
            <div className="slide">
              <img className="img-slide" src={slide2} />
            </div>
            <div className="slide">
              <img className="img-slide" src={slide3} />
            </div>
            <div className="slide">
              <img className="img-slide" src={slide4} />
            </div>
            <div className="slide">
              <img className="img-slide" src={slide5} />
            </div>
            <div className="slide">
              <img className="img-slide" src={slide6} />
            </div>
            <div className="slide">
              <img className="img-slide" src={slide7} />
            </div>
          </div>
        </div>
        <div className="smart-poles">
          <h1>SMART BENCH</h1>
        </div>
        <div className="p">
          The smart bench is a product of ATI-KOS and can be installed near the
          Multifunctional Pole or separately. The bench offers various services
          such as: mobile phone charging via USB or Wireless charger, smart
          lighting which is managed via the IoT platform and the Smart Box.
        </div>
        <div className="smart-bench">
          <img className="photo-bench" src={bench1}></img>
          <img className="photo-bench" src={bench2}></img>
          <img className="photo-bench" src={bench3}></img>
          <img className="photo-bench" src={bench4}></img>
        </div>
        <div className="smart-poles">
          <h1>SMART BOX</h1>
        </div>
        <div className="p">
          <p>
            For the needs of the Smart City system, ATI-KOS has designed the
            Smart Box, which functions as the central control unit for the
            devices and services installed in the Multifunctional Pillars. The
            smart box with its integrated Relay serves as a smart hub, managing
            services, optimizing resources and improving urban life. Its role
            extends beyond individual Multifunctional Pole - it contributes to
            the overall efficiency and sustainability of a smart city. The smart
            box enables the management of various installed devices and
            services, takes certain actions depending on the collected data and
            ensures that the various devices communicate effectively between
            them.
          </p>
        </div>
        <div className="p">
          <p>
            The software designed by ATI-KOS works in a coordination with the
            Smart Box which is equipped with a Relay enabling:
          </p>
          <p>
            <IoMdPlay className="icon1" />
            Centralized control and monitoring
          </p>
          <p>
            <IoMdPlay className="icon1" /> Real-time decision making
          </p>
          <p>
            <IoMdPlay className="icon1" /> Interoperability and standardization
          </p>
        </div>

        <div className="smart-box">
          <img className="box-image" src={smartbox1}></img>
          <img className="box1-image" src={smartbox2}></img>
        </div>
        <div className="pole">
          <h1>POLE SCHEME</h1>
        </div>
        <div className="pole-scheme">
          <img src={diagrami}></img>
        </div>
        <div className="iot">
          <h1>IoT PLATFORM</h1>
        </div>
        <div className="p">
          <p>
            IoT platforms serve as the backbone of smart cities, enabling
            data-driven decision-making, resource optimization, and improved
            quality of life for citizens. ATI-KOS has designed a unique IoT
            platform that manages the devices and processes implemented in a
            Smart City project.
          </p>
        </div>
        <div className="p">
          <p>Our IoT platform offers:</p>
          <p>1.Data collection from different sensors</p>
          <p>2.Real-time monitoring and analysis of data from sensors</p>
          <p>3.Infrastructure optimization by managing sensors and processes</p>
          <p>4.Improved public services for citizens</p>
          <p>5.Increased Security</p>
          <p>6.Safer environment</p>
          <p>7.Citizen engagement</p>
        </div>
        <div className="iot-platform">
          <div className="iotb">
            <button className="iot-button">Smart Poles Kosovo</button>
            <button className="iot-button">Smart Poles Gjakova</button>
          </div>
           <div> 
            <video width="550" height="500" autoPlay muted loop>
              <source src={laptop} type="video/mp4" />
            </video>
          </div> 
        </div>
        <Footer/>
      </div> 
      
    </div>
    
  );
}

export default Products;
