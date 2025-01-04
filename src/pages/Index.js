/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable quotes */
/* eslint-disable max-len */
import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";
import FunFacts from "../components/FunFacts";

const Index = () => (
  <Main
    description="Umair Shaikh's personal website"
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            A sleek, responsive,
            <span className="meaning" data-tooltip="Pretty">
              {" "}
              جميل
            </span>
             , {" "}
             <span className="meaning" data-tooltip="Beautiful">
              {" "}
              schön,
            </span>
            <span className="meaning" data-tooltip="Clean, Tidy">
              {" "}
              きれい,
            </span>
            <span className="meaning" data-tooltip="Cute">
              {" "}
              かわいい,
            </span>
            {" "}
            decent,
             personal portfolio powered by Javascript and React.
          </p>
        </div>
      </header>
      <p>Welcome to my digital home!
        From coding to my hidden superpowers, it&apos;s all here.{" "}
        Explore <Link to="/about">about me</Link>, <Link to="/projects">projects</Link>,{" "}
        <Link to="/coding">coding profiles</Link>, or you can check out my <Link to="/resume">resume</Link>,{" "}
        view <Link to="/stats">stats</Link>. Feel free to <Link to="/contact">contact</Link> me.</p>
      <p>
        {" "}
        Source code available? <a href="https://github.com/UmairJR">it&apos;s open for you</a>.
      </p>
      <FunFacts />
    </article>
  </Main>
);

export default Index;
