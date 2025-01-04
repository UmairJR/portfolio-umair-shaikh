/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import quote from '../data/quotes';

const FunFacts = () => {
  const [fact, setFact] = useState('');
  const [quotes, setQuotes] = useState('');
  const [loading, setLoading] = useState(true);

  const apiKey = 'mMvYTtVgquFtnzuQ6QD2sw==4idCD302fcsqmTvm';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const factResponse = await fetch('https://api.api-ninjas.com/v1/facts', { headers: { 'X-Api-Key': apiKey } });
        const factData = await factResponse.json();
        setFact(factData[0]?.fact || 'No fact available');
        const quotesResponse = Math.floor(Math.random() * quote.length);
        const quotesData = quote[quotesResponse];
        setQuotes(quotesData || 'No interesting quotes available');
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="funFacts">
      <div className="fact">
        <div className="heading">
          <h3>💡 Time-wasting Fact</h3>
        </div>
        <div className="content">
        <p className={loading ? 'typing-effect' : ''}>{loading ? <span className="loader" /> : fact}</p>
        </div>
      </div>
      <div className="interesting">
        <div className="heading">
          <h3>✍️ Quote</h3>
        </div>
        <div className="content">
        <p className={loading ? 'typing-effect' : ''}>{loading ? <span className="loader" /> : quotes}</p>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
