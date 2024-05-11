import React from 'react'
import "../styles/contact.css";
import Header from "./Header"
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import Footer from './Footer';

function Contact() {
  return (
    <>
    <div className="contact-bcg-image"></div>
    <Header />
    <div className='main-contact'>
      <div>
        <h1 className='h1-contact'>Contact Us</h1>
      </div>
      <div className='container-contact'>
      <div class="form-contact">
        <form action="https://formsubmit.co/bleron.buza@gmail.com" method="POST" class="label-contact">
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
            type="text"
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
        </form >
        <div class="additional-contact">
          <p>
            We value your feedback and inquiries. Reach out to our dedicated
            team for assistance, collaboration, or any questions you may have.
            Your satisfaction is our priority, and we look forward to connecting
            with you.
          </p>
          <p>
            {" "}
            <AiOutlineMail /> info@ati-kos.com
          </p>
          <p>
            {" "}
            <BsTelephone /> 049 974 123
          </p>
          <p>
            {" "}
            <CiLinkedin /> Atikos Kosovo
          </p>
        </div>
      </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact
