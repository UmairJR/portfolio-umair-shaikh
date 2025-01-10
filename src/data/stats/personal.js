import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2003-01-01T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'repository',
    label: 'Projects',
    value: 27,
  },
  {
    key: 'hackathons',
    label: 'Hackathons participated',
    value: 4,
  },
  {
    key: 'animes',
    label: 'Animes watched',
    value: 112,
  },
  {
    key: 'novel',
    label: 'Favourite Novel',
    value: 'The Silent Patient',
    link: 'https://en.wikipedia.org/wiki/The_Silent_Patient',
  },
  {
    key: 'fav-anime',
    label: 'Favourite Anime',
    value: 'Attack on Titan',
    link: 'https://www.imdb.com/title/tt2560140/',
  },
  {
    key: 'fav-food',
    label: 'Favourite Food',
    value: 'Biryani',
  },
  {
    key: 'typing-speed',
    label: 'Typing speed',
    value: '~70 WPM',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Mumbai, IN',
  },
];

export default data;
