import React from "react";
import "./App.css";
import { AiFillInstagram } from "react-icons/ai";

const App = () => {
  return (
    <div className="coming-soon-page">
      <div className="circle">
        <img className="logo" src="logo.svg" alt="baked-logo" />
        <p className="visualization-animation">| visualization | animation |</p>
        <p className="contact">contact</p>
        <p className="email">baked.archviz@gmail.com</p>
        <a
          href="https://instagram.com/baked_vis?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram className="instagram" />
        </a>
      </div>
      <h1 className="coming-soon">COMING SOON</h1>
    </div>
  );
};

export default App;
