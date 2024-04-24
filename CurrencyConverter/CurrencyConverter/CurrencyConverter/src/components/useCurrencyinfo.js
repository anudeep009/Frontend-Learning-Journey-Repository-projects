import React, { useEffect, useState } from 'react';

export const useCurrencyinfo = () => {
  const apikey = 'fca_live_IDW9VPUKX2cgIfyvT8HpE4xMOdAPutIpSw054V4b';
  const [data, setData] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apikey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData)
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    };
  }, []); 

  return useCurrencyinfo;
};
