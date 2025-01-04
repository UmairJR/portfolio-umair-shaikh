/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me4.jpg`} alt="" />
      </Link>
      <header>
        <h2>Umair Shaikh</h2>
        <p>
          <a href="mailto:umairjr1265@mldangelo.com">umairjr1265@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Umair, a{' '}
        <a href="https://ternaengg.ac.in/">Computer Science</a> graduate. I&apos;m a tech enthusiast,
        AI explorer, and blockchain tinkerer with a passion for creating cool and practical stuff.
      </p>
      <p className="compact">
        When I&apos;m not tinkering with tech, I&apos;m either <a href="https://cerulean-pencil-4e1.notion.site/10a6f82c9a0f80e1be54d69d1b89add9?v=10a6f82c9a0f811a9e14000c842fa305" rel="noreferrer" target="_blank">reading</a>, 
        playing football, or watching the latest in <a href="https://in.ign.com/attack-on-titan-1/195015/lists/the-15-best-shonen-anime-series-of-all-time" rel="noreferrer" target="_blank">shonen anime.</a>
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Umair Shaikh <Link to="/">umairshaikh.in</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
