/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import data from '../data/coding';

const Coding = () => {
  return (
    <Main title="Coding" description="Learn about coding profiles">
      <article className="post" id="coding">
        <header>
          <div className="title">
            <h2>
              <Link to="/coding">Coding profiles</Link>
            </h2>
            <p>Coding is my <span>superpower</span>, and I&apos;m just a keyboard away from saving the <span>world</span>!</p>
          </div>
        </header>
        <div className="coding-horizontal-container">
          {data.map((profile, index) => (
            <div className="coding-horizontal-card" key={index}>
              <div className="coding-info">
                <h3>{profile.label}</h3>
                <p>{profile.desc}</p>
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="coding-link"
                >
                  Explore My {profile.label} Profile →
                </a>
              </div>
            </div>
          ))}
        </div>
      </article>
    </Main>
  );
};

export default Coding;
