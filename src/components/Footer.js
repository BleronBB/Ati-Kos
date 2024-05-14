import React from "react";
import footer from "../Media/qytetifinal.jpg";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <img className="foto" src={footer}></img>
      <div className="main-footer">
        <div class="copyright">
          Copyright @ 2024 Ati-Kos. All rights reserved.
        </div>
        <div className="company">
          <p>Company :</p>
          <a>Services</a>
          <a>Products</a>
          <a>About Us</a>
          <a>News</a>
        </div>

        <div class="socials">
          <p>Socials :</p>
          <a>Linkedin</a>
          <a>Facebook</a>
          <a>Instagram</a>
        </div>

        <div class="cnt">
          <p>Contact :</p>
          <a>info@ati-kos.com</a>
          <a>049 974 123</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
