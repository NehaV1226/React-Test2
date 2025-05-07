// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components2/Navbar";
import Footer from "./Components2/Footer";
import About from "./Components2/About";
import Contact from "./Components2/Contact";
import ErrorPage from "./Components2/ErrorPage";
import Home from "./Components2/home";
import Q2 from "./Components1/Q2";
import Q3 from "./Components1/Q3";
import Q4 from "./Components1/Q4";
import Q5 from "./Components1/Q5";
import "./Components2/style.css";
import Q7 from "./Components1/Q7";
import Q8 from "./Components1/Q8";
import Q1 from "./Components1/Q1";
import Home2 from "./Components3_Q9/Home2";
import BlogList from "./Components3_Q9/BlogList";
import BlogDetail from "./Components3_Q9/BlogDetail";
import Home3 from "./Components_Q10/Home3";
import Projects from "./Components_Q10/Projects";
import Contact3 from "./Components_Q10/Contact";
import "./Components_Q10/style.css"



const App = () => (
  <Router>
    {/* <Navbar /> */}
    <Routes>
      {/* Components2....Q6 */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />


      {/* Components1...Q1-5/Q7-8 */}
      {/* <Route path="/q1" element={<Q1 />} /> */}
      <Route path="/q1" element={<Q1 />} />
      <Route path="/q2" element={<Q2 />} />
      <Route path="/q3" element={<Q3 />} />
      <Route path="/q4" element={<Q4 />} />
      <Route path="/q5" element={<Q5 />} />
      <Route path="/q7" element={<Q7 />} />
      <Route path="/q8" element={<Q8 />} />

      {/* //Components3_Q9 */}
      <Route path="/home" element={<Home2 />} />
      <Route path="/blogs" element={<BlogList />} />
      <Route path="/blog/:id" element={<BlogDetail />} />


      {/* Components_Q10 */}
      <Route path="/home3" element={<Home3 />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact3" element={<Contact3 />} />
    </Routes>
    {/* <Footer /> */}
  </Router>
);

export default App;
