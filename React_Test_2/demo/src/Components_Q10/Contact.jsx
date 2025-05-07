// Components_Q10/Contact.jsx
import React from "react";
import Navbar3 from "./Navbar3";
import Footer3 from "./Footer";

const Contact3 = () => (
  <>
    <Navbar3 />
    <section className="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Name" /><br />
        <input type="email" placeholder="Email" /><br />
        <textarea rows="4" placeholder="Message"></textarea><br />
        <button>Send</button>
      </form>
    </section>
    <Footer3 />
  </>
);

export default Contact3;