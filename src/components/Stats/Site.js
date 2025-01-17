/* eslint-disable no-console */
import React, { useState, useCallback, useEffect } from 'react';

import Table from './Table';
import initialData from '../../data/stats/site';

const Stats = () => {
  const [data, setResponseData] = useState(initialData);
  const fetchData = useCallback(async () => {
    const res = await fetch(
      'https://api.github.com/repos/umairjr/portfolio-umair-shaikh',
    );
    const resData = await res.json();
    console.log(resData);
    setResponseData(
      initialData.map((field) => ({
        ...field,
        value: Object.keys(resData).includes(field.key)
          ? resData[field.key]
          : field.value,
      })),
    );
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h3>Some stats about this site</h3>
      <Table data={data} />
    </div>
  );
};

export default Stats;
