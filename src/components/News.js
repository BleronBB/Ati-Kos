import React from "react";
import "../styles/news.css";
import Header from "./Header";
import germany from "../Media/gjermania.jpg";
import mern from "../Media/mern.jpg";
import duart from "../Media/duart.jpg";
import Footer from "./Footer";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";



function News() {
  return (
    <>
    <div className="news-bcg-image"></div>
    <Header />
    <div className="news-container">
      <div>
        <h1 className="news-h1">NEWS</h1>
      </div>
      <div className="news-main">
        <div className="news1">
          <img src={germany}></img>
          <div className="atikos">
            <h1>Atikos goes to Germany!</h1>
            <p className="news-p">
              Exciting news from Kosovo's tech scene! 🌐🚀 A dynamic tech
              company recently took center stage at a prestigious conference in
              Germany, showcasing innovation and forging valuable connections
              during the networking event. 🤝🔗 The team's presence not only
              highlighted Kosovo's growing tech prowess but also opened doors to
              collaborative opportunities on the international stage. 🌍💡
              #TechInnovation #GlobalConnections #KosovoTechInGermany
            </p>
          </div>
        </div>
        <div className="news2">
          <img src={mern}></img>
          <div className="atikos2">
            <h1>New MERN Training ahead!</h1>
            <p className="news-p1">
              Exciting news from Kosovo's tech scene! 🌐🚀 A dynamic tech
              company recently took center stage at a prestigious conference in
              Germany, showcasing innovation and forging valuable connections
              during the networking event. 🤝🔗 The team's presence not only
              highlighted Kosovo's growing tech prowess but also opened doors to
              collaborative opportunities on the international stage. 🌍💡
              #TechInnovation #GlobalConnections #KosovoTechInGermany rgba(0, 0,
              0, 1)
            </p>
          </div>
        </div>
        <div className="news3">
          <img src={duart}></img>
          <div className="atikos3">
            <h1>New Partnership in sight!</h1>
            <p className="news-p2">
              Exciting news from Kosovo's tech scene! 🌐🚀 A dynamic tech
              company recently took center stage at a prestigious conference in
              Germany, showcasing innovation and forging valuable connections
              during the networking event. 🤝🔗 The team's presence not only
              highlighted Kosovo's growing tech prowess but also opened doors to
              collaborative opportunities on the international stage. 🌍💡
              #TechInnovation #GlobalConnections #KosovoTechInGermany
            </p>
          </div>
        </div>
        <div className="btn-contact">
          <div className="arrow-contact">
          <BsArrowLeftCircle className="left-arrow" />
          </div>
          <div className="circle-contact">1/5</div>
          <div className="arrow-contact1">
          <BsArrowRightCircle className="right-arrow" />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default News;
