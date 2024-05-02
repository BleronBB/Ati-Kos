import React from "react";
import "../styles/news.css";
import Header from "./Header";
import germany from "../Media/gjermania.jpg";
import mern from "../Media/mern.jpg";
import duart from "../Media/duart.jpg";
import Footer from "./Footer";

function News() {
  return (
    <div className="news-container">
      <Header />
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <circle cx="11" cy="11" r="11" fill="#888888" />

            <path
              d="M0.292893 7.29289C-0.097631 7.68342 -0.097631 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM2 7H1L1 9H2L2 7Z"
              fill="white"
            />
          </svg>
          </div>
          <div className="circle-contact">1/5</div>
          <div className="arrow-contact1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <circle cx="11" cy="11" r="11" fill="#888888" />

              <path
                d="M8.70711 7.29289C9.09763 7.68342 9.09763 8.31658 8.70711 8.70711L2.34315 15.0711C1.95262 15.4616 1.31946 15.4616 0.928932 15.0711C0.538408 14.6805 0.538408 14.0474 0.928932 13.6569L6.58579 8L0.928932 2.34315C0.538408 1.95262 0.538408 1.31946 0.928932 0.928932C1.31946 0.538408 1.95262 0.538408 2.34315 0.928932L8.70711 7.29289ZM7 7H8V9H7V7Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default News;
